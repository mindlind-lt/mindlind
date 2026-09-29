'use client';

// DNA Capsule — a glass pill with a DNA double helix turning inside it. The
// pill bobs and rocks in place, the helix spins on its long axis, and the camera
// drifts a little after the pointer, so the whole thing reads as one object seen
// through glass rather than a still render.
//
// Ported from `demo-3d-pill/` (r3f-template, "Healthy" landing page by Anderson
// Mancini). The shape of the scene is carried over: the same capsule
// dimensions, the same transmission material settings, the same float and
// pointer rig, the same helix scale and spin. What changed, and why:
//
//   * The demo's *background* is gone, which is the point of this component —
//     no `#d1e2ef` clear colour, no "HEALTHY" type behind the pill, no drifting
//     noise particles. The canvas clears to transparent by default so the pill
//     drops into a page section. `background` puts a colour back if you want
//     the demo's sealed look.
//   * Glass needs something to refract. With a transparent canvas there is
//     nothing behind the pill, and the transmission buffer would sample empty
//     black and the pill would read as a dark blob — so the material is handed
//     `backdrop` as its own private background (see `MeshTransmissionMaterial`'s
//     `background` prop: it swaps `scene.background` for the buffer passes
//     only). That colour is what you see *through* the glass; the page still
//     shows around it.
//   * `Environment preset="city"` fetched an HDR from a CDN at runtime. This
//     site is a static export on shared hosting and the existing WebGL here
//     lights from local `Lightformer`s (see `components/hero.tsx`), so the
//     environment is built from lightformers instead: a broad top key, two
//     diagonal streaks for the long highlights down the pill, warm/cool side
//     fills and a rim behind. Close to the preset in feel, nothing to download.
//   * No post-processing. The demo ran bloom + depth of field + hue shift +
//     vignette over the whole frame, which only makes sense when the frame *is*
//     the shot — over a page it would tint and darken whatever sits behind the
//     canvas, and `@react-three/postprocessing` is not a dependency here. The
//     bokeh haze it gave the pill is gone; the silhouette is crisper instead.
//   * The helix spun by `delta + 0.01` radians per frame, i.e. faster on a
//     faster display. It now turns at a fixed `spinSpeed` rad/s, defaulting to
//     the ~1.6 rad/s that worked out to at 60fps.
//   * The demo's `dna.jsx` was 600 lines of gltfjsx output: 176 nodes, all but
//     one of them empty groups left over from the Maya scene. Only
//     `polySurface56` holds geometry (two meshes, 42k verts), and the transform
//     chain above it collapses to nothing — the two ±π/2 x-rotations cancel, and
//     the remaining `[-π, 0.432, -π]` euler is a plain y-rotation, which a group
//     spinning on y makes moot. So the helix is its two geometries under one
//     group, scaled to the demo's 0.105. The demo's hand-placed offsets
//     (`[0,0,-4.5]` on the scene, `[0,-1.7,0]` on the group) were undoing the
//     node's own `[-0.047, 16.582, 4.325]` to centre the helix in the pill;
//     dropping all three centres it exactly.
//   * The model file is trimmed to what is drawn: no animation clip (it was
//     loaded and never played), no UVs (there are no textures, and both
//     materials are overridden), and 16-bit indices, which the vertex count
//     allows. 2.6 MB -> 1.6 MB, same geometry. See `public/models/dna-helix.glb`
//     and its licence note — the model is CC-BY-4.0 and *requires* visible
//     attribution wherever this ships.
//   * `useGLTF.preload` is deliberately not called at module scope: this module
//     is evaluated in Node when the page is prerendered, and the preload would
//     fire a relative-URL fetch there. Suspense covers the load.
//   * The render loop pauses off-screen and in a background tab via the repo's
//     `useRenderActive`, and holds a single frame under
//     `prefers-reduced-motion`.
//
// Placing it. On its own it is a band: full width, `100svh` tall, override the
// height with a utility. To lay it over or under a section instead, give that
// section `position: relative` and pass `dna-capsule--overlay` or
// `dna-capsule--behind`; to park it somewhere at a fixed size, pass your own
// positioning utilities (`absolute right-0 top-0 h-[420px] w-[420px]`). The
// canvas never takes the pointer in any of those, so content under it stays
// clickable and selectable.
//
// Refracting the page. By default the glass samples `backdrop`, a flat colour,
// so the pill is opaque where it is drawn and hides whatever it covers. Turn on
// `refractPage` and it samples the page instead: the DOM under the canvas is
// rasterised once with html2canvas and handed to the material as its
// `background`, which three paints as a full-screen quad. What gets rasterised
// is the pill's positioned ancestor — the section it sits over — not the whole
// document; see the capture hook for what that trades away.
//
// That quad only exists during the two refraction passes — drei swaps
// `scene.background` in, renders the buffers, and swaps it back out before the
// frame you see. So, unlike `components/hero.tsx`, there is no content plane in
// the scene: the live DOM still shows through everywhere outside the pill, with
// hover, focus rings, carets and text selection intact, and only the pixels
// *inside* the glass come from the snapshot. Alignment is exact — the buffer is
// sampled in normalised screen coordinates, and the capture is of the canvas's
// own rectangle, so screen position maps 1:1 onto the texture.
//
// The snapshot is what it costs. The first is taken once the fonts have
// settled, and it is re-taken whenever the captured subtree changes — which is
// what makes it usable over content that animates in on scroll, the normal case
// on this site. See the capture hook.
//
// What does not self-correct: html2canvas reads the DOM through its own CSS
// implementation, so exotic filters, blend modes and cross-origin images it
// cannot reach come out approximated or blank, `position: fixed` elements land
// wherever the viewport had them, and a change that mutates no DOM at all — a
// playing video, a CSS keyframe animation — is invisible to the observer and
// keeps refracting its first frame. None of it is visible except through
// distorting glass, which hides a multitude of sins, but it is worth knowing
// before putting the pill over something that moves.

