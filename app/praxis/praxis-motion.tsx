"use client";

// Hero entrance and desktop parallax. The rest of the page remains readable
// without scroll-triggered reveals; reduced motion skips both timelines.

import { useEffect } from "react";

import { gsap, SplitText, registerGsap } from "@/lib/gsap";

// cubic-bezier(0.22, 1, 0.36, 1) — the curve the rest of the page's CSS eases
// with — is easeOutQuint, which GSAP calls power4.out. Same motion, so a GSAP
// reveal and a CSS transition next to it read as one system.
const EASE = "power4.out";

export default function PraxisMotion() {
  useEffect(() => {
    registerGsap();

    let mm: gsap.MatchMedia | null = null;
    let cancelled = false;

    // SplitText has to measure where the lines actually break, so it cannot run
    // against a fallback face: split too early and the headline keeps the line
    // breaks of a font nobody will see. Waiting for the real one also means
    // every ScrollTrigger below is positioned against final metrics, so no
    // refresh is needed once the page settles.
    document.fonts.ready.then(() => {
      if (cancelled) return;

      // Read once, the way the rest of the codebase reads it, rather than as a
      // matchMedia condition: a context is only ever built for a query that
      // *matches*, so the natural spelling — a `reduce` condition the code then
      // checks — would mean nothing runs on the machines that want the motion.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      mm = gsap.matchMedia();

      // The reveals, built once. Deliberately not keyed to a breakpoint: a
      // context is reverted and re-run whenever one of its queries flips, which
      // would replay the whole page on a resize across 1024px.
      mm.add("all", () => {
        // SplitText rewrites the DOM it is given, so every split is kept and
        // reverted when this context is torn down.
        const splits: SplitText[] = [];
        const splitLines = (target: gsap.DOMTarget) => {
          const split = SplitText.create(target, {
            type: "lines",
            // Wraps each line in an `overflow: clip` element, so a line can rise
            // into place from behind its own edge rather than just fading.
            mask: "lines",
            linesClass: "praxis-line",
          });
          splits.push(split);
          return split;
        };

        // ---- 01 | Hero ---------------------------------------------------
        //
        // The one timeline on the page that plays on load rather than on
        // scroll: eyebrow, then the headline line by line, the lead behind it,
        // then the button — read in the order the words are.
        const heroTitle = splitLines('[data-praxis-anim="hero-title"]');
        const heroLead = splitLines('[data-praxis-anim="hero-lead"]');

        gsap
          .timeline({ defaults: { ease: EASE } })
          // The two split blocks are hidden by `.praxis-enter` until their
          // lines are safely parked below their masks; from here the mask does
          // the hiding.
          .set('[data-praxis-anim="hero-title"], [data-praxis-anim="hero-lead"]', { opacity: 1 })
          .fromTo(
            '[data-praxis-anim="hero-eyebrow"]',
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.7 },
            0
          )
          .from(heroTitle.lines, { yPercent: 110, duration: 1.1, stagger: 0.09 }, 0.12)
          .from(heroLead.lines, { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.035 }, 0.5)
          .fromTo(
            '[data-praxis-anim="hero-cta"]',
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.7 },
            0.85
          )
          // Transform only, and no opacity: this is the LCP element, so it
          // paints on the first frame like it always did and merely settles out
          // of a slow push-in. The 8% is absorbed by the figure's own
          // `overflow: clip`, so no edge is ever exposed.
          .fromTo(
            '[data-praxis-anim="hero-figure"] .praxis-figure-img',
            { scale: 1.08 },
            { scale: 1, duration: 1.8, ease: "power2.out" },
            0
          );

        return () => splits.forEach((split) => split.revert());
      });

      // A small hero parallax on desktop only.
      mm.add("(min-width: 64rem)", () => {
        // The hero photo drifts up as the page leaves, a little slower than
        // the column of text beside it.
        gsap.to('[data-praxis-anim="hero-figure"]', {
          y: -48,
          ease: "none",
          scrollTrigger: {
            trigger: ".praxis-hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

      });
    });

    return () => {
      cancelled = true;
      mm?.revert();
    };
  }, []);

  return null;
}
