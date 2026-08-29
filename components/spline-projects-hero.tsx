'use client';

import SplineScene from './spline-scene';
import { SPLINE_SCENES } from '@/lib/spline-scenes';

export default function SplineProjectsHero() {
  return (
    <SplineScene
      eager
      scene={SPLINE_SCENES['projects-hero']}
    />
  );
}
