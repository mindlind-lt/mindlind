'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Logo } from '@/components/logo/logo';
import './preloader.css';

export function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const logo = logoRef.current;
    const line = lineRef.current;
    if (!overlay || !logo || !line) return;

    // Lock scroll while preloader is visible
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = originalOverflow;
        overlay.style.pointerEvents = 'none';
      },
    });

    tl
      // Set initial states
      .set(overlay, { yPercent: 0 })
      .set(logo, { opacity: 0, y: 12 })
      .set(line, { scaleX: 0, transformOrigin: 'left center' })

      // Logo glides up and fades in
      .to(logo, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.15,
      })

      // Progress line grows from left
      .to(line, {
        scaleX: 1,
        duration: 0.7,
        ease: 'power2.inOut',
      }, '-=0.3')

      // Brief pause so the user sees the logo
      .to({}, { duration: 0.45 })

      // Logo fades out upward
      .to(logo, {
        opacity: 0,
        y: -10,
        duration: 0.45,
        ease: 'power2.in',
      })

      // Overlay slides up off the screen
      .to(overlay, {
        yPercent: -100,
        duration: 0.85,
        ease: 'power4.inOut',
      }, '-=0.05');

    return () => {
      tl.kill();
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div ref={overlayRef} className="preloader">
      <div ref={logoRef} className="preloader__logo">
        <Logo color="white" width={220} height={41} />
      </div>
      <div className="preloader__line-track">
        <div ref={lineRef} className="preloader__line" />
      </div>
    </div>
  );
}
