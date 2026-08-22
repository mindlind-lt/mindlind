'use client';

import SplineScene from './spline-scene';

export default function SplineMedusa() {
  return (
    <>
      {/* The poster is a background-image set from an inline style, which the
          preload scanner can't see — and it's the hero's visible pixels until
          the scene loads. React hoists this <link> into <head>. */}
      <link
        rel="preload"
        as="image"
        href="/images/hero-poster.webp"
        type="image/webp"
        fetchPriority="high"
      />
      <SplineScene
        eager
        scene="https://prod.spline.design/qDyNyDswFMuYj9So/scene.splinecode"
        poster="/images/hero-poster.webp"
        style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
      />
    </>
  );
}