import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type RefObject,
} from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Capsule,
  Environment,
  Float,
  Lightformer,
  MeshTransmissionMaterial,
  useGLTF,
} from '@react-three/drei';
import * as THREE from 'three';
import html2canvas from 'html2canvas-pro';
import { useRenderActive } from '@/lib/use-render-active';
import './dna-capsule.css';

const MODEL_URL = '/models/dna-helix.glb';

// Pale blue behind the glass when the canvas is transparent: warm enough to keep
// the shell from reading as a grey blob, close enough to the page background
// (#F4F4F4) that the pill doesn't look cut out of a different image.
const DEFAULT_BACKDROP = '#e7f2fa';

// `refractPage` only: how long the content under the pill has to hold still
// before it is re-captured, and the floor between two captures.
const SETTLE_MS = 400;
const MIN_CAPTURE_GAP_MS = 1500;

// The only two meshes in the file, one per material in the original.
const HELIX_MESHES = [
  'polySurface56_Base_Material_0',
  'polySurface56_Fita_Material_0',
] as const;

// The demo's scale. At 0.105 the helix is ~3.3 units long and ~1 across, so it
// sits inside the capsule (4.3 long, 1.8 across) with the ends tucked into the
// rounded caps.
const HELIX_SCALE = 0.105;

// Capsule radius and the length of its straight middle section.
const PILL_RADIUS = 0.9;
const PILL_LENGTH = 2.5;

// How much frame the pill wants, in world units, at scale 1. Lying back at
// -72 degrees it covers roughly 4.2 x 2.6 units; the rest is room for the rock
// of the float, which swings one end towards the camera where the 75-degree
// lens magnifies it. Only containers narrower than about 2:3 ever scale down —
// anything wider already has the room.
const PILL_FRAME_X = 5.6;
const PILL_FRAME_Y = 3.9;

// Where the camera settles, and how far back it starts. The gap is a slight
// push-in on load, which the demo had by accident and is worth keeping. With the
// rig off there is nothing to settle it, so it starts at rest.
const CAMERA_REST_Z = 5.5;
const CAMERA_PUSH_IN = 1.5;

// Seconds for the camera spring to settle onto the pointer. maath's `damp3`
// default, which is what the demo passed.
const CAMERA_SMOOTH_TIME = 0.5;

// Critically-damped spring (Unity's SmoothDamp, same as maath's `damp` and the
// one in components/hero.tsx). Returns the new value and writes back the
// velocity it carried, so the camera accelerates out of rest and eases into the
// target instead of snapping frame to frame.
function smoothDamp(
  current: number,
  target: number,
  velocity: { value: number },
  smoothTime: number,
  delta: number
) {
  const omega = 2 / smoothTime;
  const x = omega * delta;
  const expo = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
  const change = current - target;
  const temp = (velocity.value + omega * change) * delta;
  velocity.value = (velocity.value - omega * temp) * expo;
  return target + (change + temp) * expo;
}

