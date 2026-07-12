'use client'; 

import dynamic from 'next/dynamic';
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function SplineAgency2() {
  return (
      <Spline scene="https://prod.spline.design/kxUSZ5qeo7bMShUO/scene.splinecode" className="min-h-screen" />
  );
}