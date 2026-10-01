"use client";

// The self-check. Six questions about the practice's current presence, each
// answered Ja / Teilweise / Nein. Every answer short of "Ja" adds the building
// blocks that address it to a prescription slip beside the questions, which
// writes itself as the visitor goes and is stamped once all six are answered.
//
// Nothing leaves the browser: no request, no storage. The recommendations are
// the building blocks from the content document, nothing promised beyond them.

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

import { gsap, registerGsap } from "@/lib/gsap";

type Answer = "ja" | "teilweise" | "nein";

const QUESTIONS: { q: string; hint: string; rx: string[] }[] = [
  {
    q: "Erscheint Ihre Praxis bei Google mit aktuellen Öffnungszeiten, Kontaktdaten und Bildern?",
    hint: "Lokale Suche",
    rx: ["Google-Unternehmensprofil", "Inhalte mit regionalem Bezug"],
  },
  {
    q: "Hat jede Ihrer wichtigsten Behandlungen eine eigene, verständliche Seite?",
    hint: "Leistungsseiten",
    rx: ["Seiten für Ihre Behandlungen", "Verständliche medizinische Texte"],
  },
  {
    q: "Können Patienten auf Ihrer Website direkt einen Termin anfragen oder buchen?",
    hint: "Terminbuchung",
    rx: ["Einbindung der Online-Terminbuchung", "Gut erreichbare Kontaktwege"],
  },
  {
    q: "Zeigt Ihre Website echte Bilder von Praxis und Team?",
    hint: "Vertrauen",
    rx: ["Professionelle Praxisfotografie", "Videos für Praxis und Team"],
  },
  {
    q: "Lässt sich Ihre Website auf dem Smartphone gut bedienen?",
    hint: "Mobile Darstellung",
    rx: ["Übersichtliche mobile Darstellung"],
  },
  {
    q: "Wissen Sie, über welche Wege Patienten heute Kontakt aufnehmen?",
    hint: "Auswertung",
    rx: ["Analyse der Kontaktwege", "Auswertung der Auffindbarkeit"],
  },
];

const OPTIONS: { value: Answer; label: string }[] = [
  { value: "ja", label: "Ja" },
  { value: "teilweise", label: "Teilweise" },
  { value: "nein", label: "Nein" },
];

