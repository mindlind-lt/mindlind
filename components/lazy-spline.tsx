'use client';

import SplineScene from './spline-scene';

/**
 * Defers loading a Spline scene until the visitor has interacted with the page
 * AND it is within one viewport of being scrolled into view, and pauses its
 * render loop while off-screen or in a backgrounded tab. Use for below-the-fold
 * scenes; keep hero scenes eager (see SplineScene's `eager` prop).
 */
export default function LazySpline({
  scene,
  className,
  poster,
  posterFit,
}: {
  scene: string;
  className?: string;
  poster?: string;
  posterFit?: 'cover' | 'contain';
}) {
  return (
    <SplineScene
      scene={scene}
      className={className}
      poster={poster}
      posterFit={posterFit}
      disablePointerEvents
    />
  );
}
