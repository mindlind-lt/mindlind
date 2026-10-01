import type { Metadata } from "next";
import Image from "next/image";

import DoorButton from "@/components/door-button/door-button";
import PersonCard from "@/components/person-card/person-card";
import SectionContact from "@/components/section-contact/section-contact";
import TeamCarousel from "@/components/team-carousel/team-carousel";

import ConceptThreeMotion from "./concept-3-motion";
import GoalPicker from "./goal-picker";

import "./concept-3.css";

/**
 * Concept 3 — "Der Weg". /praxis-marketing retold as the route a patient takes
 * to a practice: searching, getting oriented, building trust, booking. A rail
 * runs down the left of the page and a path draws itself along it as the page
 * is read, lighting each stage as it arrives. Soft, rounded, mint — friendly
 * rather than technical. A design concept, kept out of the index; content and
 * its rules follow the /praxis-marketing content document.
 */

export const metadata: Metadata = {
  title: "Praxismarketing — Konzept 3",
  robots: { index: false, follow: false },
};

const COLLAGE = [
  { src: "/images/praxis-hero.jpg", alt: "Ärztin in einer hellen, modernen Praxis", w: 1536, h: 1024, chip: "Klar positioniert" },
  { src: "/images/praxis-6.jpg", alt: "Person nutzt ein Smartphone vor einer Praxis in der Stadt", w: 1024, h: 1536, chip: "In der Nähe gefunden" },
  { src: "/images/praxis-2.jpg", alt: "Arzt im persönlichen Gespräch mit einer Patientin", w: 1536, h: 1024, chip: null },
  { src: "/images/praxis-ablauf-3.jpg", alt: "Ärztin und Praxismitarbeiterin an der Anmeldung", w: 1536, h: 1024, chip: "Direkter Weg zum Termin" },
  { src: "/images/praxis-ablauf-2.jpg", alt: "Gemeinsame Planung von Website-Inhalten", w: 1536, h: 1024, chip: null },
];

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
    text: "Wir sprechen über Ihre Fachrichtung, Ihre Schwerpunkte und die aktuelle Situation — und legen gemeinsam fest, welches Ziel zuerst angegangen werden soll.",
  },
  {
    img: "/images/praxis-ablauf-2.jpg",
    alt: "Gemeinsame Planung von Website-Inhalten und Marketingmaßnahmen",
    title: "Prioritäten festlegen",
    text: "Wir prüfen Ihren Auftritt und zeigen, wo sich Verbesserungen anbieten. Sie erhalten einen Vorschlag mit konkreten Leistungen, Prioritäten und Kosten.",
  },
  {
    img: "/images/praxis-ablauf-3.jpg",
    alt: "Ärztin und Praxismitarbeiterin besprechen digitale Abläufe an der Anmeldung",
    title: "Umsetzen und weiterentwickeln",
    text: "Nach Ihrer Freigabe setzen wir um. Medizinische Inhalte stimmen wir mit Ihnen ab, und anhand der Auswertungen und Ihres Feedbacks justieren wir nach.",
  },
];

/** Stage marker on the rail. The path is drawn through these. */
function Stop({ n, label }: { n: string; label: string }) {
  return (
    <div className="c3-stop" data-c3="stop">
      <span className="c3-stop-dot">{n}</span>
      <span className="c3-stop-label">{label}</span>
    </div>
  );
}

