"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import {
  subscribe,
  getPendingCount,
  getServerPendingCount,
} from "./progress-store";

import "./top-progress-bar.css";

// Keep the bar on screen at least this long so even instant (prefetched)
// navigations register as a deliberate, visible transition.
const MIN_VISIBLE_MS = 400;
// Time for the final "snap to 100% + fade out" to play out.
const FINISH_MS = 260;

export default function TopProgressBar() {
  const pendingCount = useSyncExternalStore(
    subscribe,
    getPendingCount,
    getServerPendingCount,
  );

  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  const trickleRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const finishTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startedAtRef = useRef(0);

  useEffect(() => {
    const clearFinishTimers = () => {
      if (finishTimerRef.current) clearTimeout(finishTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      finishTimerRef.current = null;
      hideTimerRef.current = null;
    };
    const stopTrickle = () => {
      if (trickleRef.current) clearInterval(trickleRef.current);
      trickleRef.current = null;
    };

    if (pendingCount > 0) {
      // Navigation in flight — start (or keep) the bar climbing toward 90%.
      clearFinishTimers();
      if (!visible) {
        startedAtRef.current = Date.now();
        setVisible(true);
        setProgress(0.08);
      }
      if (!trickleRef.current) {
        trickleRef.current = setInterval(() => {
          setProgress((p) => (p >= 0.9 ? p : p + (0.9 - p) * 0.1));
        }, 260);
      }
    } else if (visible) {
      // Navigation settled — hold for the minimum, then snap to 100% and fade.
      stopTrickle();
      const elapsed = Date.now() - startedAtRef.current;
      const wait = Math.max(0, MIN_VISIBLE_MS - elapsed);
      finishTimerRef.current = setTimeout(() => {
        setProgress(1);
        hideTimerRef.current = setTimeout(() => {
          setVisible(false);
          setProgress(0);
        }, FINISH_MS);
      }, wait);
    }
  }, [pendingCount, visible]);

  // Clear any pending timers on unmount.
  useEffect(() => {
    return () => {
      if (trickleRef.current) clearInterval(trickleRef.current);
      if (finishTimerRef.current) clearTimeout(finishTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden
      className={`route-progress${visible ? " is-visible" : ""}`}
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}
