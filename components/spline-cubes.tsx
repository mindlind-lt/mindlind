'use client';

import LazySpline from './lazy-spline';

export default function SplineCubes({ className }: { className?: string }) {
  return (
    <LazySpline
      scene="https://prod.spline.design/pTGhXiLspT3Mjuvr/scene.splinecode"
      className={className}
      poster="/images/spline-cubes-poster.webp"
      posterFit="contain"
    />
  );
}
