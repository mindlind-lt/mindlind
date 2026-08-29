'use client';

import LazySpline from './lazy-spline';
import { SPLINE_SCENES } from '@/lib/spline-scenes';
import './spline-torus.css';

export default function SplineTorus({ className }: { className?: string }) {
  return (
    <div className={`spline-torus-container ${className || ''}`}>
    {/* <div style={{ position: 'sticky', zIndex: 0, width: '100%', height: 'auto', top: '200px', left: '0', pointerEvents: 'none' }}> */}
      <LazySpline
        scene={SPLINE_SCENES['torus']}
        poster="/images/spline-torus-poster.webp"
        posterFit="contain"
      />
    </div>
  );
}