export default function PraxisCheck() {
  const [answers, setAnswers] = useState<(Answer | null)[]>(() => QUESTIONS.map(() => null));
  const slipRef = useRef<HTMLDivElement>(null);
  const seen = useRef<Set<string>>(new Set());
  const stamped = useRef(false);

  const answered = answers.filter(Boolean).length;
  const fulfilled = answers.filter((a) => a === "ja").length;
  const done = answered === QUESTIONS.length;

  // Unique, in question order.
  const rx = useMemo(
    () => Array.from(new Set(answers.flatMap((a, i) => (a && a !== "ja" ? QUESTIONS[i].rx : [])))),
    [answers]
  );

  useEffect(() => {
    registerGsap();
  }, []);

  // New lines on the slip write themselves in; lines that drop out just go.
  useLayoutEffect(() => {
    const slip = slipRef.current;
    if (!slip || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const fresh = Array.from(slip.querySelectorAll<HTMLElement>("[data-rx]")).filter((el) => !seen.current.has(el.dataset.rx!));
    fresh.forEach((el) => seen.current.add(el.dataset.rx!));
    seen.current.forEach((k) => {
      if (!rx.includes(k)) seen.current.delete(k);
    });
    if (fresh.length) {
      gsap.fromTo(fresh, { clipPath: "inset(0 100% 0 0)", x: -6 }, { clipPath: "inset(0 0% 0 0)", x: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" });
    }
  }, [rx]);

  // The stamp lands once, when the last question is answered.
  useEffect(() => {
    const slip = slipRef.current;
    if (!slip) return;
    const stamp = slip.querySelector(".c5-rx-stamp");
    if (done && !stamped.current) {
      stamped.current = true;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(stamp, { autoAlpha: 1 });
        return;
      }
      gsap
        .timeline()
        .fromTo(stamp, { autoAlpha: 0, scale: 2.4, rotation: -30 }, { autoAlpha: 1, scale: 1, rotation: -12, duration: 0.45, ease: "power4.in" })
        .to(slip, { y: 4, duration: 0.06, yoyo: true, repeat: 1, ease: "power1.inOut" })
        .fromTo(slip.querySelector(".c5-rx-cta"), { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" }, ">-0.05");
    }
    if (!done && stamped.current) {
      stamped.current = false;
      gsap.to(stamp, { autoAlpha: 0, duration: 0.2 });
    }
  }, [done]);

  const set = (i: number, a: Answer) => setAnswers((prev) => prev.map((v, j) => (j === i ? a : v)));
  const reset = () => setAnswers(QUESTIONS.map(() => null));

  return (
    <div className="c5-check" data-c5="check">
      <ol className="c5-check-list">
        {QUESTIONS.map((item, i) => (
          <li className={`c5-check-q${answers[i] ? " is-answered" : ""}`} key={item.q}>
            <div className="c5-check-top">
              <span className="c5-check-num">B{i + 1}</span>
              <span className="c5-check-hint">{item.hint}</span>
            </div>
            <p className="c5-check-text" id={`c5-q-${i}`}>{item.q}</p>
            <div className="c5-seg" role="radiogroup" aria-labelledby={`c5-q-${i}`}>
              {OPTIONS.map((o) => (
                <button
                  key={o.value}
                  type="button"
                  role="radio"
                  aria-checked={answers[i] === o.value}
                  className={`c5-seg-btn c5-seg-btn--${o.value}${answers[i] === o.value ? " is-on" : ""}`}
                  onClick={() => set(i, o.value)}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <aside className="c5-rx-wrap" aria-live="polite">
        <div className="c5-rx" ref={slipRef}>
          <div className="c5-rx-head">
            <span className="c5-rx-title">Rezept</span>
            <span className="c5-rx-sub">Praxismarketing · MindLind</span>
          </div>

          <div className="c5-rx-meter">
            <span className="c5-rx-meter-label">{answered} von {QUESTIONS.length} beantwortet</span>
            <span className="c5-rx-dots" aria-hidden="true">
              {answers.map((a, i) => (
                <i key={i} className={a ? `is-${a}` : ""} />
              ))}
            </span>
          </div>

          <p className="c5-rx-label">Rp. / Empfohlene Bausteine</p>

          {rx.length === 0 ? (
            <p className="c5-rx-empty">
              {answered === 0
                ? "Beantworten Sie die Fragen — Ihre Empfehlungen erscheinen hier."
                : done
                  ? "Ihr Auftritt ist in diesen Punkten gut aufgestellt. Im Gespräch klären wir, wo sich der nächste Schritt lohnt."
                  : "Bisher sieht Ihr Auftritt gut aufgestellt aus. Weiter mit den nächsten Fragen."}
            </p>
          ) : (
            <ul className="c5-rx-list">
              {rx.map((r) => (
                <li key={r} data-rx={r}>{r}</li>
              ))}
            </ul>
          )}

          <div className="c5-rx-foot">
            <span>
              {done
                ? `${fulfilled} von ${QUESTIONS.length} Punkten erfüllen Sie bereits.`
                : "Befund wird erstellt …"}
            </span>
            <span className="c5-rx-sign" aria-hidden="true" />
          </div>

          <div className="c5-rx-cta">
            <a className="c5-rx-btn" href="/contact">Rezept im Erstgespräch besprechen</a>
            <button type="button" className="c5-rx-reset" onClick={reset}>Neu beginnen</button>
          </div>

          <div className="c5-rx-stamp" aria-hidden="true">
            <span>Befund erstellt</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
