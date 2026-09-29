'use client';

// The hover transition on a work thumbnail: the first image doesn't fade into
// the second, it flows into it. A noise field decides which pixels flip first,
// so the second image floods across the card along a soft, irregular front;
// both images are pushed in opposite directions along that same field while it
// happens, and the incoming one is split into its colour channels at the peak.
// The distortion is exactly zero at both ends, so neither image is ever seen
// warped at rest.
//
// Raw WebGL rather than a library. This is one textured quad and one fragment
// shader, and the whole point of the card's image handling is to not spend
// bytes the visitor will not look at — `ogl` is in the tree for two other
// components but pulling it in here would cost more than the effect does.
//
// What it is careful about:
//
//   * Nothing loads and no context exists until the pointer actually arrives.
//     `/projects` shows ten of these above a Spline hero that holds a context of
//     its own, and browsers cap how many a page may have — so the context is
//     built on hover and released once the card has been idle for a while.
//     Rebuilding is a compile and two texture uploads, a few milliseconds, and
//     the images are already in the browser's cache by then.
//   * The first image comes from the `<img>` the card already rendered, so only
//     the second one is ever fetched.
//   * Texels are sampled and written raw — no linearisation, no tone mapping —
//     so the canvas at rest is pixel-identical to the `<img>` under it and the
//     handover is invisible.
//   * Without a pointer, without WebGL, or under `prefers-reduced-motion`, this
//     never turns on and `.work-thumb-swap` in the CSS does the plain swap
//     instead. `data-morph` on the card is what switches between them.

import { useEffect, useRef } from 'react';
import './thumb-morph.css';

const VERTEX = `
attribute vec2 aPosition;
varying vec2 vUv;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`;

const FRAGMENT = `
precision highp float;

varying vec2 vUv;

uniform sampler2D uFrom;
uniform sampler2D uTo;
uniform vec2 uResolution;
uniform vec2 uFromSize;
uniform vec2 uToSize;
uniform float uProgress;
uniform float uTime;

const float TAU = 6.28318530718;
const float PI = 3.14159265359;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

vec2 gradient(vec2 p) {
  float a = hash(p) * TAU;
  return vec2(cos(a), sin(a));
}

// Gradient noise with a quintic fade, in place of stacked octaves of value
// noise. Two things come from this. Value noise interpolates the lattice
// *values*, which leaves faint creases along the grid lines and reads as a
// slightly square blobbiness; gradient noise interpolates directions and has
// none of that. And the quintic fade is smooth in its second derivative where
// the usual cubic is not, so the field has no visible kinks where cells meet.
// One octave, low frequency: the front should be one long soft curve, not a
// crinkled edge.
float smoothNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = dot(gradient(i), f);
  float b = dot(gradient(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
  float c = dot(gradient(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
  float d = dot(gradient(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
  float v = mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  return clamp(v * 0.85 + 0.5, 0.0, 1.0);
}

// object-fit: cover, in the shader. The sampled rectangle is the largest one
// inside the image that has the canvas's aspect ratio; 'zoom' shrinks it
// further, which reads as pushing into the picture.
vec2 coverUv(vec2 uv, vec2 size, float zoom) {
  float canvasAspect = uResolution.x / uResolution.y;
  float imageAspect = size.x / size.y;
  vec2 scale = canvasAspect > imageAspect
    ? vec2(1.0, imageAspect / canvasAspect)
    : vec2(canvasAspect / imageAspect, 1.0);
  return (uv - 0.5) * scale / zoom + 0.5;
}

void main() {
  float p = uProgress;

  // Zero at p = 0 and p = 1, widest halfway: every displacement below is scaled
  // by this, which is what guarantees both images sit undistorted at rest.
  float bend = sin(p * PI);

  // Where the wipe starts is a diagonal across the card, not the noise alone.
  // On the field by itself the second image surfaced in patches everywhere at
  // once, which is what made the shape read as random; leaning it on a sweep
  // makes it travel, and the field only bends the edge as it goes.
  float sweep = clamp(dot(vUv - 0.5, normalize(vec2(1.0, 0.62))) + 0.5, 0.0, 1.0);
  float wobble = smoothNoise(vUv * 1.6 + uTime * 0.05);
  float n = clamp(mix(sweep, wobble, 0.45), 0.0, 1.0);

  // The push direction is two more samples of the same smooth field rather than
  // an angle spun out of one. Taken from a single scalar the direction wheeled
  // round on the spot wherever that scalar passed a boundary; as two smooth
  // components it turns gradually, so the images slide along curves.
  vec2 flow = vec2(
    smoothNoise(vUv * 1.25 + vec2(3.7, 1.9) + uTime * 0.04),
    smoothNoise(vUv * 1.25 + vec2(8.3, 6.1) + uTime * 0.04)
  ) * 2.0 - 1.0;

  vec2 uvFrom = coverUv(vUv + flow * bend * 0.075, uFromSize, 1.0 + 0.08 * p);
  vec2 uvTo = coverUv(vUv - flow * bend * 0.075, uToSize, 1.08 - 0.08 * p);

  vec3 from = texture2D(uFrom, uvFrom).rgb;

  // Colour split on the incoming image, strongest at the peak. This is the part
  // that reads as energy rather than as a dissolve.
  float split = bend * 0.006;
  vec3 to = vec3(
    texture2D(uTo, uvTo + vec2(split, 0.0)).r,
    texture2D(uTo, uvTo).g,
    texture2D(uTo, uvTo - vec2(split, 0.0)).b
  );

  // The wipe. Low points of the field flip first, so the second image floods in
  // along an irregular front instead of appearing everywhere at once. The
  // (1.0 + soft) term guarantees every pixel has finished by p = 1.
  float soft = 0.55;
  float m = smoothstep(n, n + soft, p * (1.0 + soft));

  vec3 color = mix(from, to, m);

  // A light seam riding the front — brightest where the wipe is halfway, and
  // gone at both ends with 'bend'.
  float seam = smoothstep(0.0, 0.5, m) * smoothstep(1.0, 0.5, m);
  color += seam * bend * 0.10;

  gl_FragColor = vec4(color, 1.0);
}`;

