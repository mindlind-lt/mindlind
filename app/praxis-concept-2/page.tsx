import type { Metadata } from "next";
import Image from "next/image";
import { Instrument_Serif } from "next/font/google";

import DoorButton from "@/components/door-button/door-button";
import SectionContact from "@/components/section-contact/section-contact";

import ConceptTwoMotion from "./concept-2-motion";
import TeamIndex from "./team-index";

import "./concept-2.css";

/**
 * Concept 2 — "Ruhe". An editorial take on /praxis-marketing: a serif display
 * face over the site's Inter and Space Mono, long calm scroll passages, and
 * motion that reveals rather than performs. A design concept, so it is kept out
 * of the index; content follows the /praxis-marketing content document and
 * keeps its rules (no invented figures, ratings, testimonials or people).
 */

const serif = Instrument_Serif({
  variable: "--font-c2-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Praxismarketing — Konzept 2",
  robots: { index: false, follow: false },
};

const QUESTIONS = [
  {
    q: "Behandelt diese Praxis mein Anliegen?",
    a: "Die passenden Leistungsseiten auffindbar machen",
  },
  {
    q: "Welche Erfahrung bringt das Team mit?",
    a: "Qualifikationen und Schwerpunkte verständlich zeigen",
  },
  {
    q: "Was erwartet mich bei der Untersuchung?",
    a: "Abläufe erklären und offene Fragen beantworten",
  },
  {
    q: "Wie kann ich einen Termin vereinbaren?",
    a: "Ohne Umwege zur Kontaktaufnahme führen",
  },
];

const PILLARS = [
  {
    title: "Sichtbar werden",
    lead: "Für Patienten, die gerade nach Ihrer Behandlung suchen.",
    items: [
      "Suchmaschinenoptimierung",
      "Google-Unternehmensprofil",
      "Lokale Google-Ads-Kampagnen",
      "Seiten für Ihre Behandlungen",
      "Inhalte mit regionalem Bezug",
      "Auswertung der Auffindbarkeit",
    ],
  },
  {
    title: "Vertrauen aufbauen",
    lead: "Für Patienten, die wissen möchten, wer sie behandelt.",
    items: [
      "Individuelle Praxiswebsite",
      "Klare Positionierung",
      "Verständliche medizinische Texte",
      "Professionelle Praxisfotografie",
      "Videos für Praxis und Team",
      "Übersichtliche mobile Darstellung",
    ],
  },
  {
    title: "Kontakt erleichtern",
    lead: "Für Patienten, die sich entschieden haben.",
    items: [
      "Einbindung der Online-Terminbuchung",
      "Gut erreichbare Kontaktwege",
      "Antworten auf häufige Fragen",
      "Anfrageformulare",
      "Klare Hinweise vor dem Termin",
      "Analyse der Kontaktwege",
    ],
  },
];

const STEPS = [
  {
    img: "/images/praxis-ablauf-1.jpg",
    alt: "Ärztin bespricht die nächsten Schritte in einem Videogespräch",
    title: "Praxis und Ziele verstehen",
    text: "Wir sprechen über Ihre Fachrichtung, Ihre Schwerpunkte und die aktuelle Situation. Möchten Sie eine neue Leistung bekannt machen, eine Praxis eröffnen oder bestehende Abläufe verbessern? Gemeinsam legen wir fest, welches Ziel zuerst angegangen werden soll.",
  },
  {
    img: "/images/praxis-ablauf-2.jpg",
    alt: "Gemeinsame Planung von Website-Inhalten und Marketingmaßnahmen",
    title: "Prioritäten festlegen",
    text: "Wir prüfen Ihren bestehenden Auftritt und zeigen, wo sich Verbesserungen anbieten. Sie erhalten einen Vorschlag mit konkreten Leistungen, Prioritäten und Kosten — nachvollziehbar und auf Ihr Ziel ausgerichtet.",
  },
  {
    img: "/images/praxis-ablauf-3.jpg",
    alt: "Ärztin und Praxismitarbeiterin besprechen digitale Abläufe an der Anmeldung",
    title: "Umsetzen und weiterentwickeln",
    text: "Nach Ihrer Freigabe setzen wir die vereinbarten Maßnahmen um. Medizinische Inhalte stimmen wir mit Ihnen ab. Anhand der Auswertungen und Ihres Feedbacks prüfen wir, was funktioniert und wo wir nachjustieren.",
  },
];

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

const WORKS = [
  {
    href: "/projects/mondent",
    img: "/images/case-mondent-1.webp",
    alt: "Mondent — Website und UX/UI für eine Zahnarztpraxis",
    title: "Mondent",
    note: "Website und SEO für eine große Zahnarztpraxis in Düsseldorf",
  },
  {
    href: "/projects/onlysmile",
    img: "/images/case-onlysmile-1.webp",
    alt: "OnlySmile — Website und UX/UI für professionelles Zahnbleaching",
    title: "OnlySmile",
    note: "Markenauftritt für Zahnbleaching und Dental Beauty",
  },
];

export default function PraxisConceptTwo() {
  return (
    <div className={`c2 ${serif.variable}`}>
      <ConceptTwoMotion />

      {/* ---- Hero ------------------------------------------------------- */}
      <section className="c2-hero">
        <div className="c2-wrap">
          <div className="c2-hero-meta c2-enter" data-c2="hero-meta">
            <span>Online-Marketing für Ärzte</span>
            <span>Websites · Lokale SEO · Google Ads</span>
          </div>

          <h1 className="c2-hero-title" data-c2="hero-title">
            <span className="c2-line">Praxismarketing,</span>
            <span className="c2-line">das zu Ihrer</span>
            <span className="c2-line">
              Praxis <em>passt.</em>
            </span>
          </h1>

          <div className="c2-hero-foot">
            <p className="c2-hero-lead c2-enter" data-c2="hero-lead">
              MindLind verbindet Website, lokale Sichtbarkeit und Werbung zu
              einem klaren Auftritt — damit Patienten verstehen, wofür Ihre
              Praxis steht und wie sie einen Termin bekommen.
            </p>
            <div className="c2-enter" data-c2="hero-cta">
              <DoorButton size="lg" href="/contact">Praxisziele besprechen</DoorButton>
            </div>
          </div>
        </div>

        {/* Starts as a framed picture inside the column and opens to the full
            width of the screen as it is scrolled — see concept-2-motion. */}
        <div className="c2-reveal" data-c2="reveal">
          <div className="c2-reveal-frame">
            <Image
              className="c2-reveal-img"
              src="/images/praxis-hero.jpg"
              alt="Ärztin in einer hellen, modernen Praxis"
              width={1536}
              height={1024}
              priority
            />
            <div className="c2-reveal-caption">
              <span>Klar positioniert</span>
              <span>Ihre Schwerpunkte im Fokus</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Accents ----------------------------------------------------- */}
      <section className="c2-section">
        <div className="c2-wrap">
          <div className="c2-accents" data-c2="accents">
            {[
              ["3", "Schritte zur Zusammenarbeit"],
              ["6", "Bausteine für Ihren Auftritt"],
              ["1", "Klarer Plan für Ihre Praxis"],
            ].map(([n, label]) => (
              <div className="c2-accent" key={label}>
                <em data-c2-count>{n}</em>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Statement, read word by word -------------------------------- */}
      <section className="c2-section">
        <div className="c2-wrap c2-statement-grid">
          <div className="c2-label">
            <span className="c2-label-num">01</span>
            <span>Ihre Praxis</span>
          </div>
          <div>
            <h2 className="c2-h2">
              Ihre Praxis ist besonders. Ihr Online-Auftritt sollte zeigen,{" "}
              <em>warum.</em>
            </h2>
            <p className="c2-readout" data-c2="readout">
              Welche Schwerpunkte setzen Sie? Wie beraten Sie? Was erwartet
              Patienten beim ersten Besuch? Wir machen Ihre Praxis online
              greifbar: mit verständlichen Leistungsseiten, einer klaren
              Struktur und Bildern, die zu Ihnen passen. So können sich
              Patienten schon vor dem ersten Anruf orientieren.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Questions → answers, pinned --------------------------------- */}
      <section className="c2-qa" data-c2="qa">
        <div className="c2-qa-stage">
          <div className="c2-wrap c2-qa-inner">
            <div className="c2-qa-head">
              <div className="c2-label">
                <span className="c2-label-num">02</span>
                <span>Vor dem ersten Termin</span>
              </div>
              <div className="c2-qa-counter" aria-hidden="true">
                <span data-c2="qa-current">01</span> / 04
              </div>
            </div>

            <ol className="c2-qa-list">
              {QUESTIONS.map((item, i) => (
                <li className="c2-qa-item" key={item.q} data-c2="qa-item">
                  <p className="c2-qa-kicker">Patienten fragen</p>
                  <p className="c2-qa-q">{item.q}</p>
                  <div className="c2-qa-a">
                    <span className="c2-qa-arrow" aria-hidden="true">↳</span>
                    <span>
                      <span className="c2-qa-a-label">Ihre Website antwortet</span>
                      {item.a}
                    </span>
                  </div>
                  <span className="sr-only">Frage {i + 1} von 4</span>
                </li>
              ))}
            </ol>

            <div className="c2-qa-progress" aria-hidden="true">
              <span data-c2="qa-bar" />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Six building blocks, stacked cards -------------------------- */}
      <section className="c2-section">
        <div className="c2-wrap">
          <div className="c2-section-head">
            <div className="c2-label">
              <span className="c2-label-num">03</span>
              <span>Leistungen</span>
            </div>
            <h2 className="c2-h2">
              Sechs Bausteine, geordnet nach dem <em>Nutzen</em> für Ihre Praxis.
            </h2>
          </div>

          <div className="c2-stack">
            {PILLARS.map((p, i) => (
              <article className={`c2-card c2-card--${i + 1}`} key={p.title} data-c2="card">
                <div className="c2-card-top">
                  <span className="c2-card-num">0{i + 1}</span>
                  <span className="c2-card-count">6 Leistungen</span>
                </div>
                <div className="c2-card-body">
                  <div>
                    <h3 className="c2-card-title">{p.title}</h3>
                    <p className="c2-card-lead">{p.lead}</p>
                  </div>
                  <ul className="c2-card-list">
                    {p.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Green band -------------------------------------------------- */}
      <section className="c2-band" data-c2="band">
        <div className="c2-wrap">
          <div className="c2-label c2-label--dark">
            <span className="c2-label-num">04</span>
            <span>Im Praxisalltag</span>
          </div>

          <p className="c2-band-intro">
            Zusätzliche Anfragen helfen Ihrer Praxis dann, wenn sie zu Ihren
            Leistungen und verfügbaren Terminen passen. Deshalb beginnt unsere
            Arbeit mit einem Gespräch über Ihren Praxisalltag.
          </p>

          <p className="c2-band-quote" data-c2="band-quote">
            <span className="c2-line">Welche Patienten möchten </span>
            <span className="c2-line">Sie erreichen? Und wofür </span>
            <span className="c2-line">hat Ihre Praxis <em>Kapazität?</em></span>
          </p>

          <div className="c2-band-grid">
            <figure className="c2-band-photo">
              <Image
                src="/images/praxis-2.jpg"
                alt="Arzt im persönlichen Gespräch mit einer Patientin"
                width={1536}
                height={1024}
                data-c2="parallax"
              />
            </figure>
            <p className="c2-band-text">
              Vielleicht möchten Sie eine neue Sprechstunde etablieren, einen
              Behandlungsschwerpunkt bekannter machen oder wiederkehrende
              Fragen schon auf der Website beantworten. Wir übersetzen diese
              Ziele in konkrete Inhalte und Maßnahmen — von der ersten Suche
              über die Information zur Behandlung bis zur Kontaktaufnahme.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Work --------------------------------------------------------- */}
      <section className="c2-section">
        <div className="c2-wrap">
          <div className="c2-section-head c2-section-head--split">
            <div className="c2-label">
              <span className="c2-label-num">05</span>
              <span>Einblicke</span>
            </div>
            <h2 className="c2-h2">
              So wird medizinische Kompetenz <em>sichtbar.</em>
            </h2>
          </div>

          <div className="c2-works">
            {WORKS.map((w, i) => (
              <a className={`c2-work c2-work--${i + 1}`} href={w.href} key={w.href}>
                <div className="c2-work-media">
                  <Image
                    src={w.img}
                    alt={w.alt}
                    width={1124}
                    height={1399}
                    data-c2="parallax"
                  />
                </div>
                <div className="c2-work-meta">
                  <h3 className="c2-work-title">{w.title}</h3>
                  <span className="c2-work-pills">Website · UX/UI</span>
                </div>
                <p className="c2-work-note">{w.note}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Process, horizontal ----------------------------------------- */}
      <section className="c2-steps" data-c2="steps">
        <div className="c2-steps-pin">
          <div className="c2-steps-track" data-c2="steps-track">
            <div className="c2-steps-intro">
              <div className="c2-label">
                <span className="c2-label-num">06</span>
                <span>Zusammenarbeit</span>
              </div>
              <h2 className="c2-h2">
                Ein klarer Ablauf. Von der ersten Frage bis zur <em>Umsetzung.</em>
              </h2>
              <p className="c2-steps-hint" aria-hidden="true">
                <span>Drei Schritte</span>
                <span className="c2-steps-hint-line" />
              </p>
            </div>

            {STEPS.map((s, i) => (
              <article className="c2-step" key={s.title}>
                <div className="c2-step-media">
                  <Image src={s.img} alt={s.alt} width={1536} height={1024} />
                </div>
                <div className="c2-step-copy">
                  <span className="c2-step-num">0{i + 1}</span>
                  <h3 className="c2-step-title">{s.title}</h3>
                  <p className="c2-step-text">{s.text}</p>
                </div>
              </article>
            ))}

            <div className="c2-steps-end">
              <p className="c2-steps-end-title">
                Erzählen Sie uns, was Sie mit Ihrer Praxis <em>vorhaben.</em>
              </p>
              <DoorButton size="lg" href="/contact">Erstgespräch anfragen</DoorButton>
            </div>
          </div>

          <div className="c2-wrap">
            <div className="c2-steps-progress" aria-hidden="true">
              <span data-c2="steps-bar" />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Local -------------------------------------------------------- */}
      <section className="c2-section c2-local" data-c2="local">
        <div className="c2-wrap c2-local-grid">
          <div className="c2-local-visual">
            <svg className="c2-local-orbit" viewBox="0 0 600 600" aria-hidden="true" data-c2="orbit">
              <defs>
                <path id="c2-orbit-path" d="M300,300 m-262,0 a262,262 0 1,1 524,0 a262,262 0 1,1 -524,0" />
              </defs>
              <circle cx="300" cy="300" r="290" className="c2-orbit-ring" />
              <circle cx="300" cy="300" r="236" className="c2-orbit-ring c2-orbit-ring--dash" />
              <text className="c2-orbit-text">
                <textPath href="#c2-orbit-path">
                  Ihre Fachrichtung · Ihr Standort · Ihr Leistungsangebot · Ihre Fachrichtung · Ihr Standort · Ihr Leistungsangebot ·
                </textPath>
              </text>
            </svg>
            <div className="c2-local-photo" data-c2="local-photo">
              <Image
                src="/images/praxis-6.jpg"
                alt="Person nutzt ein Smartphone vor einer Praxis in der Stadt"
                width={1024}
                height={1536}
              />
            </div>
          </div>

          <div className="c2-local-copy">
            <div className="c2-label">
              <span className="c2-label-num">07</span>
              <span>Lokale Sichtbarkeit</span>
            </div>
            <h2 className="c2-h2">
              Gefunden werden, wenn Patienten in Ihrer <em>Nähe</em> suchen.
            </h2>
            <div className="c2-local-item" data-c2="local-item">
              <h3>Behandlung und Standort verbinden</h3>
              <p>
                Eine Suche nach einem Facharzt beginnt mit einem konkreten
                Anliegen. Wer nach Ihrer Leistung in Ihrer Stadt sucht, soll
                schnell erkennen können, ob Ihre Praxis der richtige
                Ansprechpartner ist.
              </p>
            </div>
            <div className="c2-local-item" data-c2="local-item">
              <h3>Website und Google-Profil gemeinsam verbessern</h3>
              <p>
                Öffnungszeiten, Kontaktdaten, Leistungen und Bilder sollen ein
                konsistentes Gesamtbild vermitteln. Dazu kommen technische
                Verbesserungen, eine sinnvolle interne Verlinkung und der Blick
                auf die verfügbaren Such- und Kontaktdaten.
              </p>
            </div>
            <DoorButton href="/contact">Lokale Sichtbarkeit besprechen</DoorButton>
          </div>
        </div>
      </section>

      {/* ---- Goals index -------------------------------------------------- */}
      <section className="c2-section">
        <div className="c2-wrap">
          <div className="c2-section-head c2-section-head--split">
            <div className="c2-label">
              <span className="c2-label-num">08</span>
              <span>Ihr Praxisziel</span>
            </div>
            <h2 className="c2-h2">
              Was Ihre Praxis braucht, bestimmt die <em>Maßnahmen.</em>
            </h2>
          </div>

          <div className="c2-goals" role="table" aria-label="Praxisziele und Umsetzung">
            <div className="c2-goal c2-goal--head" role="row">
              <span role="columnheader">Ihr Praxisziel</span>
              <span role="columnheader">Was wir gemeinsam klären</span>
              <span role="columnheader">So setzen wir es um</span>
            </div>
            {GOALS.map((g, i) => (
              <div className="c2-goal" role="row" key={g.goal} data-c2="goal">
                <span className="c2-goal-rule" aria-hidden="true" />
                <span className="c2-goal-name" role="rowheader">
                  <span className="c2-goal-num">0{i + 1}</span>
                  {g.goal}
                </span>
                <span className="c2-goal-ask" role="cell">{g.ask}</span>
                <span className="c2-goal-how" role="cell">{g.how}</span>
              </div>
            ))}
          </div>

          <p className="c2-goals-foot">
            Die Zahlen aus dem Marketing und die Rückmeldung aus Ihrer Praxis
            gehören zusammen.
          </p>
        </div>
      </section>

      {/* ---- Team -------------------------------------------------------- */}
      <section className="c2-section c2-team">
        <div className="c2-wrap">
          <div className="c2-section-head c2-section-head--split">
            <div className="c2-label">
              <span className="c2-label-num">09</span>
              <span>MindLind</span>
            </div>
            <h2 className="c2-h2">
              Sie bringen die medizinische Expertise ein. Wir kümmern uns um die
              digitale <em>Umsetzung.</em>
            </h2>
          </div>

          <TeamIndex />

          <p className="c2-team-note">
            Medizinische Inhalte stimmen wir mit Ihnen ab. Texte, Bilder und
            Kontaktwege entwickeln wir als zusammenhängenden Auftritt.
          </p>
        </div>
      </section>

      {/* ---- Closing line + contact -------------------------------------- */}
      <section className="c2-closing" data-c2="closing">
        <div className="c2-wrap">
          <p className="c2-closing-title" data-c2="closing-title">
            <span className="c2-line">Was möchten Sie </span>
            <span className="c2-line">mit Ihrer Praxis als </span>
            <span className="c2-line"><em>Nächstes</em> erreichen?</span>
          </p>
        </div>
      </section>

      <SectionContact
        index="[10]"
        title="Gespräch anfragen"
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
