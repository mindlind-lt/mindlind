'use client';

import SplineScene from './spline-scene';

export default function SplineMedusa() {
  return (
    <SplineScene
      eager
      scene="https://prod.spline.design/qDyNyDswFMuYj9So/scene.splinecode"
      style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
    />
  );
}
