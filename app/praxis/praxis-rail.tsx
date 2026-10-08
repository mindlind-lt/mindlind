"use client";

// Scroll progress rail for /praxis, after the one on /praxis-concept-3: a path
// drawn down one side of the numbered sections, threaded through a stop beside
// each section index, with a dot that travels it as the page is read.
//
// Same contract as components/praxis-motion: one island, markup found by
// `data-praxis-rail`, no tweens under reduced motion. The geometry is measured
// from the live layout, so it is rebuilt on every ScrollTrigger refresh
// (resize, fonts, images) before trigger positions are computed. Below lg the
// rail is hidden in CSS and nothing here does any work worth noticing.

import { useEffect } from "react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap";

/** Where on the screen the travelling dot sits, as a ScrollTrigger position. */
const LINE = "55%";
/** How far the path swings either side between stops, in px. */
const AMP = 16;

const q = (name: string) => `[data-praxis-rail="${name}"]`;

export default function PraxisRail() {
  useEffect(() => {
    registerGsap();
    gsap.registerPlugin(MotionPathPlugin);

    let mm: gsap.MatchMedia | null = null;
    let cancelled = false;
    const cleanups: (() => void)[] = [];

    // ---- Geometry ---------------------------------------------------------
    // Runs whether or not there is motion: the static page still shows the
    // rail, just fully drawn.
    const buildRail = () => {
      const journey = document.querySelector<HTMLElement>(q("journey"));
      const svg = document.querySelector<SVGSVGElement>(q("svg"));
      const layer = document.querySelector<HTMLElement>(q("stops"));
      const container = journey?.querySelector<HTMLElement>(':scope > section > .container');
      const mask = journey?.querySelector<SVGMaskElement>(q("mask"));
      if (!journey || !svg || !layer || !container || !mask) return;

      // Hidden below lg: nothing to measure.
      if (getComputedStyle(svg).display === "none") return;

      const box = journey.getBoundingClientRect();
      const height = journey.offsetHeight;
      const css = getComputedStyle(journey);
      const rail = parseFloat(css.getPropertyValue("--praxis-rail"));
      const gap = parseFloat(css.getPropertyValue("--praxis-rail-gap"));

      // The rail runs down the gutter the CSS opens up beside the content, on
      // the side the journey's data-rail-side names.
      const c = container.getBoundingClientRect();
      const cs = getComputedStyle(container);
      const x =
        journey.dataset.railSide === "right"
          ? c.right - parseFloat(cs.paddingRight) - box.left + gap + rail / 2
          : c.left + parseFloat(cs.paddingLeft) - box.left - gap - rail / 2;

      // One stop per section label, level with it and carrying its number,
      // so a stop on the far side of the page still says which section it is.
      const anchors = gsap.utils.toArray<HTMLElement>(q("anchor"), journey);
      const ys = anchors.map((el) => {
        const r = el.getBoundingClientRect();
        return r.top + r.height / 2 - box.top;
      });
      if (!ys.length) return;

      // Stop markers are generated, so the sections stay the source of truth.
      while (layer.children.length < ys.length) {
        const dot = document.createElement("span");
        dot.className = "praxis-stop";
        dot.dataset.praxisRail = "stop";
        layer.appendChild(dot);
      }
      while (layer.children.length > ys.length) layer.lastElementChild!.remove();
      ys.forEach((y, i) => {
        const dot = layer.children[i] as HTMLElement;
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        dot.textContent = anchors[i].dataset.n ?? "";
      });

      // Gentle S-bends between the stops, alternating side, so the rail reads
      // as walked rather than ruled. It starts at the first stop and runs out
      // at the bottom of the journey, into the contact section.
      let d = `M${x},${ys[0]}`;
      let prev = ys[0];
      [...ys.slice(1), height].forEach((y, i) => {
        const dy = y - prev;
        const side = i % 2 === 0 ? 1 : -1;
        d += ` C${x + AMP * side},${prev + dy / 3} ${x - AMP * side},${prev + (2 * dy) / 3} ${x},${y}`;
        prev = y;
      });

      // Skipped sections are cut out of the rail, dot included: white keeps,
      // black hides.
      const NS = "http://www.w3.org/2000/svg";
      const rect = (y: number, h: number, fill: string) => {
        const r = document.createElementNS(NS, "rect");
        r.setAttribute("x", "0");
        r.setAttribute("y", String(y));
        r.setAttribute("width", String(box.width));
        r.setAttribute("height", String(h));
        r.setAttribute("fill", fill);
        return r;
      };
      mask.replaceChildren(rect(0, height, "#fff"));
      journey.querySelectorAll<HTMLElement>(q("skip")).forEach((section) => {
        const r = section.getBoundingClientRect();
        mask.appendChild(rect(r.top - box.top, r.height, "#000"));
      });
      ["x", "y", "width", "height"].forEach((k, i) => mask.setAttribute(k, String([0, 0, box.width, height][i])));

      svg.setAttribute("viewBox", `0 0 ${box.width} ${height}`);
      svg.querySelectorAll("path").forEach((p) => p.setAttribute("d", d));
    };

    buildRail();
    ScrollTrigger.addEventListener("refreshInit", buildRail);
    cleanups.push(() => ScrollTrigger.removeEventListener("refreshInit", buildRail));

    document.fonts.ready.then(() => {
      if (cancelled) return;
      buildRail();

      // Static fallback: every stop shown as reached alongside the full path.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.querySelector(q("journey"))?.classList.add("is-static");
        return;
      }

      mm = gsap.matchMedia();
      mm.add("(min-width: 64rem)", () => {
        const first = document.querySelector(q("stop"));

        // From the first stop reaching the line to the end of the journey,
        // matching where the path itself starts and ends.
        const railTrigger = {
          trigger: first,
          start: `center ${LINE}`,
          endTrigger: q("journey"),
          end: `bottom ${LINE}`,
          scrub: 0.6,
          invalidateOnRefresh: true,
        };

        gsap.fromTo(q("path"), { drawSVG: "0%" }, { drawSVG: "100%", ease: "none", scrollTrigger: railTrigger });
        gsap.set(q("dot"), { autoAlpha: 1 });
        gsap.to(q("dot"), {
          ease: "none",
          motionPath: { path: q("path"), align: q("path"), alignOrigin: [0.5, 0.5] },
          scrollTrigger: railTrigger,
        });

        gsap.utils.toArray<HTMLElement>(q("stop")).forEach((dot) => {
          ScrollTrigger.create({
            trigger: dot,
            start: `center ${LINE}`,
            onEnter: () => {
              dot.classList.add("is-reached");
              gsap.fromTo(dot, { scale: 0.6 }, { scale: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" });
            },
            onLeaveBack: () => dot.classList.remove("is-reached"),
          });
        });
      });

      ScrollTrigger.refresh();
    });

    // Anything that changes the journey's height after load (late images,
    // lazily mounted media) moves the stops, so watch it rather than guessing
    // which events matter. Debounced: one refresh once the layout settles.
    const journey = document.querySelector<HTMLElement>(q("journey"));
    if (journey) {
      let timer = 0;
      let lastHeight = journey.offsetHeight;
      const ro = new ResizeObserver(() => {
        if (journey.offsetHeight === lastHeight) return;
        lastHeight = journey.offsetHeight;
        window.clearTimeout(timer);
        timer = window.setTimeout(() => ScrollTrigger.refresh(), 150);
      });
      ro.observe(journey);
      cleanups.push(() => {
        ro.disconnect();
        window.clearTimeout(timer);
      });
    }

    return () => {
      cancelled = true;
      mm?.revert();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
