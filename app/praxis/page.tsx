import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
                Für Arzt- und Zahnarztpraxen
              </p>

              <h1 className="praxis-h1 praxis-enter" data-praxis-anim="hero-title">
                Damit passende Patienten Ihre Praxis finden.
              </h1>

              <p className="praxis-lead praxis-enter" data-praxis-anim="hero-lead">
                Websites, lokale Sichtbarkeit und Google Ads für Ihre Praxis.
                Damit Patienten Ihre Schwerpunkte verstehen und den Weg zum
                Termin finden – passend zu den Kapazitäten Ihres Teams.
              </p>

              <div className="praxis-enter" data-praxis-anim="hero-cta">
                <p className="praxis-cta-benefit">
                  <strong>Mit einer klaren Priorität starten.</strong>
                  Im Erstgespräch erhalten Sie eine erste Einschätzung, welche
                  Maßnahme zu Ihrem Praxisziel passt und was dafür nötig ist.
                </p>
                <div className="praxis-hero-actions">
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
          <Kicker n="02">Leistungen</Kicker>
          <UnderlinedHeader className="praxis-section-head mb-10 lg:mb-12">
            Wo soll sich für Ihre Praxis <span className="praxis-mark">etwas ändern?</span>
          </UnderlinedHeader>
          <div className="praxis-service-grid">
            <article className="praxis-service praxis-svc--visibility">
              <p className="praxis-service-context">Sie möchten vor Ort gefunden werden.</p>
              <h3>Lokale Sichtbarkeit</h3>
              <p>Ihre Fachrichtung und Behandlungen dort zeigen, wo Patienten in Ihrer Region suchen.</p>
              <ul><li>Google-Unternehmensprofil</li><li>Leistungsseiten mit Ortsbezug</li><li>Lokale SEO und Google Ads</li></ul>
            </article>
            <article className="praxis-service praxis-svc--trust">
              <p className="praxis-service-context">Ihr Auftritt passt nicht mehr zu Ihrer Praxis.</p>
              <h3>Eine klare Praxiswebsite</h3>
              <p>Leistungen, Team und Abläufe verständlich präsentieren – auch auf dem Smartphone.</p>
              <ul><li>Struktur, Gestaltung und Umsetzung</li><li>Verständliche medizinische Texte</li><li>Foto und Video für Praxis und Team</li></ul>
            </article>
            <article className="praxis-service praxis-svc--contact">
              <p className="praxis-service-context">Die Anmeldung beantwortet dieselben Fragen.</p>
              <h3>Einfacher zum Termin</h3>
              <p>Wiederkehrende Fragen vorab klären und passende Kontaktwege sichtbar machen.</p>
              <ul><li>Antworten zu Behandlung und Ablauf</li><li>Einbindung der Online-Terminbuchung</li><li>Kontaktformulare und klare Hinweise</li></ul>
            </article>
          </div>
          <div className="praxis-service-bottom">
            <p>Einzelne Verbesserung oder neuer Auftritt: Wir prüfen zuerst, was bereits funktioniert und wo Handlungsbedarf besteht.</p>
            <a href="#praxis-kontakt" className="praxis-evidence-link" data-praxis-cta="services">Ersten Schritt klären <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="praxis-fit py-12 lg:py-16">
        <div className="container mx-auto px-6 sm:px-8">
          <p className="praxis-eyebrow">Ihre Kapazität gibt die Richtung vor</p>
          <div className="praxis-fit-grid">
            <h2>Welche Anfragen passen <span>zu Ihrer Praxis?</span></h2>
            <div>
              <p>Ein neuer Standort, ein Behandlungsschwerpunkt oder weniger Rückfragen an der Anmeldung: Ihr Ziel entscheidet über die Maßnahmen.</p>
              <p>Wenn Ihr Kalender voll ist, können Orientierung und Patientenkommunikation wichtiger sein als zusätzliche Reichweite.</p>
              <a href="#praxis-kontakt" className="praxis-evidence-link" data-praxis-cta="fit">Ihr Praxisziel besprechen <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-6 sm:px-8">
          <Kicker n="03">Zusammenarbeit</Kicker>
          <UnderlinedHeader className="praxis-section-head mb-10 lg:mb-12">
            Erst Klarheit. Dann <span className="praxis-mark">Umsetzung.</span>
          </UnderlinedHeader>
          <ol className="praxis-process">
            <li><span className="praxis-process-number">01</span><h3>Ziel und Priorität klären</h3><p>Wir besprechen Ihre Praxis, Ihren bestehenden Auftritt und Ihr Ziel.</p><p className="praxis-process-result"><strong>Sie erhalten:</strong> eine erste Einschätzung zum sinnvollen nächsten Schritt.</p></li>
            <li><span className="praxis-process-number">02</span><h3>Umfang und Kosten festlegen</h3><p>Wir konkretisieren die Maßnahmen und die nötigen Abstimmungen mit Ihrem Team.</p><p className="praxis-process-result"><strong>Sie erhalten:</strong> ein Angebot mit Leistungen, Kosten und Zeitplan zur Freigabe.</p></li>
            <li><span className="praxis-process-number">03</span><h3>Umsetzen und prüfen</h3><p>Wir gestalten und entwickeln. Medizinische Inhalte geben Sie fachlich frei.</p><p className="praxis-process-result"><strong>Sie erhalten:</strong> die vereinbarte Umsetzung. Weitere Betreuung stimmen wir nach Bedarf ab.</p></li>
          </ol>
          <div className="praxis-steps-cta mt-4 lg:mt-6">
            <div className="praxis-steps-cta-inner">
              <div className="praxis-steps-cta-copy">
                <p className="praxis-steps-cta-title">Klarheit, bevor Sie investieren.</p>
                <p className="praxis-steps-cta-description">Starten Sie mit Ihrem Anliegen. Ein fertiges Briefing brauchen Sie für das Erstgespräch nicht.</p>
              </div>
              <DoorButton size="lg" color="white" href="#praxis-kontakt">Erstgespräch anfragen</DoorButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 overflow-hidden" data-praxis-rail="skip">
        <div className="container mx-auto px-6 sm:px-8">
          <Kicker n="04" rail={false}>Das Team</Kicker>
          <UnderlinedHeader className="praxis-section-head mb-10 lg:mb-12">
            Die Menschen hinter <span className="praxis-mark">Ihrem Auftritt.</span>
          </UnderlinedHeader>
          <TeamCarousel>
            <PersonCard imageSrc="/images/team-1.webp" name="Jan" role="Creative Director" />
            <PersonCard imageSrc="/images/team-2.webp" name="Georgy" role="Managing Director" />
            <PersonCard imageSrc="/images/team-3.webp" name="Almaz" role="Webentwickler" />
            <PersonCard imageSrc="/images/team-4.webp" name="Lera" role="Designer" />
            <PersonCard imageSrc="/images/team-5.webp" name="Evgeny" role="Videoproduktion" />
          </TeamCarousel>
          <div className="praxis-service-bottom">
            <p>Wir übernehmen Konzeption, Gestaltung und Technik. Sie bringen Ihre medizinische Expertise ein und geben die Inhalte frei.</p>
            <Link href="/agency" className="praxis-evidence-link">MindLind kennenlernen <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
      </div>
      <PraxisContact />
    </>
  );
}
