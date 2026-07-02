'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const assets = [
      // Images from page.tsx
      '/assets/pic-1.jpg',
      '/assets/pic-2.jpg',
      '/assets/pic-3.jpg',
      '/assets/pic-4.jpg',
      '/assets/images/h354KZtk5kmg0VJiEtNwQdpZc.jpg',
      '/images/cta.jpg',
      '/images/service-web-design.jpg',
      '/images/service-branding.jpg',
      '/images/service-content.jpg',
      '/images/service-mobile.jpg',
      '/images/project-prince-1.jpg',
      '/images/project-factorysl-1.jpg',
      '/images/project-mua.jpg',
      '/images/project-panda-1.jpg',
      // Videos
      '/videos/cta.mp4',
      // Logo images
      '/assets/images/Vbq7Fp6o8KdtjpOPsc8wVaQWxYY.png',
    ];

    let loadedCount = 0;
    const totalAssets = assets.length;

    const handleAssetLoad = () => {
      loadedCount++;
      if (loadedCount === totalAssets) {
        // All assets loaded, wait 500ms then exit
        setTimeout(() => {
          setIsExiting(true);
          // After transition completes, remove from DOM
          setTimeout(() => {
            setIsLoading(false);
          }, 500); // Match CSS transition duration
        }, 500);
      }
    };

    const handleAssetError = () => {
      // Count errors as loaded so we don't get stuck
      handleAssetLoad();
    };

    // Preload all assets
    assets.forEach((asset) => {
      if (asset.endsWith('.mp4') || asset.endsWith('.webm')) {
        const video = document.createElement('video');
        video.preload = 'auto';
        video.src = asset;
        video.onloadeddata = handleAssetLoad;
        video.onerror = handleAssetError;
      } else {
        const img = new Image();
        img.src = asset;
        img.onload = handleAssetLoad;
        img.onerror = handleAssetError;
      }
    });

    // Fallback: if no assets or all fail, exit after a reasonable time
    if (totalAssets === 0) {
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }, 500);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 bg-[#F4F4F4] z-[9999] flex items-center justify-center transition-transform duration-1000 ease-in-out ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <p className="text-black font-mono text-xl">Einen Moment...</p>
    </div>
  );
}
