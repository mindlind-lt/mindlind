"use client";

import { useState, useEffect, useRef } from "react";
import Link from "@/components/progress-bar/progress-link";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  return (
    <>

      <button
        className={`burger ${isActive ? "burger-active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="burger-label">Menu</div>
        <div className="burger-lines">
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      </button>

      <div className={`drawer ${isActive ? "drawer-active" : ""} ${isReady ? "drawer-active-ready" : ""}`}>

        <nav className="drawer-menu">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/agency" onClick={() => setIsOpen(false)}>Agency</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          {/* <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link> */}
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>

        <div className="drawer-contact">
          <div>Žirgų g. 18-6, Raudondvario k. LT-14257 Vilnius</div>
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

            <h6 className="mb-6">Folgen Sie uns</h6>

            <div className="drawer-socials-icons">

                <div>
                <a href="https://www.instagram.com/mind_lind" target="_blank">
                    <img alt="" src="/assets/images/instagram-icon.svg" />
                </a>
                </div>

            </div>

        </div>

      </div>

    </>
  );
}