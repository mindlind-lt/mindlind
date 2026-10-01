"use client";

// The six building blocks as an index-card box: three cards, one per group,
// filed behind each other with their tabs showing. Choosing a tab pulls that
// card up out of the box and drops it in front; the others settle back a row.

import { useEffect, useRef, useState } from "react";

import { gsap, registerGsap } from "@/lib/gsap";

const CARDS = [
  {
    tab: "Sichtbar werden",
    lead: "Für Patienten, die gerade nach Ihrer Behandlung suchen.",
    items: ["Suchmaschinenoptimierung", "Google-Unternehmensprofil", "Lokale Google-Ads-Kampagnen", "Seiten für Ihre Behandlungen", "Inhalte mit regionalem Bezug", "Auswertung der Auffindbarkeit"],
  },
  {
    tab: "Vertrauen aufbauen",
    lead: "Für Patienten, die wissen möchten, wer sie behandelt.",
    items: ["Individuelle Praxiswebsite", "Klare Positionierung", "Verständliche medizinische Texte", "Professionelle Praxisfotografie", "Videos für Praxis und Team", "Übersichtliche mobile Darstellung"],
  },
  {
    tab: "Kontakt erleichtern",
    lead: "Für Patienten, die sich entschieden haben.",
    items: ["Einbindung der Online-Terminbuchung", "Gut erreichbare Kontaktwege", "Antworten auf häufige Fragen", "Anfrageformulare", "Klare Hinweise vor dem Termin", "Analyse der Kontaktwege"],
  },
];

/** Where a card sits for its depth in the box: front is 0. */
const slot = (depth: number) => ({ y: depth * -22, scale: 1 - depth * 0.035, zIndex: 10 - depth });

export default function CardBox() {
  // order[0] is the card in front.
  const [order, setOrder] = useState([0, 1, 2]);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const busy = useRef(false);

  useEffect(() => {
    registerGsap();
    order.forEach((card, depth) => gsap.set(cardsRef.current[card], slot(depth)));
    // Positions are applied once here; every later change goes through pick().
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pick = (card: number) => {
    if (busy.current || order[0] === card) return;
    const next = [card, ...order.filter((c) => c !== card)];
    const el = cardsRef.current[card];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !el) {
      next.forEach((c, depth) => gsap.set(cardsRef.current[c], slot(depth)));
      setOrder(next);
      return;
    }

    busy.current = true;
    const tl = gsap.timeline({
      onComplete: () => {
        busy.current = false;
      },
    });
    // Up and out of the box …
    tl.to(el, { y: "-=" + el.offsetHeight * 0.55, rotation: -4, duration: 0.38, ease: "power2.out" })
      // … in front of the others while it is out …
      .set(el, { zIndex: 20 })
      // … and down into the front slot, the rest settling back a row.
      .to(el, { ...slot(0), zIndex: 20, rotation: 0, duration: 0.55, ease: "power3.inOut" });
    next.slice(1).forEach((c, i) => {
      tl.to(cardsRef.current[c], { ...slot(i + 1), duration: 0.5, ease: "power3.out" }, 0.25);
    });
    tl.set(el, { zIndex: slot(0).zIndex });
    setOrder(next);
  };

  return (
    <div className="c5-cardbox" data-c5="cardbox">
      <div className="c5-cardbox-tabs" role="tablist" aria-label="Leistungsgruppen">
        {CARDS.map((c, i) => (
          <button
            key={c.tab}
            type="button"
            role="tab"
            aria-selected={order[0] === i}
            aria-controls={`c5-card-${i}`}
            className={`c5-cardbox-tabbtn${order[0] === i ? " is-on" : ""}`}
            onClick={() => pick(i)}
          >
            0{i + 1} · {c.tab}
          </button>
        ))}
      </div>

      <div className="c5-cardbox-stack">
        {CARDS.map((c, i) => (
          <article
            key={c.tab}
            id={`c5-card-${i}`}
            role="tabpanel"
            aria-hidden={order[0] !== i}
            className={`c5-card c5-card--${i + 1}`}
            ref={(el) => {
              cardsRef.current[i] = el;
            }}
          >
            <button type="button" className="c5-card-tab" style={{ left: `${8 + i * 30}%` }} onClick={() => pick(i)} tabIndex={-1} aria-hidden="true">
              {c.tab}
            </button>
            <div className="c5-card-body">
              <div className="c5-card-top">
                <span>Karte 0{i + 1}</span>
                <span>6 Leistungen</span>
              </div>
              <h3 className="c5-card-title">{c.tab}</h3>
              <p className="c5-card-lead">{c.lead}</p>
              <ul className="c5-card-lines">
                {c.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
        <div className="c5-cardbox-front" aria-hidden="true" />
      </div>
    </div>
  );
}
