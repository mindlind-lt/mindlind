'use client';

import LazySpline from './lazy-spline';
import { SPLINE_SCENES } from '@/lib/spline-scenes';

export default function SplineCubes({ className }: { className?: string }) {
  return (
    <LazySpline
      scene={SPLINE_SCENES['cubes']}
      className={className}
      poster="/images/spline-cubes-poster.webp"
      posterFit="contain"
    />
  );
}
