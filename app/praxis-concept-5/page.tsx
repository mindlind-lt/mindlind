import type { Metadata } from "next";
import Image from "next/image";

import DoorButton from "@/components/door-button/door-button";
import SectionContact from "@/components/section-contact/section-contact";

import CardBox from "./card-box";
import ConceptFiveMotion from "./concept-5-motion";
import PraxisCheck from "./praxis-check";

import "./concept-5.css";

/**
 * Concept 5 — "Praxis-Check". The page borrows the paperwork every practice
 * knows — the intake form, the chart, the prescription, the treatment plan —
 * and turns it into the pitch. Its centre is a working self-check: six
 * questions, answered on the page, produce a "Rezept" of recommended building
 * blocks. Paper sheets, index cards, a green stamp; Space Mono carries more of
 * the page than anywhere else on the site, because forms are where it belongs.
 *
 * A design concept, kept out of the index; content and its rules follow the
 * /praxis-marketing content document.
 */

export const metadata: Metadata = {
  title: "Praxismarketing — Konzept 5",
  robots: { index: false, follow: false },
};

function Tick({ checked = true }: { checked?: boolean }) {
  return (
    <svg className="c5-box" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4" />
      {checked && <path className="c5-tick" d="M6.5 12.5l3.6 3.6 7.4-8.2" data-c5="tick" />}
    </svg>
  );
}

const QUESTIONS = [
  { q: "Behandelt diese Praxis mein Anliegen?", a: "Die passenden Leistungsseiten auffindbar machen" },
  { q: "Welche Erfahrung bringt das Team mit?", a: "Qualifikationen und Schwerpunkte verständlich zeigen" },
  { q: "Was erwartet mich bei der Untersuchung?", a: "Abläufe erklären und offene Fragen beantworten" },
  { q: "Wie kann ich einen Termin vereinbaren?", a: "Ohne Umwege zur Kontaktaufnahme führen" },
];

const STEPS = [
  {
    img: "/images/praxis-ablauf-1.jpg",
    alt: "Ärztin bespricht die nächsten Schritte in einem Videogespräch",
    title: "Praxis und Ziele verstehen",
    text: "Wir sprechen über Ihre Fachrichtung, Ihre Schwerpunkte und die aktuelle Situation — und legen gemeinsam fest, welches Ziel zuerst angegangen werden soll.",
  },
  {
    img: "/images/praxis-ablauf-2.jpg",
    alt: "Gemeinsame Planung von Website-Inhalten und Marketingmaßnahmen",
    title: "Prioritäten festlegen",
    text: "Wir prüfen Ihren bestehenden Auftritt und zeigen, wo sich Verbesserungen anbieten. Sie erhalten einen Vorschlag mit konkreten Leistungen, Prioritäten und Kosten.",
  },
  {
    img: "/images/praxis-ablauf-3.jpg",
    alt: "Ärztin und Praxismitarbeiterin besprechen digitale Abläufe an der Anmeldung",
    title: "Umsetzen und weiterentwickeln",
    text: "Nach Ihrer Freigabe setzen wir um. Medizinische Inhalte stimmen wir mit Ihnen ab. Anhand der Auswertungen und Ihres Feedbacks justieren wir nach.",
  },
];

const GOALS = [
  { goal: "Einen Schwerpunkt stärken", ask: "Welche Behandlungen möchten Sie bekannter machen?", how: "Eigene Leistungsseiten und darauf abgestimmte Kampagnen" },
  { goal: "Regional gefunden werden", ask: "Aus welchem Einzugsgebiet kommen passende Patienten?", how: "Lokale SEO, ein gepflegtes Google-Profil und regionale Anzeigen" },
  { goal: "Vertrauen vermitteln", ask: "Welche Fragen stellen Patienten vor dem ersten Besuch?", how: "Verständliche Texte, echte Praxisbilder und klare Informationen zum Ablauf" },
  { goal: "Die Anmeldung entlasten", ask: "Welche Fragen und Terminwünsche lassen sich online abfangen?", how: "Gut auffindbare Antworten und eine sinnvoll eingebundene Terminbuchung" },
  { goal: "Das Budget gezielt einsetzen", ask: "Welche Kontaktwege werden genutzt und welche Anfragen passen?", how: "Auswertung messbarer Kontakte und Optimierung mit Ihrem Feedback" },
];

