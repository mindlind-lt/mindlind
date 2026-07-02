'use client'; // Required for Next.js App Router

// import Spline from '@splinetool/react-spline';

import dynamic from 'next/dynamic';
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function SplineMedusa() {
  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0' }}>
      <Spline scene="https://prod.spline.design/qDyNyDswFMuYj9So/scene.splinecode" />
    </div>
  );
}