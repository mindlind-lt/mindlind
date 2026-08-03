"use client"

import { useEffect, useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import {
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
  RoundedBox,
} from "@react-three/drei"
import html2canvas from "html2canvas-pro"
import * as THREE from "three"

/**
 * Shared pointer position (normalized -1..1), updated from window so it works
 * even though the canvas overlay has pointer-events: none.
 */
const pointer = { x: 0, y: 0 }

/* -------------------------------------------------------------------------- */
/*  Background plane — the actual page content, captured to a texture so the  */
/*  glass cube's transmission material genuinely refracts it.                 */
/* -------------------------------------------------------------------------- */
function ContentPlane({ texture }: { texture: THREE.Texture | null }) {
  const { viewport } = useThree()

  if (!texture) return null

  return (
    <mesh position={[0, 0, 0]}>
      {/* Fill the viewport exactly at z = 0 so it lines up 1:1 with the DOM */}
      <planeGeometry args={[viewport.width, viewport.height]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  )
}

/* -------------------------------------------------------------------------- */
/*  The real 3D glass cube.                                                    */
/* -------------------------------------------------------------------------- */
function GlassCube() {
  const ref = useRef<THREE.Mesh>(null)
  const { viewport } = useThree()

  // Velocity for the critically-damped spring that drives the follow.
  const vel = useRef({ x: 0, y: 0 })

  // Scale the cube relative to the viewport so it stays a floating accent
  // on small screens instead of swallowing the whole page.
  const scale = THREE.MathUtils.clamp(viewport.width / 9, 0.3, 0.55)

  // How long (seconds) it takes the spring to settle. Larger = slower + more
  // pronounced acceleration/deceleration.
  const SMOOTH_TIME = 1.15
  // Only drift a little toward the cursor rather than tracking it fully.
  const FOLLOW_RANGE = 0.18

  useFrame((_, delta) => {
    const mesh = ref.current
    if (!mesh) return

    // slow continuous tumble
    mesh.rotation.x += delta * 0.14
    mesh.rotation.y += delta * 0.2

    // Critically-damped spring (smoothDamp): the cube accelerates away from
    // rest and decelerates into the target, giving a heavy, ease-in-out trail.
    const targetX = pointer.x * (viewport.width / 2) * FOLLOW_RANGE
    const targetY = pointer.y * (viewport.height / 2) * FOLLOW_RANGE

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
      // Slightly rounder bevel gives the edges a wider band to catch the
      // light streaks — that crisp highlight is what reads as "solid glass".
      radius={0.17}
      smoothness={16}
      scale={scale}
      position={[0, 0, 1.6]}
    >
      <MeshTransmissionMaterial
        // real refraction of whatever is behind (the page content plane)
        transmission={1}
        // Thicker slab → more pronounced, believable bending of the content.
        thickness={2.2}
        roughness={0}
        // Crown-glass IOR (~1.5) instead of 1.45; a touch more refraction.
        ior={1.5}
        // Stronger prismatic dispersion so the bevels split light like a
        // real crystal, but kept clean by the higher sample count below.
        chromaticAberration={0.14}
        anisotropy={0.1}
        anisotropicBlur={0.1}
        // Solid glass barely warps — drop the liquid-like wobble almost to
        // zero so it reads as a crystal block, not water.
        distortion={0.12}
        distortionScale={0.15}
        temporalDistortion={0.02}
        // More samples + resolution = smoother, less grainy refraction and
        // clean dispersion at the edges.
        samples={16}
        resolution={2048}
        backside
        backsideThickness={0.4}
        backsideResolution={1024}
        clearcoat={1}
        clearcoatRoughness={0}
        // Subtle absorption over depth with a faint cool tint — the classic
        // green-cyan cast of thick optical glass. Keeps it from looking flat.
        attenuationDistance={2.2}
        attenuationColor="#e8f2ee"
        color="#ffffff"
        // Push the environment reflections so edges and faces pick up the
        // studio light streaks more strongly.
        envMapIntensity={1.5}
        reflectivity={0.6}
      />
    </RoundedBox>
  )
}

/* -------------------------------------------------------------------------- */
/*  Scene wrapper                                                              */
/* -------------------------------------------------------------------------- */
function Scene({ texture }: { texture: THREE.Texture | null }) {
  return (
    <>
      <ContentPlane texture={texture} />

      <GlassCube />

      {/* Local environment (no network fetch) for crisp glass highlights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 5]} intensity={1.3} />
      {/* A second, cooler key from the opposite side adds a clearcoat
          highlight on the shadowed edge so no face goes fully dead. */}
      <directionalLight position={[-4, -2, 3]} intensity={0.5} color="#cfe0ff" />
      <Environment resolution={512}>
        {/* Soft dark surround so reflections have something to fall off into
            (pure-white env washes out the sense of a solid object). */}
        <Lightformer
          intensity={0.4}
          position={[0, 0, -8]}
          scale={[12, 12, 1]}
          color="#dfe3ea"
        />
        {/* Big soft key from above — the broad primary reflection. */}
        <Lightformer
          form="rect"
          intensity={4}
          position={[0, 4, 4]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[9, 5, 1]}
          color="#ffffff"
        />
        {/* Bright thin diagonal streaks — the signature elongated glints that
            sweep across the faces as the cube tumbles and read as glass. */}
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
        {/* Warm + cool side fills give the refraction subtle color life. */}
        <Lightformer
          form="circle"
          intensity={2}
          position={[-5, -2, 1]}
          scale={[4, 4, 1]}
          color="#ffe9d6"
        />
        <Lightformer
          form="circle"
          intensity={2}
          position={[5, 1, -2]}
          scale={[4, 4, 1]}
          color="#d6e6ff"
        />
        {/* Rim behind the cube separates its silhouette with a bright edge. */}
        <Lightformer
          form="ring"
          intensity={3}
          position={[0, 0, -5]}
          scale={[3, 3, 1]}
          color="#ffffff"
        />
      </Environment>
    </>
  )
}

/* -------------------------------------------------------------------------- */
/*  Public component                                                           */
/* -------------------------------------------------------------------------- */
export default function HeroServices() {
  const contentRef = useRef<HTMLDivElement>(null)
  const [texture, setTexture] = useState<THREE.Texture | null>(null)

  // Track pointer globally (canvas overlay ignores pointer events).
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.y = -((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener("pointermove", onMove)
    return () => window.removeEventListener("pointermove", onMove)
  }, [])

  // Capture the DOM content into a texture so the glass refracts the real page.
  useEffect(() => {
    let cancelled = false
    let timer: ReturnType<typeof setTimeout>

    const capture = async () => {
      const el = contentRef.current
      if (!el) return
      try {
        const canvas = await html2canvas(el, {
          backgroundColor: "#F4F4F4",
          // backgroundColor: "#ece7de",
          scale: Math.min(2, window.devicePixelRatio || 1),
          logging: false,
          useCORS: true,
          // don't capture the WebGL overlay itself
          ignoreElements: (node) =>
            (node as HTMLElement).dataset?.ignoreCapture === "true",
        })
        if (cancelled) return
        const tex = new THREE.CanvasTexture(canvas)
        tex.colorSpace = THREE.SRGBColorSpace
        tex.needsUpdate = true
        setTexture((prev) => {
          prev?.dispose()
          return tex
        })
      } catch {
        // If capture fails the cube still renders and refracts the environment.
      }
    }

    // Wait for fonts so the huge title is measured/rendered correctly.
    const start = () => {
      if (document.fonts?.ready) {
        document.fonts.ready.then(() => {
          if (!cancelled) capture()
        })
      } else {
        capture()
      }
    }
    start()

    const onResize = () => {
      clearTimeout(timer)
      timer = setTimeout(capture, 250)
    }
    window.addEventListener("resize", onResize)

    return () => {
      cancelled = true
      clearTimeout(timer)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <section className="relative min-h-screen portrait:min-h-[70svh] w-full overflow-hidden">
      {/* ---------------------------------------------------------------- */}
      {/*  Real DOM content (SEO-friendly, fully crawlable)                */}
      {/* ---------------------------------------------------------------- */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex min-h-screen portrait:min-h-[70svh] flex-col items-center justify-center px-6 py-10 md:px-16 md:py-14"
        style={{ backgroundColor: "transparent", color: "#17130d" }}
      >

        <h1
          className="font-mono font-bold tracking-tight"
          style={{
            fontSize: "clamp(3rem, 12vw, 15rem)",
            color: "#17130d",
          }}
        >
          {"LEISTUNGEN"}
        </h1>

      </div>

      {/* ---------------------------------------------------------------- */}
      {/*  WebGL overlay: the glass cube refracting the captured content   */}
      {/* ---------------------------------------------------------------- */}
      <div
        data-ignore-capture="true"
        className="pointer-events-none absolute inset-0 z-10"
      >
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene texture={texture} />
        </Canvas>
      </div>
    </section>
  )
}
