import type Lenis from "lenis";

/**
 * The page's smooth-scroll instance and the one way to freeze it.
 *
 * Lives in a module slot rather than a React context because the things that
 * need it are effects in components scattered across the tree (a drawer, a
 * lightbox), and a context would force every one of them to be a consumer of a
 * provider that renders nothing. The slot is written by <SmoothScroll />; it is
 * null before that mounts, on the server, and whenever smooth scrolling is off.
 */
let instance: Lenis | null = null;

/** How many overlays currently want the page behind them held still. */
let locks = 0;

/** `body`'s own overflow, captured when the first lock is taken. */
let unlockedOverflow = "";

/** Called by <SmoothScroll /> on mount, and with null on unmount. */
export function registerSmoothScroll(lenis: Lenis | null) {
  instance = lenis;
  // An overlay can open before the instance exists — effects run child-first,
  // so a lightbox restored on load locks the page before the provider below it
  // in the tree has built anything to lock.
  if (lenis && locks > 0) lenis.stop();
}

export function getSmoothScroll() {
  return instance;
}

/**
 * Hold the page still while an overlay is open, and return the release.
 *
 * `overflow: hidden` alone is not enough once scrolling is smoothed: it stops
 * the document from moving, but Lenis keeps integrating wheel events against a
 * scroll position it can no longer reach, so the page snaps to wherever the
 * momentum ended up the moment the overlay closes. Stopping Lenis as well
 * leaves it parked on the real position.
 *
 * Refcounted, because overlays can overlap — a lightbox opened from inside the
 * mobile drawer would otherwise be released by whichever one closes first.
 */
export function lockPageScroll() {
  if (locks === 0) {
    unlockedOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    instance?.stop();
  }
  locks += 1;

  let released = false;
  return () => {
    if (released) return;
    released = true;
    locks -= 1;
    if (locks > 0) return;
    document.body.style.overflow = unlockedOverflow;
    instance?.start();
  };
}
