'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import type { Application } from '@splinetool/runtime';
import { cn } from '@/lib/utils';
import { useRenderActive } from '@/lib/use-render-active';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

/**
 * A single wrapper around a Spline scene that:
 *  - defers loading the runtime + .splinecode + WebGL context until the scene
 *    is within one viewport of being scrolled into view — or, for `eager`
 *    hero scenes, until the page has finished loading and the main thread
 *    goes idle — and
 *  - pauses the scene's render loop (Spline's stop()) whenever it scrolls
 *    off-screen or the tab is backgrounded, resuming it (play()) on return.
 *
 * Pausing in place avoids the download/flash of unmounting, so a scrolled-past
 * hero costs ~zero GPU until it comes back into view.
 *
 * Note on `eager`: it does NOT mean "load during hydration". These scenes are
 * multi-megabyte .splinecode payloads plus a WebGL context, and starting them
 * inline puts all of that on the critical path — on mobile the homepage hero
 * alone was pushing LCP past 6s and TBT past 30s. `eager` now means "this one
 * is above the fold, so don't wait for a scroll — but still let the page paint
 * and settle first". Pair it with `poster` so the hero isn't empty meanwhile.
 */
export default function SplineScene({
  scene,
  className,
  style,
  eager = false,
  poster,
  disablePointerEvents = false,
}: {
  scene: string;
  className?: string;
  style?: CSSProperties;
  /** Above the fold: load once the page is loaded and idle, without a scroll. */
  eager?: boolean;
  /**
   * Still frame (export one from Spline) shown in place of the scene until it
   * has loaded. Without it an eager hero is blank for the first moment.
   */
  poster?: string;
  /** Match the old LazySpline behaviour of ignoring pointer input. */
  disablePointerEvents?: boolean;
}) {
  const loadRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Whether frames should actually be drawn (near viewport + tab visible).
  const { ref: activeRef, active } = useRenderActive<HTMLDivElement>();

  // Mirror `active` into a ref so onLoad (which fires long after the <Spline>
  // element was created, once the network download completes) reads the
  // CURRENT visibility instead of a stale closure value.
  const liveActiveRef = useRef(active);
  liveActiveRef.current = active;

  // Eager gating: wait for the page to finish loading, then for a gap in the
  // main thread, before pulling in the runtime and the scene. `timeout` is the
  // backstop for a page that never truly goes idle.
  useEffect(() => {
    if (!eager || shouldLoad) return;

    let cancelled = false;
    let idleId: number | undefined;
    let timerId: ReturnType<typeof setTimeout> | undefined;

    const load = () => {
      if (!cancelled) setShouldLoad(true);
    };

    const whenIdle = () => {
      if (cancelled) return;
      if (typeof window.requestIdleCallback === 'function') {
        idleId = window.requestIdleCallback(load, { timeout: 2000 });
      } else {
        timerId = setTimeout(load, 300);
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
  }, [eager, shouldLoad]);

  // Load gating: once loaded, stay mounted (we pause instead of unmounting).
  useEffect(() => {
    if (eager || shouldLoad) return;
    const el = loadRef.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      // Start loading one full viewport before the scene scrolls into view.
      { rootMargin: '100% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [eager, shouldLoad]);

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
      className={cn('w-full h-full', disablePointerEvents && 'pointer-events-none', className)}
      style={
        poster && !loaded
          ? {
              ...style,
              backgroundImage: `url(${poster})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }
          : style
      }
    >
      {shouldLoad && (
        <Spline
          scene={scene}
          onLoad={(app) => {
            appRef.current = app;
            setLoaded(true);
            // Apply the CURRENT visibility, not the value captured when this
            // element was created — the scene may have scrolled into view
            // while it was still downloading.
            if (liveActiveRef.current) app.play();
            else app.stop();
          }}
        />
      )}
    </div>
  );
}
