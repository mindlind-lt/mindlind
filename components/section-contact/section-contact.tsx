import Image from "next/image";

import FAQAccordion from "@/components/faq-accordion/faq-accordion";
import ContactForm, { type ContactFormField } from "@/components/contact-form/contact-form";

import "./section-contact.css";

type FAQItem = { question: string; answer: string };

/** The agency FAQ. Used by every page that does not pass its own. */
const DEFAULT_ITEMS: FAQItem[] = [
  {
    question: "Welche Leistungen bietet Mindlind an?",
    answer: "Wir entwickeln moderne Websites, übernehmen Suchmaschinenoptimierung (SEO), betreuen Google Ads und Instagram Ads und unterstützen Unternehmen beim Aufbau einer starken digitalen Marke. Alle Leistungen werden individuell auf Ihre Ziele abgestimmt."
  },
  {
    question: "Wie lange dauert die Erstellung einer Website?",
    answer: "Je nach Umfang dauert die Umsetzung in der Regel zwischen zwei und sechs Wochen. Kleinere Projekte können deutlich schneller realisiert werden, größere Unternehmenswebsites benötigen entsprechend mehr Zeit."
  },
  {
    question: "Wann sind erste SEO-Ergebnisse sichtbar?",
    answer: "SEO ist eine langfristige Investition. Erste Verbesserungen zeigen sich häufig nach zwei bis vier Monaten, nachhaltige Rankings entwickeln sich in den folgenden Monaten kontinuierlich weiter."
  },
  {
    question: "Lohnt sich Google Ads für mein Unternehmen?",
    answer: "Ja – wenn Kampagnen professionell aufgebaut und kontinuierlich optimiert werden. Google Ads eignet sich besonders, um kurzfristig qualifizierte Anfragen und neue Kunden zu gewinnen."
  },
  {
    question: "Übernehmt ihr auch Instagram Ads und Social Media?",
    answer: "Ja. Wir erstellen zielgerichtete Werbekampagnen für Instagram und Facebook, entwickeln Content-Strategien und unterstützen Unternehmen dabei, Reichweite, Markenbekanntheit und Anfragen zu steigern."
  },
  {
    question: "Was kostet eine Zusammenarbeit mit Mindlind?",
    answer: "Die Kosten richten sich nach Umfang und Zielsetzung des Projekts. Nach einem unverbindlichen Erstgespräch erhalten Sie ein transparentes und individuell kalkuliertes Angebot – ohne versteckte Kosten."
  },
  {
    question: "Betreut ihr Unternehmen auch langfristig?",
    answer: "Selbstverständlich. Viele unserer Kunden arbeiten dauerhaft mit uns zusammen – beispielsweise im Bereich SEO, Google Ads, Social Media oder bei der kontinuierlichen Weiterentwicklung ihrer Website."
  },
  {
    question: "Warum sollte ich mich für Mindlind entscheiden?",
    answer: "Wir verbinden Design, Performance und Online-Marketing zu einer ganzheitlichen Strategie – persönlich betreut, transparent kommuniziert und konsequent auf Ihr Wachstum ausgerichtet."
  },
];

interface SectionContactProps {
  /** FAQ entries beside the form. */
  items?: FAQItem[];
  /** Section counter above the FAQ, in the page's own numbering. */
  index?: string;
  /** Heading over the form. */
  title?: string;
  /** Extra classes on that heading — long sentences need a smaller size than
   *  the default two-word label does. */
  titleClassName?: string;
  /** Paragraph under the heading. */
  lead?: string;
  /** Passed straight through to the form: extra fields, labels, small print. */
  extraFields?: ContactFormField[];
  messageLabel?: string;
  messagePlaceholder?: string;
  submitLabel?: string;
  successMessage?: string;
  privacyNote?: React.ReactNode;
}

export default function SectionContact({
  items = DEFAULT_ITEMS,
  index = "[08]",
  title = "PROJEKT STARTEN",
  titleClassName = "text-3xl lg:text-5xl",
  lead = "Erzählen Sie uns kurz, worum es geht. Wir melden uns mit einer klaren Einschätzung zu Umfang, Timing und nächsten Schritten.",
  extraFields,
  messageLabel,
  messagePlaceholder,
  submitLabel,
  successMessage,
  privacyNote,
}: SectionContactProps = {}) {
    return (
      <div className="section-contact container mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          <div className="order-2 lg:order-1">
            <div className="font-mono text-2xl lg:text-3xl uppercase pb-8 lg:pb-15 flex justify-between items-center gap-8 lg:gap-15">
              <h2 className="">FAQ</h2>
              <div className="text-primary-700">{index}</div>
            </div>
            <FAQAccordion
              className="border-t border-black"
              items={items}
            />
          </div>

          <div className="section-contact-form order-1 lg:order-2">
            {/* Side by side, the copy gets half a phone screen — about 136px at
                320px — and the lead wraps to seven lines beside a decorative
                image. Stack below sm; from sm up this is the original row. */}
            <div className="flex flex-col sm:flex-row sm:items-end">
              <div className="flex-1 pb-3 self-stretch">
                <h2 className={`font-mono uppercase pb-4 ${titleClassName}`}>{title}</h2>
                <div className="text-sm lg:text-base">{lead}</div>
              </div>
              <div className="w-1/2 max-w-[180px] self-end sm:w-auto sm:max-w-none sm:self-auto sm:flex-[1.2]">
                <Image
                  src="/images/contact-head.webp"
                  width={240}
                  height={250}
                  className="w-full h-auto"
                  alt=""
                />
              </div>
            </div>

            <ContactForm
              extraFields={extraFields}
              messageLabel={messageLabel}
              messagePlaceholder={messagePlaceholder}
              submitLabel={submitLabel}
              successMessage={successMessage}
              privacyNote={privacyNote}
            />

          </div>

        </div>
      </div>
    );
}
