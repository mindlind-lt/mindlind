'use client';

// DNA Helix — a DNA double helix drawn with particles only: two strands of 6000
// points twisting 2.5 turns along the x axis, joined by 60 rungs of 100 points
// each, the whole thing spinning at 0.4 rad/s while every point wobbles on its
// own phase. The frame is then passed through an RGB shift and a film grain, so
// the dots fringe red/cyan towards the edges.
//
// Ported from ykob/sketch-threejs, `src/js/sketch/dna/` (MIT, © 2021 yoichi
// kobayashi) by way of this repo's `demo-dna.html`. The geometry, both shader
// pairs and the camera are carried over verbatim. What changed, and why:
//
//   * three comes from the npm dependency instead of a jsdelivr importmap, so
//     the helix ships in the bundle and pins to the same version as the rest of
//     the site.
//   * The demo owned the window: a fixed, full-screen `#canvas-webgl` sized off
//     `innerWidth/innerHeight` with `overflow: hidden` on the body. Here the
//     canvas is created by the effect and sized to the component's own box off a
//     ResizeObserver, so the helix can sit in a page that still scrolls.
//   * `THREE.Timer` + window blur/focus -> the repo's `useRenderActive`, which
//     pauses the loop off-screen and in a backgrounded tab (the demo only
//     stopped time when the window lost focus). Time advances by the frame
//     delta, as it did there.
//   * The demo pinned the pixel ratio to 1 because `gl_PointSize` and the RGB
//     shift are both measured in framebuffer pixels, which is blurry on retina.
//     Both are scaled by the pixel ratio here (see `sizeScale` and `resolution`
//     below) so the shot looks the same at any density, just sharp.
//   * `fit` is new. The demo composed for a fixed 1200x800 frame and cropped
//     anything smaller, which loses most of the helix on a phone; 'contain'
//     scales the shot to fit instead. 'crop' is the demo's own behaviour.
//   * The post effect's `texture` uniform is `uTexture` — `texture` is a
//     built-in name in later GLSL versions and there is nothing to gain by
//     shadowing it.
//
// Colour, and the shape of a single point, are what could not carry over. The demo drew additive
// light onto an opaque black frame: every point only ever *brightened* what was
// behind it, which on this site's #F4F4F4 page background would brighten a near-
// white surface into nothing. So the helix is inked rather than lit — normal
// alpha blending, dark particles, and a canvas that clears to transparent so the
// page shows through. Dense stretches of strand now settle towards solid colour
// where the demo's blew out to white, and the strands gradient between
// `colorFrom` and `colorTo` in place of its fixed cyan/warm-white pair. Each
// point is a plain soft disc too: the demo ringed its dots with a second
// smoothstep, a halo on black that turned into a hard outline on light.
//
// Nothing in this pipeline is colour managed — `RawShaderMaterial` skips the
// output conversion three would otherwise apply — so the colour props are read
// as literal sRGB and land on screen as typed. See `toShaderColor`.

import { useEffect, useRef, type CSSProperties } from 'react';
import * as THREE from 'three';
import { useRenderActive } from '@/lib/use-render-active';
import './dna-helix.css';

// Points on the two strands, then the rungs between them: 60 rungs of 100
// points. 12,000 points in total.
const NUM_HELIX = 6000;
const NUM_LINE_SPACE = 60;
const NUM_LINE = 100;

// Half-length of the helix along x, and the strand radius.
const LENGTH = 150;
const RADIUS = 18;

// The frame the shot is composed for. Point sizes, the RGB shift and the amount
// of helix in view are all relative to this; `fit` decides what happens when the
// container is a different size or shape.
const REF_WIDTH = 1200;
const REF_HEIGHT = 800;

// Dots are small and there are two full-screen passes per frame — past 2x this
// is fill rate spent on nothing.
const MAX_DPR = 2;

