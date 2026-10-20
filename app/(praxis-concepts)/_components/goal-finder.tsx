"use client";

import { useState } from "react";
import { ArrowRight, Check, MapPin, Monitor, CalendarDays } from "lucide-react";
import PreviewForm from "./preview-form";
import { CheckList, Cta, TeamNote } from "./shared";

const goals = [
  { icon: MapPin, title: "Regional sichtbarer werden", description: "Patienten sollen uns für die richtigen Leistungen finden.", label: "Sichtbarkeit",
    heading: "Dort ansetzen, wo Patienten suchen.", intro: "Wir besprechen Ihre Schwerpunkte und Ihr Einzugsgebiet. Dann klären wir, wie Ihre Website, Ihr Google-Profil und mögliche Anzeigen zusammenspielen können.",
    items: ["Leistungen und Standort klar verbinden", "Google-Unternehmensprofil und lokale SEO prüfen", "Anzeigen gezielt nach Praxisziel einordnen"] },
  { icon: Monitor, title: "Unsere Website verbessern", description: "Unser Auftritt soll zeigen, was unsere Praxis ausmacht.", label: "Praxiswebsite",
    heading: "Einen Auftritt schaffen, der Orientierung gibt.", intro: "Wir sehen uns Ihre bestehende Website und Ihre Ziele an. Gemeinsam klären wir, ob gezielte Verbesserungen genügen oder ein neuer Auftritt sinnvoll ist.",
    items: ["Schwerpunkte und Behandlungen verständlich zeigen", "Vertrauen mit Team, Bildern und klaren Abläufen aufbauen", "Kontaktwege auf Mobilgeräten einfach halten"] },
  { icon: CalendarDays, title: "Die Anmeldung entlasten", description: "Wiederkehrende Fragen und Terminwege besser lösen.", label: "Patientenkommunikation",
    heading: "Häufige Fragen klären, bevor das Telefon klingelt.", intro: "Wir schauen auf wiederkehrende Anliegen in Ihrem Praxisalltag. Daraus entwickeln wir verständliche Informationen und einen nachvollziehbaren Weg zur Terminvereinbarung.",
    items: ["Fragen zu Vorbereitung und Ablauf beantworten", "Terminbuchung sinnvoll in die Website einbinden", "Öffnungszeiten, Anfahrt und Kontakt sofort auffindbar machen"] },
];

export default function GoalFinder() {
  const [selected, setSelected] = useState<number | null>(null);
  const goal = selected === null ? null : goals[selected];
  return <>
    <section className="pc-goal-hero pc-wrap">
      <p className="pc-eyebrow">Praxismarketing beginnt mit Ihrem Ziel</p>
      <h1>Was soll für Ihre Praxis<br /><span>besser funktionieren?</span></h1>
      <p className="pc-lead">Wählen Sie Ihr wichtigstes Anliegen. Wir zeigen Ihnen einen möglichen Einstieg – und klären im Gespräch, was zu Ihrer Praxis passt.</p>
      <fieldset className="pc-goal-picker"><legend>Ihr Praxisziel auswählen <span>(optional)</span></legend><div className="pc-goal-options">
        {goals.map((item, i) => <label key={item.title} className={`pc-goal-option${selected === i ? " is-selected" : ""}`}>
          <input type="radio" name="practice-goal" value={item.label} checked={selected === i} onChange={() => setSelected(i)} aria-controls="goal-recommendation" />
          <div className="pc-goal-option-top"><item.icon size={24} strokeWidth={1.6} aria-hidden="true" /><span className="pc-radio-mark" aria-hidden="true">{selected === i && <Check size={13} />}</span></div>
          <h2>{item.title}</h2><p>{item.description}</p><span className="pc-goal-option-link">{selected === i ? "Ausgewählt" : "Das ist unser Ziel"} <ArrowRight size={16} aria-hidden="true" /></span>
        </label>)}
      </div></fieldset>
      <Cta className="pc-goal-next">{goal ? "Mit diesem Ziel ins Gespräch" : "Mein Praxisziel besprechen"}</Cta>
      <br />
      <a className="pc-goal-skip" href="#kontakt" onClick={() => setSelected(null)}>Noch offen? Gemeinsam den Einstieg finden <ArrowRight size={15} aria-hidden="true" /></a>
    </section>
    <section className="pc-goal-contact" id="kontakt" tabIndex={-1}>
      <div className="pc-wrap pc-goal-contact-grid">
        <div id="goal-recommendation" aria-live="polite" aria-atomic="true">
          <p className="pc-eyebrow">{goal ? `Ihr Thema · ${goal.label}` : "Ihr Ziel. Unser gemeinsamer Ausgangspunkt."}</p>
          <h2>{goal?.heading ?? "Finden wir heraus, was jetzt sinnvoll ist."}</h2>
          <p className="pc-lead">{goal?.intro ?? "Sie müssen noch nicht wissen, welche Maßnahme Sie brauchen. Im Erstgespräch ordnen wir Ihre Situation ein und finden eine erste Priorität."}</p>
          <CheckList items={goal?.items ?? ["Ihre Schwerpunkte und Kapazitäten verstehen", "Den bestehenden Auftritt einordnen", "Eine passende erste Maßnahme besprechen"]} />
          <p className="pc-goal-reassurance">Sie entscheiden danach in Ruhe, ob Sie mit uns weitergehen möchten.</p>
          <TeamNote />
        </div>
        <PreviewForm id="goal" goal={goal?.title} title="Sprechen wir über Ihr Praxisziel." />
      </div>
    </section>
  </>;
}
