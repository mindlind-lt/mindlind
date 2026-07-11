'use client';

import dynamic from 'next/dynamic';
import './spline-torus.css';
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function SplineTorus() {
  return (
    <div className="spline-torus-container">
    {/* <div style={{ position: 'sticky', zIndex: 0, width: '100%', height: 'auto', top: '200px', left: '0', pointerEvents: 'none' }}> */}
      <Spline scene="https://prod.spline.design/o7n-fvcgPIbHv08W/scene.splinecode" />
    </div>
  );
}