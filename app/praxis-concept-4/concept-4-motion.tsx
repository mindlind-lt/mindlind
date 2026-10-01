"use client";

// Scroll motion for /praxis-concept-4. Same contract as components/praxis-motion:
// one island, markup found by `data-c4`, nothing built under reduced motion,
// above-the-fold start states in CSS (.c4-enter).
//
// One idea throughout — blur to sharp. Blur is costly to animate, so it is only
// ever tweened on a handful of elements at a time (words of one heading, one
// list item, one photograph), never on a whole section.

import { useEffect } from "react";

import { gsap, ScrollTrigger, SplitText, registerGsap } from "@/lib/gsap";

const EASE = "power4.out";
const START = "top 82%";

export default function ConceptFourMotion() {
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
          const local: (() => void)[] = [];

          // ---- Hero lens ----------------------------------------------------
          const lens = document.querySelector<HTMLElement>('[data-c4="lens"]');
          const hero = document.querySelector<HTMLElement>('[data-c4="hero"]');

          if (lens && hero) {
            // The lens trails the pointer with a little weight. On touch, where
            // there is no pointer to follow, it drifts on its own.
            const pos = { x: 0.62, y: 0.42, tx: 0.62, ty: 0.42 };
            const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
            let t = 0;
            const tick = () => {
              if (!fine) {
                t += 0.006;
                pos.tx = 0.55 + Math.sin(t) * 0.18;
                pos.ty = 0.45 + Math.sin(t * 1.3) * 0.14;
              }
              pos.x += (pos.tx - pos.x) * 0.08;
              pos.y += (pos.ty - pos.y) * 0.08;
              lens.style.setProperty("--lx", `${(pos.x * 100).toFixed(2)}%`);
              lens.style.setProperty("--ly", `${(pos.y * 100).toFixed(2)}%`);
            };
            gsap.ticker.add(tick);
            local.push(() => gsap.ticker.remove(tick));

            const onMove = (e: PointerEvent) => {
              const b = lens.getBoundingClientRect();
              pos.tx = (e.clientX - b.left) / b.width;
              pos.ty = (e.clientY - b.top) / b.height;
            };
            if (fine) {
              hero.addEventListener("pointermove", onMove);
              local.push(() => hero.removeEventListener("pointermove", onMove));
            }

            // Opening: the lens grows out of nothing.
            gsap.fromTo(lens, { "--lr": "0px" }, { "--lr": desktop ? "190px" : "120px", duration: 1.8, ease: "expo.out", delay: 0.3 });

            // Scrolling brings the whole picture into focus.
            const full = () => `${Math.hypot(lens.offsetWidth, lens.offsetHeight)}px`;
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: hero,
                  start: "top top",
                  end: "+=100%",
                  pin: '[data-c4="hero-stage"]',
                  scrub: 0.8,
                  invalidateOnRefresh: true,
                },
              })
              .to(lens, { "--lr": full, ease: "power2.in", duration: 1 }, 0)
              .to(".c4-lens-ring, .c4-lens-label", { autoAlpha: 0, duration: 0.3 }, 0.55)
              .to(".c4-hero-img--sharp", { scale: 1, duration: 1, ease: "none" }, 0)
              .to(".c4-hero-img--blur", { scale: 1, duration: 1, ease: "none" }, 0)
              .to('[data-c4="hero-panel"]', { y: desktop ? -40 : -20, duration: 1, ease: "none" }, 0);
          }

          // Headline sharpens word by word.
          const title = SplitText.create('[data-c4="hero-title"]', { type: "words" });
          splits.push(title);
          gsap.set('[data-c4="hero-title"]', { autoAlpha: 1 });
          gsap
            .timeline({ defaults: { ease: EASE } })
            .fromTo('[data-c4="hero-panel"]', { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 1.2 }, 0)
            .from(title.words, { filter: "blur(14px)", autoAlpha: 0, y: 12, duration: 1.1, stagger: 0.07 }, 0.25)
            .fromTo('[data-c4="hero-in"]', { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.1 }, 0.8);

          // ---- Focus text: words sharpen as they are read -------------------
          gsap.utils.toArray<HTMLElement>('[data-c4="focus-text"]').forEach((el) => {
            const s = SplitText.create(el, { type: "words" });
            splits.push(s);
            gsap.fromTo(
              s.words,
              { filter: "blur(8px)", opacity: 0.2 },
              {
                filter: "blur(0px)",
                opacity: 1,
                stagger: 0.1,
                ease: "none",
                scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 50%", scrub: true },
              }
            );
          });

          gsap.from('[data-c4="accent"]', {
            autoAlpha: 0,
            y: 40,
            filter: "blur(10px)",
            stagger: 0.12,
            duration: 1.1,
            ease: EASE,
            scrollTrigger: { trigger: ".c4-accents", start: START },
          });

          // ---- Section heads --------------------------------------------------
          gsap.utils.toArray<HTMLElement>(".c4-head").forEach((head) => {
            gsap.from(head.children, {
              autoAlpha: 0,
              y: 24,
              filter: "blur(10px)",
              stagger: 0.1,
              duration: 1.1,
              ease: EASE,
              scrollTrigger: { trigger: head, start: START },
            });
          });

          // ---- Questions: each one resolves as it reaches the middle --------
          gsap.utils.toArray<HTMLElement>('[data-c4="q"]').forEach((q) => {
            gsap
              .timeline({
                scrollTrigger: { trigger: q, start: "top 85%", end: "top 45%", scrub: true },
              })
              .fromTo(q.querySelector(".c4-q-text"), { filter: "blur(12px)", opacity: 0.25 }, { filter: "blur(0px)", opacity: 1, ease: "none" }, 0)
              .fromTo(q.querySelector(".c4-q-answer"), { autoAlpha: 0, x: -20 }, { autoAlpha: 1, x: 0, ease: "none" }, 0.5)
              .fromTo(q.querySelector(".c4-q-num"), { color: "rgba(26,26,26,0.25)" }, { color: "#087c4a", ease: "none" }, 0.4);
          });

          // ---- Compare ---------------------------------------------------------
          gsap.from('[data-c4="compare"]', {
            autoAlpha: 0,
            y: 60,
            scale: 0.96,
            duration: 1.2,
            ease: EASE,
            scrollTrigger: { trigger: '[data-c4="compare"]', start: "top 88%" },
          });

          // ---- Pillars: glass with light that follows the pointer -----------
          gsap.from('[data-c4="pillar"]', {
            autoAlpha: 0,
            y: 60,
            filter: "blur(12px)",
            stagger: 0.12,
            duration: 1.2,
            ease: EASE,
            scrollTrigger: { trigger: ".c4-pillars", start: START },
          });
          gsap.utils.toArray<HTMLElement>('[data-c4="pillar"]').forEach((card) => {
            gsap.from(card.querySelectorAll("li"), {
              autoAlpha: 0,
              x: -12,
              stagger: 0.05,
              duration: 0.7,
              ease: EASE,
              scrollTrigger: { trigger: card, start: "top 70%" },
            });
            if (!desktop) return;
            const onMove = (e: PointerEvent) => {
              const b = card.getBoundingClientRect();
              card.style.setProperty("--mx", `${e.clientX - b.left}px`);
              card.style.setProperty("--my", `${e.clientY - b.top}px`);
            };
            card.addEventListener("pointermove", onMove);
            local.push(() => card.removeEventListener("pointermove", onMove));
          });

          // The coloured light behind the glass drifts, slowly.
          gsap.utils.toArray<HTMLElement>('[data-c4="glow"]').forEach((g, i) => {
            gsap.to(g, {
              xPercent: i ? -18 : 22,
              yPercent: i ? 14 : -12,
              duration: 9 + i * 3,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            });
          });

          // ---- Statement: pinned, sharpening word by word -------------------
          const statement = SplitText.create('[data-c4="statement-text"]', { type: "words" });
          splits.push(statement);
          gsap
            .timeline({
              scrollTrigger: {
                trigger: '[data-c4="statement"]',
                start: "top top",
                end: "+=130%",
                pin: ".c4-statement-stage",
                scrub: 0.6,
              },
            })
            .fromTo(
              statement.words,
              { filter: "blur(16px)", opacity: 0.1, scale: 1.08 },
              { filter: "blur(0px)", opacity: 1, scale: 1, stagger: 0.12, duration: 0.6, ease: "power1.out" }
            )
            .fromTo('[data-c4="statement-note"]', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.5 }, ">-0.1");

          // ---- Local: the rings close in, the picture focuses ---------------
          gsap
            .timeline({
              scrollTrigger: { trigger: '[data-c4="local"]', start: "top 80%", end: "center 50%", scrub: 0.8 },
            })
            .fromTo('[data-c4="ring"]', { scale: 2.1, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.12, ease: "power2.out", svgOrigin: "200 200" }, 0)
            .fromTo('[data-c4="local-photo"] img', { filter: "blur(16px)", scale: 1.15 }, { filter: "blur(0px)", scale: 1, ease: "none" }, 0)
            .fromTo('[data-c4="pin"]', { autoAlpha: 0, y: -40, scale: 0.8 }, { autoAlpha: 1, y: 0, scale: 1, ease: "back.out(2)", duration: 0.4 }, 0.6);

          gsap.from(".c4-local-copy > *", {
            autoAlpha: 0,
            y: 24,
            stagger: 0.08,
            duration: 1,
            ease: EASE,
            scrollTrigger: { trigger: ".c4-local-copy", start: "top 75%" },
          });

          // ---- Steps: the frame holds still, the photo changes focus ---------
          const imgs = gsap.utils.toArray<HTMLElement>('[data-c4="step-img"]');
          const count = document.querySelector<HTMLElement>('[data-c4="step-count"]');
          const show = (index: number) => {
            imgs.forEach((img, i) => {
              gsap.to(img, {
                autoAlpha: i === index ? 1 : 0,
                filter: i === index ? "blur(0px)" : "blur(14px)",
                scale: i === index ? 1 : 1.06,
                duration: 0.9,
                ease: "power3.out",
                overwrite: true,
              });
            });
            if (count) count.textContent = String(index + 1).padStart(2, "0");
          };
          if (desktop) {
            gsap.set(imgs.slice(1), { autoAlpha: 0, filter: "blur(14px)" });
            gsap.utils.toArray<HTMLElement>('[data-c4="step"]').forEach((step, i) => {
              ScrollTrigger.create({
                trigger: step,
                start: "top 55%",
                end: "bottom 55%",
                onToggle: (self) => {
                  if (self.isActive) show(i);
                },
              });
            });
          }
          gsap.utils.toArray<HTMLElement>('[data-c4="step"]').forEach((step) => {
            gsap
              .timeline({ scrollTrigger: { trigger: step, start: "top 75%", end: "top 40%", scrub: true } })
              .fromTo(step.querySelectorAll(".c4-step-num, .c4-step-title, .c4-step-text"), { filter: "blur(10px)", opacity: 0.2 }, { filter: "blur(0px)", opacity: 1, stagger: 0.15, ease: "none" });
          });

          // ---- Goals ---------------------------------------------------------
          // The rows carry a CSS transition on filter/opacity for the hover
          // focus, so the reveal runs on their contents instead of fighting it.
          gsap.utils.toArray<HTMLElement>('[data-c4="goal"]').forEach((row) => {
            gsap.from(row.children, {
              autoAlpha: 0,
              y: 24,
              filter: "blur(10px)",
              stagger: 0.06,
              duration: 1,
              ease: EASE,
              scrollTrigger: { trigger: row, start: "top 88%" },
            });
          });

          // ---- Work: blurred until it arrives -------------------------------
          gsap.utils.toArray<HTMLElement>('[data-c4="work"]').forEach((w) => {
            gsap.fromTo(
              w.querySelector("img"),
              { filter: "blur(18px)", scale: 1.12 },
              {
                filter: "blur(0px)",
                scale: 1,
                ease: "none",
                scrollTrigger: { trigger: w, start: "top 95%", end: "top 40%", scrub: true },
              }
            );
            gsap.from(w.querySelector(".c4-work-meta"), {
              autoAlpha: 0,
              y: 30,
              duration: 1,
              ease: EASE,
              scrollTrigger: { trigger: w, start: "top 60%" },
            });
          });

          return () => {
            splits.forEach((s) => s.revert());
            local.forEach((fn) => fn());
          };
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