const TEAM = [
  { name: "Jan", role: "Creative Director", img: "/images/team-1.webp" },
  { name: "Georgy", role: "Managing Director", img: "/images/team-2.webp" },
  { name: "Almaz", role: "Webentwickler", img: "/images/team-3.webp" },
  { name: "Lera", role: "Designer", img: "/images/team-4.webp" },
  { name: "Evgeny", role: "Videoproduktion", img: "/images/team-5.webp" },
];

export default function PraxisConceptFive() {
  return (
    <div className="c5">
      <ConceptFiveMotion />

      {/* ---- Hero: the intake form fills itself in ---------------------- */}
      <section className="c5-hero">
        <div className="c5-wrap c5-hero-grid">
          <div className="c5-hero-copy">
            <p className="c5-label c5-enter" data-c5="hero-in">Anamnesebogen · Ihr Online-Auftritt</p>
            <h1 className="c5-h1" data-c5="hero-title">
              Praxismarketing, das zu Ihrer Praxis passt.
            </h1>
            <p className="c5-lead c5-enter" data-c5="hero-in">
              Erst der Befund, dann die Behandlung: Wir schauen uns an, was
              Ihre Praxis braucht — und verbinden Website, lokale
              Sichtbarkeit und Werbung zu einem klaren Auftritt.
            </p>
            <div className="c5-hero-actions c5-enter" data-c5="hero-in">
              <DoorButton size="lg" href="#check">Praxis-Check starten</DoorButton>
              <a className="c5-link" href="/contact">Oder direkt ein Gespräch anfragen</a>
            </div>
          </div>

          <div className="c5-hero-papers" data-c5="papers">
            <div className="c5-sheet c5-sheet--under" aria-hidden="true" />
            <div className="c5-sheet c5-form" data-c5="form" aria-hidden="true">
              <div className="c5-form-head">
                <span>Anamnesebogen</span>
                <span>MindLind · Praxismarketing</span>
              </div>
              <div className="c5-field">
                <span className="c5-field-label">Praxis</span>
                <span className="c5-field-value" data-c5="type" data-text="Ihre Praxis">Ihre Praxis</span>
              </div>
              <div className="c5-field">
                <span className="c5-field-label">Fachrichtung</span>
                <span className="c5-field-value" data-c5="type" data-text="Ihr Schwerpunkt">Ihr Schwerpunkt</span>
              </div>
              <p className="c5-form-q">Was möchten Sie erreichen?</p>
              <ul className="c5-form-checks">
                <li><Tick />Neue Website</li>
                <li><Tick />Einen Schwerpunkt bekannter machen</li>
                <li><Tick checked={false} />Neue Praxis eröffnen</li>
                <li><Tick />Regional gefunden werden</li>
                <li><Tick />Online-Terminbuchung</li>
              </ul>
              <div className="c5-form-sign">
                <svg viewBox="0 0 220 50" aria-hidden="true">
                  <path data-c5="sign" d="M6 34c14-22 22-26 26-14s-4 18 2 14 14-24 22-22-2 20 6 18 10-14 18-14 4 12 12 10 14-12 24-12 10 6 20 4 30-6 44-8" />
                </svg>
                <span>Unterschrift Praxisinhaber/in</span>
              </div>
              <div className="c5-stamp" data-c5="stamp">
                <span>Klarer Plan</span>
                <small>MindLind</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Anamnese: what patients ask -------------------------------- */}
      <section className="c5-section">
        <div className="c5-wrap">
          <div className="c5-head">
            <p className="c5-label">Abschnitt A · Vor dem Termin</p>
            <h2 className="c5-h2">Was Patienten wissen möchten, bevor sie anrufen.</h2>
          </div>
          <div className="c5-sheet c5-chart">
            <div className="c5-chart-cols" aria-hidden="true">
              <span>Patienten fragen</span>
              <span>Ihre Website antwortet</span>
            </div>
            {QUESTIONS.map((item, i) => (
              <div className="c5-chart-row" key={item.q} data-c5="chart-row">
                <span className="c5-chart-num">A{i + 1}</span>
                <span className="c5-chart-q"><Tick />{item.q}</span>
                <span className="c5-chart-a" data-c5="chart-a">→ {item.a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- The check ---------------------------------------------------- */}
      <section className="c5-section c5-check-section" id="check">
        <div className="c5-wrap">
          <div className="c5-head">
            <p className="c5-label">Abschnitt B · Praxis-Check</p>
            <h2 className="c5-h2">Sechs Fragen. Ein erster Befund für Ihren Auftritt.</h2>
            <p className="c5-lead">
              Beantworten Sie die Fragen so, wie es heute ist. Rechts entsteht
              Ihr Rezept: welche Bausteine sich für Ihre Praxis anbieten.
              Unverbindlich und ohne Anmeldung — es wird nichts gespeichert.
            </p>
          </div>
          <PraxisCheck />
        </div>
      </section>

      {/* ---- Index-card box ----------------------------------------------- */}
      <section className="c5-section">
        <div className="c5-wrap c5-box-grid">
          <div className="c5-head">
            <p className="c5-label">Abschnitt C · Leistungen</p>
            <h2 className="c5-h2">Sechs Bausteine, geordnet nach dem Nutzen für Ihre Praxis.</h2>
            <p className="c5-lead">
              Website, SEO, Google Ads, Texte, Foto und Video sowie digitale
              Patientenkommunikation — sortiert wie ein Karteikasten. Wählen Sie
              einen Reiter.
            </p>
          </div>
          <CardBox />
        </div>
      </section>

      {/* ---- Note with circled words -------------------------------------- */}
      <section className="c5-section c5-note-section">
        <div className="c5-wrap">
          <div className="c5-sheet c5-note" data-c5="note">
            <p className="c5-label">Notiz · Ihr Praxisalltag</p>
            <p className="c5-note-text">
              Welche{" "}
              <span className="c5-circled">
                Patienten
                <svg viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden="true"><path data-c5="circle" d="M18 44C10 20 70 6 120 8s78 14 72 34-60 32-110 30S6 58 30 26" /></svg>
              </span>{" "}
              möchten Sie erreichen? Und wofür hat Ihre Praxis{" "}
              <span className="c5-circled">
                Kapazität?
                <svg viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden="true"><path data-c5="circle" d="M14 40C8 16 72 4 124 7s76 16 70 36-62 30-112 28S2 56 34 22" /></svg>
              </span>
            </p>
            <p className="c5-note-small">
              Zusätzliche Anfragen helfen Ihrer Praxis dann, wenn sie zu Ihren
              Leistungen und verfügbaren Terminen passen. Deshalb beginnt unsere
              Arbeit mit einem Gespräch über Ihren Praxisalltag.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Map sheet ----------------------------------------------------- */}
      <section className="c5-section">
        <div className="c5-wrap c5-map-grid">
          <div className="c5-map" data-c5="map">
            <svg className="c5-map-lines" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <path data-c5="street" d="M-20 160 C140 150 260 190 620 120" />
              <path data-c5="street" d="M-20 420 C180 400 360 460 620 400" />
              <path data-c5="street" d="M150 -20 C170 160 130 360 170 620" />
              <path data-c5="street" d="M430 -20 C410 200 470 380 440 620" />
              <path data-c5="street" className="c5-map-minor" d="M-20 290 L620 300" />
              <path data-c5="street" className="c5-map-minor" d="M300 -20 L290 620" />
              <path data-c5="river" className="c5-map-river" d="M-20 530 C120 470 220 560 360 510 S540 450 620 490" />
              <circle cx="300" cy="300" r="120" className="c5-map-radius" data-c5="radius" />
            </svg>
            <span className="c5-map-pin" data-c5="pin">
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M12 22s7-6.4 7-12a7 7 0 10-14 0c0 5.6 7 12 7 12z" fill="currentColor" /><circle cx="12" cy="10" r="2.6" fill="#fff" /></svg>
            </span>
            <figure className="c5-polaroid c5-map-photo" data-c5="polaroid">
              <Image src="/images/praxis-6.jpg" alt="Person nutzt ein Smartphone vor einer Praxis in der Stadt" width={1024} height={1536} />
              <figcaption>Ihre Praxis — in der Nähe gefunden</figcaption>
            </figure>
          </div>
          <div>
            <p className="c5-label">Abschnitt D · Lokale Sichtbarkeit</p>
            <h2 className="c5-h2">Gefunden werden, wenn Patienten in Ihrer Nähe suchen.</h2>
            <ul className="c5-checklist">
              <li><Tick />Ihre Fachrichtung, Ihr Standort, Ihr Leistungsangebot</li>
              <li><Tick />Google-Unternehmensprofil geprüft und gepflegt</li>
              <li><Tick />Leistungsseiten mit regionalem Bezug</li>
              <li><Tick />Öffnungszeiten, Kontaktdaten und Bilder stimmig</li>
              <li><Tick />Entwicklung anhand der Such- und Kontaktdaten</li>
            </ul>
            <DoorButton href="/contact">Lokale Sichtbarkeit besprechen</DoorButton>
          </div>
        </div>
      </section>

      {/* ---- Treatment plan ----------------------------------------------- */}
      <section className="c5-section">
        <div className="c5-wrap">
          <div className="c5-head">
            <p className="c5-label">Abschnitt E · Behandlungsplan</p>
            <h2 className="c5-h2">Ein klarer Ablauf. Von der ersten Frage bis zur Umsetzung.</h2>
          </div>
          <ol className="c5-plan">
            {STEPS.map((s, i) => (
              <li className="c5-plan-item" key={s.title} data-c5="plan">
                <div className="c5-plan-marker"><Tick /></div>
                <figure className="c5-polaroid c5-plan-photo" data-c5="plan-photo" style={{ "--tilt": `${[-4, 3, -2][i]}deg` } as React.CSSProperties}>
                  <span className="c5-clip" aria-hidden="true" />
                  <Image src={s.img} alt={s.alt} width={1536} height={1024} />
                </figure>
                <div className="c5-plan-copy">
                  <span className="c5-label">Schritt {i + 1} von 3</span>
                  <h3 className="c5-h3">{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- Befund (goals) ------------------------------------------------ */}
      <section className="c5-section">
        <div className="c5-wrap">
          <div className="c5-head">
            <p className="c5-label">Abschnitt F · Befund</p>
            <h2 className="c5-h2">Was Ihre Praxis braucht, bestimmt die Maßnahmen.</h2>
          </div>
          <div className="c5-sheet c5-report">
            <div className="c5-report-head" aria-hidden="true">
              <span>Ihr Praxisziel</span>
              <span>Was wir gemeinsam klären</span>
              <span>So setzen wir es um</span>
            </div>
            {GOALS.map((g, i) => (
              <div className="c5-report-row" key={g.goal} data-c5="report-row">
                <span className="c5-report-goal"><b>F{i + 1}</b>{g.goal}</span>
                <span className="c5-report-ask">{g.ask}</span>
                <span className="c5-report-how">{g.how}</span>
              </div>
            ))}
            <p className="c5-report-foot">
              Anmerkung: Die Zahlen aus dem Marketing und die Rückmeldung aus
              Ihrer Praxis gehören zusammen.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Case files ---------------------------------------------------- */}
      <section className="c5-section">
        <div className="c5-wrap">
          <div className="c5-head">
            <p className="c5-label">Abschnitt G · Akten</p>
            <h2 className="c5-h2">So wird medizinische Kompetenz sichtbar.</h2>
          </div>
          <div className="c5-folders">
            {[
              { href: "/projects/mondent", img: "/images/case-mondent-1.webp", alt: "Mondent — Website und UX/UI für eine Zahnarztpraxis", title: "Mondent", note: "Website · UX/UI · Zahnarztpraxis in Düsseldorf" },
              { href: "/projects/onlysmile", img: "/images/case-onlysmile-1.webp", alt: "OnlySmile — Website und UX/UI für professionelles Zahnbleaching", title: "OnlySmile", note: "Website · UX/UI · Zahnbleaching und Dental Beauty" },
            ].map((w, i) => (
              <a className={`c5-folder c5-folder--${i + 1}`} href={w.href} key={w.href} data-c5="folder">
                <span className="c5-folder-tab">Akte · {w.title}</span>
                <div className="c5-folder-back" />
                <div className="c5-folder-paper">
                  <Image src={w.img} alt={w.alt} width={1124} height={1399} />
                </div>
                <div className="c5-folder-front">
                  <span className="c5-folder-title">{w.title}</span>
                  <span className="c5-folder-note">{w.note}</span>
                  <span className="c5-folder-open">Akte öffnen →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Team badges --------------------------------------------------- */}
      <section className="c5-section c5-team">
        <div className="c5-wrap">
          <div className="c5-head">
            <p className="c5-label">Ihre Ansprechpartner</p>
            <h2 className="c5-h2">Sie bringen die medizinische Expertise ein. Wir kümmern uns um die digitale Umsetzung.</h2>
          </div>
          <div className="c5-badges">
            {TEAM.map((p) => (
              <div className="c5-badge-hang" key={p.name} data-c5="badge">
                <span className="c5-lanyard" aria-hidden="true" />
                <div className="c5-badge">
                  <span className="c5-badge-hole" aria-hidden="true" />
                  <span className="c5-badge-org">MindLind</span>
                  <div className="c5-badge-photo">
                    <Image src={p.img} alt={p.name} width={1086} height={1448} />
                  </div>
                  <span className="c5-badge-name">{p.name}</span>
                  <span className="c5-badge-role">{p.role}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="c5-team-note">
            Medizinische Inhalte stimmen wir mit Ihnen ab. Texte, Bilder und
            Kontaktwege entwickeln wir als zusammenhängenden Auftritt.
          </p>
        </div>
      </section>

      <SectionContact
        index="[✓]"
        title="Was möchten Sie mit Ihrer Praxis als Nächstes erreichen?"
        titleClassName="text-xl lg:text-2xl"
        lead="Eine neue Website, mehr Sichtbarkeit für einen Schwerpunkt oder einfachere Wege zur Terminbuchung? Erzählen Sie uns kurz von Ihrer Praxis und Ihrem Vorhaben."
        extraFields={[
          { name: "practice", label: "Name der Praxis" },
          { name: "phone", label: "Telefonnummer (optional)", type: "tel" },
          { name: "website", label: "Praxiswebsite (optional)", type: "url" },
        ]}
        messageLabel="Was möchten Sie verbessern?"
        messagePlaceholder="Zum Beispiel: Wir möchten unseren neuen Behandlungsschwerpunkt bekannter machen."
        submitLabel="Gespräch anfragen"
        successMessage="Ihre Anfrage ist angekommen. Wir melden uns bei Ihnen, um Ihr Vorhaben zu besprechen."
        privacyNote={
          <>
            Informationen zum Umgang mit Ihren Angaben finden Sie in unserer{" "}
            <a href="/datenschutz">Datenschutzerklärung</a>.
          </>
        }
      />
    </div>
  );
}
