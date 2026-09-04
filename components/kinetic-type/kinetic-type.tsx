'use client';

// Kinetic Type — words wipe in from the right and out to the left, sliced into
// horizontal strips that each move a beat after the one below it, so the word
// shears open and shears away instead of simply fading. The strips are bands of
// a single canvas-rendered word texture, so the letterforms stay intact while
// the geometry underneath them stretches.
//
// Adapted from a CodePen built on three.js + GSAP. The tween library is gone:
// the whole loop is a pure function of the clock, evaluated in the vertex
// shader, which means one instanced draw call per word and nothing to keep in
// sync on the JS side but a single `uPhase` uniform.
//
// Typography comes from CSS. The font, weight, letter-spacing and colour are
// read off the container's computed style, so the component is styled with the
// same classes as any other text on the page (`font-mono font-bold text-black`).
// How much of the container a word fills is settable from CSS too — see
// `widthFraction` below — so it can be tuned per breakpoint.

import { useEffect, useRef, type CSSProperties } from 'react';
import * as THREE from 'three';
import { useRenderActive } from '@/lib/use-render-active';
import './kinetic-type.css';

// The strips are 4px-tall slivers of a flat texture — retina beyond 2x buys
// nothing but fill rate.
const MAX_DPR = 2;

// Font size the word texture is rasterised at. The mesh is scaled to the
// container afterwards, so this only sets how much detail the texture holds.
const TEXTURE_FONT_PX = 200;

// A long word at 2x DPR can otherwise run past the driver's max texture size.
const MAX_TEXTURE_WIDTH = 2048;

