/**
 * GSAP for this codebase: plugins registered once, and the one link the page
 * needs between GSAP and the site's smooth scrolling.
 *
 * Everything here is client-only — `registerPlugin` touches `document` — so
 * call `registerGsap()` from an effect, never at module scope in a file a
 * server component imports.
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

import { getSmoothScroll } from "@/lib/smooth-scroll";

let registered = false;

/**
 * Idempotent: safe to call from every component that animates, on every mount.
 */
export function registerGsap() {
  if (registered) return;
  registered = true;

  gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);

  // Lenis drives the *native* scroll position rather than transforming a
  // container (see components/smooth-scroll), so ScrollTrigger already works
  // untouched — no `scrollerProxy`, no ScrollSmoother. ScrollSmoother would in
  // fact have to replace Lenis rather than sit next to it: two libraries easing
  // the same scroll fight each other.
  //
  // What is left is a matter of timing. ScrollTrigger updates on the browser's
  // `scroll` event, which is dispatched after Lenis has already moved the page,
  // so on a fast wheel a pinned or scrubbed element can land a frame behind the
  // thing it is pinned to. Updating from Lenis' own callback puts both on the
  // same frame.
  //
  // Deferred a frame because <SmoothScroll /> lives in the root layout: React
  // runs child effects before parent effects, so the instance does not exist
  // yet when a page's own effect calls this. By the next frame the layout has
  // mounted. If smooth scrolling is off (or the slot is still empty), the
  // native `scroll` event carries ScrollTrigger on its own.
  requestAnimationFrame(() => {
    getSmoothScroll()?.on("scroll", ScrollTrigger.update);
  });
}

export { gsap, ScrollTrigger, SplitText, DrawSVGPlugin };
