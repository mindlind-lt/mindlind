"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface CountUpOnViewProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export default function CountUpOnView({
  value,
  prefix = "",
  suffix = "",
  decimals,
  duration = 1400,
  className,
}: CountUpOnViewProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const resolvedDecimals = useMemo(() => {
    if (typeof decimals === "number") {
      return decimals;
    }

    return Number.isInteger(value) ? 0 : 1;
  }, [decimals, value]);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || hasAnimated) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        observer.disconnect();

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) {
          setDisplayValue(value);
          setHasAnimated(true);
          return;
        }

        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          setDisplayValue(value * progress);

          if (progress < 1) {
            requestAnimationFrame(animate);
            return;
          }

          setDisplayValue(value);
          setHasAnimated(true);
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [duration, hasAnimated, value]);

  const formattedValue = `${prefix}${displayValue.toFixed(resolvedDecimals)}${suffix}`;

  return (
    <div ref={elementRef} className={className}>
      {formattedValue}
    </div>
  );
}
