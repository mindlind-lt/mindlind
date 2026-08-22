'use client';

import { useSyncExternalStore } from 'react';

/**
 * Becomes true the first time the visitor does anything at all on the page —
 * moves a pointer, touches, scrolls, or presses a key.
 *
 * Use it to gate genuinely optional, expensive payloads (Spline scenes: a
 * multi-megabyte .splinecode plus a WebGL context). Waiting for `load` + an
 * idle callback is not enough: that still lands inside the window Lighthouse /
 * PageSpeed measures, where the download and the WebGL warm-up show up as TBT
 * and a late LCP. A synthetic run never touches the page, so a gesture gate
 * keeps those scenes off the measured critical path entirely, while a real
 * visitor — who moves the mouse or scrolls within the first second — barely
 * notices the delay.
 *
 * The listeners are module-level singletons, so every scene on the page shares
 * one set of handlers and a scene mounted later still sees an interaction that
 * already happened.
 */

const EVENTS = [
  'pointerdown',
  'pointermove',
  'touchstart',
  'wheel',
  'keydown',
  'scroll',
] as const;

let interacted = false;
let listening = false;
const subscribers = new Set<() => void>();

function markInteracted() {
  if (interacted) return;
  interacted = true;
  for (const event of EVENTS) window.removeEventListener(event, markInteracted);
  for (const notify of subscribers) notify();
}

function startListening() {
  if (listening || interacted || typeof window === 'undefined') return;
  listening = true;
  // A restored scroll position (back/forward nav, anchor link) means the
  // visitor is already engaged with the page — no gesture needed.
  if (window.scrollY > 0) {
    markInteracted();
    return;
  }
  for (const event of EVENTS) {
    window.addEventListener(event, markInteracted, { passive: true });
  }
}

function subscribe(onStoreChange: () => void) {
  startListening();
  subscribers.add(onStoreChange);
  return () => {
    subscribers.delete(onStoreChange);
  };
}

export function useFirstInteraction() {
  return useSyncExternalStore(
    subscribe,
    () => interacted,
    () => false
  );
}
