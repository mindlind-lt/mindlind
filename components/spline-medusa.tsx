'use client';

import SplineScene from './spline-scene';
import { SPLINE_SCENES } from '@/lib/spline-scenes';

export default function SplineMedusa() {
  return (
    <>
      {/* React hoists this into the homepage's exported HTML head. Fetch the
          scene while the page and runtime load, without preloading it on
          other routes. Anonymous CORS matches SplineScene's fetch options. */}
      <link
        rel="preload"
        as="fetch"
        href={SPLINE_SCENES['medusa']}
        crossOrigin="anonymous"
      />
      {/* Keep the existing posterless appearance, but start 3D automatically. */}
      <SplineScene
        eager
        immediate
        scene={SPLINE_SCENES['medusa']}
        style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
      />
    </>
  );
}
