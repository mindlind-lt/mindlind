"use client";

import "./service-blocks.css";

import { useEffect, useRef } from "react";

type ServiceBlocksProps = {
  children: React.ReactNode;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function ServiceBlocks({ children }: ServiceBlocksProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const blocks = Array.from(
      container.querySelectorAll<HTMLElement>(".service-block")
    );

    if (blocks.length === 0) return;

    const blockItems = blocks.map((block) =>
      Array.from(
        block.querySelectorAll<HTMLElement>(
          ".service-block-title, .service-block-item"
        )
      )
    );

    const hasItems = blockItems.some((items) => items.length > 0);
    if (!hasItems) return;

    if (prefersReducedMotion) {
      blockItems.forEach((items) => {
        items.forEach((item) => {
          item.style.setProperty("--reveal-x", "0px");
        });
      });
      return;
    }

    let rafId = 0;

    const update = () => {
      const viewportHeight = window.innerHeight || 1;
      const start = viewportHeight * 1.15;
      const end = viewportHeight * 0.7;
      const range = Math.max(start - end, 1);

      blockItems.forEach((items) => {
        items.forEach((item, index) => {
          const rect = item.getBoundingClientRect();
          const rawProgress = (start - rect.top) / range;
          const stagger = index * 0.07;
          const progress = clamp(rawProgress - stagger, 0, 1);
          const easedProgress = easeInOutCubic(progress);
          const translate = (1 - easedProgress) * 460;

          item.style.setProperty("--reveal-x", `${translate}px`);
        });
      });
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        update();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className="service-blocks">
      {children}
    </div>
  );
}
