'use client';

// Particle Wave — a 200×200 grid of black points lying flat on the floor, pushed
// into a rolling swell by a pair of sines in the vertex shader. Every point also
// scales with the same waves, so the crests read heavier than the troughs and
// the sheet looks lit even though nothing here is lit at all.
//
// Ported from a three.js r110 demo (see DEMO.md). The shader maths, the grid
// (200 × 200 at a 0.3 gap) and the camera (75° at 0, 6, 5 looking at the origin)
// are carried over verbatim. What changed, and why:
//
//   * Colours are inverted from the demo: it drew white points onto an opaque
//     black clear colour, this draws black points onto a transparent canvas, so
//     the component inherits the page background instead of imposing one.
//   * The demo owned the window: a `#c` canvas sized to `innerWidth/innerHeight`
//     with `overflow: hidden` on the body. Here the canvas is created by the
//     effect and sized to the component's own box off a ResizeObserver, so the
//     wave can sit in a page that still scrolls.
//   * `uTime` advanced by a flat 0.05 per frame, which runs twice as fast on a
//     120Hz display. It is driven off the frame delta now — the same speed at
//     60Hz, just framerate-independent.
//   * Device pixel ratio is capped (MAX_DPR) and the loop pauses off-screen and
//     in a backgrounded tab, as everything else in this codebase does. 40,000
//     points are cheap to draw but there is no reason to draw them to nobody.
//   * Dropped from the demo: an OrbitControls initialiser that was never called,
//     and a mousemove handler whose `mouse` vector nothing ever read.

import { useEffect, useRef, type CSSProperties } from 'react';
import * as THREE from 'three';
import { useRenderActive } from '@/lib/use-render-active';
import './particle-wave.css';

// Points are 1-pixel-ish dots — retina past 2x buys nothing but fill rate.
const MAX_DPR = 2;

// The grid. `AMOUNT_X * AMOUNT_Y` points, `GAP` world units apart, centred on
// the origin — 60 × 60 units at these numbers.
const GAP = 0.3;
const AMOUNT_X = 200;
const AMOUNT_Y = 200;

// How far `uTime` advances per second. The demo ran at 3.0 (a flat 0.05 per
// frame at 60fps); this is a third of that, which reads as a swell rather than
// a ripple.
const DEFAULT_SPEED = 1;

// Point size multiplier, before the per-point wave scale and the perspective
// divide. The demo's 15 is faint on a light background — the dots are what the
// eye has to find here, so they start bigger.
const DEFAULT_POINT_SIZE = 26;

// Per-point alpha. The demo's 0.5 against black; a little more against #F4F4F4.
const DEFAULT_OPACITY = 0.7;

// A backgrounded tab or a slow first frame can hand the loop a huge delta.
const MAX_FRAME_MS = 100;

const PARTICLE_VERTEX = /* glsl */ `
attribute float scale;

uniform float uTime;
uniform float uSize;

void main() {
  vec3 p = position;
  float s = scale;

  // Each line feeds the next: p.y is already displaced when p.x reads it, and
  // both are when the size does. That accident is what stops the swell from
  // looking like a plain grid of sine waves, so it stays as the demo had it.
  p.y += (sin(p.x + uTime) * 0.5) + (cos(p.y + uTime) * 0.1) * 2.0;
  p.x += (sin(p.y + uTime) * 0.5);
  s += (sin(p.x + uTime) * 0.5) + (cos(p.y + uTime) * 0.1) * 2.0;

  vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = s * uSize * (1.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}
`;

const PARTICLE_FRAGMENT = /* glsl */ `
uniform float uOpacity;

void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, uOpacity);
}
`;

export type ParticleWaveProps = {
  className?: string;
  style?: CSSProperties;
  /** How far the wave travels per second. Lower is slower. */
  speed?: number;
  /** Point size multiplier, before the wave scale and the perspective divide. */
  pointSize?: number;
  /** Per-point alpha, 0–1. */
  opacity?: number;
};

export default function ParticleWave({
  className,
  style,
  speed = DEFAULT_SPEED,
  pointSize = DEFAULT_POINT_SIZE,
  opacity = DEFAULT_OPACITY,
}: ParticleWaveProps) {
  const { ref: containerRef, active } = useRenderActive<HTMLDivElement>();

  const activeRef = useRef(active);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'particle-wave-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    container.appendChild(canvas);

    let renderer: THREE.WebGLRenderer;
    try {
      // The demo ran without alpha, so its clear colour was opaque black. Here
      // the canvas is transparent and the points are black instead, so the wave
      // sits on whatever the page puts behind it.
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch {
      // No WebGL — the container is empty and the page background shows through.
      canvas.remove();
      return;
    }

    const scene = new THREE.Scene();

    // Aspect is a placeholder; layout() sets the real one before the first frame.
    const camera = new THREE.PerspectiveCamera(75, 1, 0.01, 1000);
    camera.position.set(0, 6, 5);

    const particleCount = AMOUNT_X * AMOUNT_Y;
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    let i = 0;
    let j = 0;
    for (let ix = 0; ix < AMOUNT_X; ix++) {
      for (let iy = 0; iy < AMOUNT_Y; iy++) {
        positions[i] = ix * GAP - (AMOUNT_X * GAP) / 2;
        positions[i + 1] = 0;
        positions[i + 2] = iy * GAP - (AMOUNT_Y * GAP) / 2;
        // Every point starts at 1 and is displaced from there in the shader.
        scales[j] = 1;
        i += 3;
        j++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const material = new THREE.ShaderMaterial({
      transparent: true,
      vertexShader: PARTICLE_VERTEX,
      fragmentShader: PARTICLE_FRAGMENT,
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: pointSize },
        uOpacity: { value: opacity },
      },
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

    function layout() {
      // Re-read the element rather than closing over it: TypeScript drops the
      // null-narrowing across a hoisted function declaration.
      const el = containerRef.current;
      if (!el) return;

      const width = el.clientWidth;
      const height = el.clientHeight;
      if (!width || !height) return;

      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height, false);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    function render() {
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    }

    let frame = 0;
    let lastTime = 0;

    function loop(time: number) {
      frame = requestAnimationFrame(loop);
      if (!activeRef.current) {
        // Swallow the gap so resuming does not jump the wave forward.
        lastTime = time;
        return;
      }
      const delta = lastTime ? Math.min(time - lastTime, MAX_FRAME_MS) : 16;
      lastTime = time;
      material.uniforms.uTime.value += (delta / 1000) * speed;
      render();
    }

    const observer = new ResizeObserver(() => {
      layout();
      // Avoids a stretched frame between the resize and the next tick, and keeps
      // the held frame correct under reduced motion.
      render();
    });

    layout();
    render();
    observer.observe(container);

    // Nothing moves under reduced motion — the wave holds its first frame, which
    // is already the full relief rather than a flat grid.
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      scene.remove(points);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      canvas.remove();
    };
  }, [containerRef, speed, pointSize, opacity]);

  return (
    <div
      ref={containerRef}
      className={className ? `particle-wave ${className}` : 'particle-wave'}
      style={style}
    />
  );
}
