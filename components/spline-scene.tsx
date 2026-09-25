'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import type { Application } from '@splinetool/runtime';
import { cn } from '@/lib/utils';
import { useRenderActive } from '@/lib/use-render-active';
import { useFirstInteraction } from '@/lib/use-first-interaction';
import { SPLINE_WASM_PATH } from '@/lib/spline-scenes';

/**
 * A single wrapper around a Spline scene that:
 *  - holds back the runtime + .splinecode + WebGL context until ALL of these
 *    are true: the visitor has interacted with the page at all, the document
 *    has finished loading, the main thread has gone idle, and (for below-the-
 *    fold scenes) the scene is within one viewport of being scrolled to; and
 *  - pauses the scene's render loop (Spline's stop()) whenever it scrolls
 *    off-screen or the tab is backgrounded, resuming it (play()) on return.
 *
 * Pausing in place avoids the download/flash of unmounting, so a scrolled-past
 * hero costs ~zero GPU until it comes back into view.
 *
 * Note on `eager`: it does NOT mean "load during hydration". These scenes are
 * multi-megabyte .splinecode payloads plus a WebGL context, and starting them
 * anywhere near page load puts all of that on the critical path — on mobile
 * the homepage hero alone was pushing LCP past 6s and TBT past 30s, and
 * PageSpeed scored it accordingly. `eager` only means "this one is above the
 * fold, so don't also wait for a scroll into view"; the interaction gate still
 * applies. See lib/use-first-interaction.ts for why the gate is a gesture and
 * not a timer. Pair `eager` with `poster` so the hero isn't empty meanwhile.
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
  poster,
  posterFit = 'cover',
  disablePointerEvents = false,
}: {
  scene: string;
  className?: string;
  style?: CSSProperties;
  /** Above the fold: don't wait to be scrolled into view. */
  eager?: boolean;
  /**
   * Still frame (export one from Spline) shown in place of the scene until it
   * has loaded, then cross-faded out. Without it the slot is blank until the
   * visitor interacts.
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

  // Nothing downloads until the visitor has actually done something.
  const interacted = useFirstInteraction();

  // Whether frames should actually be drawn (near viewport + tab visible).
  const { ref: activeRef, active } = useRenderActive<HTMLDivElement>();

  // Mirror `active` into a ref so the load handler (which runs long after the
  // Application was created, once the network download completes) reads the
  // CURRENT visibility instead of a stale closure value.
  const liveActiveRef = useRef(active);
  liveActiveRef.current = active;

  const shouldLoad = interacted && idle && nearViewport;

  // Once the visitor engages, wait for the document to finish loading and then
  // for a gap in the main thread before pulling anything in. `timeout` is the
  // backstop for a page that never truly goes idle.
  useEffect(() => {
    if (!interacted || idle) return;

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
  }, [interacted, idle]);

  // Proximity gating for below-the-fold scenes. Runs independently of the
  // interaction gate so a scene the visitor has already scrolled to starts the
  // moment the other gates open. Once true, stays true (we pause, not unmount).
  useEffect(() => {
    if (nearViewport) return;
    const el = loadRef.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setNearViewport(true);
      return;
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

    void (async () => {
      const { Application } = await import('@splinetool/runtime');
      if (cancelled) return;

      app = new Application(canvas, {
        // Pin the backend: see the note at the top of this file.
        renderer: 'webgl',
        // What react-spline's `renderOnDemand: true` mapped to.
        renderMode: 'auto',
        wasmPath: SPLINE_WASM_PATH,
      });

      try {
        await app.load(scene);
      } catch (error) {
        app.dispose();
        app = null;
        // A scene that fails to load leaves the poster in place, which is a
        // better outcome for a marketing page than an error boundary.
        console.error(`SplineScene: failed to load ${scene}`, error);
        return;
      }

      if (cancelled) {
        app.dispose();
        app = null;
        return;
      }

      appRef.current = app;
      setLoaded(true);
      // Apply the CURRENT visibility, not the value captured when the effect
      // ran — the scene may have scrolled into view while it was downloading.
      if (liveActiveRef.current) app.play();
      else app.stop();
    })();

    return () => {
      cancelled = true;
      appRef.current = null;
      setLoaded(false);
      app?.dispose();
      app = null;
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
