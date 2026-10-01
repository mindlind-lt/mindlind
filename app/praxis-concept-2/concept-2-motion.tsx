"use client";

// Scroll motion for /praxis-concept-2. Same contract as components/praxis-motion:
// one client island owns every timeline, markup is found by `data-c2`, nothing
// is built under prefers-reduced-motion, and the hero's pre-animation state
// lives in the CSS (.c2-enter) so it is never painted finished first.
//
// The character of this concept is "calm": long scrubbed passages tied to the
// reader's own scroll, soft power-curves, no bounce, nothing that spins up on
// its own.

import { useEffect } from "react";

import { gsap, ScrollTrigger, SplitText, registerGsap } from "@/lib/gsap";

const EASE = "power4.out";
const START = "top 85%";

export default function ConceptTwoMotion() {
  useEffect(() => {
    registerGsap();

    let mm: gsap.MatchMedia | null = null;
    let cancelled = false;

    document.fonts.ready.then(() => {
      if (cancelled) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.documentElement.classList.add("c2-static");
        return;
      }

      mm = gsap.matchMedia();

      mm.add(
        { desktop: "(min-width: 64rem)", mobile: "(max-width: 63.999rem)" },
        (ctx) => {
          const { desktop } = ctx.conditions as { desktop: boolean; mobile: boolean };
          const splits: SplitText[] = [];
          const split = (target: gsap.DOMTarget, type: "lines" | "words") => {
            const s = SplitText.create(target, {
              type,
              mask: type === "lines" ? "lines" : undefined,
              linesClass: "c2-split-line",
            });
            splits.push(s);
            return s;
          };

          // ---- Hero ---------------------------------------------------------
          const heroTitle = split('[data-c2="hero-title"]', "lines");
          gsap.set('[data-c2="hero-title"]', { autoAlpha: 1 });

          gsap
            .timeline({ defaults: { ease: EASE } })
            .fromTo(
              '[data-c2="hero-meta"]',
              { autoAlpha: 0, y: 12 },
              { autoAlpha: 1, y: 0, duration: 0.9 },
              0
            )
            .from(heroTitle.lines, { yPercent: 110, duration: 1.4, stagger: 0.12 }, 0.1)
            .fromTo(
              ['[data-c2="hero-lead"]', '[data-c2="hero-cta"]'],
              { autoAlpha: 0, y: 20 },
              { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.1 },
              0.6
            )
            .fromTo(
              ".c2-reveal-frame",
              { autoAlpha: 0, y: 60 },
              { autoAlpha: 1, y: 0, duration: 1.4 },
              0.5
            );

          // The framed picture opens to the full screen. On desktop the frame
          // holds while it does, so the opening is the thing being scrolled.
          const reveal = gsap.timeline({
            scrollTrigger: {
              trigger: '[data-c2="reveal"]',
              start: desktop ? "top top" : "top 85%",
              end: desktop ? "+=90%" : "bottom 60%",
              pin: desktop,
              scrub: 0.8,
            },
          });
          reveal
            .fromTo(
              ".c2-reveal-frame",
              {
                clipPath: desktop
                  ? "inset(12% 24% 12% 24% round 28px)"
                  : "inset(4% 6% 4% 6% round 20px)",
              },
              { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none" },
              0
            )
            .fromTo(".c2-reveal-img", { scale: 1.35 }, { scale: 1, ease: "none" }, 0)
            .fromTo(
              ".c2-reveal-caption > span",
              { autoAlpha: 0, y: 24 },
              { autoAlpha: 1, y: 0, stagger: 0.1, ease: "power2.out", duration: 0.35 },
              0.4
            );

          // ---- Accents ------------------------------------------------------
          gsap.utils.toArray<HTMLElement>(".c2-accent").forEach((el, i) => {
            const num = el.querySelector<HTMLElement>("[data-c2-count]");
            const target = Number(num?.textContent ?? 0);
            const state = { v: 0 };
            gsap
              .timeline({ scrollTrigger: { trigger: '[data-c2="accents"]', start: START } })
              .from(el, { autoAlpha: 0, y: 40, duration: 1.2, ease: EASE }, i * 0.15)
              .to(
                state,
                {
                  v: target,
                  duration: 1.4,
                  ease: "power2.out",
                  snap: { v: 1 },
                  onUpdate: () => {
                    if (num) num.textContent = String(state.v);
                  },
                },
                i * 0.15
              );
          });

          // ---- Statement, word by word ------------------------------------
          const readout = split('[data-c2="readout"]', "words");
          gsap.fromTo(
            readout.words,
            { opacity: 0.14 },
            {
              opacity: 1,
              stagger: 0.1,
              ease: "none",
              scrollTrigger: {
                trigger: '[data-c2="readout"]',
                start: "top 80%",
                end: "bottom 45%",
                scrub: true,
              },
            }
          );

          // ---- Questions, pinned -------------------------------------------
          const items = gsap.utils.toArray<HTMLElement>('[data-c2="qa-item"]');
          const counter = document.querySelector<HTMLElement>('[data-c2="qa-current"]');
          gsap.set(items.slice(1), { autoAlpha: 0 });

          const qa = gsap.timeline({
            defaults: { ease: "power2.inOut" },
            scrollTrigger: {
              trigger: '[data-c2="qa"]',
              start: "top top",
              end: `+=${items.length * 70}%`,
              pin: ".c2-qa-stage",
              scrub: 0.6,
              onUpdate: (self) => {
                const i = Math.min(items.length - 1, Math.floor(self.progress * items.length));
                if (counter) counter.textContent = String(i + 1).padStart(2, "0");
              },
            },
          });

          qa.fromTo('[data-c2="qa-bar"]', { scaleX: 0 }, { scaleX: 1, ease: "none", duration: items.length }, 0);
          items.forEach((item, i) => {
            const a = item.querySelector(".c2-qa-a");
            const at = i;
            if (i > 0) {
              qa.fromTo(item, { autoAlpha: 0, y: 70 }, { autoAlpha: 1, y: 0, duration: 0.45 }, at);
            }
            qa.fromTo(a, { autoAlpha: 0, x: -24 }, { autoAlpha: 1, x: 0, duration: 0.3 }, at + 0.3);
            if (i < items.length - 1) {
              qa.to(item, { autoAlpha: 0, y: -70, duration: 0.45 }, at + 0.85);
            }
          });

          // ---- Stacked cards -----------------------------------------------
          // Each card settles back as the next one slides over it.
          const cards = gsap.utils.toArray<HTMLElement>('[data-c2="card"]');
          cards.forEach((card, i) => {
            const next = cards[i + 1];
            gsap.from(card.querySelectorAll(".c2-card-list li"), {
              autoAlpha: 0,
              y: 14,
              stagger: 0.05,
              duration: 0.8,
              ease: EASE,
              scrollTrigger: { trigger: card, start: "top 70%" },
            });
            if (!next) return;
            gsap.to(card, {
              scale: 0.92,
              "--c2-shade": 0.5,
              ease: "none",
              scrollTrigger: {
                trigger: next,
                start: "top bottom",
                end: "top 20%",
                scrub: true,
              },
            });
          });

          // ---- Green band ---------------------------------------------------
          gsap.fromTo(
            '[data-c2="band"]',
            { clipPath: desktop ? "inset(0% 4% 0% 4% round 48px)" : "inset(0% 3% 0% 3% round 28px)" },
            {
              clipPath: "inset(0% 0% 0% 0% round 0px)",
              ease: "none",
              scrollTrigger: {
                trigger: '[data-c2="band"]',
                start: "top bottom",
                end: "top 15%",
                scrub: true,
              },
            }
          );

          const quote = split('[data-c2="band-quote"]', "lines");
          gsap.from(quote.lines, {
            yPercent: 105,
            stagger: 0.15,
            ease: "none",
            scrollTrigger: {
              trigger: '[data-c2="band-quote"]',
              start: "top 85%",
              end: "bottom 55%",
              scrub: 0.6,
            },
          });

          gsap.from([".c2-band-intro", ".c2-band-text"], {
            autoAlpha: 0,
            y: 24,
            duration: 1,
            ease: EASE,
            stagger: 0.1,
            scrollTrigger: { trigger: ".c2-band-intro", start: START },
          });

          // ---- Parallax inside framed images -------------------------------
          gsap.utils.toArray<HTMLElement>('[data-c2="parallax"]').forEach((img) => {
            gsap.fromTo(
              img,
              { yPercent: -7, scale: 1.16 },
              {
                yPercent: 7,
                scale: 1.16,
                ease: "none",
                scrollTrigger: {
                  trigger: img.parentElement,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              }
            );
          });

          // ---- Work: the second card runs on a slower track ----------------
          gsap.from(".c2-work", {
            autoAlpha: 0,
            y: 60,
            duration: 1.2,
            stagger: 0.15,
            ease: EASE,
            scrollTrigger: { trigger: ".c2-works", start: START },
          });
          if (desktop) {
            gsap.fromTo(
              ".c2-work--2",
              { y: 120 },
              {
                y: -40,
                ease: "none",
                scrollTrigger: {
                  trigger: ".c2-works",
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              }
            );
          }

          // ---- Process: horizontal on desktop ------------------------------
          if (desktop) {
            const track = document.querySelector<HTMLElement>('[data-c2="steps-track"]');
            if (track) {
              const distance = () => track.scrollWidth - window.innerWidth;
              const horizontal = gsap.to(track, {
                x: () => -distance(),
                ease: "none",
                scrollTrigger: {
                  trigger: '[data-c2="steps"]',
                  start: "top top",
                  end: () => `+=${distance()}`,
                  pin: ".c2-steps-pin",
                  scrub: 0.8,
                  invalidateOnRefresh: true,
                },
              });

              gsap.fromTo(
                '[data-c2="steps-bar"]',
                { scaleX: 0 },
                {
                  scaleX: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: '[data-c2="steps"]',
                    start: "top top",
                    end: () => `+=${distance()}`,
                    scrub: 0.8,
                    invalidateOnRefresh: true,
                  },
                }
              );

              // Each photo drifts against the track, a window being walked past.
              gsap.utils.toArray<HTMLElement>(".c2-step").forEach((step) => {
                const img = step.querySelector("img");
                gsap.fromTo(
                  img,
                  { xPercent: -10 },
                  {
                    xPercent: 10,
                    ease: "none",
                    scrollTrigger: {
                      trigger: step,
                      containerAnimation: horizontal,
                      start: "left right",
                      end: "right left",
                      scrub: true,
                    },
                  }
                );
                gsap.from(step.querySelectorAll(".c2-step-copy > *"), {
                  autoAlpha: 0,
                  y: 24,
                  stagger: 0.08,
                  duration: 0.9,
                  ease: EASE,
                  scrollTrigger: {
                    trigger: step,
                    containerAnimation: horizontal,
                    start: "left 70%",
                  },
                });
              });
            }
          } else {
            gsap.utils.toArray<HTMLElement>(".c2-step, .c2-steps-end").forEach((step) => {
              gsap.from(step, {
                autoAlpha: 0,
                y: 40,
                duration: 1,
                ease: EASE,
                scrollTrigger: { trigger: step, start: START },
              });
            });
          }

          // ---- Local: the photo opens out of a circle ----------------------
          gsap
            .timeline({
              scrollTrigger: {
                trigger: '[data-c2="local"]',
                start: "top 85%",
                end: "center 45%",
                scrub: 0.8,
              },
            })
            .fromTo(
              '[data-c2="local-photo"]',
              { clipPath: "circle(16% at 50% 50%)" },
              { clipPath: "circle(75% at 50% 50%)", ease: "none" },
              0
            )
            .fromTo('[data-c2="local-photo"] img', { scale: 1.4 }, { scale: 1, ease: "none" }, 0);

          gsap.fromTo(
            '[data-c2="orbit"]',
            { rotation: -30 },
            {
              rotation: 90,
              ease: "none",
              scrollTrigger: {
                trigger: '[data-c2="local"]',
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );

          gsap.from('[data-c2="local-item"]', {
            autoAlpha: 0,
            y: 30,
            stagger: 0.12,
            duration: 1,
            ease: EASE,
            scrollTrigger: { trigger: ".c2-local-copy", start: "top 75%" },
          });

          // ---- Goals --------------------------------------------------------
          gsap.utils.toArray<HTMLElement>('[data-c2="goal"]').forEach((row) => {
            gsap
              .timeline({ scrollTrigger: { trigger: row, start: "top 88%" } })
              .from(row.querySelector(".c2-goal-rule"), { scaleX: 0, duration: 1.2, ease: "power3.inOut" }, 0)
              .from(
                row.querySelectorAll(".c2-goal-name, .c2-goal-ask, .c2-goal-how"),
                { autoAlpha: 0, y: 18, stagger: 0.08, duration: 0.9, ease: EASE },
                0.25
              );
          });

          // ---- Team ---------------------------------------------------------
          gsap.from('[data-c2="person"]', {
            autoAlpha: 0,
            y: 40,
            stagger: 0.08,
            duration: 1.1,
            ease: EASE,
            scrollTrigger: { trigger: ".c2-people", start: START },
          });

          // ---- Closing ------------------------------------------------------
          const closing = split('[data-c2="closing-title"]', "lines");
          gsap.from(closing.lines, {
            yPercent: 105,
            stagger: 0.18,
            ease: "none",
            scrollTrigger: {
              trigger: '[data-c2="closing"]',
              start: "top 80%",
              end: "bottom 60%",
              scrub: 0.6,
            },
          });

          // ---- Section heads ------------------------------------------------
          gsap.utils.toArray<HTMLElement>(".c2-section-head, .c2-statement-grid").forEach((head) => {
            gsap.from(head.querySelectorAll(".c2-label, .c2-h2"), {
              autoAlpha: 0,
              y: 30,
              stagger: 0.1,
              duration: 1.1,
              ease: EASE,
              scrollTrigger: { trigger: head, start: START },
            });
          });

          return () => splits.forEach((s) => s.revert());
        }
      );

      ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
      mm?.revert();
    };
  }, []);

  return null;
}
