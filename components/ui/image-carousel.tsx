"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type Slide = {
  src: string;
  alt?: string;
};

export function ImageCarousel({ slides }: { slides: Slide[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
    duration: 26,
  });

  const [isDragging, setIsDragging] = useState(false);

  const onPointerDown = useCallback(() => setIsDragging(true), []);
  const onPointerUp = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("pointerUp", onPointerUp);
    return () => {
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("pointerUp", onPointerUp);
    };
  }, [emblaApi, onPointerDown, onPointerUp]);

  return (
    <div
      className="overflow-visible select-none"
      ref={emblaRef}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      <div className="flex gap-6 [touch-action:pan-y]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative min-w-0 shrink-0 grow-0 basis-full"
          >
            <Image
              src={slide.src}
              width={1000}
              height={1000}
              alt={slide.alt ?? ""}
              draggable={false}
              className="w-full h-auto rounded-lg pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
