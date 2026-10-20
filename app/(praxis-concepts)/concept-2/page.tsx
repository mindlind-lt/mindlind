import type { Metadata } from "next";
import Image from "next/image";
import { ConceptFrame, Cta, CheckList, TeamNote, ProjectImage, ProjectLink, Faq } from "../_components/shared";
import PreviewForm from "../_components/preview-form";

export const metadata: Metadata = {
  title: "Konzept 2 · Vertrauen zuerst",
  description: "Konzeptvorschau: eine ruhige, projektorientierte Landingpage für Praxismarketing.",
  alternates: { canonical: "/concept-2" },
};

export default function ConceptTwo() {
  return <ConceptFrame active={2}>
    <section className="pc-editorial-hero pc-wrap">
      <div>
        <p className="pc-eyebrow">MindLind · Websites &amp; Praxismarketing</p>
        <h1>Gute Medizin verdient einen <em>klaren Auftritt.</em></h1>
        <p className="pc-lead">Zeigen Sie online, was Ihre Praxis ausmacht. Mit verständlichen Leistungen, einem glaubwürdigen Auftritt und einem einfachen Weg zum Termin.</p>
        <Cta>Über Ihre Praxis sprechen</Cta>
        <p className="pc-quiet">Unverbindlich. Mit einer ersten Einschätzung für Ihren Auftritt.</p>
      </div>
      <figure className="pc-editorial-photo">
        <Image src="/images/praxis-hero.jpg" alt="Ärztin in einer hellen Praxis – Motiv für einen persönlichen Praxisauftritt" width={1536} height={1024} loading="eager" />
        <figcaption>Ihre Kompetenz. Verständlich sichtbar.</figcaption>
      </figure>
    </section>
    <div className="pc-editorial-services pc-wrap"><span>Ein durchdachter Praxisauftritt</span><p>Webdesign <span>/</span> Lokale SEO <span>/</span> Google Ads <span>/</span> Inhalte</p></div>
    <section className="pc-case-section pc-wrap" id="praxisprojekt">
      <div className="pc-case-top"><div><p className="pc-eyebrow">Einblick in unsere Arbeit</p><h2>Für MonDent wird aus Vielfalt <em>Orientierung.</em></h2></div><p>Eine Zahnarztpraxis in Düsseldorf mit vielen Behandlungsschwerpunkten. Unser Beitrag: Website und SEO.</p></div>
      <div className="pc-editorial-case">
        <div className="pc-case-browser"><div aria-hidden="true"><span /><span /><span /><p>mondent.de</p></div><ProjectImage /></div>
        <div className="pc-case-notes"><p className="pc-eyebrow">Was den Auftritt ausmacht</p><ol><li><span>01</span><div><h3>Leistungen mit Struktur</h3><p>Eigene Seiten für die einzelnen Behandlungen.</p></div></li><li><span>02</span><div><h3>Die Praxis auf einen Blick</h3><p>Standort, Öffnungszeiten und Kontakt im Seitenkopf.</p></div></li><li><span>03</span><div><h3>Ein direkter Weg zum Termin</h3><p>Sichtbare Buttons führen zur Online-Buchung.</p></div></li></ol><ProjectLink /></div>
      </div>
    </section>
    <section className="pc-editorial-principles">
      <div className="pc-wrap pc-editorial-principles-grid"><div><p className="pc-eyebrow">Für Ihren Praxisalltag gedacht</p><h2>Ihre Arbeit ist persönlich.<br /><em>Ihr Auftritt auch.</em></h2></div><div><article><h3>Die passenden Schwerpunkte zeigen.</h3><p>Wir richten Inhalte und Maßnahmen auf die Behandlungen aus, die Sie stärken möchten – und auf die Kapazitäten Ihres Teams.</p></article><article><h3>Patienten Orientierung geben.</h3><p>Klare Informationen zu Behandlung, Ablauf und Termin beantworten Fragen schon vor dem ersten Kontakt.</p></article><article><h3>Mit einem sinnvollen Schritt beginnen.</h3><p>Eine bessere Leistungsseite, lokale Sichtbarkeit oder eine neue Website: Wir klären zuerst, was Sie wirklich weiterbringt.</p></article></div></div>
    </section>
    <section className="pc-editorial-contact pc-wrap" id="kontakt" tabIndex={-1}>
      <div><p className="pc-eyebrow">Lernen wir Ihre Praxis kennen</p><h2>Ein gutes Gespräch ist <em>ein Anfang.</em></h2><p className="pc-lead">Sie müssen noch kein fertiges Briefing haben. Erzählen Sie uns, was sich verbessern soll.</p><CheckList items={["Ihre Situation und Ihr Ziel besprechen", "Eine erste Priorität für Ihren Auftritt finden", "Den nächsten Schritt gemeinsam klären"]} /><TeamNote /><a className="pc-text-link" href="mailto:info@mindlind.de">Lieber per E-Mail? info@mindlind.de</a></div>
      <PreviewForm id="editorial" title="Erzählen Sie uns von Ihrer Praxis." />
    </section>
    <Faq />
  </ConceptFrame>;
}
