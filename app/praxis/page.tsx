import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, ClipboardList, MapPin, PanelsTopLeft, Plus, Stethoscope, UsersRound } from "lucide-react";

import { breadcrumbSchema } from "@/lib/schema";

import { socialCard } from "@/lib/site";

import DnaHelix from "@/components/dna-helix/dna-helix";
import DoorButton from "@/components/door-button/door-button";
import PersonCard from "@/components/person-card/person-card";
import TeamCarousel from "@/components/team-carousel/team-carousel";
import UnderlinedHeader from "@/components/underlined-header/underlined-header";

import PraxisMotion from "./praxis-motion";
import PraxisRail from "./praxis-rail";
import PraxisContact from "./praxis-contact";
import PraxisConversionEvents from "./praxis-conversion-events";
import PraxisContactShortcut from "./praxis-contact-shortcut";

import "./praxis-marketing.css";

/** Project scope follows the published MonDent and OnlySmile case studies.
 * The MonDent screenshot is an unaltered capture of https://mondent.de/
 * from 2026-10-16. No performance metrics or customer quotes are inferred. */

const DESCRIPTION =
  "Praxismarketing für Ärzte: Websites, lokale SEO und Google Ads. MindLind macht Ihre Schwerpunkte sichtbar und erleichtert den Weg zum Termin. Jetzt anfragen.";

// The root layout appends "| Mindlind Werbeagentur" to every page title, so the
// title from the content document is set as absolute to keep it exactly as written.
const TITLE = "Praxismarketing für Ärzte | Webdesign & SEO | MindLind";

// Original practice-goal copy, presented one example at a time.
const PRACTICE_GOALS = [
  ["Einen Schwerpunkt stärken", "Welche Behandlungen möchten Sie bekannter machen?", "Eigene Leistungsseiten und darauf abgestimmte Kampagnen"],
  ["Regional gefunden werden", "Aus welchem Einzugsgebiet kommen passende Patienten?", "Lokale SEO, ein gepflegtes Google-Profil und regionale Anzeigen"],
  ["Vertrauen vermitteln", "Welche Fragen stellen Patienten vor dem ersten Besuch?", "Verständliche Texte, echte Praxisbilder und klare Informationen zum Ablauf"],
  ["Die Anmeldung entlasten", "Welche Fragen und Terminwünsche lassen sich online abfangen?", "Gut auffindbare Antworten und eine sinnvoll eingebundene Terminbuchung"],
  ["Das Budget gezielt einsetzen", "Welche Kontaktwege werden genutzt und welche Anfragen passen?", "Auswertung messbarer Kontakte und Optimierung mit Ihrem Feedback"],
];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/praxis-marketing" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/praxis-marketing",
    siteName: "Mindlind Werbeagentur",
    title: TITLE,
    description: DESCRIPTION,
    images: socialCard(),
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: socialCard(),
  },
};

/** Section label in the style of /praxis-concept-3: a mint pill reading
 *  "Etappe 01 · Leistungen" above the heading. Each one is also a stop on the
 *  scroll rail (see ./praxis-rail), which threads through them in order. */
function Kicker({
  n,
  children,
  onDark,
  rail = true,
}: {
  n: string;
  children: React.ReactNode;
  /** Translucent white instead of mint, for the inverted section. */
  onDark?: boolean;
  /** False for a label in a section the rail skips: no stop beside it. */
  rail?: boolean;
}) {
  return (
    <p
      data-praxis-rail={rail ? "anchor" : undefined}
      data-n={rail ? n : undefined}
      className={`praxis-kicker${onDark ? " praxis-kicker--light" : ""}`}
    >
      Etappe {n} · {children}
    </p>
  );
}

