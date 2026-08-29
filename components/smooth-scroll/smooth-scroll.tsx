"use client";

// Site-wide smooth scrolling.
//
// The wheel stops moving the document directly: each notch adds to a target,
// and the real scroll position is eased toward that target once per frame. That
// is the whole trick behind the way an expensive site scrolls — the page keeps
// gliding for a beat after the input stops, so a notched wheel reads as one
// continuous camera move instead of a series of jumps.
//
// Lenis drives the *native* scroll position rather than transforming a
// container, so `position: sticky`, IntersectionObserver, scroll restoration,
// and every `scroll` listener already in this codebase keep working — they just
// receive an eased position now. Touch is deliberately left alone (see below).

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import { registerSmoothScroll } from "@/lib/smooth-scroll";

// How much of the remaining distance is closed each frame, at 60fps. This is
// the entire feel of the site in one number: higher snaps to the wheel, lower
// glides. Below ~0.07 the page starts to feel detached from the hand — you push
// and the site answers late — and above ~0.12 the smoothing stops registering
// as anything at all. 0.085 lands on the long, weighty glide, roughly a third
// of a second of travel after the wheel stops.
const LERP = 0.085;

// A notch of wheel still moves the page exactly as far as it would natively.
// Multiplying it is the usual reason a "smooth" site feels like it is fighting
// you: the distance no longer matches the gesture, only the timing does.
const WHEEL_MULTIPLIER = 1;

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: LERP,
      wheelMultiplier: WHEEL_MULTIPLIER,

      smoothWheel: true,

      // Touch keeps the platform's own momentum. A finger is already a
      // continuous, pixel-accurate input with inertia the OS renders on the
      // compositor; re-implementing it in JS costs a frame of latency and
      // breaks iOS rubber-banding, and every site that does it feels worse on
      // a phone than the one that didn't.
      syncTouch: false,

      // `#hash` links glide instead of teleporting, using the same easing.
      anchors: true,

      // Kill leftover momentum when an internal link is clicked. Without this,
      // a click taken mid-glide leaves Lenis animating toward a position on the
      // page that is being replaced, and it drags the new page back down out of
      // the scroll reset Next.js just performed.
      stopInertiaOnNavigate: true,

      // Let a scrollable panel under the cursor (the consent card, say) take
      // the wheel itself instead of passing it through to the page.
      allowNestedScroll: true,

      // Lenis runs its own rAF loop; `destroy()` cancels it.
      autoRaf: true,

      // Default, spelled out because it is the accessibility contract here:
      // under `prefers-reduced-motion: reduce` the easing is dropped and scroll
      // tracks the input 1:1, which is what every other motion in this codebase
      // does under the same query.
      respectReducedMotion: true,
    });

    registerSmoothScroll(lenis);

    return () => {
      registerSmoothScroll(null);
      lenis.destroy();
    };
  }, []);

  return null;
}
