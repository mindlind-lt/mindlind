'use client';

import dynamic from 'next/dynamic';
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function HowWeWork3d() {
  return (
    <div style={{ position: 'sticky', zIndex: 0, width: '100%', height: 'auto', top: '200px', left: '0', pointerEvents: 'none' }}>
      <Spline scene="https://prod.spline.design/9W0AxfSyb1kAhBLz/scene.splinecode" />
    </div>
  );
}