'use client';

import SplineScene from './spline-scene';

/**
 * Defers loading a Spline scene until it is within one viewport of being
 * scrolled into view, and pauses its render loop while off-screen or in a
 * backgrounded tab. Use for below-the-fold scenes; keep hero scenes eager
 * (see SplineScene's `eager` prop).
 */
export default function LazySpline({
  scene,
  className,
}: {
  scene: string;
  className?: string;
}) {
  return <SplineScene scene={scene} className={className} disablePointerEvents />;
}
