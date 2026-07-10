'use client'; 

import dynamic from 'next/dynamic';
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function SplineProjectsHero() {
  return (
    // <div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0' }}>
      <Spline scene="https://prod.spline.design/zCxRO74obPaANH83/scene.splinecode" />
    // </div>
  );
}