// A backgrounded tab or a slow first frame can hand the loop a huge delta.
const MAX_FRAME_MS = 100;

// The strands gradient between these two, per particle: the light and dark ends
// of the brand green ramp, `--primary-500` and `--primary-700` from globals.css.
// Staying inside one hue is what keeps the helix reading as a single object lit
// unevenly rather than as two colours of particle mixed together. Hard-coded
// rather than read off the CSS custom properties: these go to the GPU as floats
// every frame, and re-reading them is a layout-thrashing `getComputedStyle` away.
const DEFAULT_COLOR_FROM = '#0fd680';
const DEFAULT_COLOR_TO = '#087c4a';

// Point size multiplier, before the depth-of-field spread, the perspective
// divide and `sizeScale`. The demo's own figure was 1.6, sized for dots that
// blew out to white where they overlapped; inked onto a light page they hold
// their edges, and at that size they crowd into each other.
const DEFAULT_POINT_SIZE = 0.85;

// How far the post effect's RGB shift pulls the red and green channels apart, as
// a multiple of the demo's own figure (1 reference pixel at the centre of the
// frame, 3 at the edges). That was set against a full-screen shot on black,
// where it read as a fringe; at these point sizes it is several pixels across a
// dot, which smears every particle into a horizontal capsule trailing a ghost.
// Pulled back to a fringe again.
const DEFAULT_ABERRATION = 0.3;

// Peak alpha of a single point, before `opacity`. The demo's own figure — it
// mattered less there, where additive blending let overlapping points climb past
// it to white; here it sets how quickly a dense stretch of strand fills in.
const POINT_ALPHA = 0.5;

// Neutral: POINT_ALPHA alone, which is the demo's own figure. It had to come
// down while the points were the demo's larger size and half of them were inked
// near-black, because at full strength the strands silted up into one mass. A
// helix of small green circles has room around every point, and at anything less
// than full strength it washes out against the page.
const DEFAULT_OPACITY = 0.75;

// Half the demo's pace. It drove both the 0.4 rad/s spin and the much faster
// per-particle wobble off one clock, so this slows the whole thing together
// rather than letting the strands drift while the dots still jitter.
const DEFAULT_SPEED = 0.5;

// A floor under every point's edge falloff, on the same 0..1 scale the depth of
// field uses — 0 is the crisp disc, 1 is pure gradient. Anything the defocus
// adds stacks on top of this, so a point near the focal plane is softened by
// exactly this much and no point is ever harder-edged than it.
const DEFAULT_SOFTNESS = 0.35;

// Depth of field. Each point is already drawn as a soft disc, so defocusing one
// is a matter of widening that falloff — no depth buffer and no blur pass, just
// a per-sprite circle of confusion. FOCAL_RANGE is how far from the focal plane
// a point travels before it is fully defocused; it is in world units, against a
// helix 300 long and a camera about 140 from the middle of it.
const FOCAL_RANGE = 140;

// A fully defocused point spreads over a disc this much wider than a sharp one,
// and keeps this much of its alpha. The pair is what sells it as light spread
// thin rather than a point that merely faded: a lens scatters the same energy
// over a bigger circle, so growing without dimming would read as fog.
const BOKEH_SPREAD = 1.6;
const BOKEH_FADE = 0.3;

