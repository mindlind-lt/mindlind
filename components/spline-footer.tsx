'use client';

import LazySpline from './lazy-spline';

export default function SplineFooter() {
  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', zIndex: '0' }}>
      <LazySpline scene="https://prod.spline.design/3k2JG5aZqajH60Qp/scene.splinecode" />
    </div>
  );
}
