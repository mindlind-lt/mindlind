"use client";

// Scroll motion for /praxis-concept-5. Same contract as components/praxis-motion:
// one island, markup found by `data-c5`, nothing built under reduced motion,
// above-the-fold start states in CSS (.c5-enter).
//
// The vocabulary is paperwork: fields that type themselves, ticks and circles
// drawn with a pen (DrawSVG), a stamp that lands, photos that straighten as if
// clipped to a sheet, badges that swing on their lanyards.

import { useEffect } from "react";

import { gsap, ScrollTrigger, SplitText, registerGsap } from "@/lib/gsap";

const EASE = "power4.out";
const START = "top 82%";

/** Types an element's own text in, from empty, at a pen's pace. */
function typeIn(tl: gsap.core.Timeline, el: HTMLElement, at: number | string) {
  const full = el.dataset.text ?? el.textContent ?? "";
  const s = { n: 0 };
  tl.set(el, { textContent: "" }, 0);
  tl.to(s, {
    n: full.length,
    duration: full.length * 0.06,
    ease: "none",
    onUpdate: () => {
      el.textContent = full.slice(0, Math.round(s.n));
    },
  }, at);
}

export default function ConceptFiveMotion() {
  useEffect(() => {
    registerGsap();

    let mm: gsap.MatchMedia | null = null;
    let cancelled = false;

    document.fonts.ready.then(() => {
      if (cancelled) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      mm = gsap.matchMedia();

      mm.add(
        { desktop: "(min-width: 64rem)", mobile: "(max-width: 63.999rem)" },
        (ctx) => {
          const { desktop } = ctx.conditions as { desktop: boolean };
          const splits: SplitText[] = [];

          // ---- Hero: the form fills itself in ------------------------------
          const title = SplitText.create('[data-c5="hero-title"]', { type: "lines", mask: "lines", linesClass: "c5-split-line" });
          splits.push(title);
          gsap.set('[data-c5="hero-title"]', { autoAlpha: 1 });

          const hero = gsap.timeline({ defaults: { ease: EASE } });
          hero
            .from(title.lines, { yPercent: 105, duration: 1.2, stagger: 0.1 }, 0.1)
            .fromTo('[data-c5="hero-in"]', { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.1 }, 0.4)
            .fromTo(".c5-sheet--under", { autoAlpha: 0, y: 80, rotation: 10 }, { autoAlpha: 1, y: 0, rotation: 5, duration: 1.4 }, 0.2)
            .fromTo('[data-c5="form"]', { autoAlpha: 0, y: 120, rotation: -9 }, { autoAlpha: 1, y: 0, rotation: -2.5, duration: 1.4 }, 0.3);

          gsap.utils.toArray<HTMLElement>('[data-c5="type"]').forEach((el, i) => typeIn(hero, el, 1.2 + i * 0.75));
          hero.fromTo('[data-c5="form"] [data-c5="tick"]', { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.35, stagger: 0.28, ease: "power2.inOut" }, 2.6);
          hero.fromTo('[data-c5="sign"]', { drawSVG: "0%" }, { drawSVG: "100%", duration: 1.1, ease: "power1.inOut" }, ">0.1");
          hero
            .fromTo('[data-c5="stamp"]', { autoAlpha: 0, scale: 2.6, rotation: -28 }, { autoAlpha: 0.92, scale: 1, rotation: -12, duration: 0.42, ease: "power4.in" }, ">0.15")
            .to('[data-c5="form"]', { y: 5, duration: 0.07, yoyo: true, repeat: 1, ease: "power1.inOut" });

          // The papers straighten and lift as the page moves on.
          gsap.to('[data-c5="papers"]', {
            y: -60,
            rotation: 2,
            ease: "none",
            scrollTrigger: { trigger: ".c5-hero", start: "top top", end: "bottom top", scrub: true },
          });

          // ---- Section heads -------------------------------------------------
          gsap.utils.toArray<HTMLElement>(".c5-head").forEach((head) => {
            gsap.from(head.children, {
              autoAlpha: 0,
              y: 24,
              stagger: 0.08,
              duration: 1,
              ease: EASE,
              scrollTrigger: { trigger: head, start: START },
            });
          });

          // ---- Chart: each question ticked, its answer noted in the margin --
          gsap.utils.toArray<HTMLElement>('[data-c5="chart-row"]').forEach((row) => {
            gsap
              .timeline({ scrollTrigger: { trigger: row, start: "top 78%" } })
              .from(row, { autoAlpha: 0, y: 18, duration: 0.7, ease: EASE })
              .fromTo(row.querySelector('[data-c5="tick"]'), { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.4, ease: "power2.inOut" }, 0.35)
              .fromTo(row.querySelector('[data-c5="chart-a"]'), { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 0.9, ease: "power2.inOut" }, 0.6);
          });

          // ---- Check and card box arrive ------------------------------------
          gsap.from('[data-c5="check"] .c5-check-q', {
            autoAlpha: 0,
            y: 30,
            stagger: 0.07,
            duration: 0.9,
            ease: EASE,
            scrollTrigger: { trigger: '[data-c5="check"]', start: START },
          });
          gsap.from(".c5-rx", {
            autoAlpha: 0,
            y: 80,
            rotation: 4,
            duration: 1.2,
            ease: EASE,
            scrollTrigger: { trigger: '[data-c5="check"]', start: "top 70%" },
          });

          gsap.from('[data-c5="cardbox"] .c5-card', {
            y: "+=120",
            autoAlpha: 0,
            stagger: 0.12,
            duration: 1.1,
            ease: EASE,
            scrollTrigger: { trigger: '[data-c5="cardbox"]', start: "top 75%" },
          });

          // ---- Note: a pen circles the two words -----------------------------
          gsap.from('[data-c5="note"]', {
            autoAlpha: 0,
            y: 60,
            rotation: -2,
            duration: 1.2,
            ease: EASE,
            scrollTrigger: { trigger: '[data-c5="note"]', start: START },
          });
          gsap.fromTo(
            '[data-c5="circle"]',
            { drawSVG: "0%" },
            {
              drawSVG: "100%",
              stagger: 0.5,
              ease: "none",
              scrollTrigger: { trigger: '[data-c5="note"]', start: "top 60%", end: "center 40%", scrub: 0.6 },
            }
          );

          // ---- Map: streets drawn, the radius opens, the pin drops ----------
          gsap
            .timeline({ scrollTrigger: { trigger: '[data-c5="map"]', start: "top 70%" } })
            .fromTo('[data-c5="street"]', { drawSVG: "0%" }, { drawSVG: "100%", duration: 1.4, stagger: 0.12, ease: "power2.inOut" })
            .fromTo('[data-c5="river"]', { drawSVG: "0%" }, { drawSVG: "100%", duration: 1.6, ease: "power2.inOut" }, 0.3)
            .fromTo('[data-c5="radius"]', { scale: 0, autoAlpha: 0, svgOrigin: "300 300" }, { scale: 1, autoAlpha: 1, duration: 1, ease: "expo.out", svgOrigin: "300 300" }, 1)
            .fromTo('[data-c5="pin"]', { y: -160, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, ease: "bounce.out" }, 1.1)
            .fromTo('[data-c5="polaroid"]', { autoAlpha: 0, y: 60, rotation: 14 }, { autoAlpha: 1, y: 0, rotation: 6, duration: 1.1, ease: EASE }, 1.4);

          gsap.utils.toArray<HTMLElement>(".c5-checklist li").forEach((li, i) => {
            gsap
              .timeline({ scrollTrigger: { trigger: ".c5-checklist", start: "top 75%" } })
              .from(li, { autoAlpha: 0, x: -14, duration: 0.6, ease: EASE }, i * 0.14)
              .fromTo(li.querySelector('[data-c5="tick"]'), { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.35, ease: "power2.inOut" }, i * 0.14 + 0.25);
          });

          // ---- Plan: photos straighten on their clips, boxes get ticked -----
          gsap.utils.toArray<HTMLElement>('[data-c5="plan"]').forEach((item) => {
            const photo = item.querySelector<HTMLElement>('[data-c5="plan-photo"]');
            gsap.fromTo(
              photo,
              { rotation: () => parseFloat(getComputedStyle(photo!).getPropertyValue("--tilt")) * 3, y: 40 },
              {
                rotation: () => parseFloat(getComputedStyle(photo!).getPropertyValue("--tilt")),
                y: 0,
                ease: "none",
                scrollTrigger: { trigger: item, start: "top 90%", end: "top 40%", scrub: 0.6 },
              }
            );
            gsap
              .timeline({ scrollTrigger: { trigger: item, start: "top 60%" } })
              .from(item.querySelectorAll(".c5-plan-copy > *"), { autoAlpha: 0, y: 20, stagger: 0.08, duration: 0.8, ease: EASE })
              .fromTo(item.querySelector('.c5-plan-marker [data-c5="tick"]'), { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.45, ease: "power2.inOut" }, 0.3);
          });
          gsap.fromTo(
            ".c5-plan",
            { "--line": 0 },
            {
              "--line": 1,
              ease: "none",
              scrollTrigger: { trigger: ".c5-plan", start: "top 60%", end: "bottom 60%", scrub: true },
            }
          );

          // ---- Report rows type in ----------------------------------------
          gsap.utils.toArray<HTMLElement>('[data-c5="report-row"]').forEach((row) => {
            gsap.from(row.children, {
              autoAlpha: 0,
              y: 12,
              stagger: 0.08,
              duration: 0.7,
              ease: EASE,
              scrollTrigger: { trigger: row, start: "top 88%" },
            });
          });

          // ---- Folders --------------------------------------------------------
          gsap.from('[data-c5="folder"]', {
            autoAlpha: 0,
            y: 80,
            rotation: (i) => (i ? 3 : -3),
            stagger: 0.15,
            duration: 1.2,
            ease: EASE,
            scrollTrigger: { trigger: ".c5-folders", start: START },
          });
          gsap.utils.toArray<HTMLElement>('[data-c5="folder"]').forEach((f) => {
            gsap.fromTo(
              f.querySelector(".c5-folder-paper"),
              { yPercent: 18 },
              {
                yPercent: desktop ? -6 : -2,
                ease: "none",
                scrollTrigger: { trigger: f, start: "top 90%", end: "bottom 30%", scrub: true },
              }
            );
          });

          // ---- Badges swing in on their lanyards ----------------------------
          gsap.utils.toArray<HTMLElement>('[data-c5="badge"]').forEach((b, i) => {
            gsap
              .timeline({ scrollTrigger: { trigger: ".c5-badges", start: "top 75%" } })
              .from(b, { y: -240, autoAlpha: 0, duration: 0.9, ease: "power3.out" }, i * 0.1)
              .fromTo(b, { rotation: i % 2 ? 14 : -14 }, { rotation: 0, duration: 2.2, ease: "elastic.out(1, 0.28)" }, i * 0.1 + 0.3);
          });

          return () => splits.forEach((s) => s.revert());
        }
      );

      ScrollTrigger.refresh();
    });

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      cancelled = true;
      mm?.revert();
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return null;
}
