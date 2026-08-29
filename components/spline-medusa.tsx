'use client';

import SplineScene from './spline-scene';
import { SPLINE_SCENES } from '@/lib/spline-scenes';

export default function SplineMedusa() {
  return (
    // Temporarily posterless: an empty hero is preferred over the still frame
    // while the scene loads. To restore, pass poster="/images/hero-poster.webp"
    // below and re-add the <link rel="preload"> for it — the poster is a
    // background-image set from an inline style, which the preload scanner
    // can't see, and it's the hero's visible pixels until the scene loads.
    <SplineScene
      eager
      scene={SPLINE_SCENES['medusa']}
      style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
    />
  );
}