/** A fraction from a custom property on the container, or the prop it overrides. */
function readFraction(styles: CSSStyleDeclaration, property: string, fallback: number) {
  const raw = styles.getPropertyValue(property).trim();
  if (!raw) return fallback;
  const value = Number.parseFloat(raw);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

const VERTEX_SHADER = /* glsl */ `
attribute float aIndex;

uniform float uDivisions;
uniform float uDuration;
uniform float uStagger;
// Seconds since this word began wiping in. Negative before its turn comes
// round, and it keeps counting past the wipe-out — both ends clamp to nothing.
uniform float uPhase;
// Offset from the wipe-in to the wipe-out of the same word.
uniform float uPhaseOut;

varying vec2 vUv;

// GSAP's power3.inOut.
float easeInOutCubic(float t) {
  return t < 0.5 ? 4.0 * t * t * t : 1.0 - pow(-2.0 * t + 2.0, 3.0) * 0.5;
}

void main() {
  // Every strip carries the whole word's width but only its own band of its
  // height, cut straight out of the texture.
  vUv = vec2(uv.x, (aIndex + uv.y) / uDivisions);

  // Lower strips lead, upper strips trail — this is the shear.
  float offset = aIndex * uStagger;
  float opening = easeInOutCubic(clamp((uPhase - offset) / uDuration, 0.0, 1.0));
  float closing = easeInOutCubic(clamp((uPhase - uPhaseOut - offset) / uDuration, 0.0, 1.0));

  // The wipe-out starts a full stagger after the wipe-in has finished, so these
  // never run at once and the difference is always in 0..1.
  float scaleX = opening - closing;

  // Opening: pinned to the right edge, so the strip unrolls leftwards.
  // Closing: pinned to the left, so it carries on out the way it came.
  float pivot = closing > 0.0 ? -0.5 : 0.5;

  vec3 pos = position;
  pos.x = pivot + (pos.x - pivot) * scaleX;
  pos.y += -0.5 + (aIndex + 0.5) / uDivisions;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const FRAGMENT_SHADER = /* glsl */ `
precision highp float;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uOpacity;

varying vec2 vUv;

void main() {
  // The texture is drawn in white and only its coverage is kept, so the colour
  // is a uniform and never has to be re-rasterised.
  float alpha = texture2D(uTexture, vUv).a;
  if (alpha < 0.004) discard;
  gl_FragColor = vec4(uColor, alpha * uOpacity);
  #include <colorspace_fragment>
}
`;

type WordTexture = { texture: THREE.CanvasTexture; aspect: number };

/** Draws one word to an offscreen canvas and hands back a texture + its aspect. */
function createWordTexture(
  word: string,
  font: string,
  letterSpacing: string,
  dpr: number
): WordTexture | null {
  const measureCtx = document.createElement('canvas').getContext('2d');
  if (!measureCtx) return null;

  measureCtx.font = font;
  // Chrome and Safari 17+ honour tracking on the 2D context; elsewhere the
  // word just renders at its natural spacing.
  if ('letterSpacing' in measureCtx) measureCtx.letterSpacing = letterSpacing;

  const metrics = measureCtx.measureText(word);
  // Fall back to rough em fractions for fonts that report no ink box.
  const ascent = metrics.actualBoundingBoxAscent || TEXTURE_FONT_PX * 0.75;
  const descent = metrics.actualBoundingBoxDescent || TEXTURE_FONT_PX * 0.25;
  const pad = TEXTURE_FONT_PX * 0.08;

  const width = Math.max(1, Math.ceil(metrics.width + pad * 2));
  const height = Math.max(1, Math.ceil(ascent + descent + pad * 2));
  const scale = Math.min(dpr, MAX_TEXTURE_WIDTH / width);

  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.ceil(width * scale));
  canvas.height = Math.max(1, Math.ceil(height * scale));

  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  ctx.scale(scale, scale);
  ctx.font = font;
  if ('letterSpacing' in ctx) ctx.letterSpacing = letterSpacing;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#fff';
  ctx.fillText(word, width / 2, pad + ascent);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;

  return { texture, aspect: width / height };
}

/** A quad spanning one strip's slot: full width, 1/divisions of the height. */
function createStripGeometry(divisions: number) {
  const halfHeight = 0.5 / divisions;
  const geometry = new THREE.InstancedBufferGeometry();

  geometry.setAttribute(
    'position',
    new THREE.BufferAttribute(
      // prettier-ignore
      new Float32Array([
        -0.5, -halfHeight, 0,
         0.5, -halfHeight, 0,
         0.5,  halfHeight, 0,
        -0.5,  halfHeight, 0,
      ]),
      3
    )
  );
  geometry.setAttribute(
    'uv',
    new THREE.BufferAttribute(new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), 2)
  );
  geometry.setIndex([0, 1, 2, 0, 2, 3]);

  const indices = new Float32Array(divisions);
  for (let i = 0; i < divisions; i++) indices[i] = i;
  geometry.setAttribute('aIndex', new THREE.InstancedBufferAttribute(indices, 1));
  geometry.instanceCount = divisions;

  return geometry;
}

export type KineticTypeProps = {
  /** Cycled one after another, forever. Uppercase reads best. */
  words: string[];
  /** How many horizontal strips each word is cut into. */
  divisions?: number;
  /** Seconds a single wipe takes. */
  duration?: number;
  /** Seconds each strip trails the one below it. */
  stagger?: number;
  /** Seconds a word sits fully open before the next one takes over. */
  hold?: number;
  /**
   * Share of the container's width the widest word may take. A prop is a fixed
   * number and cannot answer a media query, so this is also readable from the
   * `--kinetic-type-width-fraction` custom property on the container, which
   * wins when it is set — that is the hook for sizing the word differently on
   * a narrow screen.
   */
  widthFraction?: number;
  /** Share of the container's height a word may take. Overridable the same way,
   *  via `--kinetic-type-height-fraction`. */
  heightFraction?: number;
  opacity?: number;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
};

export default function KineticType({
  words,
  divisions = 40,
  duration = 0.8,
  stagger = 0.01,
  hold = 1.2,
  widthFraction = 0.86,
  heightFraction = 0.55,
  opacity = 1,
  className = '',
  style,
  children,
}: KineticTypeProps) {
  const { ref: containerRef, active } = useRenderActive<HTMLDivElement>();

  const activeRef = useRef(active);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  // Structural: the scene is rebuilt when the word list changes. Joined on a
  // newline so a single entry can still hold a space ("LOS GEHT'S").
  const wordsKey = words.join('\n');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const list = wordsKey.split('\n').filter(Boolean);
    if (list.length === 0) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'kinetic-type-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    container.appendChild(canvas);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch {
      // No WebGL — the DOM text underneath stays visible as the fallback.
      canvas.remove();
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

    const scene = new THREE.Scene();
    // World units: the camera always spans 1 vertically, `aspect` horizontally.
    const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0.01, 10);
    camera.position.z = 1;

    // Typography is whatever CSS says it is on the container.
    const computed = getComputedStyle(container);
    const font = `${computed.fontStyle} ${computed.fontWeight} ${TEXTURE_FONT_PX}px ${computed.fontFamily}`;
    const letterSpacing = computed.letterSpacing === 'normal' ? '0px' : computed.letterSpacing;
    const color = new THREE.Color().setStyle(computed.color);

    // A wipe, its stagger tail, then the hold. Word `i` opens at
    // `i * phaseLength` and closes one phase later, which is also the moment
    // word `i + 1` opens — so the hold is what paces the switching.
    const phaseLength = duration + stagger * (divisions - 1) + hold;
    const cycle = phaseLength * (list.length + 1);

    const geometry = createStripGeometry(divisions);
    const items: { material: THREE.ShaderMaterial; mesh: THREE.Mesh; aspect: number }[] = [];

    let frame = 0;
    let cancelled = false;
    let elapsed = 0;
    let lastTime = 0;

    function build() {
      for (const word of list) {
        const rendered = createWordTexture(word, font, letterSpacing, dpr);
        if (!rendered) continue;

        const material = new THREE.ShaderMaterial({
          uniforms: {
            uTexture: { value: rendered.texture },
            uColor: { value: color },
            uOpacity: { value: opacity },
            uDivisions: { value: divisions },
            uDuration: { value: duration },
            uStagger: { value: stagger },
            uPhase: { value: -1 },
            uPhaseOut: { value: phaseLength },
          },
          vertexShader: VERTEX_SHADER,
          fragmentShader: FRAGMENT_SHADER,
          transparent: true,
          depthTest: false,
          depthWrite: false,
        });

        const mesh = new THREE.Mesh(geometry, material);
        // Every word sits in the same spot; only one is ever on screen.
        mesh.frustumCulled = false;
        scene.add(mesh);
        items.push({ material, mesh, aspect: rendered.aspect });
      }
    }

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

      const aspect = width / height;
      camera.left = -aspect / 2;
      camera.right = aspect / 2;
      camera.updateProjectionMatrix();

      // Re-read every layout rather than once at setup, so a fraction set
      // behind a media query takes effect when that query flips. This runs on
      // resize only, which is also the moment a media query can have changed.
      const styles = getComputedStyle(el);
      const widthShare = readFraction(styles, '--kinetic-type-width-fraction', widthFraction);
      const heightShare = readFraction(styles, '--kinetic-type-height-fraction', heightFraction);

      for (const item of items) {
        // Fit inside the box without distorting the word: whichever of the two
        // limits bites first decides the size.
        const planeWidth = Math.min(aspect * widthShare, heightShare * item.aspect);
        item.mesh.scale.set(planeWidth, planeWidth / item.aspect, 1);
      }
    }

    function render() {
      for (let i = 0; i < items.length; i++) {
        items[i].material.uniforms.uPhase.value = elapsed - i * phaseLength;
      }
      renderer.render(scene, camera);
    }

    function loop(time: number) {
      frame = requestAnimationFrame(loop);
      if (!activeRef.current) {
        // Swallow the gap so resuming does not jump the cycle forward.
        lastTime = time;
        return;
      }
      // A backgrounded tab or a slow first frame can hand us a huge delta.
      const delta = lastTime ? Math.min(time - lastTime, 100) : 16;
      lastTime = time;
      elapsed = (elapsed + delta / 1000) % cycle;
      render();
    }

    const observer = new ResizeObserver(() => {
      layout();
      // Keeps the held frame correct under reduced motion, and avoids a
      // stretched frame between a resize and the next tick otherwise.
      if (items.length) render();
    });

    // next/font swaps the real face in asynchronously; rasterising before it
    // lands would bake the fallback font into the texture.
    const fontsReady = document.fonts
      ? document.fonts.load(font).catch(() => undefined).then(() => document.fonts.ready)
      : Promise.resolve();

    fontsReady.then(() => {
      if (cancelled) return;

      build();
      layout();
      observer.observe(container);
      container.classList.add('kinetic-type-ready');

      if (reduceMotion) {
        // Hold the first word fully open — exactly where its wipe-out begins.
        elapsed = phaseLength;
        render();
      } else {
        frame = requestAnimationFrame(loop);
      }
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      container.classList.remove('kinetic-type-ready');

      for (const item of items) {
        (item.material.uniforms.uTexture.value as THREE.CanvasTexture).dispose();
        item.material.dispose();
      }
      geometry.dispose();
      renderer.dispose();
      canvas.remove();
    };
    // `style` and `children` are presentational and deliberately not deps;
    // everything listed here changes the scene's structure or its timing.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordsKey, divisions, duration, stagger, hold, widthFraction, heightFraction, opacity]);

  return (
    <div ref={containerRef} className={`kinetic-type ${className}`.trim()} style={style}>
      {/* The real text: what screen readers and crawlers get, what shows
          before the first frame, and what stays put if WebGL is unavailable.
          Only the first word is visible — the rest are stacked in the same
          grid cell, transparent but still read out in order. */}
      <p className="kinetic-type-words">
        {words.map((word, i) => (
          <span key={`${word}-${i}`}>{word}</span>
        ))}
      </p>
      {children != null && <div className="kinetic-type-content">{children}</div>}
    </div>
  );
}
