"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

interface TeamCarouselProps {
  children: React.ReactNode;
  className?: string;
}

export default function TeamCarousel({ children, className }: TeamCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      dragFree: true,
      loop: false,
      containScroll: "trimSnaps",
    },
    [
      Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
    ]
  );

  const slides = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return (
        <div className="flex-shrink-0 w-[78vw] sm:w-[380px] lg:w-[480px]">
          {child}
        </div>
      );
    }
    return child;
  });

  return (
    <div ref={emblaRef} className={cn(className)}>
      <div className="flex gap-4 sm:gap-8">{slides}</div>
    </div>
  );
}
