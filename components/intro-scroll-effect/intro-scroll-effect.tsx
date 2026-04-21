"use client";

import { useEffect } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function IntroScrollEffect() {
  useEffect(() => {
    const figure = document.querySelector<HTMLElement>(".intro-figure");

    if (!figure) return;

    figure.style.willChange = "transform";

    let ticking = false;

    const update = () => {
      const section = figure.closest<HTMLElement>(".intro");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // progress: 0 when section top enters viewport, 1 when section bottom leaves
      const totalTravel = viewportHeight + section.offsetHeight;
      const rawProgress = (viewportHeight - rect.top) / totalTravel;
      const progress = clamp(rawProgress, 0, 1);

      // Tilt from +20deg (entering) → 0deg (centered) → -20deg (leaving)
      const rotateY = 18 - progress * 36;

      // Scale: 1 at edges, peaks at 1.08 when centered (progress = 0.5)
      const scale = 1 + 0.08 * (1 - Math.abs(progress * 2 - 1));

      figure.style.transform = `perspective(900px) rotateY(${rotateY.toFixed(2)}deg) scale(${scale.toFixed(4)})`;

      ticking = false;
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    requestUpdate();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      figure.style.removeProperty("transform");
      figure.style.removeProperty("will-change");
    };
  }, []);

  return null;
}
