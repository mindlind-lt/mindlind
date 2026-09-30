'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import type { Application } from '@splinetool/runtime';
import { cn } from '@/lib/utils';
import { useRenderActive } from '@/lib/use-render-active';
import { useFirstInteraction } from '@/lib/use-first-interaction';
import { SPLINE_WASM_PATH } from '@/lib/spline-scenes';

/**
 * A single wrapper around a Spline scene that:
 *  - by default, holds back the runtime + .splinecode + WebGL context until ALL of these
 *    are true: the visitor has interacted with the page at all, the document
 *    has finished loading, the main thread has gone idle, and (for below-the-
 *    fold scenes) the scene is within one viewport of being scrolled to;
 *  - lets a primary hero opt into `immediate` loading during hydration; and
 *  - pauses the scene's render loop (Spline's stop()) whenever it scrolls
 *    off-screen or the tab is backgrounded, resuming it (play()) on return.
 *
 * Pausing in place avoids the download/flash of unmounting, so a scrolled-past
 * hero costs ~zero GPU until it comes back into view.
 *
 * `eager` only bypasses the proximity gate. `immediate` additionally bypasses
 * interaction, document load and idle waits. Medusa uses both so visitors see
 * the homepage scene without having to touch the page. Its component preloads
 * the scene from HTML to overlap that download with the runtime import.
 * Other scenes retain their deferred loading to avoid competing with the hero.
 *
 * Scenes are served from our own origin (public/scenes, written by
 * `npm run sync:spline`) rather than prod.spline.design. That is why there is
 * no consent gate here any more: nothing about rendering a scene contacts a
 * third party, so there is no transfer to consent to. `wasmPath` below keeps
 * the runtime's own cdn.spline.design / gstatic.com fallbacks pinned to our
 * origin too — see scripts/sync-spline-assets.mjs.
 *
 * Note on driving `Application` directly instead of @splinetool/react-spline:
 * the runtime auto-selects its rendering backend, preferring `webgpu` wherever
 * the browser grants an adapter, and its WebGPU pipeline (a patched three.js
 * WebGPURenderer) destroys shadow-map textures mid-pass, which Dawn reports as
 * `Destroyed texture [Texture "ShadowDepthTexture"] used in a submit`. The
 * runtime takes a `renderer` option to pin the backend, but the React wrapper
 * only forwards `renderOnDemand` and `wasmPath`, so pinning it means holding
 * the Application ourselves. `webgl` also skips the WebGPU chunk download
 * entirely; the tradeoff is losing the WebGPU-only HBAO and PCSS soft shadows.
 */
