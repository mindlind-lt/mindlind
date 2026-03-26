'use client';

import {
  createContext,
  useContext,
  useRef,
  useCallback,
  ReactNode,
} from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';

type TransitionContextType = {
  navigateTo: (href: string, originX: number, originY: number) => void;
  revealPage: () => void;
};

const TransitionContext = createContext<TransitionContextType>({
  navigateTo: () => {},
  revealPage: () => {},
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

/** Max circle radius guaranteed to cover the full viewport from any origin. */
function maxRadius(x: number, y: number) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  return Math.ceil(Math.hypot(Math.max(x, w - x), Math.max(y, h - y)));
}

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  // Remember the click origin so revealPage can reverse from the same point
  // Initialised to 0,0 — will be overwritten before first use on the client
  const originRef = useRef({ x: 0, y: 0 });
  const router = useRouter();

  const navigateTo = useCallback(
    async (href: string, originX: number, originY: number) => {
      originRef.current = { x: originX, y: originY };

      const overlay = overlayRef.current;
      if (!overlay) {
        router.push(href);
        return;
      }

      const r = maxRadius(originX, originY);
      const at = `${originX}px ${originY}px`;

      // Grow circle from the click point until it covers the whole screen
      await new Promise<void>((resolve) => {
        gsap.fromTo(
          overlay,
          { clipPath: `circle(0px at ${at})` },
          {
            clipPath: `circle(${r}px at ${at})`,
            duration: 0.7,
            ease: 'power4.inOut',
            onComplete: resolve,
          }
        );
      });

      router.push(href);
    },
    [router]
  );

  // Called by the destination page via useTransitionIn()
  const revealPage = useCallback(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const { x, y } = originRef.current;
    const r = maxRadius(x, y);
    const at = `${x}px ${y}px`;

    // Shrink the circle back to nothing, revealing the new page beneath
    gsap.fromTo(
      overlay,
      { clipPath: `circle(${r}px at ${at})` },
      {
        clipPath: `circle(0px at ${at})`,
        duration: 0.7,
        ease: 'power4.inOut',
        onComplete: () => {
          // Reset to hidden, ready for next navigation
          gsap.set(overlay, { clipPath: 'circle(0px at 50% 50%)' });
        },
      }
    );
  }, []);

  return (
    <TransitionContext.Provider value={{ navigateTo, revealPage }}>
      {children}
      <div
        ref={overlayRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          background: '#ffffff',
          zIndex: 9999,
          clipPath: 'circle(0px at 50% 50%)',
          pointerEvents: 'none',
          willChange: 'clip-path',
        }}
      />
    </TransitionContext.Provider>
  );
}
