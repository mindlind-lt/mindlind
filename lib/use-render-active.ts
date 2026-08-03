'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref + an `active` flag that is true only while the referenced
 * element is near the viewport AND the browser tab is visible.
 *
 * Wire `active` into a render loop (r3f `frameloop`, a manual RAF, Spline's
 * stop()/play()) so expensive WebGL work pauses when nobody is looking —
 * off-screen or in a backgrounded tab. This is visually lossless: a scene
 * only stops animating when it isn't on screen.
 */
export function useRenderActive<T extends HTMLElement = HTMLDivElement>(
  // Keep rendering until the element is this far outside the viewport.
  rootMargin = '200px'
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => setInView(entries.some((entry) => entry.isIntersecting)),
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  useEffect(() => {
    const onVisibility = () => setPageVisible(!document.hidden);
    onVisibility();
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  return { ref, active: inView && pageVisible };
}
