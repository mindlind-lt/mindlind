"use client";

// The goals table from /praxis-marketing as something to choose from: pick a
// goal on the left, the panel on the right shows what gets clarified and how
// it is done. A tablist, so it works from the keyboard as well as the mouse.

import { useEffect, useRef, useState } from "react";

import { gsap, registerGsap } from "@/lib/gsap";

const GOALS = [
  {
    goal: "Einen Schwerpunkt stärken",
    ask: "Welche Behandlungen möchten Sie bekannter machen?",
    how: "Eigene Leistungsseiten und darauf abgestimmte Kampagnen",
  },
  {
    goal: "Regional gefunden werden",
    ask: "Aus welchem Einzugsgebiet kommen passende Patienten?",
    how: "Lokale SEO, ein gepflegtes Google-Profil und regionale Anzeigen",
  },
  {
    goal: "Vertrauen vermitteln",
    ask: "Welche Fragen stellen Patienten vor dem ersten Besuch?",
    how: "Verständliche Texte, echte Praxisbilder und klare Informationen zum Ablauf",
  },
  {
    goal: "Die Anmeldung entlasten",
    ask: "Welche Fragen und Terminwünsche lassen sich online abfangen?",
    how: "Gut auffindbare Antworten und eine sinnvoll eingebundene Terminbuchung",
  },
  {
    goal: "Das Budget gezielt einsetzen",
    ask: "Welche Kontaktwege werden genutzt und welche Anfragen passen?",
    how: "Auswertung messbarer Kontakte und Optimierung mit Ihrem Feedback",
  },
];

export default function GoalPicker() {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  useEffect(() => {
    registerGsap();
    if (first.current) {
      first.current = false;
      return;
    }
    const panel = panelRef.current;
    if (!panel || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.fromTo(
      panel.querySelectorAll("[data-goal-anim]"),
      { autoAlpha: 0, y: 22 },
      { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.07 }
    ).fromTo(
      panel.querySelector(".c3-goal-big"),
      { yPercent: 40, autoAlpha: 0 },
      { yPercent: 0, autoAlpha: 1, duration: 0.9 },
      0
    );
    return () => {
      tl.kill();
    };
  }, [active]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const next = (active + (e.key === "ArrowDown" ? 1 : GOALS.length - 1)) % GOALS.length;
    setActive(next);
    document.getElementById(`c3-goal-tab-${next}`)?.focus();
  };

  const g = GOALS[active];

  return (
    <div className="c3-goals" data-c3="goals">
      <div className="c3-goal-tabs" role="tablist" aria-orientation="vertical" onKeyDown={onKey}>
        {GOALS.map((item, i) => (
          <button
            key={item.goal}
            id={`c3-goal-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls="c3-goal-panel"
            tabIndex={active === i ? 0 : -1}
            className={`c3-goal-tab${active === i ? " is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            <span className="c3-goal-tab-num">0{i + 1}</span>
            <span>{item.goal}</span>
            <span className="c3-goal-tab-arrow" aria-hidden="true">→</span>
          </button>
        ))}
      </div>

      <div
        className="c3-goal-panel"
        id="c3-goal-panel"
        role="tabpanel"
        aria-labelledby={`c3-goal-tab-${active}`}
        ref={panelRef}
      >
        <span className="c3-goal-big" aria-hidden="true">0{active + 1}</span>
        <p className="c3-goal-name" data-goal-anim>{g.goal}</p>
        <div className="c3-goal-block" data-goal-anim>
          <span className="c3-goal-label">Was wir gemeinsam klären</span>
          <p>{g.ask}</p>
        </div>
        <div className="c3-goal-block c3-goal-block--how" data-goal-anim>
          <span className="c3-goal-label">So setzen wir es um</span>
          <p>{g.how}</p>
        </div>
        <p className="c3-goal-foot" data-goal-anim>
          Die Zahlen aus dem Marketing und die Rückmeldung aus Ihrer Praxis gehören zusammen.
        </p>
      </div>
    </div>
  );
}
