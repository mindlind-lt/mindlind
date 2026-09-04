"use client";

import { useState, useEffect, useRef } from "react";
import Link from "@/components/progress-bar/progress-link";
import { lockPageScroll } from "@/lib/smooth-scroll";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsActive(true);
      timeoutRef.current = setTimeout(() => {
        setIsReady(true);
      }, 100);
    } else {
      setIsReady(false);
      timeoutRef.current = setTimeout(() => {
        setIsActive(false);
      }, 300);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOpen]);

  // While the drawer is open: Escape closes it, the page behind it can't scroll,
  // and focus moves into it. The focus restore on close matters — marking the
  // drawer `inert` while focus is still inside it drops focus to <body>.
  useEffect(() => {
    if (!isOpen) return;

    // Captured up front: both nodes are always rendered, so these stay valid
    // for the cleanup, and reading `.current` there instead would be stale-prone.
    const drawer = drawerRef.current;
    const button = buttonRef.current;

    drawer?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const unlockScroll = lockPageScroll();
    window.addEventListener("keydown", onKeyDown);

    return () => {
      unlockScroll();
      window.removeEventListener("keydown", onKeyDown);

      // Only reclaim focus if it's still inside the drawer (or was dropped to
      // <body> by `inert`). If the user has clicked elsewhere on the page,
      // yanking focus back to the burger would be worse than leaving it.
      const focused = document.activeElement;
      if (!focused || focused === document.body || drawer?.contains(focused)) {
        button?.focus({ preventScroll: true });
      }
    };
  }, [isOpen]);

  return (
    <>

      <button
        ref={buttonRef}
        type="button"
        className={`burger ${isActive ? "burger-active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="site-drawer"
      >
        <div className="burger-label">Menu</div>
        <div className="burger-lines">
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      </button>

      {/* `inert` is what keeps the closed drawer out of the tab order — the CSS
          only collapses it to width/height 0, which hides it visually but leaves
          every link inside focusable. */}
      <div
        ref={drawerRef}
        id="site-drawer"
        tabIndex={-1}
        inert={!isOpen}
        className={`drawer ${isActive ? "drawer-active" : ""} ${isReady ? "drawer-active-ready" : ""}`}
      >

        <nav className="drawer-menu">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/agency" onClick={() => setIsOpen(false)}>Agency</Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>Leistungen</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          {/* <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link> */}
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>

        <div className="drawer-contact">
          {/* <div>Žirgų g. 18-6, Raudondvario k. LT-14257 Vilnius</div> */}
          <div>
            <a href="mailto:info@mindlind.de">info@mindlind.de</a>
          </div>
          <div>
            <a href="tel:+37067546918">+370 675 46 918</a>
          </div>
          <div>
            <a href="tel:+4917624685516">+49 176 24685516</a>
          </div>
        </div>

        <div className="drawer-socials">

            <div className="mb-6">Folgen Sie uns</div>

            <div className="drawer-socials-icons">

                <div>
                <a
                    href="https://www.instagram.com/mind_lind"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Mindlind auf Instagram"
                >
                    <img alt="" src="/assets/images/instagram-icon.svg" />
                </a>
                </div>

            </div>

        </div>

      </div>

    </>
  );
}