const HELIX_VERTEX = /* glsl */ `
attribute vec3 position;
attribute float radian;
attribute float radius;
attribute float delay;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
uniform float time;
uniform float sizeScale;
uniform vec3 colorFrom;
uniform vec3 colorTo;
uniform float focalDistance;
uniform float depthOfField;
uniform float pointScale;

varying vec3 vColor;
varying float vBlur;

const float TWO_PI = 6.283185307179586;

void main() {
  // Coordinate transformation: spin around the x axis at 0.4 rad/s, plus a
  // per-particle wobble of +-1 that also breathes the strand radius.
  vec3 updatePosition = position
    + vec3(
      sin(time * 4.0 + delay),
      sin(radian + time * 0.4) * (radius + sin(time * 4.0 + delay)),
      cos(radian + time * 0.4) * (radius + sin(time * 4.0 + delay))
      );
  vec4 mvPosition = viewMatrix * modelMatrix * vec4(updatePosition, 1.0);
  float distanceFromCamera = length(mvPosition.xyz);

  // Circle of confusion: how far this point sits from the plane the camera is
  // focused on, either side of it, as a lens would see it. The near end of the
  // helix goes soft as well as the far end.
  vBlur = min(
    abs(distanceFromCamera - focalDistance) / ${FOCAL_RANGE}.0 * depthOfField,
    1.0
  );

  float pointSize = 1000.0 / distanceFromCamera * pointScale * sizeScale
    * (1.0 + vBlur * ${BOKEH_SPREAD});

  // delay is a random angle over a full turn, so it doubles as an even
  // spread across the gradient -- the same attribute the demo tinted with.
  vColor = mix(colorFrom, colorTo, delay / TWO_PI);

  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = pointSize;
}
`;

const HELIX_FRAGMENT = /* glsl */ `
precision highp float;

uniform float opacity;
uniform float softness;

varying vec3 vColor;
varying float vBlur;

void main() {
  // Convert PointCoord to the other vec2 has a range from -1.0 to 1.0.
  vec2 p = gl_PointCoord * 2.0 - 1.0;

  // Draw circle: one soft dot, no more. The demo drew a thin ring around it too
  // (smoothstep(0.8, 1.0) minus smoothstep(1.0, 1.2)), which read as a faint
  // halo against black but as a hard outline against a light page.
  // How far open this point's edge is: its own softness floor, plus whatever
  // the depth of field adds on top. Tight against the rim at 0, all gradient
  // and no edge at all by 1.
  float spread = min(softness + vBlur, 1.0);

  float radius = length(p);
  float disc = 1.0 - smoothstep(mix(0.5, 0.0, spread), mix(0.7, 1.0, spread), radius);

  gl_FragColor = vec4(vColor, disc * mix(1.0, ${BOKEH_FADE}, vBlur) * ${POINT_ALPHA} * opacity);
}
`;

const POST_VERTEX = /* glsl */ `
attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;

void main() {
  vUv = uv;

  gl_Position = vec4(position, 1.0);
}
`;

const POST_FRAGMENT = /* glsl */ `
precision highp float;

uniform float time;
uniform sampler2D uTexture;
uniform vec2 resolution;
uniform float aberration;

varying vec2 vUv;

float random2(vec2 c){
  return fract(sin(dot(c.xy ,vec2(12.9898,78.233))) * 43758.5453);
}
float randomNoise(vec2 p) {
  return (random2(p - vec2(sin(time))) * 2.0 - 1.0) * 0.04;
}

void main() {
  // Convert uv to the other vec2 has a range from -1.0 to 1.0.
  vec2 p = vUv * 2.0 - 1.0;
  vec2 ratio = 1.0 / resolution;

  // Random Noise
  float rNoise = randomNoise(vUv);

  // RGB Shift: red sampled to the left, green to the right — 1px at the centre,
  // 3px at the edges.
  float shift = (2.0 * abs(p.x) + 1.0) * ratio.x * aberration;
  vec4 texR = texture2D(uTexture, vUv - vec2(shift, 0.0));
  vec4 texG = texture2D(uTexture, vUv + vec2(shift, 0.0));
  vec4 texB = texture2D(uTexture, vUv);

  // The demo wrote an opaque frame and never had to think about coverage. This
  // one composites onto the page, so alpha has to come out of the shift too:
  // the widest of the three taps, since a pixel any of them pulled colour into
  // is a pixel the helix now covers. Where they disagree the narrower channels
  // fall short of the alpha they are divided by on the way to the screen, and
  // that shortfall *is* the red/cyan fringe.
  float alpha = max(texR.a, max(texG.a, texB.a));

  // Sum total of colors. The frame buffer holds premultiplied alpha, so the
  // grain is scaled by coverage as well — a flat grain would otherwise haze
  // over the whole box, including the empty page around the helix.
  vec3 color = vec3(texR.r, texG.g, texB.b) + rNoise * alpha;

  gl_FragColor = vec4(clamp(color, 0.0, alpha), alpha);
}
`;

