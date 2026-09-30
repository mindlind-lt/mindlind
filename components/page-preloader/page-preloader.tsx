'use client';

import { useEffect, useRef, useState } from 'react';
import './page-preloader.css';

const MAX_WAIT_MS = 10_000;
const EXIT_MS = 450;

function isInViewport(element: Element) {
  const rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0 && rect.bottom > 0 &&
    rect.top < window.innerHeight && rect.right > 0 && rect.left < window.innerWidth;
}

/** Errors count as settled: a broken image must never trap the visitor. */
function waitForImage(image: HTMLImageElement, signal: AbortSignal) {
  return new Promise<void>((resolve) => {
    const settle = () => {
      image.removeEventListener('load', settle);
      image.removeEventListener('error', settle);
      signal.removeEventListener('abort', settle);
      resolve();
    };
    if (image.complete || signal.aborted) {
      settle();
    } else {
      image.addEventListener('load', settle, { once: true });
      image.addEventListener('error', settle, { once: true });
      signal.addEventListener('abort', settle, { once: true });
    }
  }).then(async () => {
    if (!signal.aborted) await image.decode().catch(() => {});
  });
}

/** Initial document loads only; the root layout persists during navigation. */
export default function PagePreloader() {
  const [phase, setPhase] = useState<'loading' | 'leaving' | 'done'>('loading');
  const splashRef = useRef<HTMLDivElement>(null);
  const dismissRef = useRef<() => void>(() => {});

  useEffect(() => {
    const splash = splashRef.current;
    const content = document.getElementById('site-content');
    if (!splash || !content) return;

    // Count from navigation, not hydration: a slow client bundle must not
    // restart the waiting period or lock a page the CSS fallback has opened.
    const remainingWait = Math.max(0, MAX_WAIT_MS - performance.now());
    if (remainingWait === 0) {
      const frame = requestAnimationFrame(() => setPhase('done'));
      return () => cancelAnimationFrame(frame);
    }

    const controller = new AbortController();
    const oldOverflow = document.body.style.overflow;
    const oldInert = content.inert;
    const previousFocus = document.activeElement;
    let cancelled = false;
    let finishing = false;
    let assetsReady = false;
    let exitTimer: ReturnType<typeof setTimeout> | undefined;
    let paintFrame = 0;

    content.inert = true;
    document.body.style.overflow = 'hidden';
    splash.focus({ preventScroll: true });

    const restorePage = () => {
      content.inert = oldInert;
      document.body.style.overflow = oldOverflow;
      if (splash.contains(document.activeElement)) {
        const target = content.querySelector<HTMLElement>('[role="dialog"][data-open="true"]') ??
          (previousFocus instanceof HTMLElement && previousFocus !== document.body && previousFocus.isConnected
            ? previousFocus : content.querySelector('main'));
        target?.focus({ preventScroll: true });
      }
    };

    const finish = () => {
      if (cancelled || finishing) return;
      finishing = true;
      observer.disconnect();
      clearTimeout(deadline);
      controller.abort();
      setPhase('leaving');
      const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 120 : EXIT_MS;
      exitTimer = setTimeout(() => {
        restorePage();
        setPhase('done');
      }, duration);
    };
    dismissRef.current = finish;

    const checkReady = () => {
      if (!assetsReady || cancelled || finishing) return;
      const pending = content.querySelector('[data-critical-asset][data-load-state="loading"]');
      if (pending) return;
      // Let React commit the canvas visibility and the browser draw its first
      // frame before lifting the curtain. This is not a minimum display time.
      cancelAnimationFrame(paintFrame);
      paintFrame = requestAnimationFrame(() => {
        paintFrame = requestAnimationFrame(finish);
      });
    };

    const observer = new MutationObserver(checkReady);
    observer.observe(content, {
      subtree: true, childList: true, attributes: true,
      attributeFilter: ['data-load-state'],
    });
    const deadline = setTimeout(finish, remainingWait);

    const images = Array.from(content.querySelectorAll('img')).filter(isInViewport);
    // A video's poster is enough for the initial view. Never wait for a video
    // stream (or below-the-fold images/scenes) before opening the page.
    const posters = Array.from(content.querySelectorAll('video[poster]'))
      .filter(isInViewport).map((video) => {
        const image = new Image();
        image.src = video.getAttribute('poster')!;
        return image;
      });

    void Promise.allSettled([
      document.fonts.ready,
      ...images.concat(posters).map((image) => waitForImage(image, controller.signal)),
    ]).then(() => {
      if (cancelled || finishing) return;
      assetsReady = true;
      checkReady();
    });

    // A restored back/forward-cache page should never resurrect the curtain.
    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) finish();
    };
    window.addEventListener('pageshow', onPageShow);

    return () => {
      cancelled = true;
      observer.disconnect();
      controller.abort();
      clearTimeout(deadline);
      clearTimeout(exitTimer);
      cancelAnimationFrame(paintFrame);
      window.removeEventListener('pageshow', onPageShow);
      restorePage();
      dismissRef.current = () => {};
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      ref={splashRef}
      className="page-preloader"
      data-state={phase}
      role="dialog"
      aria-modal="true"
      aria-label="Mindlind wird geladen"
      tabIndex={-1}
      onKeyDown={(event) => {
        if (event.key === 'Escape') dismissRef.current();
      }}
    >
      <div className="page-preloader__symbol" aria-hidden="true">
        <span /><span /><span />
      </div>
      <div className="sr-only" role="status" aria-live="polite">
        {phase === 'loading' ? 'Die Seite wird geladen.' : 'Die Seite ist bereit.'}
      </div>
      <button className="page-preloader__skip" type="button" onClick={() => dismissRef.current()}>
        Überspringen
      </button>
    </div>
  );
}
