"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface TeamCarouselProps {
  children: React.ReactNode;
}

export default function TeamCarousel({ children }: TeamCarouselProps) {
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
        <div className="flex-shrink-0 w-[480px]">
          {child}
        </div>
      );
    }
    return child;
  });

  return (
    <div ref={emblaRef}>
      <div className="flex gap-8">{slides}</div>
    </div>
  );
}
