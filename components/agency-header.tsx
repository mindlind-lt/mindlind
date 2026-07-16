'use client'

import './agency-header.css'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  Text,
  Float,
  RoundedBox,
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
} from '@react-three/drei'
import * as THREE from 'three'

const INK = '#101114'
const PLATINUM = '#e9ebee'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])
  return reduced
}

/**
 * The headline lives inside the WebGL scene (not in HTML) so the cube's
 * transmission material can actually refract the letterforms behind it.
 * An sr-only <h1> in the overlay carries the semantics.
 */

function GlassCube({ reduced }: { reduced: boolean }) {
  const drift = useRef<THREE.Group>(null)
  const cube = useRef<THREE.Group>(null)
  const { viewport } = useThree()
  const size = Math.min(viewport.width, viewport.height) * 0.24

  useFrame((state, delta) => {
    if (reduced) return
    // Slow tumble
    if (cube.current) {
      cube.current.rotation.x += delta * 0.14
      cube.current.rotation.y += delta * 0.19
    }
    // Slow Lissajous wander across the composition + gentle pointer parallax.
    // Incommensurate frequencies keep the path from visibly repeating.
    const t = state.clock.elapsedTime
    const targetX =
      Math.sin(t * 0.31) * viewport.width * 0.16 +
      state.pointer.x * viewport.width * 0.05
    // Vertical range stays tighter than horizontal so the glass never fully
    // clears the headline — over empty background it has nothing to refract.
    const targetY =
      Math.cos(t * 0.47) * viewport.height * 0.09 +
      state.pointer.y * viewport.height * 0.05
    if (drift.current) {
      drift.current.position.x = THREE.MathUtils.damp(drift.current.position.x, targetX, 1.5, delta)
      drift.current.position.y = THREE.MathUtils.damp(drift.current.position.y, targetY, 1.5, delta)
    }
  })

  return (
    <group ref={drift}>
      <Float
        floatIntensity={reduced ? 0 : 2}
        rotationIntensity={reduced ? 0 : 0.5}
        speed={1.6}
      >
        <group ref={cube} rotation={[0.45, 0.65, 0.1]} position={[0, 0, 2.4]}>
          <RoundedBox args={[size, size, size]} radius={size * 0.07} smoothness={10}>
            <MeshTransmissionMaterial
              transmission={1}
              thickness={size * 0.8}
              roughness={0.02}
              ior={1.5}
              chromaticAberration={0.09}
              anisotropicBlur={0.08}
              distortion={0.28}
              distortionScale={0.5}
              temporalDistortion={reduced ? 0 : 0.08}
              clearcoat={1}
              clearcoatRoughness={0.04}
              attenuationDistance={size * 6}
              attenuationColor="#ffffff"
              envMapIntensity={0.55}
              samples={10}
              resolution={1024}
              backside
              backsideThickness={size * 0.25}
            />
          </RoundedBox>
        </group>
      </Float>
    </group>
  )
}

function Scene({ reduced }: { reduced: boolean }) {
  return (
    <>
      <GlassCube reduced={reduced} />
      {/* Procedural studio lighting — crisp rectangular highlights on the glass */}
      <Environment resolution={512}>
        <group rotation={[-Math.PI / 3, 0, 0]}>
          <Lightformer intensity={3} position={[0, 6, -9]} scale={[12, 12, 1]} />
          <Lightformer intensity={1.5} position={[-7, 1, 0]} rotation-y={Math.PI / 2} scale={[16, 1.4, 1]} />
          <Lightformer intensity={1.5} position={[7, 1, 0]} rotation-y={-Math.PI / 2} scale={[16, 1.4, 1]} />
          <Lightformer intensity={1.2} position={[0, -5, 4]} rotation-x={Math.PI / 2} scale={[14, 3, 1]} />
        </group>
      </Environment>
    </>
  )
}

export default function AgencyHeader() {
  const reduced = usePrefersReducedMotion()
  return (
    <header className="agency-header">
      <h1 className="agency-header__title">Agency</h1>

      <Canvas
        aria-hidden="true"
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene reduced={reduced} />
      </Canvas>

    </header>
  )
}
