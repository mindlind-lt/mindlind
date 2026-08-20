'use client';

// Noise Orb — a simplex-noise-displaced sphere lit like molten rock, wrapped in
// a slowly rotating shell of drifting particles, over a grainy dark backdrop.
// Ported from a three.js/GSAP demo; the timeline is hand-rolled here so the
// component carries no animation dependency.

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// --- shared GLSL -----------------------------------------------------------

// Simplex 3D noise — Ian McEwan, Ashima Arts.
const SIMPLEX_NOISE = /* glsl */ `
vec4 permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

  // Permutations
  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  // Gradients: N*N points uniformly over a square, mapped onto an octahedron.
  float n_ = 1.0 / 7.0; // N=7
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z); // mod(p, N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_); // mod(j, N)

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  // Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
`;

// --- orb -------------------------------------------------------------------

const ORB_VERTEX = /* glsl */ `
uniform float u_time;
uniform float u_progress;

varying vec3 v_color;
varying vec3 v_normal;

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
  // u_progress scales the sampling frequency: low values swell the whole ball,
  // high values break it into fine ridges.
  float noise = snoise(position * u_progress + u_time / 10.0);
  vec3 newPos = position * (noise + 0.7);

  v_color = hsv2rgb(vec3(noise * 0.1 + 0.03, 0.7, 0.7));
  // the undisplaced normal — it lights the sweep of the surface rather than
  // each ridge, which is what keeps the shading soft
  v_normal = normal;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
}
`;

const ORB_FRAGMENT = /* glsl */ `
varying vec3 v_color;
varying vec3 v_normal;

const vec3 SKY_COLOR = vec3(1.000, 1.000, 0.547);
const vec3 GROUND_COLOR = vec3(0.562, 0.275, 0.111);

void main() {
  vec3 lightDirection = normalize(vec3(0.0, -1.0, -1.0));
  vec3 light = mix(SKY_COLOR, GROUND_COLOR, dot(lightDirection, v_normal));

  gl_FragColor = vec4(light * v_color, 1.0);
}
`;

// --- particle shell --------------------------------------------------------

const PARTICLE_VERTEX = /* glsl */ `
uniform float u_time;

void main() {
  vec3 p = position;

  // two out-of-phase waves along y, so the shell breathes instead of spinning
  // as a rigid ball
  p.y += 0.25 * (sin(p.y * 5.0 + u_time) * 0.5 + 0.5);
  p.z += 0.05 * (sin(p.y * 10.0 + u_time) * 0.5 + 0.5);

  vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
  gl_PointSize = 10.0 * (1.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}
`;

const PARTICLE_FRAGMENT = /* glsl */ `
uniform float u_progress;

void main() {
  gl_FragColor = vec4(0.4, 0.4, 0.4, u_progress);
}
`;

// --- backdrop --------------------------------------------------------------

const BACKGROUND_VERTEX = /* glsl */ `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const BACKGROUND_FRAGMENT = /* glsl */ `
varying vec2 vUv;

uniform float u_time;

// The original left saturation at 0, which made its noise term a no-op. A
// little saturation lets the hue drift actually show — still near-black.
const float BACKGROUND_SATURATION = 0.5;
const float BACKGROUND_LIGHTNESS = 0.03;

float hue2rgb(float f1, float f2, float hue) {
  if (hue < 0.0) hue += 1.0;
  else if (hue > 1.0) hue -= 1.0;

  float res;
  if ((6.0 * hue) < 1.0) res = f1 + (f2 - f1) * 6.0 * hue;
  else if ((2.0 * hue) < 1.0) res = f2;
  else if ((3.0 * hue) < 2.0) res = f1 + (f2 - f1) * ((2.0 / 3.0) - hue) * 6.0;
  else res = f1;
  return res;
}

vec3 hsl2rgb(vec3 hsl) {
  if (hsl.y == 0.0) return vec3(hsl.z); // luminance only

  float f2 = hsl.z < 0.5
    ? hsl.z * (1.0 + hsl.y)
    : hsl.z + hsl.y - hsl.y * hsl.z;
  float f1 = 2.0 * hsl.z - f2;

  return vec3(
    hue2rgb(f1, f2, hsl.x + (1.0 / 3.0)),
    hue2rgb(f1, f2, hsl.x),
    hue2rgb(f1, f2, hsl.x - (1.0 / 3.0))
  );
}

