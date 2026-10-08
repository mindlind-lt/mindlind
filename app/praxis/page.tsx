import type { Metadata } from "next";
import Image from "next/image";

import { breadcrumbSchema } from "@/lib/schema";

import { socialCard } from "@/lib/site";

import DnaCapsule from "@/components/dna-capsule/dna-capsule";
import DnaHelix from "@/components/dna-helix/dna-helix";
import DoorButton from "@/components/door-button/door-button";
import ParticleWave from "@/components/particle-wave/particle-wave";
import PersonCard from "@/components/person-card/person-card";
import SectionContact from "@/components/section-contact/section-contact";
import TeamCarousel from "@/components/team-carousel/team-carousel";
import UnderlinedHeader from "@/components/underlined-header/underlined-header";
import WorkThumb from "@/components/work-thumb/work-thumb";

import PraxisMotion from "./praxis-motion";
import PraxisRail from "./praxis-rail";

import "./praxis-marketing.css";

/**
 * Content source: MindLind-Praxismarketing-Content-DE.md (Reihenfolge des
 * UX-Makets "DOCTORS.pdf"). Every string on the page is transcribed from it.
 *
 * The bracketed editorial notes in that document stay as comments: it says at
 * the top that they are instructions and do not belong on the website. The six
 * image motifs do not exist as files yet, so each slot renders as a designed
 * placeholder carrying its brief and alt text (see .praxis-figure).
 */

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

            <div className="flex flex-col gap-6 lg:gap-8">
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
                <DoorButton size="lg" href="/contact">Praxisziele besprechen</DoorButton>
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

      {/* ---- 02 | Drei kompakte Akzente -------------------------------- */}
      {/* [Ersatz für die drei "100+"-Platzhalter. Die Zahlen beschreiben das auf
          dieser Seite erläuterte Vorgehen, keine unbelegten Erfolge oder
          Unternehmenskennzahlen.] */}
      <section className="pb-12 lg:pb-20">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="praxis-stats">

            <div className="praxis-stat praxis-enter">
              <div className="praxis-stat-value" data-praxis-count>{3}</div>
              <div className="praxis-stat-label">Schritte zur Zusammenarbeit</div>
            </div>

            <div className="praxis-stat praxis-enter">
              <div className="praxis-stat-value" data-praxis-count>{6}</div>
              <div className="praxis-stat-label">Bausteine für Ihren Auftritt</div>
            </div>

            <div className="praxis-stat praxis-enter">
              <div className="praxis-stat-value" data-praxis-count>{1}</div>
              <div className="praxis-stat-label">Klarer Plan für Ihre Praxis</div>
            </div>

          </div>
        </div>
      </section>

      {/* ---- Rail: 03 to 11 -------------------------------------------- */}
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

      {/* ---- 01 | Positionierung und Leistungen ------------------------ */}
      {/* Nach /praxis-concept-3 ("Etappe 03 · Vertrauen"): Überschrift, Foto,
          Einleitung und die drei Leistungsspalten in einem Raster. Fasst die
          bisherigen Abschnitte 03 (Drei Leistungsspalten) und die obere Hälfte
          von 04 (Großer Text mit Bild) zusammen.

          [Die sechs Bausteine: Website, SEO, Google Ads, Texte, Foto/Video und
          digitale Patientenkommunikation. Die folgenden Karten ordnen ihre
          konkreten Leistungen nach dem Nutzen für die Praxis.] */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-6 sm:px-8">

          <Kicker n="01">Positionierung</Kicker>

          <UnderlinedHeader className="praxis-section-head mb-10 lg:mb-16">
            Ihre Praxis ist besonders. Ihr Online-Auftritt sollte zeigen, <span className="praxis-mark">warum.</span>
          </UnderlinedHeader>

          <div className="praxis-bento">

            {/* Bild 02 — Arzt im aufmerksamen Gespräch mit einer erwachsenen
                Patientin.

                [Diese beiden Aussagen ersetzen die Zahlen auf dem Bild. Keine
                erfundenen Wachstumswerte ergänzen.] */}
            <figure className="praxis-bento-photo" data-praxis-anim="bento">
              <Image
                src="/images/praxis-2.jpg"
                alt="Arzt im persönlichen Gespräch mit einer Patientin"
                fill
                sizes="(min-width: 64rem) 58vw, 100vw"
                data-praxis-anim="bento-zoom"
              />
              <figcaption className="praxis-bento-notes">
                <span className="praxis-bento-note praxis-svc--visibility" data-praxis-anim="note">
                  <b>Klar positioniert</b>
                  Ihre Schwerpunkte im Fokus
                </span>
                <span className="praxis-bento-note praxis-svc--contact" data-praxis-anim="note">
                  <b>Einfach erreichbar</b>
                  Direkter Weg zum Termin
                </span>
              </figcaption>
            </figure>

            <div className="praxis-bento-text" data-praxis-anim="bento">
              <p>
                Welche Schwerpunkte setzen Sie? Wie beraten Sie? Was erwartet
                Patienten beim ersten Besuch? Wir machen Ihre Praxis online
                greifbar: mit verständlichen Leistungsseiten, einer klaren
                Struktur und Bildern, die zu Ihnen passen.
              </p>
              <p className="praxis-bento-bridge">
                Dafür verbinden wir sechs Bausteine: Website, SEO, Google Ads,
                Texte, Foto und Video sowie digitale Patientenkommunikation.
                Geordnet nach dem, was sie für Ihre Praxis leisten:
              </p>
            </div>

            <article className="praxis-pillar praxis-svc--visibility" data-praxis-anim="bento">
              <h3 className="praxis-svc-title">
                Sichtbar werden
                <span className="praxis-svc-index">01</span>
              </h3>
              <ul className="praxis-pillar-items">
                <li>Suchmaschinenoptimierung</li>
                <li>Google-Unternehmensprofil</li>
                <li>Lokale Google-Ads-Kampagnen</li>
                <li>Seiten für Ihre Behandlungen</li>
                <li>Inhalte mit regionalem Bezug</li>
                <li>Auswertung der Auffindbarkeit</li>
              </ul>
            </article>

            <article className="praxis-pillar praxis-svc--trust" data-praxis-anim="bento">
              <h3 className="praxis-svc-title">
                Vertrauen aufbauen
                <span className="praxis-svc-index">02</span>
              </h3>
              <ul className="praxis-pillar-items">
                <li>Individuelle Praxiswebsite</li>
                <li>Klare Positionierung</li>
                <li>Verständliche medizinische Texte</li>
                <li>Professionelle Praxisfotografie</li>
                <li>Videos für Praxis und Team</li>
                <li>Übersichtliche mobile Darstellung</li>
              </ul>
            </article>

            <article className="praxis-pillar praxis-svc--contact" data-praxis-anim="bento">
              <h3 className="praxis-svc-title">
                Kontakt erleichtern
                <span className="praxis-svc-index">03</span>
              </h3>
              <ul className="praxis-pillar-items">
                <li>Einbindung der Online-Terminbuchung</li>
                <li>Gut erreichbare Kontaktwege</li>
                <li>Antworten auf häufige Fragen</li>
                <li>Anfrageformulare</li>
                <li>Klare Hinweise vor dem Termin</li>
                <li>Analyse der Kontaktwege</li>
              </ul>
            </article>

          </div>
        </div>
      </section>

      {/* ---- 02 | Patientenfragen --------------------------------------- */}
      {/* Die untere Hälfte des bisherigen Abschnitts 04/05, jetzt ein eigener
          Abschnitt. Die Einleitung ist der zweite Teil des früheren Fließtexts
          neben dem Foto; die Überschrift ist neu und sollte redaktionell
          bestätigt werden. Frage und Antwort stehen sich mit gleicher Nummer
          gegenüber. */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-6 sm:px-8">

          <Kicker n="02">Patientenfragen</Kicker>

          <UnderlinedHeader className="praxis-section-head mb-10 lg:mb-16">
            Gute Praxiswebsites beantworten Fragen, <span className="praxis-mark">bevor</span> sie gestellt werden.
          </UnderlinedHeader>

          <p className="praxis-lead max-w-3xl mb-10 lg:mb-14">
            Patienten sollen sich schon vor dem ersten Anruf orientieren können.
            Gemeinsam legen wir fest, welche Behandlungen und Anliegen im
            Mittelpunkt stehen, und richten Inhalte und Struktur an den Fragen
            aus, die vor einem Termin aufkommen.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="praxis-feature-card">
              <h3 className="praxis-h3 mb-6 lg:mb-8">
                Was Patienten vor dem Termin wissen möchten
              </h3>
              <ul>
                <li className="praxis-pair-item">
                  <span className="praxis-pair-index">01</span>
                  <span className="praxis-pair-text">Behandelt diese Praxis mein Anliegen?</span>
                </li>
                <li className="praxis-pair-item">
                  <span className="praxis-pair-index">02</span>
                  <span className="praxis-pair-text">Welche Erfahrung bringt das Team mit?</span>
                </li>
                <li className="praxis-pair-item">
                  <span className="praxis-pair-index">03</span>
                  <span className="praxis-pair-text">Was erwartet mich bei der Untersuchung?</span>
                </li>
                <li className="praxis-pair-item">
                  <span className="praxis-pair-index">04</span>
                  <span className="praxis-pair-text">Wie kann ich einen Termin vereinbaren?</span>
                </li>
              </ul>
            </div>

            <div className="praxis-feature-card">
              <h3 className="praxis-h3 mb-6 lg:mb-8">
                Was Ihr Online-Auftritt dafür leisten muss
              </h3>
              <ul>
                <li className="praxis-pair-item">
                  <span className="praxis-pair-index">01</span>
                  <span className="praxis-pair-text">Die passenden Leistungsseiten auffindbar machen</span>
                </li>
                <li className="praxis-pair-item">
                  <span className="praxis-pair-index">02</span>
                  <span className="praxis-pair-text">Qualifikationen und Schwerpunkte verständlich zeigen</span>
                </li>
                <li className="praxis-pair-item">
                  <span className="praxis-pair-index">03</span>
                  <span className="praxis-pair-text">Abläufe erklären und offene Fragen beantworten</span>
                </li>
                <li className="praxis-pair-item">
                  <span className="praxis-pair-index">04</span>
                  <span className="praxis-pair-text">Ohne Umwege zur Kontaktaufnahme führen</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ---- 06 | Portfolio -------------------------------------------- */}
      {/* [Die drei sichtbaren Karten bzw. der Slider benötigen echte
          MindLind-Projekte mit freigegebenen Namen, Leistungsangaben und
          Screenshots. Keine KI-generierten Praxiswebsites als Referenzen
          verwenden.] — erfüllt durch die beiden freigegebenen Dentalprojekte,
          die auch auf /projects laufen. Name, Bild und Leistungen sind von dort
          übernommen; nichts davon ist für diese Seite erfunden. */}
      <section className="py-12 lg:py-20">
        {/* `relative` for the pill below, which is positioned against this box so
            its right edge lands on the container's own content edge. */}
        <div className="container relative mx-auto px-6 sm:px-8">

          <Kicker n="03">Einblicke in unsere Arbeit</Kicker>

          <UnderlinedHeader className="praxis-section-head mb-10 lg:mb-16">
            So wird medizinische Kompetenz <span className="praxis-mark">sichtbar.</span>
          </UnderlinedHeader>

          {/* The heading is capped at 22ch, so from lg up the top right of this
              section is empty — which is where the pill
              goes. It is laid over the content rather than behind it and
              refracts what it crosses (the rule and the end of the
              heading) instead of hiding it; `backdrop` is the page background,
              which stands in for the parts of the capture this container does
              not paint itself. Last in the DOM and z-indexed above the static
              content around it. See .praxis-works-pill for the box. */}
          <DnaCapsule
            className="praxis-works-pill"
            refractPage
            backdrop="#F4F4F4"
            distance={3.6}
          />

          {/* Same split the home page uses in section-feat-works: the intro takes a
                third, the work takes two. A 1fr_1fr split left each thumb at about
                a fifth of the viewport. */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">

            <p className="praxis-lead lg:col-span-1 lg:sticky lg:top-(--hdr-height)">
              Jede Praxis hat eigene Schwerpunkte. Entsprechend individuell
              entwickeln wir ihre digitale Präsentation. Entdecken Sie
              ausgewählte Projekte und die Leistungen dahinter.
            </p>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 lg:col-span-2"
              data-praxis-anim="works"
            >
              <WorkThumb
                headingLevel="h3"
                href="/projects/mondent"
                imageSrc="/images/case-mondent-1.webp"
                hoverImageSrc="/images/case-mondent-2.webp"
                imageAlt="Mondent — Website und UX/UI für eine Zahnarztpraxis"
                imageWidth={560}
                imageHeight={560}
                title="Mondent"
                pills={["Website", "UX/UI"]}
              />
              <WorkThumb
                headingLevel="h3"
                href="/projects/onlysmile"
                imageSrc="/images/case-onlysmile-1.webp"
                hoverImageSrc="/images/case-onlysmile-2.webp"
                imageAlt="OnlySmile — Website und UX/UI für professionelles Zahnbleaching"
                imageWidth={560}
                imageHeight={560}
                title="OnlySmile"
                pills={["Website", "UX/UI"]}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ---- 07 | Haltung -------------------------------------------- */}
      {/* [Dieser Text ersetzt den Referenzblock mit dem fremden Agenturinhaber.
          Das Layout kann bleiben; Name, Porträt, Zitat und Erfahrungsaussagen
          der Referenz werden nicht übernommen.]

          Reihenfolge wie im Content-Dokument: Einleitung, hervorgehobene
          Aussage, Haupttext. */}
      <section className="praxis-invert py-16 lg:py-28">
        {/* Faded out against the scroll as the band comes in — see
            .praxis-invert-curtain and components/praxis-motion. Purely the
            transition into the dark section; it carries no content. */}
        <div className="praxis-invert-curtain" aria-hidden="true" />

        <div className="container mx-auto px-6 sm:px-8">

          <Kicker n="04" onDark>Haltung</Kicker>

          <UnderlinedHeader className="praxis-section-head">
            Ihr Marketing muss auch im <span className="praxis-mark">Praxisalltag</span> funktionieren.
          </UnderlinedHeader>

          <p className="praxis-invert-intro">
            Zusätzliche Anfragen helfen Ihrer Praxis dann, wenn sie zu Ihren
            Leistungen und verfügbaren Terminen passen. Deshalb beginnt unsere
            Arbeit mit einem Gespräch über Ihren Praxisalltag.
          </p>

          {/* Hervorgehobene Aussage, ohne Zitatzeichen. */}
          <p className="praxis-ask">
            <span>Welche Patienten möchten Sie erreichen?</span>
            <span>Und wofür hat Ihre Praxis Kapazität?</span>
          </p>

          <p className="praxis-invert-note">
            Vielleicht möchten Sie eine neue Sprechstunde etablieren, einen
            Behandlungsschwerpunkt bekannter machen oder wiederkehrende Fragen
            schon auf der Website beantworten. Wir übersetzen diese Ziele in
            konkrete Inhalte und Maßnahmen. Dabei denken wir den gesamten Weg
            mit: von der ersten Suche über die Information zur Behandlung bis
            zur Kontaktaufnahme.
          </p>

        </div>
      </section>

      {/* ---- 07b | Team ------------------------------------------------ */}
      {/* [Bild: echtes Foto des MindLind-Teams oder eines tatsächlichen
          Ansprechpartners. Kein generierter Mensch als Mitarbeiter oder
          Gründer.] — erfüllt: dieselben Teamfotos wie auf /agency.

          Bildbeschriftung, Abschlusszeile und Ergänzung stehen im
          Content-Dokument in dieser Reihenfolge direkt hintereinander. */}
      {/* Skipped by the rail: the carousel runs off both edges, and the rail
          breaks off at this section's top and picks up again below it. */}
      <section className="py-12 lg:py-20 overflow-hidden" data-praxis-rail="skip">
        <div className="container mx-auto px-6 sm:px-8">

          <figure className="m-0 mb-12 lg:mb-16">
            <div className="mb-6 lg:mb-8">
              <Kicker n="05" rail={false}>Team</Kicker>
              <figcaption className="font-mono uppercase">
                <span className="text-2xl sm:text-3xl block">MindLind</span>
                <span className="text-sm text-muted-foreground">
                  Das Team hinter Ihrem Praxisauftritt
                </span>
              </figcaption>
            </div>

            <TeamCarousel>
              <PersonCard imageSrc="/images/team-1.webp" name="Jan" role="Creative Director" />
              <PersonCard imageSrc="/images/team-2.webp" name="Georgy" role="Managing Director" />
              <PersonCard imageSrc="/images/team-3.webp" name="Almaz" role="Webentwickler" />
              <PersonCard imageSrc="/images/team-4.webp" name="Lera" role="Designer" />
              <PersonCard imageSrc="/images/team-5.webp" name="Evgeny" role="Videoproduktion" />
            </TeamCarousel>
          </figure>

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-0 lg:gap-16 items-center">
            <p className="praxis-closing">
              Sie bringen die medizinische Expertise ein. Wir kümmern uns um die
              digitale Umsetzung.
            </p>
            <p className="praxis-closing-note">
              Medizinische Inhalte stimmen wir mit Ihnen ab. Texte, Bilder und
              Kontaktwege entwickeln wir als zusammenhängenden Auftritt.
            </p>
          </div>

        </div>
      </section>

      {/* ---- 08 | Vergleichstabelle ------------------------------------ */}
      {/* [Bewusster Ersatz für den Vergleich mit "klassischen Agenturen". Keine
          pauschalen Aussagen über Wettbewerber, garantierten Freigaben,
          erfundenen Terminkosten oder Gewinnversprechen.] */}
      <section className="praxis-needs py-12 lg:py-20">
        {/* Background layer, as the hero used to have. `praxis-needs` is the
            positioned ancestor it fills; the container below sits above it. */}
        <ParticleWave className="particle-wave--behind praxis-needs-wave" />

        <div className="container relative z-10 mx-auto px-6 sm:px-8">

          <Kicker n="06">Bedarf</Kicker>

          <UnderlinedHeader className="praxis-section-head mb-10 lg:mb-16">
            Was Ihre Praxis braucht, bestimmt die <span className="praxis-mark">Maßnahmen.</span>
          </UnderlinedHeader>

          <p className="praxis-lead max-w-3xl mb-10 lg:mb-14">
            Wir besprechen zuerst, was sich für Ihre Praxis verbessern soll.
            Daraus leiten wir ab, welche Inhalte, Kanäle und Kontaktwege
            sinnvoll sind und woran wir die Entwicklung beurteilen.
          </p>

          <div className="praxis-table-frame">
            <table className="praxis-table">
              <thead>
                <tr>
                  <th scope="col">Ihr Praxisziel</th>
                  <th scope="col">Was wir gemeinsam klären</th>
                  <th scope="col">So setzen wir es um</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Einen Schwerpunkt stärken</th>
                  <td data-label="Was wir gemeinsam klären">
                    Welche Behandlungen möchten Sie bekannter machen?
                  </td>
                  <td data-label="So setzen wir es um">
                    Eigene Leistungsseiten und darauf abgestimmte Kampagnen
                  </td>
                </tr>
                <tr>
                  <th scope="row">Regional gefunden werden</th>
                  <td data-label="Was wir gemeinsam klären">
                    Aus welchem Einzugsgebiet kommen passende Patienten?
                  </td>
                  <td data-label="So setzen wir es um">
                    Lokale SEO, ein gepflegtes Google-Profil und regionale Anzeigen
                  </td>
                </tr>
                <tr>
                  <th scope="row">Vertrauen vermitteln</th>
                  <td data-label="Was wir gemeinsam klären">
                    Welche Fragen stellen Patienten vor dem ersten Besuch?
                  </td>
                  <td data-label="So setzen wir es um">
                    Verständliche Texte, echte Praxisbilder und klare Informationen zum Ablauf
                  </td>
                </tr>
                <tr>
                  <th scope="row">Die Anmeldung entlasten</th>
                  <td data-label="Was wir gemeinsam klären">
                    Welche Fragen und Terminwünsche lassen sich online abfangen?
                  </td>
                  <td data-label="So setzen wir es um">
                    Gut auffindbare Antworten und eine sinnvoll eingebundene Terminbuchung
                  </td>
                </tr>
                <tr>
                  <th scope="row">Das Budget gezielt einsetzen</th>
                  <td data-label="Was wir gemeinsam klären">
                    Welche Kontaktwege werden genutzt und welche Anfragen passen?
                  </td>
                  <td data-label="So setzen wir es um">
                    Auswertung messbarer Kontakte und Optimierung mit Ihrem Feedback
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="font-mono uppercase text-sm mt-8 lg:mt-10">
            Die Zahlen aus dem Marketing und die Rückmeldung aus Ihrer Praxis
            gehören zusammen.
          </p>

        </div>
      </section>

      {/* ---- 09 | Zusammenarbeit in drei Schritten --------------------- */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-6 sm:px-8">

          <Kicker n="07">Ablauf</Kicker>

          <UnderlinedHeader className="praxis-section-head mb-10 lg:mb-16">
            Ein klarer Ablauf. Von der ersten Frage bis zur <span className="praxis-mark">Umsetzung.</span>
          </UnderlinedHeader>

          <ol
            className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6"
            data-praxis-anim="steps"
          >

            <li className="praxis-step">
              {/* Bild 03, Querformat 3:2 — Ärztin am Laptop in einem ruhigen Büro
                  innerhalb der Praxis, im konzentrierten Videogespräch. */}
              <figure className="praxis-step-media">
                <Image
                  className="praxis-figure-img"
                  src="/images/praxis-ablauf-1.jpg"
                  alt="Ärztin bespricht die nächsten Schritte in einem Videogespräch"
                  width={1536}
                  height={1024}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="praxis-step-badge">
                  <span className="praxis-step-label">Schritt</span>
                  <span className="praxis-step-number">01</span>
                </div>
              </figure>

              <div className="praxis-step-body">
                <h3 className="praxis-step-title">Praxis und Ziele verstehen</h3>
                <p className="praxis-step-text">
                  Wir sprechen über Ihre Fachrichtung, Ihre Schwerpunkte und die
                  aktuelle Situation. Möchten Sie eine neue Leistung bekannt
                  machen, eine Praxis eröffnen oder bestehende Abläufe verbessern?
                  Gemeinsam legen wir fest, welches Ziel zuerst angegangen werden
                  soll.
                </p>
              </div>
            </li>

            <li className="praxis-step">
              {/* Bild 04, Querformat 3:2 — Detail einer gemeinsamen Planung am
                  Tisch: Laptop, Notizen und zwei Personen im Gespräch. Keine
                  lesbaren Kennzahlen oder Patientendaten. */}
              <figure className="praxis-step-media">
                <Image
                  className="praxis-figure-img"
                  src="/images/praxis-ablauf-2.jpg"
                  alt="Gemeinsame Planung von Website-Inhalten und Marketingmaßnahmen"
                  width={1536}
                  height={1024}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="praxis-step-badge">
                  <span className="praxis-step-label">Schritt</span>
                  <span className="praxis-step-number">02</span>
                </div>
              </figure>

              <div className="praxis-step-body">
                <h3 className="praxis-step-title">Prioritäten festlegen</h3>
                <p className="praxis-step-text">
                  Wir prüfen Ihren bestehenden Auftritt und zeigen, wo sich
                  Verbesserungen anbieten. Sie erhalten einen Vorschlag mit
                  konkreten Leistungen, Prioritäten und Kosten. So können Sie
                  nachvollziehen, was wir empfehlen und wie die Maßnahmen auf Ihr
                  Ziel einzahlen.
                </p>
              </div>
            </li>

            <li className="praxis-step">
              {/* Bild 05, Querformat 3:2 — Praxisinhaberin und Mitarbeiterin an
                  der Anmeldung, bei der gemeinsamen Durchsicht am Bildschirm.
                  Glaubwürdige Arbeitssituation, keine Patientendaten sichtbar. */}
              <figure className="praxis-step-media">
                <Image
                  className="praxis-figure-img"
                  src="/images/praxis-ablauf-3.jpg"
                  alt="Ärztin und Praxismitarbeiterin besprechen digitale Abläufe an der Anmeldung"
                  width={1536}
                  height={1024}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="praxis-step-badge">
                  <span className="praxis-step-label">Schritt</span>
                  <span className="praxis-step-number">03</span>
                </div>
              </figure>

              <div className="praxis-step-body">
                <h3 className="praxis-step-title">Umsetzen und weiterentwickeln</h3>
                <p className="praxis-step-text">
                  Nach Ihrer Freigabe setzen wir die vereinbarten Maßnahmen um.
                  Medizinische Inhalte stimmen wir mit Ihnen ab. Anhand der
                  verfügbaren Auswertungen und Ihres Feedbacks prüfen wir, was
                  funktioniert und wo wir nachjustieren sollten.
                </p>
              </div>
            </li>

          </ol>

          {/* ["Kostenlos" nur ergänzen, wenn MindLind das Erstgespräch
              tatsächlich kostenfrei anbietet.] */}
          <div className="praxis-steps-cta mt-4 lg:mt-6" data-praxis-anim="steps-cta">
            <div className="praxis-steps-cta-inner">
              <p className="praxis-steps-cta-title">
                Erzählen Sie uns, was Sie mit Ihrer Praxis vorhaben.
              </p>
              <DoorButton size="lg" color="white" href="/contact">
                Erstgespräch anfragen
              </DoorButton>
            </div>
          </div>

        </div>
      </section>

      {/* ---- 10 | Local SEO -------------------------------------------- */}
      <section className="py-12 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-8">

          <Kicker n="08">Lokale Sichtbarkeit</Kicker>

          <UnderlinedHeader className="praxis-section-head mb-12 lg:mb-20">
            Gefunden werden, wenn Patienten in Ihrer <span className="praxis-mark">Nähe</span> suchen.
          </UnderlinedHeader>

          <div className="praxis-geo">

            <div className="praxis-geo-blocks">
              <div className="praxis-geo-item">
                <div className="praxis-geo-num">01</div>
                <h3 className="praxis-geo-title">
                  Ihre Fachrichtung. Ihr Standort. Ihr Leistungsangebot.
                </h3>
                <p className="praxis-geo-text">
                  Eine Suche nach einem Facharzt beginnt mit einem konkreten
                  Anliegen. Deshalb richten wir Ihre Website auf die Verbindung
                  aus Behandlung und Standort aus. Wer nach Ihrer Leistung in
                  Ihrer Stadt sucht, soll schnell erkennen können, ob Ihre
                  Praxis der richtige Ansprechpartner ist. Dafür braucht es
                  verständliche Inhalte, eine übersichtliche Website und
                  stimmige Standortinformationen.
                </p>
              </div>

              <div className="praxis-geo-item">
                <div className="praxis-geo-num">02</div>
                <h3 className="praxis-geo-title">
                  Website und Google-Profil gemeinsam verbessern
                </h3>
                <p className="praxis-geo-text">
                  Wir prüfen Ihr Google-Unternehmensprofil, strukturieren Ihre
                  Leistungsseiten und arbeiten relevante Informationen zu Ihrer
                  Praxis und Ihrem Einzugsgebiet ein. Öffnungszeiten,
                  Kontaktdaten, Leistungen und Bilder sollen ein konsistentes
                  Gesamtbild vermitteln. Dazu kommen technische Verbesserungen
                  und eine sinnvolle interne Verlinkung. Anhand der verfügbaren
                  Such- und Kontaktdaten beobachten wir die Entwicklung und
                  setzen die nächsten Prioritäten.
                </p>
              </div>

              <div className="praxis-geo-cta">
                <DoorButton href="/contact">Lokale Sichtbarkeit besprechen</DoorButton>
              </div>
            </div>

            <div className="praxis-geo-visual">
              {/* Einzugsgebiet, abstrakt: konzentrische Ringe um die Praxis.
                  Keine erfundenen Suchergebnisse oder Bewertungssterne — siehe
                  die Vorgabe zu Bild 06. */}
              <svg className="praxis-geo-rings" viewBox="0 0 480 480" aria-hidden="true">
                <circle className="praxis-geo-ring" cx="240" cy="240" r="238" strokeOpacity="0.3" />
                <circle className="praxis-geo-ring" cx="240" cy="240" r="196" strokeOpacity="0.4" strokeDasharray="3 8" />
                <circle className="praxis-geo-ring" cx="240" cy="240" r="154" strokeOpacity="0.5" />
                <circle className="praxis-geo-ring" cx="240" cy="240" r="112" strokeOpacity="0.28" strokeDasharray="2 6" />
                <circle className="praxis-geo-ring praxis-geo-pulse" cx="240" cy="240" r="218" strokeOpacity="0.6" strokeWidth="2" />
                {/* Patienten im Einzugsgebiet. */}
                <circle className="praxis-geo-dot" cx="240" cy="42" r="5" fill="var(--primary-700)" fillOpacity="0.7" />
                <circle className="praxis-geo-dot" cx="424" cy="300" r="5" fill="var(--primary-700)" fillOpacity="0.55" />
                <circle className="praxis-geo-dot" cx="66" cy="188" r="5" fill="var(--primary-700)" fillOpacity="0.6" />
                <circle className="praxis-geo-dot" cx="352" cy="86" r="4" fill="var(--primary-700)" fillOpacity="0.4" />
                <circle className="praxis-geo-dot" cx="128" cy="404" r="4" fill="var(--primary-700)" fillOpacity="0.4" />
                <circle className="praxis-geo-dot" cx="396" cy="420" r="3" fill="var(--primary-700)" fillOpacity="0.3" />
              </svg>

              {/* Bild 06, Porträtformat 2:3 — Nahaufnahme eines Smartphones in
                  einer Hand vor einer modernen Praxis im städtischen Umfeld. */}
              <figure className="praxis-figure praxis-figure--2-3 praxis-geo-photo">
                <div className="praxis-figure-inner praxis-figure-inner--photo">
                  <Image
                    className="praxis-figure-img"
                    src="/images/praxis-6.jpg"
                    alt="Person nutzt ein Smartphone vor einer Praxis in der Stadt"
                    width={1024}
                    height={1536}
                    sizes="(min-width: 1024px) 420px, 62vw"
                  />
                </div>
              </figure>
            </div>

          </div>
        </div>
      </section>

      {/* ---- 11 | Vertiefung unter Local SEO --------------------------- */}
      {/* [Der Referenzblock enthält eine fremde Case Study mit konkreten
          Erfolgszahlen. Solange kein dokumentierter eigener Fall vorliegt, den
          folgenden vollständig nutzbaren Erklärblock einsetzen. Er nutzt
          dieselben Text- und Bildflächen, behauptet aber keine Kundenresultate.]

          Alternative, sobald ein eigener Referenzfall vorliegt:

            Titelstruktur
            [Praxisname]: [konkretes Projektziel]

            Textstruktur
            [Ausgangssituation in einem Satz.] Für [Praxisname] haben wir
            [tatsächlich umgesetzte Leistungen] realisiert. Im Mittelpunkt stand
            [konkretes Ziel]. [Belegbares Ergebnis einschließlich Zeitraum und
            eindeutiger Kennzahl, sofern vorhanden.]

          [Keine Werte aus der fremden Referenz übernehmen. Ein Projekt kann auch
          ohne Wachstumszahlen überzeugend dargestellt werden: mit einer klaren
          Ausgangsfrage und sichtbaren Verbesserungen.] */}
      <section className="pb-12 lg:pb-20">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            <div className="flex flex-col gap-6" data-praxis-anim="tiles-copy">
              <p className="praxis-eyebrow">Von der Suche zum Termin</p>

              <h2 className="praxis-h3">
                Jeder Schritt sollte die nächste Frage beantworten.
              </h2>

              <p>
                Ein Patient sucht nach einer Behandlung in seiner Nähe. Ihr
                Google-Profil zeigt, wo Ihre Praxis liegt und wie sie erreichbar
                ist. Auf der passenden Leistungsseite erfährt er, was Sie
                anbieten und wie ein Termin abläuft. Die Kontaktmöglichkeit ist
                direkt erreichbar. Genau diese Übergänge stimmen wir aufeinander
                ab, damit aus Interesse eine konkrete Anfrage werden kann.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-praxis-anim="tiles">
              <div className="praxis-tile">
                <div className="praxis-tile-inner">
                  <div className="praxis-tile-title">Die passende Information</div>
                  <div className="praxis-tile-note">Leistungsseiten mit klaren Antworten</div>
                </div>
              </div>
              <div className="praxis-tile">
                <div className="praxis-tile-inner">
                  <div className="praxis-tile-title">Der nächste Schritt</div>
                  <div className="praxis-tile-note">Kontakt und Terminbuchung gut erreichbar</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      </div>

      {/* ---- 12 | Kontakt ---------------------------------------------- */}
      {/* The FAQ column keeps the agency default: the content document has no
          praxis FAQ to put there. `items` is ready for one. */}
      <SectionContact
        index="[09]"
        title="Was möchten Sie mit Ihrer Praxis als Nächstes erreichen?"
        titleClassName="text-xl lg:text-2xl"
        lead="Eine neue Website, mehr Sichtbarkeit für einen Schwerpunkt oder einfachere Wege zur Terminbuchung? Erzählen Sie uns kurz von Ihrer Praxis und Ihrem Vorhaben. Wir melden uns, um die nächsten Schritte mit Ihnen zu besprechen."
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

      {/* Footer aus dem Content-Dokument. Nicht hier gerendert: das globale
          <Footer /> aus app/layout.tsx umschließt bereits jede Seite.

          Footer-Kurztext
          MindLind. Webdesign und Online-Marketing für Ärzte und Praxen.

          Footer-Links
          Leistungen · Projekte · Über uns · Kontakt · Impressum · Datenschutz

          [Kontaktdaten, Anbieterangaben und Datenschutzerklärung aus dem
          aktuellen freigegebenen Agenturauftritt übernehmen. Keine
          Telefonnummern, E-Mail-Adressen, Reaktionszeiten oder Rechtsangaben
          ergänzen, die nicht bestätigt sind.] */}
    </>
  );
}
