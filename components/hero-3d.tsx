'use client'; // Required for Next.js App Router

// import Spline from '@splinetool/react-spline';

import dynamic from 'next/dynamic';
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function ThreeDScene() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Spline scene="https://prod.spline.design/j8hzrzWHjluuunyI/scene.splinecode" />
    </div>
  );
}