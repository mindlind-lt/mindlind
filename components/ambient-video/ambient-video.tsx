'use client';

import { useEffect, useRef, useState } from 'react';

interface AmbientVideoProps {
  /** Path to the video file (e.g. "/videos/cta.mp4"). */
  src: string;
  /** Still frame shown until the video is fetched. Keep it small — it is a
   *  plain `poster` attribute, so it does not go through next/image. */
  poster: string;
  className?: string;
}

/**
 * A muted, looping decorative video that costs nothing until it is on screen.
 *
 * `autoPlay` makes the browser fetch the whole file during the initial page
 * load regardless of where the element sits, which is how a 1 MB clip ends up
 * competing with the LCP for bandwidth. Instead the element renders with
 * `preload="none"` and no `src`; both are attached only once an
 * IntersectionObserver says it is near the viewport, at which point playback
 * starts on its own.
 *
 * Playback is also paused whenever it scrolls back out of view or the tab is
 * hidden, matching how the Spline scenes behave.
 */
export default function AmbientVideo({ src, poster, className }: AmbientVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;
    const el = videoRef.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      // Start fetching just before it scrolls in so the first frame is ready.
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad]);

  // Play only while visible; a decorative loop nobody can see is wasted decode.
  useEffect(() => {
    if (!shouldLoad) return;
    const el = videoRef.current;
    if (!el) return;

    const sync = (visible: boolean) => {
      if (visible && !document.hidden) el.play().catch(() => {});
      else el.pause();
    };

    let inView = true;
    const observer =
      'IntersectionObserver' in window
        ? new IntersectionObserver(
            (entries) => {
              inView = entries.some((entry) => entry.isIntersecting);
              sync(inView);
            },
            { rootMargin: '200px' }
          )
        : null;
    observer?.observe(el);

    const onVisibility = () => sync(inView);
    document.addEventListener('visibilitychange', onVisibility);

    sync(true);

    return () => {
      observer?.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      src={shouldLoad ? src : undefined}
      preload="none"
      loop
      muted
      playsInline
      aria-hidden
    />
  );
}