type Pointer = { x: number; y: number };

type HelixGltf = { nodes: Record<string, THREE.Mesh> };

/* -------------------------------------------------------------------------- */
/*  Page capture — the DOM under the canvas, as a texture for the glass       */
/* -------------------------------------------------------------------------- */
function usePageTexture(
  containerRef: RefObject<HTMLDivElement | null>,
  enabled: boolean,
  base: string | null
) {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const container = containerRef.current;
    if (!container) return;

    // The positioned ancestor, which for a layered pill is the section it was
    // put over — the element the whole placement model already revolves around
    // — and the body for a pill standing on its own. Capturing that instead of
    // the document keeps the cost proportional to the section rather than to
    // the length of the page: html2canvas clones and parses everything under
    // its root, and preloads every image in it, before clipping to the crop.
    // What it gives up is whatever the page paints *behind* that ancestor,
    // which `backdrop` stands in for as a flat colour — so on a section with no
    // background of its own, set `backdrop` to the page's.
    const root = (container.offsetParent as HTMLElement | null) ?? document.body;

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    let running = false;
    let lastRun = 0;

    const capture = async () => {
      // One at a time: html2canvas clones the whole root into an iframe, and
      // overlapping runs would do that work twice for one result.
      if (cancelled || running) return;
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      // The crop is relative to the root's own bounds — except for the body,
      // which html2canvas measures from the document origin instead. Getting
      // this wrong slides the whole refraction sideways by the root's offset.
      const fromDocument =
        root === document.body || root === document.documentElement;
      const rootRect = root.getBoundingClientRect();
      const originX = fromDocument ? -window.scrollX : rootRect.left;
      const originY = fromDocument ? -window.scrollY : rootRect.top;

      running = true;
      lastRun = Date.now();
      try {
        const shot = await html2canvas(root, {
          backgroundColor: base,
          scale: Math.min(2, window.devicePixelRatio || 1),
          logging: false,
          useCORS: true,
          x: rect.left - originX,
          y: rect.top - originY,
          width: rect.width,
          height: rect.height,
          // Skip the canvas itself, or the glass would refract a picture of
          // itself. Anything else marked the same way is skipped too, which is
          // how you keep another WebGL element out of the shot.
          ignoreElements: (node) =>
            (node as HTMLElement).dataset?.ignoreCapture === 'true',
        });
        if (cancelled) return;
        const next = new THREE.CanvasTexture(shot);
        // Read as literal sRGB and left out of tone mapping, so what the glass
        // bends is the colour the page actually is.
        next.colorSpace = THREE.SRGBColorSpace;
        setTexture(next);
      } catch {
        // Capture is best-effort: the flat `backdrop` stays in place.
      } finally {
        running = false;
      }
    };

    // Waits for the changes to stop, then keeps a floor between runs so a
    // section that never settles cannot spin the rasteriser.
    const schedule = () => {
      clearTimeout(timer);
      const since = Date.now() - lastRun;
      timer = setTimeout(capture, Math.max(SETTLE_MS, MIN_CAPTURE_GAP_MS - since));
    };

    // The first shot waits on the fonts: capturing mid-swap bakes the fallback
    // face into it and the text under the glass ends up the wrong shape.
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) capture();
      });
    } else {
      capture();
    }

    // What keeps the refraction honest. A snapshot taken at load is wrong the
    // moment anything under it moves — and on a page with scroll-triggered
    // entry animations (this repo's `praxis-motion`, `underlined-header`) that
    // is guaranteed: the heading the pill sits beside is still hidden when the
    // fonts resolve, and only animates in when it is scrolled to. Watching the
    // captured subtree covers all of it without the component having to know
    // what animates or when — GSAP writes inline styles, which are attribute
    // mutations, and the debounce means one capture after the tween ends rather
    // than one per frame. On a section that never changes this never fires, so
    // the usual case stays at exactly one capture.
    const mutations = new MutationObserver(schedule);
    mutations.observe(root, {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true,
    });

    const resizes = new ResizeObserver(schedule);
    resizes.observe(container);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      mutations.disconnect();
      resizes.disconnect();
    };
  }, [containerRef, enabled, base]);

  // Frees the old texture when a new capture replaces it, and the last one on
  // unmount — the cleanup closes over the texture the effect ran with.
  useEffect(() => () => texture?.dispose(), [texture]);

  return texture;
}

