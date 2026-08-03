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
 *    is within one viewport of being scrolled into view (unless `eager`), and
 *  - pauses the scene's render loop (Spline's stop()) whenever it scrolls
 *    off-screen or the tab is backgrounded, resuming it (play()) on return.
 *
 * Pausing in place avoids the download/flash of unmounting, so a scrolled-past
 * hero costs ~zero GPU until it comes back into view.
 */
export default function SplineScene({
  scene,
  className,
  style,
  eager = false,
  disablePointerEvents = false,
}: {
  scene: string;
  className?: string;
  style?: CSSProperties;
  /** Load immediately instead of waiting to scroll near (use for heroes). */
  eager?: boolean;
  /** Match the old LazySpline behaviour of ignoring pointer input. */
  disablePointerEvents?: boolean;
}) {
  const loadRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);
  const [shouldLoad, setShouldLoad] = useState(eager);

  // Whether frames should actually be drawn (near viewport + tab visible).
  const { ref: activeRef, active } = useRenderActive<HTMLDivElement>();

  // Mirror `active` into a ref so onLoad (which fires long after the <Spline>
  // element was created, once the network download completes) reads the
  // CURRENT visibility instead of a stale closure value.
  const liveActiveRef = useRef(active);
  liveActiveRef.current = active;

  // Load gating: once loaded, stay mounted (we pause instead of unmounting).
  useEffect(() => {
    if (shouldLoad) return;
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
  }, [shouldLoad]);

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
      style={style}
    >
      {shouldLoad && (
        <Spline
          scene={scene}
          onLoad={(app) => {
            appRef.current = app;
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
