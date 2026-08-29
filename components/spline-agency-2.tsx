'use client';

import LazySpline from './lazy-spline';
import { SPLINE_SCENES } from '@/lib/spline-scenes';

export default function SplineAgency2() {
  return (
      <LazySpline scene={SPLINE_SCENES['agency-2']} className="min-h-screen" />
  );
}
