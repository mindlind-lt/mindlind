"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  src: string;
  /** Describe the image, or leave empty for a purely decorative one. */
  alt?: string;
  /** Visible window height, e.g. "600px", "70vh" or 600. */
  height?: string | number;
  /**
   * How far the image drifts across the scroll, in px. Higher = stronger.
   * A negative value drifts "down"; `direction` says the same thing out loud.
   */
  strength?: number;
  /**
   * Which way the image drifts while you scroll down — "up" (the default look)
   * makes it travel with you, "down" makes it hang back. Wins over the sign of
   * `strength`, which is then just a magnitude.
   */
  direction?: "up" | "down";
  /** Focal point of the crop, any `object-position` value. */
  objectPosition?: string;
  /** Passed to `next/image`; the frame is full-bleed by default. */
  sizes?: string;
  /** Preload the image — set on the hero/LCP image of a page. */
  preload?: boolean;
  quality?: number;
  unoptimized?: boolean;
  /** Classes for the visible frame. */
  className?: string;
  /** Classes for the drifting image itself. */
  imageClassName?: string;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function ParallaxImage({
  src,
  alt = "",
  height = "600px",
  strength = 80,
  direction,
  objectPosition = "center",
  sizes = "100vw",
  preload = false,
  quality,
  unoptimized,
  className = "",
  imageClassName = "",
}: ParallaxImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  // A positive distance drifts up, negative drifts down. `direction` is
  // authoritative when given, so the two ways of asking can't cancel out.
  const distance = direction
    ? Math.abs(strength) * (direction === "up" ? 1 : -1)
    : strength;
  // The layer overhangs the frame by the drift distance on both sides, so the
  // frame stays covered at either end of the travel. Sign lives in `distance`.
  const overhang = Math.abs(distance);

  useEffect(() => {
    const frame = frameRef.current;
    const layer = layerRef.current;
    if (!frame || !layer) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let inView = true;

    const render = () => {
      raf = 0;
      const rect = frame.getBoundingClientRect();
      const viewport = window.innerHeight;
      const span = viewport / 2 + rect.height / 2;

      // progress: -1 when the frame is just below the viewport,
      // +1 when it has just scrolled above it, 0 at vertical center.
      // Clamped so the layer never drifts past its own overhang.
      const progress =
        span > 0
          ? clamp((viewport / 2 - (rect.top + rect.height / 2)) / span, -1, 1)
          : 0;

      const offset = reduceMotion.matches ? 0 : -progress * distance;
      layer.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };

    const onScroll = () => {
      if (inView) schedule();
    };

    // Offscreen frames cost nothing per scroll event, and only pay for a
    // compositor layer while they can actually be seen.
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        layer.style.willChange = inView ? "transform" : "auto";
        if (inView) schedule();
      },
      { rootMargin: "64px" },
    );
    observer.observe(frame);

    // Layout changes move the frame without a scroll event.
    const resizeObserver = new ResizeObserver(onScroll);
    resizeObserver.observe(frame);

    render();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    reduceMotion.addEventListener("change", render);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      reduceMotion.removeEventListener("change", render);
      observer.disconnect();
      resizeObserver.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [distance]);

  return (
    <div
      ref={frameRef}
      className={cn("relative overflow-hidden", className)}
      style={{ height: typeof height === "number" ? `${height}px` : height }}
    >
      <div
        ref={layerRef}
        className="absolute left-0 w-full"
        style={{ top: `${-overhang}px`, bottom: `${-overhang}px` }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          quality={quality}
          unoptimized={unoptimized}
          className={cn("object-cover", imageClassName)}
          style={{ objectPosition }}
        />
      </div>
    </div>
  );
}
