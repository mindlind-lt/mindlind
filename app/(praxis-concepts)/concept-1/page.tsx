import type { Metadata } from "next";
import { ConceptFrame, Cta, CheckList, TeamNote, ProjectImage, ProjectLink, Faq, Steps } from "../_components/shared";
import PreviewForm from "../_components/preview-form";

export const metadata: Metadata = {
  title: "Konzept 1 · Direkt zum Gespräch",
  description: "Konzeptvorschau: eine klare Landingpage mit direktem Einstieg ins Erstgespräch.",
  alternates: { canonical: "/concept-1" },
};

export default function ConceptOne() {
  return <ConceptFrame active={1}>
    <section className="pc-direct-hero">
      <div className="pc-wrap pc-direct-grid">
        <div className="pc-direct-copy">
          <p className="pc-eyebrow">Praxismarketing mit klarem Fokus</p>
          <h1>Ihre Praxis.<br />Die richtigen Patienten.<br /><span>Ein klarer Weg.</span></h1>
          <p className="pc-lead">Wir machen Ihre Leistungen online verständlich, Ihre Praxis lokal sichtbar und den Weg zum Termin einfach.</p>
          <CheckList items={["Eine Website, die Ihre Schwerpunkte zeigt", "Lokale SEO und gezielte Google Ads", "Klare Kontaktwege statt unnötiger Umwege"]} />
          <Cta className="pc-direct-mobile-cta" />
          <a href="#praxisprojekt" className="pc-text-link">So sieht das in der Praxis aus <span aria-hidden="true">↓</span></a>
          <TeamNote />
        </div>
        <div id="kontakt" className="pc-contact-anchor" tabIndex={-1}><PreviewForm id="direct" title="Was ist Ihr nächstes Praxisziel?" /></div>
      </div>
    </section>
    <section id="praxisprojekt" className="pc-proof-strip pc-wrap">
      <div className="pc-proof-thumb"><ProjectImage /></div>
      <div><p className="pc-eyebrow">Aus unserer Arbeit · MonDent, Düsseldorf</p><h2>Behandlungen verstehen.<br />Den nächsten Termin finden.</h2><p>Website &amp; SEO für eine Zahnarztpraxis – mit strukturierten Leistungsseiten und sichtbarer Terminbuchung.</p></div>
      <ProjectLink />
    </section>
    <section className="pc-section pc-wrap">
      <div className="pc-section-heading"><p className="pc-eyebrow">Was wir für Ihre Praxis tun</p><h2>Drei Aufgaben.<br />Ein stimmiger Auftritt.</h2><p>Wir beginnen dort, wo Ihre Praxis Unterstützung braucht.</p></div>
      <div className="pc-service-lines">
        <article><span className="pc-number">01</span><h3>Gefunden werden.</h3><p>Ihre Leistungen und Ihren Standort in der Suche zusammenbringen: mit lokaler SEO, einem stimmigen Google-Profil und passenden Anzeigen.</p></article>
        <article><span className="pc-number">02</span><h3>Vertrauen aufbauen.</h3><p>Behandlungen verständlich erklären, Ihr Team zeigen und häufige Fragen beantworten. So können Patienten Ihre Praxis besser einschätzen.</p></article>
        <article><span className="pc-number">03</span><h3>Kontakt erleichtern.</h3><p>Terminbuchung, Telefon und Anfahrt gut auffindbar machen. Damit aus Interesse ein einfacher nächster Schritt werden kann.</p></article>
      </div>
    </section>
    <section className="pc-process-band"><div className="pc-wrap"><p className="pc-eyebrow">So starten wir</p><h2>Erst Klarheit. Dann Umsetzung.</h2><Steps /></div></section>
    <Faq />
    <section className="pc-final pc-wrap"><div><p className="pc-eyebrow">Es beginnt mit Ihrem Ziel</p><h2>Was soll sich für Ihre Praxis verbessern?</h2><p>Eine neue Website? Ein sichtbarer Schwerpunkt? Lassen Sie uns den ersten Schritt klären.</p></div><Cta /></section>
  </ConceptFrame>;
}
