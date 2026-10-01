import type { Metadata } from "next";
import Image from "next/image";

import DoorButton from "@/components/door-button/door-button";
import PersonCard from "@/components/person-card/person-card";
import SectionContact from "@/components/section-contact/section-contact";
import TeamCarousel from "@/components/team-carousel/team-carousel";

import CompareSlider from "./compare-slider";
import ConceptFourMotion from "./concept-4-motion";

import "./concept-4.css";

/**
 * Concept 4 — "Klarheit". The whole page is about coming into focus: what a
 * patient sees of a practice online is either blurred or clear, and MindLind's
 * job is the second. Blur-to-sharp is the one motion idea, used throughout —
 * a lens over the hero photograph, headlines that sharpen word by word, a
 * comparison slider, steps that resolve as they are read. Light, glassy,
 * airy. A design concept, kept out of the index; content and its rules follow
 * the /praxis-marketing content document.
 */

export const metadata: Metadata = {
  title: "Praxismarketing — Konzept 4",
  robots: { index: false, follow: false },
};

const QUESTIONS = [
  { q: "Behandelt diese Praxis mein Anliegen?", a: "Die passenden Leistungsseiten auffindbar machen" },
  { q: "Welche Erfahrung bringt das Team mit?", a: "Qualifikationen und Schwerpunkte verständlich zeigen" },
  { q: "Was erwartet mich bei der Untersuchung?", a: "Abläufe erklären und offene Fragen beantworten" },
  { q: "Wie kann ich einen Termin vereinbaren?", a: "Ohne Umwege zur Kontaktaufnahme führen" },
];

const PILLARS = [
  {
    title: "Sichtbar werden",
    items: ["Suchmaschinenoptimierung", "Google-Unternehmensprofil", "Lokale Google-Ads-Kampagnen", "Seiten für Ihre Behandlungen", "Inhalte mit regionalem Bezug", "Auswertung der Auffindbarkeit"],
  },
  {
    title: "Vertrauen aufbauen",
    items: ["Individuelle Praxiswebsite", "Klare Positionierung", "Verständliche medizinische Texte", "Professionelle Praxisfotografie", "Videos für Praxis und Team", "Übersichtliche mobile Darstellung"],
  },
  {
    title: "Kontakt erleichtern",
    items: ["Einbindung der Online-Terminbuchung", "Gut erreichbare Kontaktwege", "Antworten auf häufige Fragen", "Anfrageformulare", "Klare Hinweise vor dem Termin", "Analyse der Kontaktwege"],
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
    text: "Wir prüfen Ihren bestehenden Auftritt und zeigen, wo sich Verbesserungen anbieten. Sie erhalten einen Vorschlag mit konkreten Leistungen, Prioritäten und Kosten. So können Sie nachvollziehen, was wir empfehlen und wie die Maßnahmen auf Ihr Ziel einzahlen.",
  },
  {
    img: "/images/praxis-ablauf-3.jpg",
    alt: "Ärztin und Praxismitarbeiterin besprechen digitale Abläufe an der Anmeldung",
    title: "Umsetzen und weiterentwickeln",
    text: "Nach Ihrer Freigabe setzen wir die vereinbarten Maßnahmen um. Medizinische Inhalte stimmen wir mit Ihnen ab. Anhand der verfügbaren Auswertungen und Ihres Feedbacks prüfen wir, was funktioniert und wo wir nachjustieren sollten.",
  },
];

const GOALS = [
  { goal: "Einen Schwerpunkt stärken", ask: "Welche Behandlungen möchten Sie bekannter machen?", how: "Eigene Leistungsseiten und darauf abgestimmte Kampagnen" },
  { goal: "Regional gefunden werden", ask: "Aus welchem Einzugsgebiet kommen passende Patienten?", how: "Lokale SEO, ein gepflegtes Google-Profil und regionale Anzeigen" },
  { goal: "Vertrauen vermitteln", ask: "Welche Fragen stellen Patienten vor dem ersten Besuch?", how: "Verständliche Texte, echte Praxisbilder und klare Informationen zum Ablauf" },
  { goal: "Die Anmeldung entlasten", ask: "Welche Fragen und Terminwünsche lassen sich online abfangen?", how: "Gut auffindbare Antworten und eine sinnvoll eingebundene Terminbuchung" },
  { goal: "Das Budget gezielt einsetzen", ask: "Welche Kontaktwege werden genutzt und welche Anfragen passen?", how: "Auswertung messbarer Kontakte und Optimierung mit Ihrem Feedback" },
];