// Higher is snappier. This is an exponential approach rather than a fixed
// duration so that flicking the pointer on and off reverses cleanly from
// wherever the transition had got to.
const RATE = 5.5;

// A backgrounded tab or a slow first frame can hand the loop a huge delta.
const MAX_FRAME_MS = 100;

// Past 2x, this is fill rate spent on a blur.
const MAX_DPR = 2;

// How long a card sits untouched before its context is handed back.
const IDLE_RELEASE_MS = 8000;

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createTexture(gl: WebGLRenderingContext, image: TexImageSource) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  // The case shots are not powers of two, so mipmaps are out and the wrap has
  // to clamp. The clamp is also what smears the edges when the displacement
  // pushes past them, which is part of the look.
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  return texture;
}

interface ThumbMorphProps {
  /** The image the card already shows. Must match the `<img>`'s src. */
  src: string;
  /** The image to morph into on hover. */
  hoverSrc: string;
}

export default function ThumbMorph({ src, hoverSrc }: ThumbMorphProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const card = host.closest<HTMLElement>('.work-thumb');
    if (!card) return;

    // No pointer, or motion turned down: leave `data-morph` off and let the
    // stylesheet's plain swap stand.
    if (!window.matchMedia('(hover: hover)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    card.dataset.morph = 'on';

    // TEMP HARNESS — ?morph=<0..1> pins the transition so it can be screenshotted.
    const forced = new URLSearchParams(window.location.search).get('morph');

    let hovered = false;
    let progress = 0;
    let frame = 0;
    let lastTime = 0;
    let elapsed = 0;
    let releaseTimer: ReturnType<typeof setTimeout>;
    let disposed = false;

    // Everything below is built on the first hover and torn down again when the
    // card goes quiet, so a page of these holds one context, not ten.
    let gl: WebGLRenderingContext | null = null;
    let canvas: HTMLCanvasElement | null = null;
    let program: WebGLProgram | null = null;
    let buffer: WebGLBuffer | null = null;
    let fromTexture: WebGLTexture | null = null;
    let toTexture: WebGLTexture | null = null;
    let uniforms: Record<string, WebGLUniformLocation | null> = {};
    let fromImage: HTMLImageElement | null = null;
    let toImage: HTMLImageElement | null = null;
    let building = false;

    const release = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      if (gl) {
        gl.deleteProgram(program);
        gl.deleteBuffer(buffer);
        gl.deleteTexture(fromTexture);
        gl.deleteTexture(toTexture);
        gl.getExtension('WEBGL_lose_context')?.loseContext();
      }
      canvas?.remove();
      gl = null;
      canvas = null;
      program = null;
      buffer = null;
      fromTexture = null;
      toTexture = null;
      uniforms = {};
    };

    const resize = () => {
      if (!gl || !canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      const width = Math.max(1, Math.round(host.clientWidth * dpr));
      const height = Math.max(1, Math.round(host.clientHeight * dpr));
      if (canvas.width === width && canvas.height === height) return;
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      gl.uniform2f(uniforms.uResolution ?? null, width, height);
    };

    const render = () => {
      if (!gl || !fromImage || !toImage) return;
      resize();
      gl.uniform1f(uniforms.uProgress ?? null, progress * progress * (3 - 2 * progress));
      gl.uniform1f(uniforms.uTime ?? null, elapsed);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    const loop = (time: number) => {
      const delta = lastTime ? Math.min(time - lastTime, MAX_FRAME_MS) : 16;
      lastTime = time;
      elapsed += delta / 1000;

      const target = hovered ? 1 : 0;
      progress += (target - progress) * (1 - Math.exp((-delta / 1000) * RATE));
      if (forced !== null) progress = Number(forced); // TEMP HARNESS

      if (!hovered && progress < 0.002) {
        // Settled back on the first image: hand the card over to the plain
        // `<img>` underneath and stop drawing.
        progress = 0;
        host.classList.remove('is-active');
        frame = 0;
        lastTime = 0;
        releaseTimer = setTimeout(release, IDLE_RELEASE_MS);
        return;
      }

      render();
      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      if (frame) return;
      lastTime = 0;
      host.classList.add('is-active');
      frame = requestAnimationFrame(loop);
    };

    const load = (source: string) =>
      new Promise<HTMLImageElement>((resolve, reject) => {
        const image = new Image();
        image.decoding = 'async';
        image.onload = () => resolve(image);
        image.onerror = reject;
        image.src = source;
      });

    const build = async () => {
      if (gl || building || disposed) return;
      building = true;
      try {
        // The first image is the one the card already painted; only the second
        // is a new request.
        const [a, b] = await Promise.all([load(src), load(hoverSrc)]);
        if (disposed) return;
        fromImage = a;
        toImage = b;

        const element = document.createElement('canvas');
        element.className = 'work-thumb-morph-canvas';
        const context =
          element.getContext('webgl', {
            alpha: false,
            antialias: false,
            depth: false,
            stencil: false,
          }) ?? null;

        if (!context) {
          // No WebGL: give the card back to the stylesheet's plain swap.
          delete card.dataset.morph;
          return;
        }

        const vertex = compile(context, context.VERTEX_SHADER, VERTEX);
        const fragment = compile(context, context.FRAGMENT_SHADER, FRAGMENT);
        const created = vertex && fragment ? context.createProgram() : null;
        if (!vertex || !fragment || !created) {
          delete card.dataset.morph;
          return;
        }

        context.attachShader(created, vertex);
        context.attachShader(created, fragment);
        context.linkProgram(created);
        context.deleteShader(vertex);
        context.deleteShader(fragment);
        if (!context.getProgramParameter(created, context.LINK_STATUS)) {
          delete card.dataset.morph;
          return;
        }

        context.useProgram(created);

        const quad = context.createBuffer();
        context.bindBuffer(context.ARRAY_BUFFER, quad);
        context.bufferData(
          context.ARRAY_BUFFER,
          new Float32Array([-1, -1, 3, -1, -1, 3, -1, -1, 3, -1, -1, 3]),
          context.STATIC_DRAW
        );
        const position = context.getAttribLocation(created, 'aPosition');
        context.enableVertexAttribArray(position);
        context.vertexAttribPointer(position, 2, context.FLOAT, false, 0, 0);

        context.pixelStorei(context.UNPACK_FLIP_Y_WEBGL, 1);
        const texFrom = createTexture(context, a);
        const texTo = createTexture(context, b);

        gl = context;
        canvas = element;
        program = created;
        buffer = quad;
        fromTexture = texFrom;
        toTexture = texTo;
        uniforms = {
          uFrom: context.getUniformLocation(created, 'uFrom'),
          uTo: context.getUniformLocation(created, 'uTo'),
          uResolution: context.getUniformLocation(created, 'uResolution'),
          uFromSize: context.getUniformLocation(created, 'uFromSize'),
          uToSize: context.getUniformLocation(created, 'uToSize'),
          uProgress: context.getUniformLocation(created, 'uProgress'),
          uTime: context.getUniformLocation(created, 'uTime'),
        };

        context.activeTexture(context.TEXTURE0);
        context.bindTexture(context.TEXTURE_2D, texFrom);
        context.uniform1i(uniforms.uFrom ?? null, 0);
        context.activeTexture(context.TEXTURE1);
        context.bindTexture(context.TEXTURE_2D, texTo);
        context.uniform1i(uniforms.uTo ?? null, 1);
        context.uniform2f(uniforms.uFromSize ?? null, a.naturalWidth, a.naturalHeight);
        context.uniform2f(uniforms.uToSize ?? null, b.naturalWidth, b.naturalHeight);

        host.append(element);
        if (hovered) {
          start();
        } else {
          // Left again while the images were loading. Nothing will draw, so put
          // the context on the same idle clock the loop would have.
          releaseTimer = setTimeout(release, IDLE_RELEASE_MS);
        }
      } catch {
        // The second image did not load. The card keeps the first one.
        delete card.dataset.morph;
      } finally {
        building = false;
      }
    };

    const enter = () => {
      clearTimeout(releaseTimer);
      hovered = true;
      if (!gl) {
        void build();
        return;
      }
      start();
    };

    const leave = () => {
      hovered = false;
      if (gl) start();
    };

    if (forced !== null) enter(); // TEMP HARNESS
    card.addEventListener('pointerenter', enter);
    card.addEventListener('pointerleave', leave);
    // Keyboard parity: the stylesheet's swap is switched off while this is on.
    card.addEventListener('focusin', enter);
    card.addEventListener('focusout', leave);

    const resizes = new ResizeObserver(() => {
      if (frame) return;
      resize();
      render();
    });
    resizes.observe(host);

    return () => {
      disposed = true;
      clearTimeout(releaseTimer);
      resizes.disconnect();
      card.removeEventListener('pointerenter', enter);
      card.removeEventListener('pointerleave', leave);
      card.removeEventListener('focusin', enter);
      card.removeEventListener('focusout', leave);
      delete card.dataset.morph;
      release();
    };
  }, [src, hoverSrc]);

  return <div ref={hostRef} className="work-thumb-morph" aria-hidden="true" />;
}
