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

  // Lock page scroll while the overlay is up so momentum-scrolling behind it
  // (notably iOS Safari) can't reveal the page before the reveal animation.
  useEffect(() => {
    if (!isLoading) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isLoading]);

  useEffect(() => {
    // Hand-maintained list of the above-the-fold hero media the visitor sees
    // the instant the splash lifts. Keep it to assets rendered as a plain
    // <img>/<video>/CSS background — preloading a raw path warms the browser
    // cache for those. Do NOT add `next/image` assets (project thumbs, service
    // cards, client logos): the browser fetches an optimized `/_next/image?url=…`
    // URL, so preloading the raw file just double-downloads without helping.
    // Never wait on a video here. `/videos/cta.mp4` used to be in this list,
    // and because the clip is ~1.1MB it never finished inside MAX_WAIT_MS on a
    // throttled mobile connection — so the splash sat on screen for the full
    // 6s ceiling on every cold load, and LCP was pinned to it. The clip is
    // decorative and now streams in on its own (see AmbientVideo); only its
    // poster needs to be warm before the splash lifts.
    const assets = [
      '/images/cta-poster.webp', // hero video poster (plain <video poster>, page.tsx)
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
    const markDone = () => {
      remaining -= 1;
      if (remaining <= 0 && !settled) {
        // Small settle delay so the last frame paints before we slide away.
        timers.push(setTimeout(finish, 300));
      }
    };

    assets.forEach((asset) => {
      // An asset can report completion more than once — a <video> fires both
      // `loadedmetadata` and `canplaythrough`, and a cached <img> fires `onload`
      // *and* reports `complete` synchronously. Without this per-asset guard one
      // asset decrements the shared counter twice, which is enough on its own to
      // reach zero and lift the overlay while the others are still in flight.
      let assetSettled = false;

      // `assetTimer` is referenced before its declaration below, but only from
      // inside this closure — every caller runs after the timer is assigned.
      const done = () => {
        if (assetSettled) return;
        assetSettled = true;
        clearTimeout(assetTimer);
        markDone();
      };

      // Per-asset timeout so a single non-responding asset can't stall the set.
      const assetTimer = setTimeout(done, PER_ASSET_TIMEOUT_MS);
      timers.push(assetTimer);

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
      role="status"
      aria-live="polite"
      aria-label="Seite wird geladen"
      className={`fixed inset-0 bg-[#F4F4F4] z-[9999] flex items-center justify-center transition-transform duration-1000 ease-in-out motion-reduce:transition-none motion-reduce:duration-0 ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <p className="text-black font-mono text-xl">Einen Moment...</p>
    </div>
  );
}
