"use client"

import { useEffect, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import {
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
  RoundedBox,
} from "@react-three/drei"
import * as THREE from "three"

/**
 * Independent copy of the Agency-page glass cube for the homepage "About"
 * section. It is deliberately self-contained (its own pointer state) so it
 * shares nothing with <HeroAgency />. It floats on a transparent canvas
 * with no background.
 *
 * Pointer position is normalized -1..1 relative to the whole About section, so
 * the cube tracks the cursor across the entire section — not just its column.
 */
const pointer = { x: 0, y: 0 }

/**
 * The WebGL canvas is rendered LARGER than the cube's column so the cube can
 * overflow past the column edges without being clipped. BOX_RATIO is how much
 * of the canvas the column occupies; the canvas is inset by the matching
 * negative margin below (keep the two in sync: inset% = (1/BOX_RATIO - 1)/2).
 */
const BOX_RATIO = 0.625 // column = 62.5% of the canvas → canvas inset is -30%

/* -------------------------------------------------------------------------- */
/*  The real 3D glass cube.                                                    */
/* -------------------------------------------------------------------------- */
function GlassCube() {
  const ref = useRef<THREE.Mesh>(null)
  const { viewport } = useThree()

  // Velocity for the critically-damped spring that drives the follow.
  const vel = useRef({ x: 0, y: 0 })

  // The cube's column region (its visual stage) in world units.
  const boxHalfW = (viewport.width * BOX_RATIO) / 2
  const boxHalfH = (viewport.height * BOX_RATIO) / 2

  // Size the cube off the column height so it stays a consistent fraction of
  // the stage rather than the (larger) canvas.
  const scale = THREE.MathUtils.clamp(boxHalfH * 0.5, 0.35, 0.75)

  // How long (seconds) it takes the spring to settle. Larger = slower + more
  // pronounced acceleration/deceleration.
  const SMOOTH_TIME = 1.15
  // How far the cube leans toward the cursor, as a fraction of the box. Tuned
  // so the cube clearly peeks past the box edges (overflow is allowed now that
  // the canvas extends beyond the box) without flying across the whole page.
  // `pointer` is normalized against the whole section, so the cube reacts to
  // the cursor anywhere in the section.
  const FOLLOW_RANGE = 0.55

  useFrame((_, delta) => {
    const mesh = ref.current
    if (!mesh) return

    // slow continuous tumble
    mesh.rotation.x += delta * 0.14
    mesh.rotation.y += delta * 0.2

    // Critically-damped spring (smoothDamp): the cube accelerates away from
    // rest and decelerates into the target, giving a heavy, ease-in-out trail.
    const targetX = pointer.x * boxHalfW * FOLLOW_RANGE
    const targetY = pointer.y * boxHalfH * FOLLOW_RANGE

    const omega = 2 / SMOOTH_TIME
    const x = omega * delta
    const expo = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x)

    // X axis
    let change = mesh.position.x - targetX
    let temp = (vel.current.x + omega * change) * delta
    vel.current.x = (vel.current.x - omega * temp) * expo
    mesh.position.x = targetX + (change + temp) * expo

    // Y axis
    change = mesh.position.y - targetY
    temp = (vel.current.y + omega * change) * delta
    vel.current.y = (vel.current.y - omega * temp) * expo
    mesh.position.y = targetY + (change + temp) * expo
  })

  return (
    <RoundedBox
      ref={ref}
      args={[1.7, 1.7, 1.7]}
      radius={0.14}
      smoothness={10}
      scale={scale}
      position={[0, 0, 1.6]}
    >
      <MeshTransmissionMaterial
        // refracts the local environment (there is no background plane)
        transmission={1}
        thickness={1.6}
        roughness={0}
        ior={1.45}
        chromaticAberration={0.07}
        anisotropy={0.25}
        distortion={0.55}
        distortionScale={0.4}
        temporalDistortion={0.12}
        samples={12}
        resolution={1024}
        backside
        backsideThickness={0.6}
        clearcoat={1}
        clearcoatRoughness={0}
        attenuationDistance={5}
        attenuationColor="#ffffff"
        color="#ffffff"
      />
    </RoundedBox>
  )
}

/* -------------------------------------------------------------------------- */
/*  Scene wrapper                                                              */
/* -------------------------------------------------------------------------- */
function Scene() {
  return (
    <>
      <GlassCube />

      {/* Local environment (no network fetch) for crisp glass highlights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} />
      <Environment resolution={256}>
        <Lightformer
          intensity={3}
          position={[0, 3, 4]}
          scale={[6, 3, 1]}
          color="#ffffff"
        />
        <Lightformer
          intensity={1.5}
          position={[-4, -1, 2]}
          scale={[4, 4, 1]}
          color="#ffe9d6"
        />
        <Lightformer
          intensity={1.5}
          position={[4, 1, -2]}
          scale={[4, 4, 1]}
          color="#d6e6ff"
        />
      </Environment>
    </>
  )
}

/* -------------------------------------------------------------------------- */
/*  Public component                                                           */
/* -------------------------------------------------------------------------- */
export default function GlassCubeAbout() {
  // We measure the cursor against the whole section (see note below) to drive
  // the follow across the section.
  const overlayRef = useRef<HTMLDivElement>(null)

  // Track the pointer normalized against the WHOLE section (the [data-cube-
  // section] row), not just this column — so the cube leans toward the cursor
  // wherever it is in the section.
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = overlayRef.current
      if (!el) return
      const section = el.closest("[data-cube-section]") ?? el
      const r = section.getBoundingClientRect()
      pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1
      pointer.y = -(((e.clientY - r.top) / r.height) * 2 - 1)
    }
    window.addEventListener("pointermove", onMove)
    return () => window.removeEventListener("pointermove", onMove)
  }, [])

  return (
    // Positioning wrapper sized to this column. It does NOT clip, so the cube
    // may overflow past the column edges.
    <div
      ref={overlayRef}
      className="relative h-full min-h-[420px] w-full"
    >
      {/* WebGL canvas, rendered LARGER than the column (inset -30%, matching
          BOX_RATIO) and not clipped, so the cube can spill past the column.
          The canvas is transparent — there is no background. */}
      <div
        className="pointer-events-none absolute z-10"
        style={{ inset: "-30%" }}
      >
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene />
        </Canvas>
      </div>
    </div>
  )
}
