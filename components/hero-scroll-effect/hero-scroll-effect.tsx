"use client";

import { useEffect } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function HeroScrollEffect() {
  useEffect(() => {
    const heroInner = document.querySelector<HTMLElement>(".hero-inner");

    if (!heroInner) return;

    heroInner.style.willChange = "transform, opacity";

    let ticking = false;

    const update = () => {
      const scrollY = window.scrollY;
      const heroHeight = heroInner.parentElement?.offsetHeight ?? window.innerHeight;

      // Parallax: push content down as page scrolls up so it moves at ~65% of scroll speed
      const translateY = scrollY * 0.35;

      // Fade out: fully transparent at 60% of hero height
      const opacity = clamp(1 - scrollY / (heroHeight * 0.6), 0, 1);

      heroInner.style.transform = `translateY(${translateY.toFixed(2)}px)`;
      heroInner.style.opacity = opacity.toFixed(3);

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
      heroInner.style.removeProperty("transform");
      heroInner.style.removeProperty("opacity");
      heroInner.style.removeProperty("will-change");
    };
  }, []);

  return null;
}
