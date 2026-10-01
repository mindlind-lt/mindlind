"use client";

// Two sketches of the same practice website, one cluttered and one clear, with
// a divider to drag between them. Both are drawings — no real practice, no
// real copy beyond placeholders — sized in container units so they scale as
// one picture at any width.
//
// The control is a native range input stretched over the whole frame and made
// transparent: dragging anywhere moves the divider, and the keyboard and
// screen readers get a real slider for free.

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap";

export default function CompareSlider() {
  const [pos, setPos] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);

  // One sweep when it first comes into view, so it is obvious it moves.
  useEffect(() => {
    registerGsap();
    const frame = frameRef.current;
    if (!frame || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const state = { v: 50 };
    const tl = gsap.timeline({ paused: true, onUpdate: () => setPos(Math.round(state.v * 10) / 10) });
    tl.to(state, { v: 18, duration: 1.1, ease: "power3.inOut" })
      .to(state, { v: 82, duration: 1.4, ease: "power3.inOut" })
      .to(state, { v: 50, duration: 1, ease: "power3.inOut" });

    const st = ScrollTrigger.create({
      trigger: frame,
      start: "top 65%",
      once: true,
      onEnter: () => tl.play(),
    });
    const stop = () => tl.kill();
    frame.addEventListener("pointerdown", stop);
    return () => {
      st.kill();
      tl.kill();
      frame.removeEventListener("pointerdown", stop);
    };
  }, []);

  return (
    <div className="c4-compare" ref={frameRef} style={{ "--pos": `${pos}%` } as React.CSSProperties} data-c4="compare">
      {/* ---- Unclear ---- */}
      <div className="c4-mock c4-mock--unclear" aria-hidden="true">
        <div className="m-notice">Wichtige Hinweise zu unseren Sprechzeiten — bitte unbedingt vollständig lesen!</div>
        <div className="m-nav">
          <span className="m-logo" />
          <span className="m-links">
            {Array.from({ length: 9 }).map((_, i) => <i key={i} />)}
          </span>
        </div>
        <div className="m-body">
          <div className="m-col">
            <p className="m-h">Herzlich willkommen auf unserer Homepage</p>
            {Array.from({ length: 11 }).map((_, i) => <i className="m-line" key={i} style={{ width: `${70 + ((i * 37) % 30)}%` }} />)}
            <div className="m-tiny-links">
              {Array.from({ length: 6 }).map((_, i) => <i key={i} />)}
            </div>
          </div>
          <div className="m-side">
            <div className="m-photo">
              <Image src="/images/praxis-hero.jpg" alt="" width={1536} height={1024} />
            </div>
            {Array.from({ length: 5 }).map((_, i) => <i className="m-line" key={i} style={{ width: `${60 + ((i * 23) % 35)}%` }} />)}
            <span className="m-small-btn">Kontakt</span>
          </div>
        </div>
        <div className="m-boxes">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i}>
              <i className="m-line" style={{ width: "80%" }} />
              <i className="m-line" style={{ width: "55%" }} />
              <i className="m-line" style={{ width: "70%" }} />
            </span>
          ))}
        </div>
      </div>

      {/* ---- Clear ---- */}
      <div className="c4-mock c4-mock--clear" aria-hidden="true">
        <div className="m-nav">
          <span className="m-brand"><span className="m-brand-dot" />Ihre Praxis</span>
          <span className="m-links">
            <b>Leistungen</b><b>Team</b><b>Ihr Besuch</b>
          </span>
          <span className="m-btn">Termin</span>
        </div>
        <div className="m-hero">
          <div className="m-hero-photo">
            <Image src="/images/praxis-hero.jpg" alt="" width={1536} height={1024} />
          </div>
          <div>
            <p className="m-kicker">Ihre Fachrichtung · Ihre Stadt</p>
            <p className="m-title">Ihre Praxis für Ihren Schwerpunkt.</p>
            <p className="m-sub">Verständlich erklärt, schnell erreichbar.</p>
            <div className="m-ctas">
              <span className="m-btn m-btn--lg">Termin vereinbaren</span>
              <span className="m-btn m-btn--ghost">Leistungen</span>
            </div>
          </div>
        </div>
        <div className="m-tiles">
          <span><b>Leistungen</b>Was wir behandeln</span>
          <span><b>Ihr erster Besuch</b>Was Sie erwartet</span>
          <span><b>Anfahrt & Zeiten</b>So finden Sie uns</span>
        </div>
      </div>

      <span className="c4-compare-tag c4-compare-tag--l c4-glass">Unklar</span>
      <span className="c4-compare-tag c4-compare-tag--r c4-glass">Klar</span>

      <span className="c4-compare-handle" aria-hidden="true">
        <span className="c4-compare-knob">‹ ›</span>
      </span>

      <input
        className="c4-compare-input"
        type="range"
        min={0}
        max={100}
        step={0.5}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Vergleich: unklarer und klarer Praxisauftritt"
      />
    </div>
  );
}