export default function LandingPraxis() {
  return (
    <>
      {/* Same breadcrumb JSON-LD every other top-level page emits. The
          name matches this route's title in lib/site.ts. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Praxismarketing für Ärzte", path: "/praxis-marketing" },
            ]),
          ),
        }}
      />

      {/* Every timeline on this page, in one client island. The page itself
          stays a server component. */}
      <PraxisMotion />
      <PraxisRail />
      <PraxisConversionEvents />
      <PraxisContactShortcut />

      {/* ---- 01 | Hero ------------------------------------------------- */}
      <section className="praxis-hero pb-12 lg:pb-20">
        {/* Background layer. `praxis-hero` is the positioned ancestor it fills
            (see praxis-marketing.css); the container below sits above it.

            `crop` rather than the component's default `contain`: this hero is
            far taller than the helix's 3:2 composition, especially on phones
            where the copy stacks, so fitting the whole thing inside would shrink
            it to a narrow band stranded in the middle of the section — and the
            mask is at its weakest exactly there. Cropping keeps the particles at
            their own scale and lets the section show the part of the helix that
            fits. */}
        <DnaHelix className="dna-helix--behind praxis-hero-dna" fit="crop" />

        <div className="container relative z-10 mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            <div className="flex flex-col gap-6">
              <p className="praxis-eyebrow praxis-enter" data-praxis-anim="hero-eyebrow">
                Online-Marketing für Ärzte
              </p>

              <h1 className="praxis-h1 praxis-enter" data-praxis-anim="hero-title">
                Praxismarketing, das zu Ihrer Praxis passt.
              </h1>

              <p className="praxis-lead praxis-enter" data-praxis-anim="hero-lead">
                Sie möchten bestimmte Behandlungen stärker in den Fokus rücken,
                Ihre Praxis bekannt machen oder die Online-Terminbuchung
                erleichtern? MindLind verbindet Website, lokale Sichtbarkeit und
                Werbung zu einem klaren Auftritt. Damit Patienten verstehen,
                wofür Ihre Praxis steht, welche Leistungen Sie anbieten und wie
                sie einen Termin vereinbaren können. Ausgerichtet auf Ihre
                Fachrichtung, Ihre Ziele und die Kapazitäten Ihres Teams.
              </p>

              <div className="praxis-enter" data-praxis-anim="hero-cta">
                <p className="praxis-cta-benefit">
                  <strong>Mit einer klaren Priorität starten.</strong>
                  Im Erstgespräch erhalten Sie eine erste Einschätzung, welche
                  Maßnahme zu Ihrem Praxisziel passt und was dafür nötig ist.
                </p>
                <div className="praxis-hero-actions" data-praxis-cta="hero">
                  <DoorButton size="lg" href="#praxis-kontakt">Erstgespräch anfragen</DoorButton>
                  <a className="praxis-evidence-link" href="#praxis-projekt">Praxisprojekt ansehen <span aria-hidden="true">↓</span></a>
                </div>
                <p className="praxis-cta-note">
                  Unverbindlich. Sie entscheiden danach, ob Sie mit uns
                  weitergehen möchten.
                </p>
              </div>
            </div>

            {/* Bild 01 — Praxisinhaberin in einer modernen, glaubwürdigen
                Praxis. The alt text is the one from the content document. */}
            <figure className="praxis-figure praxis-figure--5-4" data-praxis-anim="hero-figure">
              <div className="praxis-figure-inner praxis-figure-inner--photo">
                {/* The page's LCP element: `priority` preloads it instead of
                    letting it queue behind the rest. `images.unoptimized` is on
                    for the static export, so this serves the file from public/
                    as-is — keep any replacement reasonably sized. */}
                <Image
                  className="praxis-figure-img"
                  src="/images/praxis-hero.jpg"
                  alt="Ärztin in einer hellen, modernen Praxis"
                  width={1536}
                  height={1024}
                  priority
                />
              </div>
            </figure>

          </div>
        </div>
      </section>

      {/* ---- Rail: project evidence, services and process --------------- */}
      {/* Everything with a section index sits on a scroll progress rail, as
          on /praxis-concept-3: a path down a side gutter (data-rail-side,
          "left" or "right") with a stop level
          with each section label and a dot that travels it as the page is read. The
          rail and its stops are positioned by ./praxis-rail; from lg up the
          CSS opens the gutter by indenting each section's container. */}
      <div className="praxis-journey" data-praxis-rail="journey" data-rail-side="right">
        <svg className="praxis-rail" aria-hidden="true" data-praxis-rail="svg">
          {/* Cut out over sections marked data-praxis-rail="skip". */}
          <mask id="praxis-rail-mask" maskUnits="userSpaceOnUse" data-praxis-rail="mask" />
          <g mask="url(#praxis-rail-mask)">
            <path className="praxis-rail-track" />
            <path className="praxis-rail-path" data-praxis-rail="path" />
            <circle className="praxis-rail-dot-glow" r="14" data-praxis-rail="dot" />
            <circle className="praxis-rail-dot" r="6" data-praxis-rail="dot" />
          </g>
        </svg>
        <div className="praxis-rail-stops" aria-hidden="true" data-praxis-rail="stops" />

      {/* ---- 01 | A documented practice project ------------------------ */}
      <section id="praxis-projekt" className="pb-12 lg:pb-20" tabIndex={-1}>
        <div className="container mx-auto px-6 sm:px-8">
          <Kicker n="01">Einblicke in unsere Arbeit</Kicker>

          <UnderlinedHeader className="praxis-section-head mb-10 lg:mb-12">
            Was wir für MonDent <span className="praxis-mark">umgesetzt haben.</span>
          </UnderlinedHeader>

          <article className="praxis-case" aria-labelledby="praxis-case-title">
            <div className="praxis-case-heading">
              <div>
                <p className="praxis-case-label">Zahnarztpraxis · Düsseldorf</p>
                <h3 id="praxis-case-title" className="praxis-case-title">MonDent</h3>
              </div>
              <p className="praxis-case-scope">Unser Beitrag: Website &amp; SEO</p>
            </div>

            <div className="praxis-case-grid">
              <figure className="praxis-case-figure">
                <a
                  href="https://mondent.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="praxis-case-preview"
                  aria-label="MonDent-Website ansehen (öffnet in neuem Tab)"
                >
                  <Image
                    src="/images/praxis-mondent-website.jpg"
                    alt="MonDent-Startseite mit Praxisadresse, Leistungsnavigation und den Schaltflächen zur Terminvereinbarung"
                    width={1280}
                    height={720}
                    sizes="(min-width: 1024px) 60vw, 100vw"
                  />
                </a>
                <figcaption>
                  Einblick in die Website · mondent.de
                  <span>Aufnahme: Oktober 2026</span>
                </figcaption>
              </figure>

              <div className="praxis-case-details">
                <p className="praxis-case-label">Die Aufgabe</p>
                <p className="praxis-case-brief">
                  Ein breites Behandlungsspektrum so ordnen, dass Patienten
                  die passende Leistung und den Weg zum Termin finden.
                </p>
                <p className="praxis-case-label">Auf der Website sichtbar</p>
                <ul className="praxis-case-deliverables">
                  <li>
                    <strong>Behandlungen mit eigener Struktur</strong>
                    Leistungsbereiche mit einzelnen Behandlungsseiten –
                    von Prophylaxe bis Implantologie.
                  </li>
                  <li>
                    <strong>Die Praxis vor Ort</strong>
                    Standort, Öffnungszeiten und Kontakt direkt im Seitenkopf.
                  </li>
                  <li>
                    <strong>Ein direkter Weg zum Termin</strong>
                    Sichtbare Termin-Buttons führen zur Online-Buchung.
                  </li>
                </ul>
              </div>
            </div>

            <div className="praxis-case-actions">
              <Link className="praxis-evidence-link" href="/projects/mondent">
                MonDent-Projekt ansehen <span aria-hidden="true">→</span>
              </Link>
              <a
                className="praxis-evidence-link"
                href="https://mondent.de/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live-Website öffnen <span aria-hidden="true">↗</span>
                <span className="sr-only"> (öffnet in neuem Tab)</span>
              </a>
            </div>
          </article>

          <aside className="praxis-related-case" aria-label="Weiteres Projekt aus dem Dentalbereich">
            <div>
              <p className="praxis-case-label">Weiteres Projekt · Dental-Beauty-Marke</p>
              <p><strong>OnlySmile.</strong> Ein eigener Markenshop mit Produktbereichen und Anwendungshinweisen.</p>
            </div>
            <Link className="praxis-evidence-link" href="/projects/onlysmile">
              OnlySmile-Projekt ansehen <span aria-hidden="true">→</span>
            </Link>
          </aside>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-6 sm:px-8">
          <Kicker n="02">Positionierung</Kicker>
          <UnderlinedHeader className="praxis-section-head mb-10 lg:mb-12">
            Ihre Praxis ist besonders. Ihr Online-Auftritt sollte zeigen, <span className="praxis-mark">warum.</span>
          </UnderlinedHeader>
          <div className="praxis-positioning-copy">
            <p>Welche Schwerpunkte setzen Sie? Wie beraten Sie? Was erwartet Patienten beim ersten Besuch? Wir machen Ihre Praxis online greifbar: mit verständlichen Leistungsseiten, einer klaren Struktur und Bildern, die zu Ihnen passen.</p>
            <p>Dafür verbinden wir sechs Bausteine: Website, SEO, Google Ads, Texte, Foto und Video sowie digitale Patientenkommunikation. Geordnet nach dem, was sie für Ihre Praxis leisten:</p>
          </div>
          <div className="praxis-service-grid">
            <article className="praxis-service praxis-svc--visibility">
              <h3>Sichtbar werden</h3>
              <ul>
                <li>Suchmaschinenoptimierung</li>
                <li>Google-Unternehmensprofil</li>
                <li>Lokale Google-Ads-Kampagnen</li>
                <li>Seiten für Ihre Behandlungen</li>
                <li>Inhalte mit regionalem Bezug</li>
                <li>Auswertung der Auffindbarkeit</li>
              </ul>
            </article>
            <article className="praxis-service praxis-svc--trust">
              <h3>Vertrauen aufbauen</h3>
              <ul>
                <li>Individuelle Praxiswebsite</li>
                <li>Klare Positionierung</li>
                <li>Verständliche medizinische Texte</li>
                <li>Professionelle Praxisfotografie</li>
                <li>Videos für Praxis und Team</li>
                <li>Übersichtliche mobile Darstellung</li>
              </ul>
            </article>
            <article className="praxis-service praxis-svc--contact">
              <h3>Kontakt erleichtern</h3>
              <ul>
                <li>Einbindung der Online-Terminbuchung</li>
                <li>Gut erreichbare Kontaktwege</li>
                <li>Antworten auf häufige Fragen</li>
                <li>Anfrageformulare</li>
                <li>Klare Hinweise vor dem Termin</li>
                <li>Analyse der Kontaktwege</li>
              </ul>
            </article>
          </div>
          <div className="praxis-goal-examples" aria-labelledby="praxis-goal-examples-title">
            <div>
              <p className="praxis-content-label">Von Ihrem Ziel zur Maßnahme</p>
              <h3 id="praxis-goal-examples-title">Was Ihre Praxis braucht, bestimmt die Maßnahmen.</h3>
              <p className="praxis-goal-hint">Wir besprechen zuerst, was sich für Ihre Praxis verbessern soll. Daraus leiten wir ab, welche Inhalte, Kanäle und Kontaktwege sinnvoll sind und woran wir die Entwicklung beurteilen.</p>
            </div>
            <div className="praxis-goal-disclosures">
              {PRACTICE_GOALS.map(([goal, question, measure]) => (
                <details name="praxis-goal-examples" key={goal}>
                  <summary><span>{goal}</span><Plus aria-hidden="true" /></summary>
                  <dl className="praxis-goal-answer">
                    <div><dt>Was wir gemeinsam klären</dt><dd>{question}</dd></div>
                    <div><dt>So setzen wir es um</dt><dd>{measure}</dd></div>
                  </dl>
                </details>
              ))}
            </div>
          </div>
          <div className="praxis-service-bottom">
            <p>Einzelne Verbesserung oder neuer Auftritt: Wir prüfen zuerst, was bereits funktioniert und wo Handlungsbedarf besteht.</p>
            <a href="#praxis-kontakt" className="praxis-evidence-link" data-praxis-cta="services">Ersten Schritt klären <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20" aria-labelledby="praxis-patient-questions-title">
        <div className="container mx-auto px-6 sm:px-8">
          <Kicker n="03">Patientenfragen</Kicker>
          <div className="praxis-detail-heading">
              <h2 id="praxis-patient-questions-title">Gute Praxiswebsites beantworten Fragen, <span className="praxis-mark">bevor</span> sie gestellt werden.</h2>
              <p>Patienten sollen sich schon vor dem ersten Anruf orientieren können. Gemeinsam legen wir fest, welche Behandlungen und Anliegen im Mittelpunkt stehen, und richten Inhalte und Struktur an den Fragen aus, die vor einem Termin aufkommen.</p>
          </div>
            <dl className="praxis-patient-questions">
              <div>
                <dt><span className="praxis-question-marker" aria-hidden="true"><span>01 · Behandlung</span><Stethoscope /></span>Behandelt diese Praxis mein Anliegen?</dt>
                <dd>Die passenden Leistungsseiten auffindbar machen.</dd>
              </div>
              <div>
                <dt><span className="praxis-question-marker" aria-hidden="true"><span>02 · Vertrauen</span><UsersRound /></span>Welche Erfahrung bringt das Team mit?</dt>
                <dd>Qualifikationen und Schwerpunkte verständlich zeigen.</dd>
              </div>
              <div>
                <dt><span className="praxis-question-marker" aria-hidden="true"><span>03 · Orientierung</span><ClipboardList /></span>Was erwartet mich bei der Untersuchung?</dt>
                <dd>Abläufe erklären und offene Fragen beantworten.</dd>
              </div>
              <div>
                <dt><span className="praxis-question-marker" aria-hidden="true"><span>04 · Kontakt</span><CalendarDays /></span>Wie kann ich einen Termin vereinbaren?</dt>
                <dd>Ohne Umwege zur Kontaktaufnahme führen.</dd>
              </div>
            </dl>
        </div>
      </section>

      <section className="praxis-local py-12 lg:py-20" aria-labelledby="praxis-local-title">
        <div className="container mx-auto px-6 sm:px-8">
          <Kicker n="04">Lokale Sichtbarkeit</Kicker>
          <div className="praxis-detail-heading">
              <h2 id="praxis-local-title">Gefunden werden, wenn Patienten in Ihrer <span className="praxis-mark">Nähe</span> suchen.</h2>
              <p>Eine Suche nach einem Facharzt beginnt mit einem konkreten Anliegen. Deshalb richten wir Ihre Website auf die Verbindung aus Behandlung und Standort aus.</p>
          </div>
          <div className="praxis-local-flow">
            <article className="praxis-local-stage">
              <div className="praxis-local-symbol" aria-hidden="true"><MapPin /></div>
              <h3>Ihre Fachrichtung. Ihr Standort. Ihr Leistungsangebot.</h3>
              <p>Wer nach Ihrer Leistung in Ihrer Stadt sucht, soll schnell erkennen können, ob Ihre Praxis der richtige Ansprechpartner ist.</p>
              <p>Dafür braucht es verständliche Inhalte, eine übersichtliche Website und stimmige Standortinformationen.</p>
            </article>
            <div className="praxis-local-connection" aria-hidden="true"><ArrowRight /></div>
            <article className="praxis-local-stage">
              <div className="praxis-local-symbol" aria-hidden="true"><PanelsTopLeft /></div>
              <h3>Website und Google-Profil gemeinsam verbessern</h3>
              <p>Wir prüfen Ihr Google-Unternehmensprofil, strukturieren Ihre Leistungsseiten und arbeiten relevante Informationen zu Ihrer Praxis und Ihrem Einzugsgebiet ein.</p>
              <p>Öffnungszeiten, Kontaktdaten, Leistungen und Bilder sollen ein konsistentes Gesamtbild vermitteln. Dazu kommen technische Verbesserungen und eine sinnvolle interne Verlinkung.</p>
            </article>
          </div>
          <p className="praxis-local-caption">Anhand der verfügbaren Such- und Kontaktdaten beobachten wir die Entwicklung und setzen die nächsten Prioritäten.</p>
        </div>
      </section>

      <section className="praxis-fit py-12 lg:py-16">
        <div className="container mx-auto px-6 sm:px-8">
          <p className="praxis-eyebrow">Haltung</p>
          <div className="praxis-fit-grid">
            <div>
              <h2>Ihr Marketing muss auch im <span>Praxisalltag</span> funktionieren.</h2>
              <p className="praxis-fit-question">Welche Patienten möchten Sie erreichen?<br />Und wofür hat Ihre Praxis Kapazität?</p>
            </div>
            <div>
              <p>Zusätzliche Anfragen helfen Ihrer Praxis dann, wenn sie zu Ihren Leistungen und verfügbaren Terminen passen. Deshalb beginnt unsere Arbeit mit einem Gespräch über Ihren Praxisalltag.</p>
              <p>Vielleicht möchten Sie eine neue Sprechstunde etablieren, einen Behandlungsschwerpunkt bekannter machen oder wiederkehrende Fragen schon auf der Website beantworten. Wir übersetzen diese Ziele in konkrete Inhalte und Maßnahmen.</p>
              <p>Dabei denken wir den gesamten Weg mit: von der ersten Suche über die Information zur Behandlung bis zur Kontaktaufnahme.</p>
              <a href="#praxis-kontakt" className="praxis-evidence-link" data-praxis-cta="fit">Ihr Praxisziel besprechen <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-6 sm:px-8">
          <Kicker n="05">Ablauf</Kicker>
          <UnderlinedHeader className="praxis-section-head mb-10 lg:mb-12">
            Ein klarer Ablauf. Von der ersten Frage bis zur <span className="praxis-mark">Umsetzung.</span>
          </UnderlinedHeader>
          <ol className="praxis-process">
            <li><span className="praxis-process-number">01</span><h3>Ziel und ersten Schritt klären</h3><p>Wir besprechen Ihre Fachrichtung, Ihre Kapazitäten und das, was sich verbessern soll.</p><p className="praxis-process-result">Sie erhalten eine erste Einschätzung, welche Maßnahme sinnvoll ist und welche Informationen wir für ein konkretes Angebot noch benötigen.</p></li>
            <li><span className="praxis-process-number">02</span><h3>Prioritäten festlegen</h3><p>Wir prüfen Ihren bestehenden Auftritt und zeigen, wo sich Verbesserungen anbieten.</p><p className="praxis-process-result">Sie erhalten einen Vorschlag mit konkreten Leistungen, Prioritäten und Kosten. So können Sie nachvollziehen, was wir empfehlen und wie die Maßnahmen auf Ihr Ziel einzahlen.</p></li>
            <li><span className="praxis-process-number">03</span><h3>Umsetzen und weiterentwickeln</h3><p>Nach Ihrer Freigabe setzen wir die vereinbarten Maßnahmen um. Medizinische Inhalte stimmen wir mit Ihnen ab.</p><p className="praxis-process-result">Anhand der verfügbaren Auswertungen und Ihres Feedbacks prüfen wir, was funktioniert und wo wir nachjustieren sollten.</p></li>
          </ol>
          <div className="praxis-review-note">
            <div className="praxis-review-heading">
              <h3>Nach dem Start: prüfen und weiterentwickeln.</h3>
              <p>Bei vereinbarter laufender Betreuung.</p>
            </div>
            <ol className="praxis-review-steps">
              <li><span aria-hidden="true">01</span><h4>Daten prüfen</h4><p>Was zeigen die verfügbaren Such- und Kontaktdaten?</p></li>
              <li><span aria-hidden="true">02</span><h4>Ihr Feedback einordnen</h4><p>Welche Anfragen passen tatsächlich zu Ihrer Praxis?</p></li>
              <li><span aria-hidden="true">03</span><h4>Gezielt nachjustieren</h4><p>Gemeinsam die nächsten Verbesserungen ableiten.</p></li>
            </ol>
          </div>
          <div className="praxis-steps-cta mt-4 lg:mt-6" data-praxis-cta="process">
            <div className="praxis-steps-cta-inner">
              <div className="praxis-steps-cta-copy">
                <p className="praxis-steps-cta-title">Klarheit, bevor Sie in Maßnahmen investieren.</p>
                <p className="praxis-steps-cta-description">Im unverbindlichen Erstgespräch klären wir, was zuerst sinnvoll ist und welche Informationen für ein Angebot noch fehlen.</p>
              </div>
              <DoorButton size="lg" color="white" href="#praxis-kontakt">Erstgespräch anfragen</DoorButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 overflow-hidden" data-praxis-rail="skip">
        <div className="container mx-auto px-6 sm:px-8">
          <Kicker n="06" rail={false}>Das Team</Kicker>
          <UnderlinedHeader className="praxis-section-head mb-10 lg:mb-12">
            Das Team hinter <span className="praxis-mark">Ihrem Praxisauftritt.</span>
          </UnderlinedHeader>
          <TeamCarousel>
            <PersonCard imageSrc="/images/team-1.webp" name="Jan" role="Creative Director" />
            <PersonCard imageSrc="/images/team-2.webp" name="Georgy" role="Managing Director" />
            <PersonCard imageSrc="/images/team-3.webp" name="Almaz" role="Webentwickler" />
            <PersonCard imageSrc="/images/team-4.webp" name="Lera" role="Designer" />
            <PersonCard imageSrc="/images/team-5.webp" name="Evgeny" role="Videoproduktion" />
          </TeamCarousel>
          <div className="praxis-service-bottom">
            <div className="praxis-team-copy">
              <p>Sie bringen die medizinische Expertise ein. Wir kümmern uns um die digitale Umsetzung.</p>
              <p>Medizinische Inhalte stimmen wir mit Ihnen ab. Texte, Bilder und Kontaktwege entwickeln wir als zusammenhängenden Auftritt.</p>
            </div>
            <Link href="/agency" className="praxis-evidence-link">MindLind kennenlernen <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
      </div>
      <PraxisContact />
    </>
  );
}
