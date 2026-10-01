"use client";

// Scroll motion for /praxis-concept-3. Same contract as components/praxis-motion:
// one island, markup found by `data-c3`, nothing built under reduced motion,
// above-the-fold start states in CSS (.c3-enter and the collage tiles).
//
// The signature piece is the rail: a path drawn down the left of the journey,
// threaded through each stage marker, with a dot that travels it as the page
// is read. The path is measured from the live layout, so it is rebuilt on every
// ScrollTrigger refresh (resize, fonts, images) before positions are computed.

import { useEffect } from "react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import { gsap, ScrollTrigger, SplitText, registerGsap } from "@/lib/gsap";

const EASE = "power4.out";
const START = "top 82%";
/** Where on the screen the travelling dot sits, as a ScrollTrigger position. */
const LINE = "55%";

export default function ConceptThreeMotion() {
  useEffect(() => {
    registerGsap();
    gsap.registerPlugin(MotionPathPlugin);

    let mm: gsap.MatchMedia | null = null;
    let cancelled = false;
    const cleanups: (() => void)[] = [];

    // ---- Rail geometry ---------------------------------------------------
    // Runs whether or not there is motion: the static page still shows the
    // route, just fully drawn.
    const buildRail = () => {
      const journey = document.querySelector<HTMLElement>('[data-c3="journey"]');
      const svg = document.querySelector<SVGSVGElement>('[data-c3="rail"]');
      if (!journey || !svg) return;

      const box = journey.getBoundingClientRect();
      const w = svg.getBoundingClientRect().width;
      const h = journey.offsetHeight;
      const x = w / 2;
      const amp = Math.min(22, w * 0.28);

      const ys = gsap.utils
        .toArray<HTMLElement>('[data-c3="stop"] .c3-stop-dot')
        .map((dot) => {
          const r = dot.getBoundingClientRect();
          return r.top + r.height / 2 - box.top;
        });

      // Gentle S-bends between the stops, alternating side, so the route
      // reads as walked rather than ruled.
      let d = `M${x},0`;
      let prev = 0;
      [...ys, h].forEach((y, i) => {
        const dy = y - prev;
        const side = i % 2 === 0 ? 1 : -1;
        d += ` C${x + amp * side},${prev + dy / 3} ${x - amp * side},${prev + (2 * dy) / 3} ${x},${y}`;
        prev = y;
      });

      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      svg.querySelectorAll("path").forEach((p) => p.setAttribute("d", d));
    };

    buildRail();
    ScrollTrigger.addEventListener("refreshInit", buildRail);
    cleanups.push(() => ScrollTrigger.removeEventListener("refreshInit", buildRail));

    document.fonts.ready.then(() => {
      if (cancelled) return;
      buildRail();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      mm = gsap.matchMedia();

      mm.add(
        { desktop: "(min-width: 64rem)", mobile: "(max-width: 63.999rem)" },
        (ctx) => {
          const { desktop } = ctx.conditions as { desktop: boolean };
          const splits: SplitText[] = [];
          const local: (() => void)[] = [];

          // ---- Hero ---------------------------------------------------------
          const hero = document.querySelector<HTMLElement>('[data-c3="hero"]');
          const title = SplitText.create('[data-c3="hero-title"]', {
            type: "words,lines",
            mask: "lines",
            linesClass: "c3-split-line",
          });
          splits.push(title);
          gsap.set('[data-c3="hero-title"]', { autoAlpha: 1 });

          const tiles = gsap.utils.toArray<HTMLElement>('[data-c3="tile"]');
          let introDone = false;

          const intro = gsap.timeline({ defaults: { ease: EASE }, onComplete: () => { introDone = true; } });
          intro
            .from(title.words, { yPercent: 110, duration: 1.2, stagger: 0.05 }, 0.15)
            .fromTo('[data-c3="hero-in"]', { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.1 }, 0.5);

          // Each tile flies in from the middle of the hero, where the headline
          // is, so the collage reads as gathering round it.
          if (hero) {
            const hb = hero.getBoundingClientRect();
            const cx = hb.left + hb.width / 2;
            const cy = hb.top + hb.height / 2;
            tiles.forEach((tile, i) => {
              const inner = tile.querySelector<HTMLElement>(".c3-tile-in");
              const tb = tile.getBoundingClientRect();
              intro.fromTo(
                inner,
                {
                  x: (cx - (tb.left + tb.width / 2)) * 0.55,
                  y: (cy - (tb.top + tb.height / 2)) * 0.55,
                  scale: 0.5,
                  rotation: (i % 2 ? 1 : -1) * 8,
                  autoAlpha: 0,
                },
                { x: 0, y: 0, scale: 1, rotation: 0, autoAlpha: 1, duration: 1.6, ease: "expo.out" },
                0.35 + i * 0.08
              );
            });
          }

          // Chips float, slowly and out of step with each other.
          gsap.utils.toArray<HTMLElement>(".c3-chip").forEach((chip, i) => {
            gsap.to(chip, { y: -8, duration: 2.6 + i * 0.4, ease: "sine.inOut", yoyo: true, repeat: -1, delay: i * 0.3 });
          });

          // Pointer parallax, by depth, once the tiles have landed.
          if (desktop && hero) {
            const movers = tiles.map((tile) => {
              const inner = tile.querySelector<HTMLElement>(".c3-tile-in")!;
              const depth = Number(tile.dataset.depth ?? 0.5);
              return {
                depth,
                x: gsap.quickTo(inner, "x", { duration: 1.2, ease: "power3.out" }),
                y: gsap.quickTo(inner, "y", { duration: 1.2, ease: "power3.out" }),
              };
            });
            const onMove = (e: PointerEvent) => {
              if (!introDone) return;
              const nx = e.clientX / window.innerWidth - 0.5;
              const ny = e.clientY / window.innerHeight - 0.5;
              movers.forEach((m) => {
                m.x(nx * 40 * m.depth);
                m.y(ny * 30 * m.depth);
              });
            };
            hero.addEventListener("pointermove", onMove);
            local.push(() => hero.removeEventListener("pointermove", onMove));
          }

          // On scroll the collage opens outwards and lifts away.
          tiles.forEach((tile) => {
            const depth = Number(tile.dataset.depth ?? 0.5);
            const side = tile.getBoundingClientRect().left + tile.offsetWidth / 2 < window.innerWidth / 2 ? -1 : 1;
            gsap.to(tile, {
              x: side * 120 * depth,
              y: -220 * depth,
              ease: "none",
              scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
            });
          });
          gsap.to(".c3-hero-copy", {
            y: 80,
            autoAlpha: 0.2,
            ease: "none",
            scrollTrigger: { trigger: hero, start: "center center", end: "bottom top", scrub: true },
          });

          // ---- Rail ---------------------------------------------------------
          const railTrigger = {
            trigger: '[data-c3="journey"]',
            start: `top ${LINE}`,
            end: `bottom ${LINE}`,
            scrub: 0.6,
            invalidateOnRefresh: true,
          };
          gsap.fromTo('[data-c3="rail-path"]', { drawSVG: "0%" }, { drawSVG: "100%", ease: "none", scrollTrigger: railTrigger });
          gsap.to('[data-c3="rail-dot"]', {
            ease: "none",
            motionPath: {
              path: '[data-c3="rail-path"]',
              align: '[data-c3="rail-path"]',
              alignOrigin: [0.5, 0.5],
            },
            scrollTrigger: railTrigger,
          });

          gsap.utils.toArray<HTMLElement>('[data-c3="stop"]').forEach((stop) => {
            const dot = stop.querySelector(".c3-stop-dot");
            ScrollTrigger.create({
              trigger: dot,
              start: `center ${LINE}`,
              onEnter: () => {
                stop.classList.add("is-reached");
                gsap.fromTo(dot, { scale: 0.7 }, { scale: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" });
              },
              onLeaveBack: () => stop.classList.remove("is-reached"),
            });
          });

          // ---- Headings -------------------------------------------------------
          gsap.utils.toArray<HTMLElement>('.c3-journey [data-c3="h2"], .c3-team [data-c3="h2"]').forEach((h) => {
            const s = SplitText.create(h, { type: "lines", mask: "lines", linesClass: "c3-split-line" });
            splits.push(s);
            gsap.from(s.lines, {
              yPercent: 105,
              duration: 1.1,
              stagger: 0.08,
              ease: EASE,
              scrollTrigger: { trigger: h, start: START },
            });
          });

          gsap.from('[data-c3="route"] li', {
            autoAlpha: 0,
            y: 24,
            scale: 0.9,
            stagger: 0.1,
            duration: 0.9,
            ease: "back.out(1.6)",
            scrollTrigger: { trigger: '[data-c3="route"]', start: START },
          });

          gsap.from('[data-c3="tags"] li', {
            autoAlpha: 0,
            x: -16,
            stagger: 0.1,
            duration: 0.8,
            ease: EASE,
            scrollTrigger: { trigger: '[data-c3="tags"]', start: START },
          });

          // ---- Search scene --------------------------------------------------
          const typed = document.querySelector<HTMLElement>('[data-c3="typed"]');
          const full = typed?.dataset.text ?? "";
          if (typed) typed.textContent = "";
          const chars = { n: 0 };

          gsap
            .timeline({
              defaults: { ease: EASE },
              scrollTrigger: { trigger: '[data-c3="search"]', start: "top 65%" },
            })
            .fromTo(
              ".c3-search-photo",
              { clipPath: "inset(30% 20% 30% 20% round 200px)" },
              { clipPath: "inset(0% 0% 0% 0% round 28px)", duration: 1.4, ease: "expo.inOut" },
              0
            )
            .from(".c3-search-card", { autoAlpha: 0, y: 60, duration: 1 }, 0.6)
            .to(chars, {
              n: full.length,
              duration: full.length * 0.055,
              ease: "none",
              onUpdate: () => {
                if (typed) typed.textContent = full.slice(0, Math.round(chars.n));
              },
            }, 1.1)
            .from('[data-c3="result"]', { autoAlpha: 0, y: 16, scale: 0.96, duration: 0.8 }, ">0.2")
            .from('[data-c3="actions"] span', { autoAlpha: 0, y: 10, stagger: 0.08, duration: 0.6 }, ">-0.4")
            .to('[data-c3="actions"] .is-primary', { scale: 1.1, duration: 0.35, yoyo: true, repeat: 1, ease: "power2.inOut" }, ">0.1");

          gsap.fromTo(
            ".c3-search-photo img",
            { yPercent: -6, scale: 1.12 },
            {
              yPercent: 6,
              scale: 1.12,
              ease: "none",
              scrollTrigger: { trigger: '[data-c3="search"]', start: "top bottom", end: "bottom top", scrub: true },
            }
          );

          // ---- Flip cards ----------------------------------------------------
          // Each question turns over to its answer as it rises through the
          // screen, the four in a cascade on desktop where they share a row.
          gsap.utils.toArray<HTMLElement>('[data-c3="flip"]').forEach((card, i) => {
            const offset = desktop ? i * 7 : 0;
            gsap.fromTo(
              card.querySelector(".c3-flip-inner"),
              { rotationY: 0 },
              {
                rotationY: 180,
                ease: "power1.inOut",
                scrollTrigger: {
                  trigger: card,
                  start: `top ${72 - offset}%`,
                  end: `top ${42 - offset}%`,
                  scrub: 0.6,
                },
              }
            );
          });

          // ---- Bento ---------------------------------------------------------
          gsap.utils.toArray<HTMLElement>('[data-c3="bento"]').forEach((el, i) => {
            gsap.from(el, {
              autoAlpha: 0,
              y: 50,
              scale: 0.97,
              duration: 1.1,
              delay: (i % 3) * 0.08,
              ease: EASE,
              scrollTrigger: { trigger: el, start: "top 88%" },
            });
          });
          gsap.utils.toArray<HTMLElement>(".c3-pillar").forEach((pillar) => {
            gsap.from(pillar.querySelectorAll('[data-c3="pill"]'), {
              autoAlpha: 0,
              scale: 0.7,
              y: 10,
              stagger: 0.06,
              duration: 0.7,
              ease: "back.out(2)",
              scrollTrigger: { trigger: pillar, start: "top 75%" },
            });
          });
          gsap.from('[data-c3="note"]', {
            autoAlpha: 0,
            x: -30,
            stagger: 0.15,
            duration: 1,
            ease: EASE,
            scrollTrigger: { trigger: ".c3-bento-photo", start: "top 60%" },
          });
          gsap.fromTo(
            '[data-c3="zoom"]',
            { scale: 1.2 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: { trigger: ".c3-bento-photo", start: "top bottom", end: "bottom center", scrub: true },
            }
          );

          gsap.from('[data-c3="work"]', {
            autoAlpha: 0,
            y: 60,
            stagger: 0.12,
            duration: 1.1,
            ease: EASE,
            scrollTrigger: { trigger: ".c3-works", start: "top 75%" },
          });

          // ---- Statement card -------------------------------------------------
          gsap.fromTo(
            '[data-c3="statement-card"]',
            { scale: desktop ? 0.84 : 0.94, borderRadius: desktop ? 72 : 40 },
            {
              scale: 1,
              borderRadius: desktop ? 32 : 24,
              ease: "none",
              scrollTrigger: { trigger: '[data-c3="statement"]', start: "top bottom", end: "top 20%", scrub: true },
            }
          );
          gsap.utils.toArray<HTMLElement>('[data-c3="hl"]').forEach((hl, i) => {
            gsap.fromTo(
              hl,
              { backgroundSize: "0% 100%" },
              {
                backgroundSize: "100% 100%",
                ease: "none",
                scrollTrigger: {
                  trigger: '[data-c3="statement"]',
                  start: `top ${50 - i * 18}%`,
                  end: `top ${30 - i * 18}%`,
                  scrub: true,
                },
              }
            );
          });

          // ---- Goals ---------------------------------------------------------
          gsap.from('[data-c3="goals"] > *', {
            autoAlpha: 0,
            y: 40,
            stagger: 0.12,
            duration: 1.1,
            ease: EASE,
            scrollTrigger: { trigger: '[data-c3="goals"]', start: START },
          });

          // ---- Deck: three cards fan out from one pile ------------------------
          const cards = gsap.utils.toArray<HTMLElement>('[data-c3="card"]');
          if (desktop && cards.length === 3) {
            const deck = gsap.timeline({
              scrollTrigger: { trigger: '[data-c3="deck"]', start: "top 85%", end: "top 30%", scrub: 0.8 },
            });
            const centre = cards[1];
            cards.forEach((card, i) => {
              deck.from(
                card,
                {
                  x: () => centre.offsetLeft - card.offsetLeft,
                  y: i === 1 ? 30 : 60,
                  rotation: (i - 1) * 7,
                  scale: 0.92,
                  ease: "power2.out",
                },
                0
              );
            });
            gsap.set(centre, { zIndex: 2 });
          } else {
            cards.forEach((card) => {
              gsap.from(card, { autoAlpha: 0, y: 50, duration: 1, ease: EASE, scrollTrigger: { trigger: card, start: START } });
            });
          }

          gsap.from('[data-c3="arrive"]', {
            autoAlpha: 0,
            scale: 0.92,
            y: 40,
            duration: 1.2,
            ease: EASE,
            scrollTrigger: { trigger: '[data-c3="arrive"]', start: START },
          });

          return () => {
            splits.forEach((s) => s.revert());
            local.forEach((fn) => fn());
          };
        }
      );

      ScrollTrigger.refresh();
    });

    // Late images change the journey's height, and with it the rail.
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    cleanups.push(() => window.removeEventListener("load", onLoad));

    return () => {
      cancelled = true;
      mm?.revert();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
