/**
 * GSAP for this codebase: plugins registered once.
 *
 * Everything here is client-only — `registerPlugin` touches `document` — so
 * call `registerGsap()` from an effect, never at module scope in a file a
 * server component imports.
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

let registered = false;

/**
 * Idempotent: safe to call from every component that animates, on every mount.
 */
export function registerGsap() {
  if (registered) return;
  registered = true;

  gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);
}

export { gsap, ScrollTrigger, SplitText, DrawSVGPlugin };
