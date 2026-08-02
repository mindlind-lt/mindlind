'use client';

import { useEffect, useState } from 'react';

// How long (ms) we ever allow the preloader to stay on screen, no matter what.
// Prevents a hung/slow asset from trapping the visitor behind the overlay.
const MAX_WAIT_MS = 6000;
// Per-asset ceiling. If one asset never reports load/error (e.g. iOS Safari
// refusing to preload video), we stop waiting on it and move on.
const PER_ASSET_TIMEOUT_MS = 4000;
// Must match the Tailwind transition duration below (duration-1000).
const EXIT_TRANSITION_MS = 1000;

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

    let settled = false; // guards against double-exit (StrictMode / races)
    const timers: ReturnType<typeof setTimeout>[] = [];

    const finish = () => {
      if (settled) return;
      settled = true;
      setIsExiting(true);
      timers.push(
        setTimeout(() => setIsLoading(false), EXIT_TRANSITION_MS),
      );
    };

    // Global hard stop: whatever happens with individual assets, never trap
    // the visitor longer than MAX_WAIT_MS.
    const globalTimer = setTimeout(finish, MAX_WAIT_MS);
    timers.push(globalTimer);

    const total = assets.length;
    if (total === 0) {
      finish();
      return () => timers.forEach(clearTimeout);
    }

    let remaining = total;
    const markDone = (assetTimer: ReturnType<typeof setTimeout>) => {
      clearTimeout(assetTimer);
      remaining -= 1;
      if (remaining <= 0 && !settled) {
        // Small settle delay so the last frame paints before we slide away.
        timers.push(setTimeout(finish, 300));
      }
    };

    assets.forEach((asset) => {
      // Per-asset timeout so a single non-responding asset can't stall the set.
      const assetTimer = setTimeout(() => markDone(assetTimer), PER_ASSET_TIMEOUT_MS);
      timers.push(assetTimer);

      const done = () => markDone(assetTimer);

      if (asset.endsWith('.mp4') || asset.endsWith('.webm')) {
        const video = document.createElement('video');
        video.muted = true;
        video.preload = 'auto';
        // `loadedmetadata` fires far more reliably across browsers than
        // `loadeddata` — iOS Safari in particular often won't buffer full
        // video data without a user gesture, so we don't wait on that.
        video.onloadedmetadata = done;
        video.oncanplaythrough = done;
        video.onerror = done;
        video.src = asset;
        video.load();
      } else {
        const img = new Image();
        // Attach handlers BEFORE setting src. If the image is already cached,
        // the load event can fire the instant src is assigned — a handler set
        // afterwards would miss it, leaving the preloader stuck forever.
        img.onload = done;
        img.onerror = done;
        img.src = asset;
        // Safety net for browsers that complete a cached image before events
        // are wired up: `complete` is already true, so resolve immediately.
        if (img.complete) done();
      }
    });

    return () => timers.forEach(clearTimeout);
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