export default function SplineScene({
  scene,
  className,
  style,
  eager = false,
  immediate = false,
  poster,
  posterFit = 'cover',
  disablePointerEvents = false,
}: {
  scene: string;
  className?: string;
  style?: CSSProperties;
  /** Above the fold: don't wait to be scrolled into view. */
  eager?: boolean;
  /** Start on mount, without waiting for interaction, document load or idle. */
  immediate?: boolean;
  /**
   * Still frame (export one from Spline) shown in place of the scene until it
   * has loaded, then cross-faded out. Without it the slot is blank until the
   * scene is ready.
   */
  poster?: string;
  /** How the poster fills the slot. `contain` suits a single floating object. */
  posterFit?: 'cover' | 'contain';
  /** Match the old LazySpline behaviour of ignoring pointer input. */
  disablePointerEvents?: boolean;
}) {
  const loadRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<Application | null>(null);
  const [nearViewport, setNearViewport] = useState(eager);
  const [idle, setIdle] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Deferred scenes wait until the visitor has actually done something.
  const interacted = useFirstInteraction();

  // Whether frames should actually be drawn (near viewport + tab visible).
  const { ref: activeRef, active } = useRenderActive<HTMLDivElement>();

  // Mirror `active` into a ref so the load handler (which runs long after the
  // Application was created, once the network download completes) reads the
  // CURRENT visibility instead of a stale closure value.
  const liveActiveRef = useRef(active);
  useEffect(() => {
    liveActiveRef.current = active;
  }, [active]);

  const shouldLoad = nearViewport && (immediate || (interacted && idle));

  // Once the visitor engages, wait for the document to finish loading and then
  // for a gap in the main thread before pulling anything in. `timeout` is the
  // backstop for a page that never truly goes idle.
  useEffect(() => {
    if (immediate || !interacted || idle) return;

    let cancelled = false;
    let idleId: number | undefined;
    let timerId: ReturnType<typeof setTimeout> | undefined;

    const go = () => {
      if (!cancelled) setIdle(true);
    };

    const whenIdle = () => {
      if (cancelled) return;
      // Start pulling the runtime chunk down the moment the document is done,
      // in parallel with the wait for an idle main thread. Without this the
      // chunk's round trip + parse is stacked in front of the .splinecode
      // download instead of overlapping the idle wait. It's still after
      // `load`, so it stays off the measured critical path.
      void import('@splinetool/runtime');
      if (typeof window.requestIdleCallback === 'function') {
        // Short backstop: the gates that protect the PageSpeed run are the
        // interaction gate and `load`, both already passed by this point.
        // Sitting on a long idle timeout only makes a real visitor stare at
        // the poster.
        idleId = window.requestIdleCallback(go, { timeout: 200 });
      } else {
        timerId = setTimeout(go, 50);
      }
    };

    if (document.readyState === 'complete') {
      whenIdle();
    } else {
      window.addEventListener('load', whenIdle, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener('load', whenIdle);
      if (idleId !== undefined) window.cancelIdleCallback?.(idleId);
      if (timerId !== undefined) clearTimeout(timerId);
    };
  }, [immediate, interacted, idle]);

  // Proximity gating for below-the-fold scenes. Runs independently of the
  // interaction gate so a scene the visitor has already scrolled to starts the
  // moment the other gates open. Once true, stays true (we pause, not unmount).
  useEffect(() => {
    if (nearViewport) return;
    const el = loadRef.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      const frame = requestAnimationFrame(() => setNearViewport(true));
      return () => cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setNearViewport(true);
          observer.disconnect();
        }
      },
      // Start loading one full viewport before the scene scrolls into view.
      { rootMargin: '100% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [nearViewport]);

  // Create the Application once every gate has opened, and tear it down on
  // unmount. `cancelled` matters because load() is async: a route change or a
  // StrictMode remount can land while the .splinecode is still downloading,
  // and disposing an Application that is still initialising leaves the runtime
  // mid-flight — so we wait for load() to settle and dispose then.
  useEffect(() => {
    if (!shouldLoad) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    let cancelled = false;
    let app: Application | null = null;
    let initializing = true;

    void (async () => {
      try {
        const { Application } = await import('@splinetool/runtime');
        if (cancelled) return;

        app = new Application(canvas, {
          // Pin the backend: see the note at the top of this file.
          renderer: 'webgl',
          // What react-spline's `renderOnDemand: true` mapped to.
          renderMode: 'auto',
          wasmPath: SPLINE_WASM_PATH,
        });

        // Match the hero's anonymous fetch preload so it is reused rather
        // than downloading the scene again after the runtime has loaded.
        await app.load(scene, undefined, {
          mode: 'cors',
          credentials: 'same-origin',
        });

        if (cancelled) {
          app.dispose();
          app = null;
          return;
        }

        appRef.current = app;
        setLoaded(true);
        // Apply the CURRENT visibility, not the value captured before loading.
        if (liveActiveRef.current) app.play();
        else app.stop();
      } catch (error) {
        app?.dispose();
        app = null;
        // Keep any poster visible if either the runtime or scene fails.
        if (!cancelled) console.error(`SplineScene: failed to load ${scene}`, error);
      } finally {
        initializing = false;
      }
    })();

    return () => {
      cancelled = true;
      appRef.current = null;
      setLoaded(false);
      // An in-flight load disposes itself once it settles. Disposing here
      // would tear down the renderer while the runtime is still using it.
      if (!initializing) {
        app?.dispose();
        app = null;
      }
    };
  }, [shouldLoad, scene]);

  // Drive Spline's render loop from visibility (handles every transition
  // after load).
  useEffect(() => {
    const app = appRef.current;
    if (!app) return;
    if (active) app.play();
    else app.stop();
  }, [active]);

  return (
    <div
      ref={(node) => {
        loadRef.current = node;
        activeRef.current = node;
      }}
      className={cn(
        'w-full h-full',
        poster && 'relative',
        disablePointerEvents && 'pointer-events-none',
        className
      )}
      style={style}
    >
      {poster && (
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${poster})`,
            backgroundSize: posterFit,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: loaded ? 0 : 1,
            transition: 'opacity 700ms ease-out',
            pointerEvents: 'none',
          }}
        />
      )}
      {/*
        Spline installs its own ResizeObserver on canvas.parentElement and sets
        the canvas's CSS size itself, so the canvas needs a sized parent to
        measure and no width/height of its own — this wrapper is what
        react-spline's ParentSize div used to provide.
      */}
      <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <canvas
          ref={canvasRef}
          style={{ display: loaded ? 'block' : 'none' }}
        />
      </div>
    </div>
  );
}
