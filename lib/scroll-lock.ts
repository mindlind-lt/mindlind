/**
 * Holding the page still while an overlay is open.
 *
 * Lives in a module slot rather than a React context because the things that
 * need it are effects in components scattered across the tree (a drawer, a
 * lightbox), and a context would force every one of them to be a consumer of a
 * provider that renders nothing.
 */

/** How many overlays currently want the page behind them held still. */
let locks = 0;

/** `body`'s own overflow, captured when the first lock is taken. */
let unlockedOverflow = "";

/**
 * Hold the page still while an overlay is open, and return the release.
 *
 * Refcounted, because overlays can overlap — a lightbox opened from inside the
 * mobile drawer would otherwise be released by whichever one closes first.
 */
export function lockPageScroll() {
  if (locks === 0) {
    unlockedOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
  locks += 1;

  let released = false;
  return () => {
    if (released) return;
    released = true;
    locks -= 1;
    if (locks > 0) return;
    document.body.style.overflow = unlockedOverflow;
  };
}