/**
 * The strands and the rungs, as one point cloud.
 *
 * `position` is the point's place along the axis with a little fuzz; the spin in
 * the vertex shader comes from `radian` (the angle at that point along the
 * length) and `radius` (distance from the axis), and `delay` is the phase of its
 * wobble.
 */
function createHelixGeometry() {
  const numAmount = NUM_HELIX + NUM_LINE_SPACE * NUM_LINE;
  const positions = new THREE.BufferAttribute(new Float32Array(numAmount * 3), 3);
  const radians = new THREE.BufferAttribute(new Float32Array(numAmount), 1);
  const radiuses = new THREE.BufferAttribute(new Float32Array(numAmount), 1);
  const delays = new THREE.BufferAttribute(new Float32Array(numAmount), 1);

  // Strands: points spread along x from -150 to 150 with a fuzzy offset. The
  // angle turns 900deg (2.5 turns) over the length, and every other point is
  // shifted 180deg, which puts it on the opposite strand.
  for (let i = 0; i < NUM_HELIX; i++) {
    const random = Math.random();
    positions.setXYZ(
      i,
      (i / NUM_HELIX * 2 - 1) * LENGTH + (Math.random() * 2 - 1) * random * 6,
      (Math.random() * 2 - 1) * random * 6,
      (Math.random() * 2 - 1) * random * 6
    );
    radians.setX(i, THREE.MathUtils.degToRad(i / NUM_HELIX * 900 + i % 2 * 180));
    radiuses.setX(i, RADIUS);
    delays.setX(i, THREE.MathUtils.degToRad(Math.random() * 360));
  }

  // Rungs: lines of points through the axis (radius -18..18) joining the two
  // strands, each one at the angle its position along the length calls for.
  for (let j = 0; j < NUM_LINE_SPACE; j++) {
    const radian = THREE.MathUtils.degToRad(j / NUM_LINE_SPACE * 900);
    for (let k = 0; k < NUM_LINE; k++) {
      const index = j * NUM_LINE + k + NUM_HELIX;
      const random = Math.random();
      positions.setXYZ(
        index,
        (j / NUM_LINE_SPACE * 2 - 1) * LENGTH + (Math.random() * 2 - 1) * random,
        (Math.random() * 2 - 1) * random,
        (Math.random() * 2 - 1) * random
      );
      radians.setX(index, radian);
      radiuses.setX(index, (k / NUM_LINE * 2 - 1) * RADIUS);
      delays.setX(index, THREE.MathUtils.degToRad(Math.random() * 360));
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', positions);
  geometry.setAttribute('radian', radians);
  geometry.setAttribute('radius', radiuses);
  geometry.setAttribute('delay', delays);
  return geometry;
}

/**
 * A CSS colour as the shaders want it: literal sRGB components, unconverted.
 *
 * `RawShaderMaterial` writes straight to the frame buffer with none of three's
 * output colour management in the way, so a colour has to skip the matching
 * sRGB -> linear conversion on the way in or it arrives washed out. Naming
 * `LinearSRGBColorSpace` as the *source* space is how you ask three for that:
 * it is already the working space, so nothing is converted.
 */
function toShaderColor(color: string) {
  return new THREE.Color().setStyle(color, THREE.LinearSRGBColorSpace);
}

export type DnaHelixProps = {
  className?: string;
  style?: CSSProperties;
  /** How fast the helix turns and wobbles. 1 is the demo's own pace. */
  speed?: number;
  /** Any CSS colour. The tone particles gradient from. */
  colorFrom?: string;
  /** Any CSS colour. The tone particles gradient to. */
  colorTo?: string;
  /**
   * Multiplier on each point's alpha. Raise it to let dense stretches of strand
   * fill in sooner; around 0.35 the helix thins out to a haze, which suits it
   * sitting behind text.
   */
  opacity?: number;
  /**
   * How hard the camera throws the ends of the helix out of focus. 0 is a
   * pinhole — everything sharp, as the demo was; above 1 the focal plane
   * narrows until only the middle of the helix is legible.
   */
  depthOfField?: number;
  /** Point size multiplier, before the defocus spread and the perspective divide. */
  pointSize?: number;
  /**
   * How soft every point's edge is before the depth of field gets to it, 0 to 1.
   * 0 is a crisp disc; at 1 a point is pure gradient with no edge at all.
   */
  softness?: number;
  /**
   * How far the RGB shift pulls the channels apart, against the demo's own
   * figure of 1. 0 turns the colour fringing off and leaves only the grain.
   */
  aberration?: number;
  /**
   * How the 1200x800 composition meets a container of another size.
   * 'contain' scales it to fit; 'crop' holds it at 1:1 and crops or letterboxes,
   * as the original demo did.
   */
  fit?: 'contain' | 'crop';
};

export default function DnaHelix({
  className,
  style,
  speed = DEFAULT_SPEED,
  colorFrom = DEFAULT_COLOR_FROM,
  colorTo = DEFAULT_COLOR_TO,
  opacity = DEFAULT_OPACITY,
  depthOfField = 1,
  pointSize = DEFAULT_POINT_SIZE,
  softness = DEFAULT_SOFTNESS,
  aberration = DEFAULT_ABERRATION,
  fit = 'contain',
}: DnaHelixProps) {
  const { ref: containerRef, active } = useRenderActive<HTMLDivElement>();

  const activeRef = useRef(active);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'dna-helix-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    container.appendChild(canvas);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch {
      // No WebGL — the container is empty and the page background shows through.
      canvas.remove();
      return;
    }
    // Both the frame buffer and the canvas clear to nothing, so everything the
    // helix does not cover stays transparent all the way to the page.
    renderer.setClearColor(0x000000, 0);

    // The helix scene, rendered to a frame buffer for the post effect to read.
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera();
    // Aspect is the reference frame's, at any container size: `layout()` picks
    // the slice of that frame to show rather than reshaping the frustum.
    camera.aspect = REF_WIDTH / REF_HEIGHT;
    camera.far = 1000;
    camera.setFocalLength(50);
    camera.position.set(-110, -75, 45);
    camera.lookAt(0, 0, 0);

    const geometry = createHelixGeometry();
    const material = new THREE.RawShaderMaterial({
      uniforms: {
        time: { value: 0 },
        sizeScale: { value: 1 },
        colorFrom: { value: toShaderColor(colorFrom) },
        colorTo: { value: toShaderColor(colorTo) },
        opacity: { value: opacity },
        softness: { value: softness },
        // The camera looks at the origin, so its distance from there is the
        // distance to the plane it is focused on: the middle of the helix.
        focalDistance: { value: camera.position.length() },
        depthOfField: { value: depthOfField },
        pointScale: { value: pointSize },
      },
      vertexShader: HELIX_VERTEX,
      fragmentShader: HELIX_FRAGMENT,
      transparent: true,
      // The demo blended additively, which only ever brightens and so cannot
      // show on a light page. Normal blending darkens instead, and with
      // `depthWrite` off the points still stack in draw order regardless of
      // depth, which is what keeps the strands reading as one mass.
      depthWrite: false,
    });
    const helix = new THREE.Points(geometry, material);
    helix.name = 'DNA Helix';
    scene.add(helix);

    // The post effect: one full-screen quad sampling the frame buffer.
    const renderTarget = new THREE.WebGLRenderTarget(1, 1);
    const scenePost = new THREE.Scene();
    const cameraPost = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 2);
    const postGeometry = new THREE.PlaneGeometry(2, 2);
    const postMaterial = new THREE.RawShaderMaterial({
      uniforms: {
        time: { value: 0 },
        uTexture: { value: renderTarget.texture },
        resolution: { value: new THREE.Vector2() },
        aberration: { value: aberration },
      },
      vertexShader: POST_VERTEX,
      fragmentShader: POST_FRAGMENT,
      // The quad covers the canvas and its output is already the final
      // composite, alpha included. Blending it over the cleared canvas would
      // only dilute that.
      blending: THREE.NoBlending,
    });
    scenePost.add(new THREE.Mesh(postGeometry, postMaterial));

    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

    function layout() {
      // Re-read the element rather than closing over it: TypeScript drops the
      // null-narrowing across a hoisted function declaration.
      const el = containerRef.current;
      if (!el) return;

      const width = el.clientWidth;
      const height = el.clientHeight;
      if (!width || !height) return;

      // How many container pixels one reference pixel covers. 'crop' keeps it at
      // 1:1, which is what makes the demo's shot hold its size and crop.
      const scale =
        fit === 'contain' ? Math.min(width / REF_WIDTH, height / REF_HEIGHT) : 1;

      // The slice of the reference frame the container shows, centred. Under
      // 'contain' it always covers the whole frame and spills past it on one
      // axis; under 'crop' it is the container's own pixel size.
      const viewWidth = width / scale;
      const viewHeight = height / scale;
      camera.setViewOffset(
        REF_WIDTH,
        REF_HEIGHT,
        (REF_WIDTH - viewWidth) / 2,
        (REF_HEIGHT - viewHeight) / 2,
        viewWidth,
        viewHeight
      );
      camera.updateProjectionMatrix();

      // Both of these are in reference pixels in the shaders, so they follow the
      // same scale: dots grow with the shot, and the RGB shift stays 1 reference
      // pixel wide at the centre whatever the density.
      material.uniforms.sizeScale.value = scale * dpr;
      postMaterial.uniforms.resolution.value.set(viewWidth, viewHeight);

      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height, false);
      renderTarget.setSize(width * dpr, height * dpr);
    }

    function render() {
      // The helix first, into the frame buffer.
      renderer.setRenderTarget(renderTarget);
      renderer.render(scene, camera);

      // Then the post effect, to the canvas.
      renderer.setRenderTarget(null);
      renderer.render(scenePost, cameraPost);
    }

    let frame = 0;
    let lastTime = 0;

    function loop(time: number) {
      frame = requestAnimationFrame(loop);
      if (!activeRef.current) {
        // Swallow the gap so resuming does not jump the helix forward.
        lastTime = time;
        return;
      }
      const delta = lastTime ? Math.min(time - lastTime, MAX_FRAME_MS) : 16;
      lastTime = time;
      const elapsed = (delta / 1000) * speed;
      material.uniforms.time.value += elapsed;
      postMaterial.uniforms.time.value += elapsed;
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

    // Nothing moves under reduced motion — the helix holds its first frame,
    // which is already the full shape rather than a straight line of points.
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      scene.remove(helix);
      geometry.dispose();
      material.dispose();
      postGeometry.dispose();
      postMaterial.dispose();
      renderTarget.dispose();
      renderer.dispose();
      canvas.remove();
    };
  }, [
    containerRef,
    speed,
    colorFrom,
    colorTo,
    opacity,
    depthOfField,
    pointSize,
    softness,
    aberration,
    fit,
  ]);

  return (
    <div
      ref={containerRef}
      className={className ? `dna-helix ${className}` : 'dna-helix'}
      style={style}
    />
  );
}
