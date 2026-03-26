"use client";

import { useEffect } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function ServicesScrollEffect() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>(".services-section");

    if (!section) {
      return;
    }

    let ticking = false;

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;

      // Start when the section approaches the viewport and finish before it fully exits.
      const start = viewportHeight * 0.9;
      const end = -rect.height * 0.35;
      const rawProgress = (start - rect.top) / (start - end);
      const progress = clamp(rawProgress, 0, 1);
      const rotate = progress * -42;
      const scale = 1 + progress * 1.2;
      const translateY = progress * 360;

      section.style.setProperty("--services-rotate", `${rotate.toFixed(2)}deg`);
      section.style.setProperty("--services-scale", scale.toFixed(4));
      section.style.setProperty("--services-translate-y", `${translateY.toFixed(2)}px`);
      ticking = false;
    };

    const requestUpdate = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateProgress);
    };

    requestUpdate();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      section.style.removeProperty("--services-rotate");
      section.style.removeProperty("--services-scale");
      section.style.removeProperty("--services-translate-y");
    };
  }, []);

  return null;
}
