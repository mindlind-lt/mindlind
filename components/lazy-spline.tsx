'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

/**
 * Defers loading a Spline scene (runtime JS + .splinecode download + WebGL
 * context) until the wrapper is within one viewport of being scrolled into
 * view. Use for below-the-fold scenes; keep hero scenes eager.
 */
export default function LazySpline({
  scene,
  className,
}: {
  scene: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shouldLoad) return;

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
      // Start loading one full viewport before the scene scrolls into view
      { rootMargin: '100% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={ref} className={className} style={{ width: '100%', height: '100%' }}>
      {shouldLoad && <Spline scene={scene} className={className} />}
    </div>
  );
}
