'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

export default function TorusGlass({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    // Load font and create text behind the torus
    const fontLoader = new FontLoader();
    fontLoader.load(
      'https://raw.githubusercontent.com/danielyl123/person/refs/heads/main/fonts/helvetiker_regular.typeface.json',
      (font: any) => {
        const textGeometry = new TextGeometry('LEISTUNGEN', {
          font,
          size: 1,
          depth: 0,
          curveSegments: 5,
          bevelEnabled: true,
          bevelThickness: 0,
          bevelSize: 0,
          bevelOffset: 0,
          bevelSegments: 4,
        });
        textGeometry.computeBoundingBox();
        textGeometry.center();

        const textMaterial = new THREE.MeshBasicMaterial();
        textMaterial.wireframe = false;
        const text = new THREE.Mesh(textGeometry, textMaterial);
        text.position.z = -2;
        scene.add(text);
      }
    );

    // Colorful background to show glass refraction
    const backgroundGeometry = new THREE.PlaneGeometry(10, 10);
    const backgroundMaterial = new THREE.MeshBasicMaterial({ color: 0x4a00e0 });
    const background = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
    background.position.z = -3;
    scene.add(background);

    // Torus with glass material
    const torusGeometry = new THREE.TorusGeometry(0.7, 0.4, 100, 60);
    const torusMaterial = new THREE.MeshPhysicalMaterial();
    torusMaterial.metalness = 0;
    torusMaterial.roughness = 0;
    torusMaterial.iridescence = 1;
    torusMaterial.iridescenceIOR = 1.5;
    torusMaterial.iridescenceThicknessRange = [100, 324];
    torusMaterial.transmission = 1;
    torusMaterial.ior = 1.2;
    torusMaterial.thickness = 0.8;
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.z = 1;
    scene.add(torus);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 10);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 10);
    pointLight.position.set(-1, 2, 0);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xffffff, 10);
    pointLight2.position.set(-1, -2, 0);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffffff, 10);
    pointLight3.position.set(1, -2, 0);
    scene.add(pointLight3);

    const pointLight4 = new THREE.PointLight(0xffffff, 10);
    pointLight4.position.set(1, 2, 0);
    scene.add(pointLight4);

    // Animation loop
    const clock = new THREE.Clock();
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      renderer.render(scene, camera);
      torus.rotation.x = elapsedTime * 0.5;
      torus.rotation.y = elapsedTime * 0.1;
      requestAnimationFrame(tick);
    };
    tick();

    // Handle resize
    const handleResize = () => {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`w-full h-[500px] bg-black ${className || ''}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
