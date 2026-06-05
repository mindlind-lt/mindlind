"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

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

      <div 
        className={`drawer ${isActive ? "drawer-active" : ""} ${isReady ? "drawer-active-ready" : ""}`}
    >

        <nav className="drawer-menu">
          <Link href="/">Home</Link>
          <Link href="/agency">Agency</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="drawer-contact">
          <div>27 Whitfield Yard, Shoreditch, London E2 7NX</div>
          <div>+44 20 3999 1245</div>
        </div>

        <div className="drawer-socials">

            <h6 className="mb-6">Follow Us</h6>

            <div className="drawer-socials-icons">

                <div>
                <a href="#" target="_blank">
                    <img alt="" src="/assets/images/contra-icon.svg" />
                </a>
                </div>

                <div>
                <a href="https://x.com/" target="_blank">
                    <img alt="" src="/assets/images/x-icon.svg" />
                </a>
                </div>

                <div>
                <a href="https://www.behance.net/" target="_blank">
                    <img alt="" src="/assets/images/behance-icon.svg" />
                </a>
                </div>

                <div>
                <a href="https://www.instagram.com/" target="_blank">
                    <img alt="" src="/assets/images/instagram-icon.svg" />
                </a>
                </div>

            </div>

        </div>

      </div>
    </>
  );
}