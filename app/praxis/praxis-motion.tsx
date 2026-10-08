"use client";

// Scroll motion for /praxis. Forked from components/praxis-motion (which
// still drives /praxis-marketing) when sections 01 and 02 were rebuilt.
//
// One component owns every timeline on the page instead of each section
// carrying its own. The page itself is a server component — it has a `metadata`
// export — so anything that animates has to be a client island either way, and
// twelve islands would mean twelve IntersectionObservers, twelve reduced-motion
// checks and no way to make two sections share a beat. This mounts once,
// queries the markup it animates by `data-praxis-anim` and the page's own
// `praxis-*` classes, and hands the whole set to GSAP.
//
// Two rules the code below follows throughout:
//
//   * Above the fold, the pre-animation state lives in the CSS (`.praxis-enter`
//     in praxis-marketing.css), so those elements use `fromTo` rather than
//     `from`. An effect only runs after the browser has painted, so a from-state
//     set here would show the finished hero for a frame and then yank it back.
//     Below the fold that cannot be seen, so the rest uses plain `from`/`fromTo`
//     and the CSS stays clean.
//
//   * Nothing is created at all under `prefers-reduced-motion: reduce` — the
//     same contract the rest of the codebase keeps (see underlined-header.css,
//     count-up-on-view.tsx). The CSS resets `.praxis-enter` under that query, so
//     the page arrives finished.

import { useEffect } from "react";

import { gsap, ScrollTrigger, SplitText, registerGsap } from "@/lib/gsap";

// cubic-bezier(0.22, 1, 0.36, 1) — the curve the rest of the page's CSS eases
// with — is easeOutQuint, which GSAP calls power4.out. Same motion, so a GSAP
// reveal and a CSS transition next to it read as one system.
const EASE = "power4.out";

/** Where a reveal starts, in ScrollTrigger terms: properly on screen, not clipping the fold. */
const START = "top 85%";

/**
 * Counts an element's number up from zero, in place.
 *
 * The target is read from the text the server rendered, so the real number is
 * what crawlers and the first paint get, and the zero only ever exists between
 * the trigger firing and the tween ending — `immediateRender: false` is what
 * keeps it from being written the moment this tween is built. Zero padding is
 * taken from the markup too: "01" counts as two digits, "3" as one.
 */