export default function PraxisConceptFour() {
  return (
    <div className="c4">
      <ConceptFourMotion />

      {/* ---- Hero: a lens over the practice ----------------------------- */}
      <section className="c4-hero" data-c4="hero">
        <div className="c4-hero-stage" data-c4="hero-stage">
          <div className="c4-hero-media" data-c4="lens">
            <Image
              className="c4-hero-img c4-hero-img--blur"
              src="/images/praxis-hero.jpg"
              alt=""
              width={1536}
              height={1024}
              priority
            />
            <Image
              className="c4-hero-img c4-hero-img--sharp"
              src="/images/praxis-hero.jpg"
              alt="Ärztin in einer hellen, modernen Praxis"
              width={1536}
              height={1024}
              priority
            />
            <span className="c4-lens-ring" aria-hidden="true" />
            <span className="c4-lens-label" aria-hidden="true">Im Fokus: Ihre Praxis</span>
          </div>

          <div className="c4-hero-panel c4-glass" data-c4="hero-panel">
            <p className="c4-eyebrow">Online-Marketing für Ärzte</p>
            <h1 className="c4-hero-title" data-c4="hero-title">
              Praxismarketing, das zu Ihrer Praxis passt.
            </h1>
            <p className="c4-hero-lead c4-enter" data-c4="hero-in">
              Damit Patienten verstehen, wofür Ihre Praxis steht, welche
              Leistungen Sie anbieten und wie sie einen Termin vereinbaren.
            </p>
            <div className="c4-hero-actions c4-enter" data-c4="hero-in">
              <DoorButton size="lg" href="/contact">Praxisziele besprechen</DoorButton>
              <span className="c4-scrollcue" aria-hidden="true">
                <span className="c4-scrollcue-dot" />
                Scrollen für Klarheit
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Statement, sharpening --------------------------------------- */}
      <section className="c4-section c4-intro">
        <div className="c4-wrap">
          <p className="c4-big" data-c4="focus-text">
            Ihre Praxis ist besonders. Ihr Online-Auftritt sollte zeigen, warum —
            mit verständlichen Leistungsseiten, einer klaren Struktur und
            Bildern, die zu Ihnen passen.
          </p>
          <div className="c4-accents">
            {[
              ["3", "Schritte zur Zusammenarbeit"],
              ["6", "Bausteine für Ihren Auftritt"],
              ["1", "Klarer Plan für Ihre Praxis"],
            ].map(([n, l]) => (
              <div className="c4-accent c4-glass" key={l} data-c4="accent">
                <span className="c4-accent-n">{n}</span>
                <span className="c4-accent-l">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Questions come into focus ----------------------------------- */}
      <section className="c4-section c4-questions">
        <div className="c4-wrap">
          <div className="c4-head">
            <p className="c4-eyebrow">Vor dem ersten Termin</p>
            <h2 className="c4-h2">Was Patienten wissen möchten, bevor sie anrufen.</h2>
          </div>
          <ol className="c4-qlist">
            {QUESTIONS.map((item, i) => (
              <li className="c4-q" key={item.q} data-c4="q">
                <span className="c4-q-num">0{i + 1}</span>
                <p className="c4-q-text">{item.q}</p>
                <p className="c4-q-answer">
                  <span>Ihre Website</span>
                  {item.a}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- Unclear vs clear --------------------------------------------- */}
      <section className="c4-section c4-compare-section">
        <div className="c4-wrap">
          <div className="c4-head c4-head--center">
            <p className="c4-eyebrow">Derselbe Inhalt</p>
            <h2 className="c4-h2">Was Patienten sehen, entscheidet über den ersten Anruf.</h2>
            <p className="c4-lead">
              Ziehen Sie den Regler: links ein Auftritt, der Patienten suchen
              lässt — rechts einer, der ihre Fragen in der richtigen
              Reihenfolge beantwortet.
            </p>
          </div>
          <CompareSlider />
        </div>
      </section>

      {/* ---- Building blocks, glass --------------------------------------- */}
      <section className="c4-section c4-pillars-section">
        <div className="c4-glow c4-glow--a" aria-hidden="true" data-c4="glow" />
        <div className="c4-glow c4-glow--b" aria-hidden="true" data-c4="glow" />
        <div className="c4-wrap">
          <div className="c4-head">
            <p className="c4-eyebrow">Leistungen</p>
            <h2 className="c4-h2">Sechs Bausteine, geordnet nach dem Nutzen für Ihre Praxis.</h2>
          </div>
          <div className="c4-pillars">
            {PILLARS.map((p, i) => (
              <article className="c4-pillar c4-glass" key={p.title} data-c4="pillar">
                <span className="c4-pillar-sheen" aria-hidden="true" />
                <span className="c4-pillar-num">0{i + 1}</span>
                <h3 className="c4-pillar-title">{p.title}</h3>
                <ul className="c4-pillar-list">
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Statement, pinned ------------------------------------------- */}
      <section className="c4-statement" data-c4="statement">
        <div className="c4-statement-stage">
          <div className="c4-wrap">
            <p className="c4-eyebrow c4-eyebrow--center">Ihr Marketing muss auch im Praxisalltag funktionieren</p>
            <p className="c4-statement-text" data-c4="statement-text">
              Welche Patienten möchten Sie erreichen? Und wofür hat Ihre Praxis
              Kapazität?
            </p>
            <p className="c4-statement-note" data-c4="statement-note">
              Zusätzliche Anfragen helfen Ihrer Praxis dann, wenn sie zu Ihren
              Leistungen und verfügbaren Terminen passen. Deshalb beginnt unsere
              Arbeit mit einem Gespräch über Ihren Praxisalltag.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Local: focusing on the practice ----------------------------- */}
      <section className="c4-section c4-local" data-c4="local">
        <div className="c4-wrap c4-local-grid">
          <div className="c4-local-visual">
            <svg className="c4-local-rings" viewBox="0 0 400 400" aria-hidden="true">
              <circle cx="200" cy="200" r="190" data-c4="ring" />
              <circle cx="200" cy="200" r="150" data-c4="ring" />
              <circle cx="200" cy="200" r="110" data-c4="ring" />
            </svg>
            <div className="c4-local-photo" data-c4="local-photo">
              <Image src="/images/praxis-6.jpg" alt="Person nutzt ein Smartphone vor einer Praxis in der Stadt" width={1024} height={1536} />
            </div>
            <span className="c4-local-pin c4-glass" data-c4="pin">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M12 22s7-6.4 7-12a7 7 0 10-14 0c0 5.6 7 12 7 12z" fill="currentColor" /><circle cx="12" cy="10" r="2.6" fill="#fff" /></svg>
              Ihre Praxis
            </span>
          </div>
          <div className="c4-local-copy">
            <p className="c4-eyebrow">Lokale Sichtbarkeit</p>
            <h2 className="c4-h2">Gefunden werden, wenn Patienten in Ihrer Nähe suchen.</h2>
            <p className="c4-body">
              Eine Suche nach einem Facharzt beginnt mit einem konkreten
              Anliegen. Wer nach Ihrer Leistung in Ihrer Stadt sucht, soll
              schnell erkennen können, ob Ihre Praxis der richtige
              Ansprechpartner ist.
            </p>
            <p className="c4-body">
              Wir prüfen Ihr Google-Unternehmensprofil, strukturieren Ihre
              Leistungsseiten und sorgen dafür, dass Öffnungszeiten,
              Kontaktdaten, Leistungen und Bilder ein konsistentes Gesamtbild
              vermitteln.
            </p>
            <DoorButton href="/contact">Lokale Sichtbarkeit besprechen</DoorButton>
          </div>
        </div>
      </section>

      {/* ---- Process: sticky photograph, scrolling text ------------------ */}
      <section className="c4-section c4-steps" data-c4="steps">
        <div className="c4-wrap">
          <div className="c4-head">
            <p className="c4-eyebrow">Zusammenarbeit</p>
            <h2 className="c4-h2">Ein klarer Ablauf. Von der ersten Frage bis zur Umsetzung.</h2>
          </div>
          <div className="c4-steps-grid">
            <div className="c4-steps-frame" aria-hidden="true">
              {STEPS.map((s, i) => (
                <Image key={s.img} className="c4-steps-img" src={s.img} alt="" width={1536} height={1024} data-c4="step-img" data-index={i} />
              ))}
              <span className="c4-steps-count c4-glass"><b data-c4="step-count">01</b> / 03</span>
            </div>
            <div className="c4-steps-list">
              {STEPS.map((s, i) => (
                <article className="c4-step" key={s.title} data-c4="step">
                  <div className="c4-step-mobile-img">
                    <Image src={s.img} alt={s.alt} width={1536} height={1024} />
                  </div>
                  <span className="c4-step-num">Schritt 0{i + 1}</span>
                  <h3 className="c4-step-title">{s.title}</h3>
                  <p className="c4-step-text">{s.text}</p>
                </article>
              ))}
              <div className="c4-step-cta c4-glass">
                <p>Erzählen Sie uns, was Sie mit Ihrer Praxis vorhaben.</p>
                <DoorButton href="/contact">Erstgespräch anfragen</DoorButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Goals: the one you point at is the one in focus -------------- */}
      <section className="c4-section">
        <div className="c4-wrap">
          <div className="c4-head">
            <p className="c4-eyebrow">Ihr Praxisziel</p>
            <h2 className="c4-h2">Was Ihre Praxis braucht, bestimmt die Maßnahmen.</h2>
          </div>
          <div className="c4-goals">
            {GOALS.map((g, i) => (
              <div className="c4-goal" key={g.goal} data-c4="goal">
                <span className="c4-goal-num">0{i + 1}</span>
                <h3 className="c4-goal-name">{g.goal}</h3>
                <p className="c4-goal-ask"><span>Was wir gemeinsam klären</span>{g.ask}</p>
                <p className="c4-goal-how"><span>So setzen wir es um</span>{g.how}</p>
              </div>
            ))}
          </div>
          <p className="c4-goals-foot">
            Die Zahlen aus dem Marketing und die Rückmeldung aus Ihrer Praxis gehören zusammen.
          </p>
        </div>
      </section>

      {/* ---- Work ---------------------------------------------------------- */}
      <section className="c4-section c4-works-section">
        <div className="c4-wrap">
          <div className="c4-head">
            <p className="c4-eyebrow">Einblicke</p>
            <h2 className="c4-h2">So wird medizinische Kompetenz sichtbar.</h2>
          </div>
          <div className="c4-works">
            {[
              { href: "/projects/mondent", img: "/images/case-mondent-1.webp", alt: "Mondent — Website und UX/UI für eine Zahnarztpraxis", title: "Mondent", note: "Website und SEO für eine Zahnarztpraxis in Düsseldorf" },
              { href: "/projects/onlysmile", img: "/images/case-onlysmile-1.webp", alt: "OnlySmile — Website und UX/UI für professionelles Zahnbleaching", title: "OnlySmile", note: "Markenauftritt für Zahnbleaching und Dental Beauty" },
            ].map((w) => (
              <a className="c4-work" href={w.href} key={w.href} data-c4="work">
                <div className="c4-work-img">
                  <Image src={w.img} alt={w.alt} width={1124} height={1399} />
                </div>
                <div className="c4-work-meta c4-glass">
                  <span className="c4-work-title">{w.title}</span>
                  <span className="c4-work-note">{w.note}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Team ---------------------------------------------------------- */}
      <section className="c4-section c4-team">
        <div className="c4-wrap">
          <div className="c4-head">
            <p className="c4-eyebrow">Das Team hinter Ihrem Praxisauftritt</p>
            <h2 className="c4-h2">Sie bringen die medizinische Expertise ein. Wir kümmern uns um die digitale Umsetzung.</h2>
          </div>
        </div>
        <div className="c4-team-carousel">
          <TeamCarousel>
            <PersonCard imageSrc="/images/team-1.webp" name="Jan" role="Creative Director" />
            <PersonCard imageSrc="/images/team-2.webp" name="Georgy" role="Managing Director" />
            <PersonCard imageSrc="/images/team-3.webp" name="Almaz" role="Webentwickler" />
            <PersonCard imageSrc="/images/team-4.webp" name="Lera" role="Designer" />
            <PersonCard imageSrc="/images/team-5.webp" name="Evgeny" role="Videoproduktion" />
          </TeamCarousel>
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