float hash(vec2 p) {
  return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x))));
}

void main() {
  float n = snoise(vec3(vUv.xy, u_time));
  vec3 color = hsl2rgb(vec3(n * 0.1, BACKGROUND_SATURATION, BACKGROUND_LIGHTNESS));

  // per-pixel film grain, reseeded every frame
  float grain = hash(vUv + u_time);

  gl_FragColor = vec4(color + vec3(grain / 20.0), 1.0);
}
`;

// --- animation -------------------------------------------------------------

const FOV = 40;
// Half-height of everything that actually gets drawn: the particle shell
// (radius 2) plus the upward wobble its vertex shader adds (0.25). The orb
// itself stays well inside that.
const CONTENT_RADIUS = 2.25;
const BACKGROUND_Z = -2;

const ORB_PROGRESS_MIN = 1;
const ORB_PROGRESS_MAX = 5;
const ORB_CYCLE_SECONDS = 5;
const PARTICLE_OPACITY = 0.4;
const PARTICLE_FADE_SECONDS = 5;
const PARTICLE_SPIN_PER_SECOND = 0.3;
const FRAME_INTERVAL = 1 / 30;

// GSAP's power3.inOut, in one line.
function easeInOutQuart(t: number) {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

// ping-pong between min and max, eased at both ends
function orbProgress(elapsed: number) {
  const phase = (elapsed / ORB_CYCLE_SECONDS) % 2;
  const t = phase < 1 ? phase : 2 - phase;
  return ORB_PROGRESS_MIN + easeInOutQuart(t) * (ORB_PROGRESS_MAX - ORB_PROGRESS_MIN);
}

// fibonacci sphere — evenly spaced points, no clustering at the poles
function fibonacciSphere(count: number, radius: number) {
  const position = new Float32Array(count * 3);
  const inc = Math.PI * (3 - Math.sqrt(5));
  const offset = 2 / count;

  for (let i = 0; i < count; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(1 - y * y);
    const phi = i * inc;

    position[3 * i] = radius * Math.cos(phi) * r;
    position[3 * i + 1] = radius * y;
    position[3 * i + 2] = radius * Math.sin(phi) * r;
  }

  return position;
}

type NoiseOrbProps = {
  className?: string;
  /** Points in the surrounding shell. */
  particleCount?: number;
  /** Paint the grainy dark backdrop. Off leaves the canvas transparent. */
  background?: boolean;
  /** Multiplier on every animation rate. */
  speed?: number;
  /**
   * Empty space kept around the orb, as a fraction of its radius. `0` fits it
   * edge to edge on the tighter axis; the original demo framed it at `0.6`.
   */
  padding?: number;
};

export default function NoiseOrb({
  className,
  particleCount = 20000,
  background = true,
  speed = 1,
  padding = 0.1,
}: NoiseOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // read these from inside the effect so a change re-frames the shot instead of
  // tearing down the WebGL context
  const speedRef = useRef(speed);
  const paddingRef = useRef(padding);
  const refitRef = useRef<(() => void) | null>(null);
  useEffect(() => {
    speedRef.current = speed;
    paddingRef.current = padding;
    refitRef.current?.();
  }, [speed, padding]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: true,
      canvas,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 1000);
    scene.add(camera);

    const uniforms = () => ({ u_time: { value: 0 }, u_progress: { value: 0 } });

    // orb
    const orbMaterial = new THREE.ShaderMaterial({
      vertexShader: SIMPLEX_NOISE + ORB_VERTEX,
      fragmentShader: ORB_FRAGMENT,
      uniforms: uniforms(),
    });
    const orbGeometry = new THREE.SphereGeometry(1, 128, 128);
    scene.add(new THREE.Mesh(orbGeometry, orbMaterial));

    // particle shell
    const particleMaterial = new THREE.ShaderMaterial({
      vertexShader: PARTICLE_VERTEX,
      fragmentShader: PARTICLE_FRAGMENT,
      transparent: true,
      depthWrite: false,
      uniforms: uniforms(),
    });
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(fibonacciSphere(particleCount, 2), 3)
    );
    const points = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(points);

    // backdrop
    const backgroundMaterial = background
      ? new THREE.ShaderMaterial({
          vertexShader: BACKGROUND_VERTEX,
          fragmentShader: SIMPLEX_NOISE + BACKGROUND_FRAGMENT,
          uniforms: uniforms(),
        })
      : null;
    const backgroundGeometry = background ? new THREE.PlaneGeometry(1, 1) : null;
    const backgroundMesh =
      backgroundGeometry && backgroundMaterial
        ? new THREE.Mesh(backgroundGeometry, backgroundMaterial)
        : null;
    if (backgroundMesh) {
      backgroundMesh.position.z = BACKGROUND_Z;
      scene.add(backgroundMesh);
    }

    const draw = (elapsed: number) => {
      orbMaterial.uniforms.u_time.value = elapsed;
      orbMaterial.uniforms.u_progress.value = orbProgress(elapsed);

      particleMaterial.uniforms.u_time.value = elapsed;
      particleMaterial.uniforms.u_progress.value =
        easeInOutQuart(Math.min(elapsed / PARTICLE_FADE_SECONDS, 1)) * PARTICLE_OPACITY;

      if (backgroundMaterial) backgroundMaterial.uniforms.u_time.value = elapsed;

      renderer.render(scene, camera);
    };

    const resize = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      if (!width || !height) return;

      const aspect = width / height;
      renderer.setSize(width, height, false);
      camera.aspect = aspect;

      // pull back far enough that the content clears both the vertical and the
      // horizontal field of view
      const halfFov = THREE.MathUtils.degToRad(FOV) / 2;
      const fitRadius = CONTENT_RADIUS * (1 + Math.max(paddingRef.current, 0));
      const distance = fitRadius / (Math.tan(halfFov) * Math.min(aspect, 1));
      camera.position.set(0, 0, distance);
      camera.lookAt(scene.position);
      camera.updateProjectionMatrix();

      // stretch the backdrop to cover the frustum at its depth
      if (backgroundMesh) {
        const planeHeight = 2 * Math.tan(halfFov) * (distance - BACKGROUND_Z);
        backgroundMesh.scale.set(planeHeight * aspect, planeHeight, 1);
      }
    };

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const timer = new THREE.Timer();
    let elapsed = 0;
    let accumulator = 0;
    let frameId = 0;
    let running = false;

    // ~30fps is plenty for shading this soft, and only while the canvas is
    // on-screen and the tab is visible — an unseen WebGL loop is pure heat.
    const loop = (timestamp?: number) => {
      frameId = requestAnimationFrame(loop);
      timer.update(timestamp);
      const delta = timer.getDelta() * speedRef.current;
      elapsed += delta;
      points.rotation.y += delta * PARTICLE_SPIN_PER_SECOND;

      accumulator += delta;
      if (accumulator >= FRAME_INTERVAL) {
        accumulator %= FRAME_INTERVAL;
        draw(elapsed);
      }
    };

    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      // the timer keeps counting while paused — drop that gap so resuming
      // doesn't jump the animation forward
      timer.reset();
      loop();
    };

    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(frameId);
    };

    let inView = true;
    const sync = () => {
      if (inView && !document.hidden) start();
      else stop();
    };

    const observer =
      'IntersectionObserver' in window
        ? new IntersectionObserver((entries) => {
            inView = entries.some((entry) => entry.isIntersecting);
            sync();
          }, { rootMargin: '200px' })
        : null;
    observer?.observe(canvas);

    const onVisibility = () => sync();
    document.addEventListener('visibilitychange', onVisibility);

    // the loop repaints on its own; a held frame does not
    const refit = () => {
      resize();
      if (reduceMotion) draw(elapsed);
    };

    const resizeObserver = new ResizeObserver(refit);
    resizeObserver.observe(canvas);
    refitRef.current = refit;

    resize();
    if (reduceMotion) {
      // a reduced-motion viewer still gets the orb, held part-way through the
      // cycle so the surface is neither fully smooth nor fully broken up
      elapsed = ORB_CYCLE_SECONDS / 2;
      draw(elapsed);
    } else {
      sync();
    }

    return () => {
      stop();
      refitRef.current = null;
      observer?.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      timer.dispose();
      orbGeometry.dispose();
      orbMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      backgroundGeometry?.dispose();
      backgroundMaterial?.dispose();
      renderer.dispose();
    };
  }, [particleCount, background]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  );
}