function addCounter(tl: gsap.core.Timeline, el: Element | null, position: number) {
  const text = el?.textContent?.trim() ?? "";
  const target = Number(text);
  if (!el || !text || !Number.isFinite(target)) return;

  const state = { value: 0 };

  tl.fromTo(
    state,
    { value: 0 },
    {
      value: target,
      duration: 1.2,
      ease: "power2.out",
      snap: { value: 1 },
      immediateRender: false,
      onUpdate: () => {
        el.textContent = String(state.value).padStart(text.length, "0");
      },
    },
    position
  );
}

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

        // ---- 02 | Three compact accents ----------------------------------
        const statsTl = gsap.timeline({
          scrollTrigger: { trigger: ".praxis-stats", start: START },
          defaults: { ease: EASE },
        });

        statsTl.fromTo(
          ".praxis-stat",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 }
        );

        gsap.utils
          .toArray<HTMLElement>(".praxis-stats [data-praxis-count]")
          .forEach((el, i) => addCounter(statsTl, el, i * 0.12));

        // ---- 01 | Bento ------------------------------------------------
        //
        // Each box rises in on its own trigger; side by side the index delay
        // staggers a row, stacked it is too short to notice. The chips in each
        // service card pop in after their card, the two notes slide onto the
        // photo, and the photo settles from a slight zoom as it is scrolled
        // through.
        gsap.utils.toArray<HTMLElement>('[data-praxis-anim="bento"]').forEach((el, i) => {
          gsap.from(el, {
            opacity: 0,
            y: 40,
            scale: 0.98,
            duration: 1,
            delay: (i % 3) * 0.08,
            ease: EASE,
            scrollTrigger: { trigger: el, start: START },
          });
        });

        gsap.utils.toArray<HTMLElement>(".praxis-pillar").forEach((pillar) => {
          gsap.from(pillar.querySelectorAll(".praxis-pillar-items li"), {
            opacity: 0,
            scale: 0.8,
            y: 8,
            duration: 0.6,
            stagger: 0.05,
            ease: "back.out(2)",
            scrollTrigger: { trigger: pillar, start: "top 75%" },
          });
        });

        gsap.from('[data-praxis-anim="note"]', {
          opacity: 0,
          x: -24,
          duration: 0.9,
          stagger: 0.14,
          ease: EASE,
          scrollTrigger: { trigger: ".praxis-bento-photo", start: "top 60%" },
        });

        gsap.fromTo(
          '[data-praxis-anim="bento-zoom"]',
          { scale: 1.15 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: ".praxis-bento-photo", start: "top bottom", end: "bottom center", scrub: true },
          }
        );

        // ---- 02 | Question and answer cards ------------------------------
        gsap.utils.toArray<HTMLElement>(".praxis-feature-card").forEach((card) => {
          const tl = gsap.timeline({
            scrollTrigger: { trigger: card, start: START },
            defaults: { ease: EASE },
          });

          const heading = card.querySelector(".praxis-h3");
          if (heading) tl.from(heading, { opacity: 0, y: 22, duration: 0.8 }, 0);

          const lead = card.querySelector(".praxis-lead");
          if (lead) tl.from(lead, { opacity: 0, y: 18, duration: 0.8 }, 0.1);

          const items = card.querySelectorAll(".praxis-pair-item");
          if (items.length) {
            tl.from(items, { opacity: 0, y: 16, duration: 0.6, stagger: 0.08 }, 0.15);
          }
        });

        // ---- 06 | Work thumbs --------------------------------------------
        //
        // No `y`, unlike the blocks above: these are the only cards on the page
        // that stay put once revealed, so bringing them in on a vertical offset
        // would be the only movement they ever make.
        gsap.from('[data-praxis-anim="works"] .work-thumb', {
          opacity: 0,
          scale: 0.97,
          duration: 0.9,
          stagger: 0.14,
          ease: EASE,
          scrollTrigger: { trigger: '[data-praxis-anim="works"]', start: "top 82%" },
        });

        // ---- 07 | The dark band ------------------------------------------
        //
        // The page is one continuous light field, and this section is the only
        // break in it. Rather than let that edge arrive as a hard line sliding
        // up the screen, a layer in the page colour covers the whole band and is
        // faded out against the scroll: the section comes in the colour of
        // everything above it and darkens as it is read.
        //
        // A fade rather than a wipe because a wipe cannot be seen here. Any clip
        // on this layer is a share of the *section*, which is taller than the
        // viewport, so the edge of the wipe finishes below the fold while the
        // part on screen never changes. Opacity has no geometry to get wrong.
        //
        // The layer covers the content as well as the ground, which is the
        // point: this section's type is white, and white on a light field is
        // unreadable, so the words come up with the dark behind them rather than
        // ahead of it.
        gsap.fromTo(
          ".praxis-invert-curtain",
          { opacity: 1 },
          {
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: ".praxis-invert",
              start: "top bottom",
              end: "top 40%",
              scrub: 0.4,
            },
          }
        );

        // The two halves of the question are written as separate spans so they
        // can be read as two beats; they arrive as two.
        const askTl = gsap.timeline({
          scrollTrigger: { trigger: ".praxis-ask", start: "top 80%" },
        });

        gsap.utils.toArray<HTMLElement>(".praxis-ask span").forEach((span, i) => {
          askTl.from(
            splitLines(span).lines,
            { yPercent: 110, duration: 1, stagger: 0.08, ease: EASE },
            i * 0.2
          );
        });

        gsap.from(".praxis-invert-intro", {
          opacity: 0,
          y: 24,
          duration: 0.9,
          ease: EASE,
          scrollTrigger: { trigger: ".praxis-invert-intro", start: START },
        });

        gsap.from(".praxis-invert-note", {
          opacity: 0,
          y: 24,
          duration: 0.9,
          ease: EASE,
          scrollTrigger: { trigger: ".praxis-invert-note", start: START },
        });

        // ---- 08 | Comparison table ---------------------------------------
        //
        // The frame wipes in from the left and the rows follow behind it, so the
        // table reads as being drawn rather than switched on. `round 12px` keeps
        // the frame's own corner radius through the wipe — an unrounded inset
        // would square the corners off for the duration.
        gsap
          .timeline({ scrollTrigger: { trigger: ".praxis-table-frame", start: "top 82%" } })
          .fromTo(
            ".praxis-table-frame",
            { clipPath: "inset(0% 100% 0% 0% round 12px)" },
            { clipPath: "inset(0% 0% 0% 0% round 12px)", duration: 0.9, ease: EASE }
          )
          .fromTo(
            ".praxis-table thead th",
            { opacity: 0 },
            { opacity: 1, duration: 0.5, stagger: 0.06, ease: "none" },
            0.3
          )
          .fromTo(
            ".praxis-table tbody tr",
            { opacity: 0, x: -14 },
            { opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: EASE },
            0.38
          );

        // ---- 09 | Three steps --------------------------------------------
        gsap.utils.toArray<HTMLElement>('[data-praxis-anim="steps"] > li').forEach((step, i) => {
          const tl = gsap.timeline({
            scrollTrigger: { trigger: step, start: START },
            defaults: { ease: EASE },
            delay: i * 0.14,
          });

          tl.from(step, { opacity: 0, y: 26, duration: 0.9 })
            .from(step.querySelector(".praxis-step-badge"), { opacity: 0, y: 10, duration: 0.6 }, 0.18)
            .from(
              [step.querySelector(".praxis-step-title"), step.querySelector(".praxis-step-text")],
              { opacity: 0, y: 16, duration: 0.7, stagger: 0.08 },
              0.26
            );

          addCounter(tl, step.querySelector(".praxis-step-number"), 0.18);
        });

        gsap.from('[data-praxis-anim="steps-cta"]', {
          opacity: 0,
          y: 26,
          duration: 0.9,
          ease: EASE,
          scrollTrigger: { trigger: '[data-praxis-anim="steps-cta"]', start: START },
        });

        // ---- 10 | Catchment area -----------------------------------------
        //
        // The section is about who is close enough to come, so the rings grow
        // outward from the practice at the centre, innermost first, scrubbed to
        // the scroll. The two dashed rings grow on `scale` while the solid ones
        // are traced with DrawSVG from a point and around: DrawSVG works by
        // writing `stroke-dasharray`, which is exactly what makes those two
        // rings dashed, so tracing them would flatten the pattern the graphic
        // is built from.
        const rings = gsap.utils
          .toArray<SVGCircleElement>(".praxis-geo-ring:not(.praxis-geo-pulse)")
          .sort((a, b) => Number(a.getAttribute("r")) - Number(b.getAttribute("r")));

        const geoTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".praxis-geo-visual",
            start: "top 85%",
            end: "center 55%",
            scrub: 0.6,
          },
        });

        rings.forEach((ring, i) => {
          const at = i * 0.16;

          if (ring.getAttribute("stroke-dasharray")) {
            geoTl.fromTo(
              ring,
              { opacity: 0, scale: 0.6 },
              { opacity: 1, scale: 1, duration: 1, ease: EASE },
              at
            );
          } else {
            geoTl.fromTo(
              ring,
              { drawSVG: "50% 50%", opacity: 0 },
              { drawSVG: "0% 100%", opacity: 1, duration: 1.1, ease: EASE },
              at
            );
          }
        });

        // The patients in the catchment area land once the rings are there.
        geoTl.fromTo(
          ".praxis-geo-dot",
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.07, ease: "back.out(2.2)" },
          rings.length * 0.16
        );

        // The outermost ring breathes once every six seconds — the same figure
        // the CSS keyframe used, moved here so it can start only once the rings
        // have finished drawing themselves in, and idle while the section is off
        // screen instead of animating a graphic nobody is looking at.
        const pulse = gsap
          .timeline({ repeat: -1, paused: true })
          .set(".praxis-geo-pulse", { scale: 0.82, opacity: 0 })
          .to(".praxis-geo-pulse", { scale: 1.06, duration: 6, ease: EASE }, 0)
          .to(".praxis-geo-pulse", { opacity: 0.55, duration: 2.1, ease: "none" }, 0)
          .to(".praxis-geo-pulse", { opacity: 0, duration: 3.9, ease: "none" }, 2.1);

        geoTl.eventCallback("onComplete", () => pulse.play());

        ScrollTrigger.create({
          trigger: ".praxis-geo-visual",
          start: "top bottom",
          end: "bottom top",
          onToggle: (self) => {
            if (self.isActive && geoTl.progress() === 1) pulse.play();
            else pulse.pause();
          },
        });

        // The whole radius turns with the scroll for as long as it is on
        // screen, so the dashed rings and the patients around the practice
        // orbit it. Rotating the <svg> rather than the circles keeps it clear
        // of the scale and DrawSVG tweens the rings already carry.
        gsap.fromTo(
          ".praxis-geo-rings",
          { rotation: -40 },
          {
            rotation: 80,
            ease: "none",
            scrollTrigger: {
              trigger: ".praxis-geo-visual",
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );

        gsap.utils.toArray<HTMLElement>(".praxis-geo-item").forEach((item) => {
          const tl = gsap.timeline({
            scrollTrigger: { trigger: item, start: START },
            defaults: { ease: EASE },
          });

          tl.from(item.querySelector(".praxis-geo-num"), { opacity: 0, y: 16, duration: 0.7 }).from(
            [item.querySelector(".praxis-geo-title"), item.querySelector(".praxis-geo-text")],
            { opacity: 0, y: 18, duration: 0.8, stagger: 0.1 },
            0.12
          );

          addCounter(tl, item.querySelector(".praxis-geo-num"), 0);
        });

        // ---- 11 | Search to appointment ----------------------------------
        //
        // "Die passende Information" then "Der nächste Schritt": the copy is an
        // argument in two moves, so the tiles arrive in that order rather than
        // together.
        gsap.from('[data-praxis-anim="tiles-copy"] > *', {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.1,
          ease: EASE,
          scrollTrigger: { trigger: '[data-praxis-anim="tiles-copy"]', start: START },
        });

        gsap.from('[data-praxis-anim="tiles"] .praxis-tile', {
          opacity: 0,
          y: 26,
          duration: 0.8,
          stagger: 0.18,
          ease: EASE,
          scrollTrigger: { trigger: '[data-praxis-anim="tiles"]', start: START },
        });

        return () => splits.forEach((split) => split.revert());
      });

      // Parallax, large screens only. Separate from the block above so crossing
      // the breakpoint rebuilds only these: every tween here is scrubbed, so it
      // is re-anchored to the scroll position silently, with nothing to replay.
      //
      // Below 64rem the layouts these depend on do not exist — the statements
      // stack under the photo instead of floating on it — and a phone has no
      // spare frames for it anyway.
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

        // The work thumbs used to drift here too, at two different rates, to
        // play against the sticky intro column beside them. Removed on request:
        // they now hold their place and only the one-shot reveal above plays.
      });
    });

    return () => {
      cancelled = true;
      mm?.revert();
    };
  }, []);

  return null;
}
