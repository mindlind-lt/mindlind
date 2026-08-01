"use client";

import { useEffect, useRef } from "react";

type ParallaxImageProps = {
  src: string;
  alt?: string;
  /** Visible window height, e.g. "600px" or "70vh". */
  height?: string;
  /** How far the image drifts across the scroll, in px. Higher = stronger. */
  strength?: number;
  className?: string;
};

export function ParallaxImage({
  src,
  alt = "",
  height = "600px",
  strength = 80,
  className = "",
}: ParallaxImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const frame = frameRef.current;
      const img = imgRef.current;
      if (!frame || !img) return;

      const rect = frame.getBoundingClientRect();
      const viewport = window.innerHeight;

      // progress: -1 when the frame is just below the viewport,
      // +1 when it has just scrolled above it, 0 at vertical center.
      const progress =
        (viewport / 2 - (rect.top + rect.height / 2)) /
        (viewport / 2 + rect.height / 2);

      img.style.transform = `translate3d(0, ${(-progress * strength).toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div
      ref={frameRef}
      className={`relative overflow-hidden ${className}`}
      style={{ height }}
      role="img"
      aria-label={alt}
    >
      <div
        ref={imgRef}
        className="absolute left-0 w-full bg-cover bg-center will-change-transform"
        style={{
          top: `-${strength}px`,
          bottom: `-${strength}px`,
          backgroundImage: `url(${src})`,
        }}
      />
    </div>
  );
}