/* -------------------------------------------------------------------------- */
/*  The helix itself                                                          */
/* -------------------------------------------------------------------------- */
function Helix({ color, spinSpeed }: { color: string; spinSpeed: number }) {
  const group = useRef<THREE.Group>(null);
  const { nodes } = useGLTF(MODEL_URL) as unknown as HelixGltf;

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * spinSpeed;
  });

  return (
    <group ref={group} scale={HELIX_SCALE} dispose={null}>
      {HELIX_MESHES.map((name) => (
        <mesh key={name} geometry={nodes[name].geometry}>
          {/* The original materials are flat and untextured; the demo replaced
              both with one slightly metallic, near-smooth physical material so
              the helix picks up the environment through the glass. */}
          <meshPhysicalMaterial color={color} metalness={0.2} roughness={0.1} />
        </mesh>
      ))}
    </group>
  );
}

/* -------------------------------------------------------------------------- */
/*  Pill + helix, floating as one object                                      */
/* -------------------------------------------------------------------------- */
function Pill({
  glassColor,
  helixColor,
  backdrop,
  spinSpeed,
  floatIntensity,
  rotationIntensity,
  samples,
  resolution,
  distance,
  pageTexture,
}: {
  glassColor: string;
  helixColor: string;
  backdrop: string | null;
  pageTexture: THREE.Texture | null;
  spinSpeed: number;
  floatIntensity: number;
  rotationIntensity: number;
  samples: number;
  resolution: number;
  distance: number;
}) {
  const size = useThree((state) => state.size);
  const camera = useThree((state) => state.camera) as THREE.PerspectiveCamera;

  // The demo composed for a wide window and let a narrow one crop the pill.
  // Scaling it to fit keeps the whole object in frame on a phone, and stops at 1
  // so it never grows past the demo's framing.
  //
  // Measured off the camera's resting distance rather than `state.viewport`,
  // which is only recomputed on resize — the rig pushes the camera in after
  // mount, so the viewport a resize handed us is a frame and a half too wide and
  // a phone would come out barely scaled at all.
  const visibleHeight = 2 * distance * Math.tan((camera.fov * Math.PI) / 360);
  const visibleWidth = visibleHeight * (size.width / size.height);
  const scale = THREE.MathUtils.clamp(
    Math.min(visibleWidth / PILL_FRAME_X, visibleHeight / PILL_FRAME_Y),
    0.4,
    1
  );

  // Under `prefers-reduced-motion` the loop is on demand, so a capture that
  // lands after the single frame would never be drawn — the buffer passes only
  // run inside `useFrame`. Ask for one more frame whenever the texture changes.
  const invalidate = useThree((state) => state.invalidate);
  useEffect(() => {
    if (pageTexture) invalidate();
  }, [pageTexture, invalidate]);

  // What the glass samples: the page if it has been captured, the flat colour
  // until then. `background` is only read for the buffer passes, so a
  // THREE.Color is all it wants — and a new one every frame would thrash the
  // material.
  const backdropColor = useMemo(
    () => (backdrop ? new THREE.Color(backdrop) : undefined),
    [backdrop]
  );
  const glassBackground = pageTexture ?? backdropColor;

  return (
    <group scale={scale}>
      <Float
        // Lying back and across the frame, so neither end points at the camera.
        rotation={[-0.8, 0, -Math.PI / 2.5]}
        floatIntensity={floatIntensity}
        rotationIntensity={rotationIntensity}
      >
        <Capsule args={[PILL_RADIUS, PILL_LENGTH, 16, 64]}>
          <MeshTransmissionMaterial
            background={glassBackground}
            samples={samples}
            resolution={resolution}
            thickness={0.95}
            anisotropy={0.25}
            anisotropicBlur={0.1}
            ior={1.3}
            color={glassColor}
            clearcoat={1}
            roughness={0.05}
            // Above 1 on purpose: the thin-film sheen is what gives the shell
            // its soap-bubble edges, and at a believable strength it disappears
            // against the environment.
            iridescence={2.5}
            iridescenceIOR={1.55}
            chromaticAberration={0.15}
          />
        </Capsule>
        <Helix color={helixColor} spinSpeed={spinSpeed} />
      </Float>
    </group>
  );
}