export default function PraxisConceptThree() {
  return (
    <div className="c3">
      <ConceptThreeMotion />

      {/* ---- Hero: a collage that gathers round the headline ------------- */}
      <section className="c3-hero" data-c3="hero">
        <div className="c3-collage">
          {COLLAGE.map((c, i) => (
            <figure className={`c3-tile c3-tile--${i + 1}`} key={c.src} data-c3="tile" data-depth={[0.6, 1, 0.4, 0.8, 0.5][i]}>
              <div className="c3-tile-in">
                <div className="c3-tile-img">
                  <Image src={c.src} alt={c.alt} width={c.w} height={c.h} priority={i < 2} />
                </div>
                {c.chip && (
                  <figcaption className="c3-chip">
                    <span className="c3-chip-dot" aria-hidden="true" />
                    {c.chip}
                  </figcaption>
                )}
              </div>
            </figure>
          ))}
        </div>

        <div className="c3-hero-copy">
          <p className="c3-pill c3-enter" data-c3="hero-in">Online-Marketing für Ärzte</p>
          <h1 className="c3-hero-title" data-c3="hero-title">
            Praxismarketing, das zu Ihrer Praxis <span className="c3-mark">passt.</span>
          </h1>
          <p className="c3-hero-lead c3-enter" data-c3="hero-in">
            Website, lokale Sichtbarkeit und Werbung — aufeinander abgestimmt,
            damit Patienten Ihre Praxis finden, verstehen und ohne Umwege einen
            Termin vereinbaren.
          </p>
          <div className="c3-hero-actions c3-enter" data-c3="hero-in">
            <DoorButton size="lg" href="/contact">Praxisziele besprechen</DoorButton>
            <a className="c3-textlink" href="#weg">
              Den Weg eines Patienten ansehen <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* ---- The journey: everything on the rail ------------------------- */}
      <div className="c3-journey" id="weg" data-c3="journey">
        <svg className="c3-rail" aria-hidden="true" data-c3="rail">
          <path className="c3-rail-track" data-c3="rail-track" />
          <path className="c3-rail-path" id="c3-rail-path" data-c3="rail-path" />
          <circle className="c3-rail-dot-glow" r="16" data-c3="rail-dot" />
          <circle className="c3-rail-dot" r="7" data-c3="rail-dot" />
        </svg>

        {/* Intro */}
        <section className="c3-chapter c3-intro">
          <Stop n="↓" label="Start" />
          <div className="c3-chapter-body">
            <h2 className="c3-h2" data-c3="h2">
              Vom ersten Suchen bis zum Termin: der Weg eines Patienten zu Ihrer Praxis.
            </h2>
            <ol className="c3-route" data-c3="route">
              <li><span>01</span>Suchen</li>
              <li><span>02</span>Orientieren</li>
              <li><span>03</span>Vertrauen</li>
              <li><span>04</span>Termin</li>
            </ol>
            <p className="c3-lead">
              Jeder Schritt sollte die nächste Frage beantworten. Genau diese
              Übergänge stimmen wir aufeinander ab — damit aus Interesse eine
              konkrete Anfrage wird.
            </p>
          </div>
        </section>

        {/* 01 — Suchen */}
        <section className="c3-chapter">
          <Stop n="01" label="Suchen" />
          <div className="c3-chapter-body">
            <div className="c3-split">
              <div>
                <p className="c3-kicker">Etappe 01 · Suchen</p>
                <h2 className="c3-h2" data-c3="h2">
                  Gefunden werden, wenn Patienten in Ihrer <span className="c3-mark">Nähe</span> suchen.
                </h2>
                <ul className="c3-tags" data-c3="tags">
                  <li>Ihre Fachrichtung</li>
                  <li>Ihr Standort</li>
                  <li>Ihr Leistungsangebot</li>
                </ul>
                <p className="c3-body">
                  Eine Suche nach einem Facharzt beginnt mit einem konkreten
                  Anliegen. Deshalb richten wir Ihre Website auf die Verbindung
                  aus Behandlung und Standort aus — und verbessern Website und
                  Google-Profil gemeinsam: Öffnungszeiten, Kontaktdaten,
                  Leistungen und Bilder ergeben ein konsistentes Gesamtbild.
                </p>
                <DoorButton href="/contact">Lokale Sichtbarkeit besprechen</DoorButton>
              </div>

              <div className="c3-search-scene" data-c3="search">
                <div className="c3-search-photo">
                  <Image
                    src="/images/praxis-6.jpg"
                    alt="Person nutzt ein Smartphone vor einer Praxis in der Stadt"
                    width={1024}
                    height={1536}
                  />
                </div>

                {/* An illustration of the moment, not a mock of a real search
                    product: no ratings, no invented results. */}
                <div className="c3-search-card" aria-hidden="true">
                  <div className="c3-search-field">
                    <svg viewBox="0 0 20 20" width="16" height="16"><circle cx="9" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M14 14l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    <span data-c3="typed" data-text="Facharzt in meiner Nähe">Facharzt in meiner Nähe</span>
                    <span className="c3-caret" />
                  </div>
                  <div className="c3-result" data-c3="result">
                    <div className="c3-result-pin">
                      <svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 22s7-6.4 7-12a7 7 0 10-14 0c0 5.6 7 12 7 12z" fill="currentColor" /><circle cx="12" cy="10" r="2.6" fill="#fff" /></svg>
                    </div>
                    <div>
                      <div className="c3-result-name">Ihre Praxis</div>
                      <div className="c3-result-meta">Fachrichtung · Standort · Leistungen</div>
                    </div>
                  </div>
                  <div className="c3-result-actions" data-c3="actions">
                    <span>Route</span>
                    <span>Website</span>
                    <span className="is-primary">Termin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — Orientieren */}
        <section className="c3-chapter c3-chapter--flip" data-c3="flip-section">
          <Stop n="02" label="Orientieren" />
          <div className="c3-chapter-body">
            <p className="c3-kicker">Etappe 02 · Orientieren</p>
            <h2 className="c3-h2" data-c3="h2">
              Was Patienten vor dem Termin wissen möchten — und was Ihre Website darauf <span className="c3-mark">antwortet.</span>
            </h2>

            <div className="c3-flips">
              {QUESTIONS.map((item, i) => (
                <div className="c3-flip" key={item.q} data-c3="flip">
                  <div className="c3-flip-inner">
                    <div className="c3-flip-face c3-flip-front">
                      <span className="c3-flip-num">0{i + 1}</span>
                      <span className="c3-flip-label">Patienten fragen</span>
                      <p className="c3-flip-text">{item.q}</p>
                    </div>
                    <div className="c3-flip-face c3-flip-back">
                      <span className="c3-flip-num">0{i + 1}</span>
                      <span className="c3-flip-label">Ihre Website zeigt</span>
                      <p className="c3-flip-text">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03 — Vertrauen */}
        <section className="c3-chapter">
          <Stop n="03" label="Vertrauen" />
          <div className="c3-chapter-body">
            <p className="c3-kicker">Etappe 03 · Vertrauen</p>
            <h2 className="c3-h2" data-c3="h2">
              Ihre Praxis ist besonders. Ihr Online-Auftritt sollte zeigen, <span className="c3-mark">warum.</span>
            </h2>

            <div className="c3-bento">
              <figure className="c3-bento-photo" data-c3="bento">
                <Image src="/images/praxis-2.jpg" alt="Arzt im persönlichen Gespräch mit einer Patientin" width={1536} height={1024} data-c3="zoom" />
                <figcaption className="c3-bento-notes">
                  <span className="c3-note" data-c3="note"><b>Klar positioniert</b>Ihre Schwerpunkte im Fokus</span>
                  <span className="c3-note" data-c3="note"><b>Einfach erreichbar</b>Direkter Weg zum Termin</span>
                </figcaption>
              </figure>

              <div className="c3-bento-text" data-c3="bento">
                <p>
                  Welche Schwerpunkte setzen Sie? Wie beraten Sie? Was erwartet
                  Patienten beim ersten Besuch? Wir machen Ihre Praxis online
                  greifbar — mit verständlichen Leistungsseiten, einer klaren
                  Struktur und Bildern, die zu Ihnen passen.
                </p>
              </div>

              {PILLARS.map((p, i) => (
                <article className={`c3-pillar c3-pillar--${i + 1}`} key={p.title} data-c3="bento">
                  <div className="c3-pillar-head">
                    <span className="c3-pillar-num">0{i + 1}</span>
                    <h3 className="c3-pillar-title">{p.title}</h3>
                  </div>
                  <ul className="c3-pillar-items">
                    {p.items.map((it) => (
                      <li key={it} data-c3="pill">{it}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="c3-works">
              <div className="c3-works-head">
                <h3 className="c3-h3">So wird medizinische Kompetenz sichtbar.</h3>
                <p className="c3-body">
                  Jede Praxis hat eigene Schwerpunkte. Entsprechend individuell
                  entwickeln wir ihre digitale Präsentation.
                </p>
              </div>
              {[
                { href: "/projects/mondent", img: "/images/case-mondent-1.webp", hover: "/images/case-mondent-2.webp", alt: "Mondent — Website und UX/UI für eine Zahnarztpraxis", title: "Mondent" },
                { href: "/projects/onlysmile", img: "/images/case-onlysmile-1.webp", hover: "/images/case-onlysmile-2.webp", alt: "OnlySmile — Website und UX/UI für professionelles Zahnbleaching", title: "OnlySmile" },
              ].map((w) => (
                <a className="c3-work" href={w.href} key={w.href} data-c3="work">
                  <div className="c3-work-img">
                    <Image src={w.img} alt={w.alt} width={1124} height={1399} />
                    <Image className="c3-work-hover" src={w.hover} alt="" width={1124} height={1399} />
                  </div>
                  <div className="c3-work-meta">
                    <span className="c3-work-title">{w.title}</span>
                    <span className="c3-work-arrow" aria-hidden="true">↗</span>
                  </div>
                  <div className="c3-work-pills"><span>Website</span><span>UX/UI</span></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Statement card that opens to the full width */}
        <section className="c3-statement" data-c3="statement">
          <div className="c3-statement-card" data-c3="statement-card">
            <p className="c3-kicker c3-kicker--light">Ihr Marketing muss auch im Praxisalltag funktionieren</p>
            <p className="c3-statement-q">
              <span className="c3-hl" data-c3="hl">Welche Patienten möchten Sie erreichen?</span>{" "}
              <span className="c3-hl" data-c3="hl">Und wofür hat Ihre Praxis Kapazität?</span>
            </p>
            <p className="c3-statement-text">
              Zusätzliche Anfragen helfen Ihrer Praxis dann, wenn sie zu Ihren
              Leistungen und verfügbaren Terminen passen. Deshalb beginnt unsere
              Arbeit mit einem Gespräch über Ihren Praxisalltag.
            </p>
          </div>
        </section>

        {/* 04 — Termin */}
        <section className="c3-chapter">
          <Stop n="04" label="Termin" />
          <div className="c3-chapter-body">
            <p className="c3-kicker">Etappe 04 · Termin</p>
            <h2 className="c3-h2" data-c3="h2">
              Was Ihre Praxis braucht, bestimmt die <span className="c3-mark">Maßnahmen.</span>
            </h2>
            <p className="c3-lead">
              Wählen Sie ein Ziel — wir zeigen, was wir dazu gemeinsam klären und
              wie wir es umsetzen.
            </p>

            <GoalPicker />

            <div className="c3-deck-head">
              <h3 className="c3-h3">Ein klarer Ablauf. Von der ersten Frage bis zur Umsetzung.</h3>
            </div>

            <div className="c3-deck" data-c3="deck">
              {STEPS.map((s, i) => (
                <article className={`c3-card c3-card--${i + 1}`} key={s.title} data-c3="card">
                  <div className="c3-card-img">
                    <Image src={s.img} alt={s.alt} width={1536} height={1024} />
                    <span className="c3-card-badge">Schritt 0{i + 1}</span>
                  </div>
                  <div className="c3-card-body">
                    <h4 className="c3-card-title">{s.title}</h4>
                    <p className="c3-card-text">{s.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Arrival */}
        <section className="c3-chapter c3-arrive">
          <Stop n="✓" label="Ihre Praxis" />
          <div className="c3-chapter-body">
            <div className="c3-arrive-card" data-c3="arrive">
              <div>
                <p className="c3-kicker c3-kicker--light">Der nächste Schritt</p>
                <p className="c3-arrive-title">
                  Erzählen Sie uns, was Sie mit Ihrer Praxis vorhaben.
                </p>
              </div>
              <DoorButton size="lg" color="white" href="/contact">Erstgespräch anfragen</DoorButton>
            </div>
          </div>
        </section>
      </div>

      {/* ---- Team -------------------------------------------------------- */}
      <section className="c3-team">
        <div className="c3-wrap">
          <div className="c3-team-head">
            <p className="c3-kicker">Das Team hinter Ihrem Praxisauftritt</p>
            <h2 className="c3-h2" data-c3="h2">
              Sie bringen die medizinische Expertise ein. Wir kümmern uns um die digitale Umsetzung.
            </h2>
          </div>
        </div>
        <div className="c3-team-carousel">
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