/* -------------------------------------------------------------------------- */
/*  Camera rig — drifts after the pointer, always looking at the pill          */
/* -------------------------------------------------------------------------- */
function CameraRig({
  pointer,
  strength,
  distance,
}: {
  pointer: RefObject<Pointer>;
  strength: number;
  distance: number;
}) {
  const velocity = useRef({ x: { value: 0 }, y: { value: 0 }, z: { value: 0 } });

  useFrame((state, delta) => {
    const { camera, viewport } = state;
    const v = velocity.current;

    // Divided by 8 as in the demo: a whole viewport of pointer travel moves the
    // camera an eighth of that, which is a drift rather than a follow. The
    // constant on y is the demo's slight look-down.
    const targetX = ((pointer.current.x * viewport.width) / 8) * strength;
    const targetY = ((1 + pointer.current.y * viewport.height) / 8) * strength;

    camera.position.x = smoothDamp(
      camera.position.x,
      targetX,
      v.x,
      CAMERA_SMOOTH_TIME,
      delta
    );
    camera.position.y = smoothDamp(
      camera.position.y,
      targetY,
      v.y,
      CAMERA_SMOOTH_TIME,
      delta
    );
    camera.position.z = smoothDamp(
      camera.position.z,
      distance,
      v.z,
      CAMERA_SMOOTH_TIME,
      delta
    );
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* -------------------------------------------------------------------------- */
/*  Lighting                                                                  */
/* -------------------------------------------------------------------------- */
function Studio({ intensity }: { intensity: number }) {
  return (
    <Environment resolution={256} environmentIntensity={intensity}>
      {/* Dim surround so reflections fall off into something instead of black. */}
      <Lightformer
        intensity={0.5}
        position={[0, 0, -8]}
        scale={[14, 14, 1]}
        color="#dfe9f2"
      />
      {/* Broad key from above — the pill's main highlight runs along its top. */}
      <Lightformer
        form="rect"
        intensity={3}
        position={[0, 4, 4]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[9, 5, 1]}
        color="#ffffff"
      />
      {/* The demo's own two panels, which set how the shell catches light. */}
      <Lightformer form="rect" intensity={2} position={[2, 3, 3]} scale={5} />
      <Lightformer form="rect" intensity={3} position={[-2, 2, -4]} scale={5} />
      {/* Thin diagonals: the long, narrow glints that read as glass. */}
      <Lightformer
        form="rect"
        intensity={6}
        position={[-3, 2, 3]}
        rotation={[0, 0, Math.PI / 4]}
        scale={[0.35, 7, 1]}
        color="#ffffff"
      />
      <Lightformer
        form="rect"
        intensity={5}
        position={[3.5, -1, 3]}
        rotation={[0, 0, -Math.PI / 4]}
        scale={[0.3, 6, 1]}
        color="#ffffff"
      />
      {/* Warm and cool fills either side give the refraction some colour life. */}
      <Lightformer
        form="circle"
        intensity={2}
        position={[-5, -2, 1]}
        scale={[4, 4, 1]}
        color="#ffe9d6"
      />
      <Lightformer
        form="circle"
        intensity={2.5}
        position={[5, 1, -2]}
        scale={[4, 4, 1]}
        color="#cfe4ff"
      />
      {/* Rim behind, to separate the silhouette from the page. */}
      <Lightformer
        form="ring"
        intensity={3}
        position={[0, 0, -5]}
        scale={[3.5, 3.5, 1]}
        color="#ffffff"
      />
    </Environment>
  );
}

/* -------------------------------------------------------------------------- */
/*  Public component                                                          */
/* -------------------------------------------------------------------------- */
export interface DnaCapsuleProps {
  /** Extra classes on the container. Height and margins belong here — the canvas fills the box. */
  className?: string;
  style?: CSSProperties;
  /** Tint of the glass shell. */
  glassColor?: string;
  /** Colour of the helix inside. */
  helixColor?: string;
  /**
   * What the glass refracts. The canvas itself stays transparent, so this reads
   * as the colour inside the pill rather than a page background. `null` leaves
   * the buffer empty, which makes the shell dark and heavy.
   */
  backdrop?: string | null;
  /** Page-facing background. `null` (the default) keeps the canvas transparent. */
  background?: string | null;
  /**
   * Refract the actual page instead of a flat colour: the DOM under the canvas
   * is rasterised once with html2canvas and bent by the glass, so the pill
   * reads as a lens over the content rather than a shape covering it. Costs one
   * rasterisation of the pill's positioned ancestor, plus one more each time
   * the content under it settles into a new state.
   */
  refractPage?: boolean;
  /** Helix rotation, radians per second. */
  spinSpeed?: number;
  /** How far the pill bobs. 0 stops the bobbing. */
  floatIntensity?: number;
  /** How far the pill rocks as it bobs. 0 holds its angle. */
  rotationIntensity?: number;
  /** How much the camera drifts after the pointer. 0 pins the camera. */
  parallax?: number;
  /** Brightness of the environment the glass reflects. */
  envIntensity?: number;
  /**
   * How far back the camera sits. The pill's size on screen follows the height
   * of the box it is in, so a small box gives a small pill — pull this in to
   * fill it again (4 is about a third bigger than the default), or push it out
   * to leave more air around the object.
   */
  distance?: number;
  /**
   * Refraction quality: rays per pixel and the size of the buffer the glass
   * samples. These are what `components/hero.tsx` uses. Dropping to 512/8
   * roughly quarters the fill rate and blurs the helix noticeably — worth it
   * only if the pill is small on the page.
   */
  samples?: number;
  resolution?: number;
}

export default function DnaCapsule({
  className,
  style,
  glassColor = '#c3e9ff',
  helixColor = '#38c0ea',
  backdrop,
  background = null,
  refractPage = false,
  spinSpeed = 1.6,
  floatIntensity = 4,
  rotationIntensity = 4,
  parallax = 1,
  envIntensity = 2.6,
  distance = CAMERA_REST_Z,
  samples = 10,
  resolution = 1024,
}: DnaCapsuleProps) {
  // Left alone, the glass refracts whatever `background` is — which is the
  // demo's behaviour, where its clear colour was the only thing behind the pill
  // — or a pale blue when the canvas is transparent and there is nothing there.
  const glassBackdrop = backdrop === undefined ? (background ?? DEFAULT_BACKDROP) : backdrop;

  const { ref, active } = useRenderActive<HTMLDivElement>();
  const pointer = useRef<Pointer>({ x: 0, y: 0 });
  const [reduceMotion, setReduceMotion] = useState(false);
  const rigActive = !reduceMotion && parallax > 0;

  const pageTexture = usePageTexture(ref, refractPage, glassBackdrop);

  // Tracked on the window rather than off the canvas, so the drift still works
  // when the component is laid behind a section's content with
  // `pointer-events: none`.
  useEffect(() => {
    if (parallax === 0) return;
    const onMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [parallax]);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  return (
    <div
      ref={ref}
      className={className ? `dna-capsule ${className}` : 'dna-capsule'}
      style={style}
      // Keeps the canvas out of its own capture, and out of anyone else's.
      data-ignore-capture="true"
    >
      <Canvas
        // 'demand' renders once and then only on resize: under reduced motion
        // the pill holds a pose instead of bobbing. Otherwise the loop runs only
        // while the component is near the viewport in a visible tab.
        frameloop={reduceMotion ? 'demand' : active ? 'always' : 'never'}
        camera={{
          position: [0, 0, rigActive ? distance + CAMERA_PUSH_IN : distance],
        }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: background === null }}
        // Nothing in this scene answers the pointer — the camera drift reads the
        // window, not the canvas — so the whole thing is click-through, and
        // content under an absolutely-positioned pill stays selectable and
        // clickable. This has to be set here rather than in the CSS: R3F puts
        // `pointer-events: auto` inline on its own wrapper div, which re-enables
        // hit testing for the subtree no matter what the container says.
        style={{ pointerEvents: 'none' }}
      >
        {background !== null && <color attach="background" args={[background]} />}
        <Suspense fallback={null}>
          <Pill
            glassColor={glassColor}
            helixColor={helixColor}
            backdrop={glassBackdrop}
            spinSpeed={reduceMotion ? 0 : spinSpeed}
            floatIntensity={reduceMotion ? 0 : floatIntensity}
            rotationIntensity={reduceMotion ? 0 : rotationIntensity}
            samples={samples}
            resolution={resolution}
            distance={distance}
            pageTexture={pageTexture}
          />
          <Studio intensity={envIntensity} />
        </Suspense>
        {rigActive && (
          <CameraRig pointer={pointer} strength={parallax} distance={distance} />
        )}
      </Canvas>
    </div>
  );
}
