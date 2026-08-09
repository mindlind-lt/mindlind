import Image from "next/image";

import FAQAccordion from "@/components/faq-accordion/faq-accordion";
import ContactForm from "@/components/contact-form/contact-form";

import "./section-contact.css";

export default function SectionContact() {
    return (
      <div className="section-contact container mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          <div>
            <div className="font-mono text-2xl lg:text-3xl uppercase pb-8 lg:pb-15 flex justify-between items-center gap-8 lg:gap-15">
              <h2 className="">FAQ</h2>
              <div className="text-primary-700">[08]</div>
            </div>
            <FAQAccordion
              className="border-t border-black"
              items={[
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
                  answer: "Wir verbinden Design, Performance und Online-Marketing zu einer"
                },
              ]}
            />
          </div>

          <div className="section-contact-form">
            <div className="flex items-end">
              <div className="flex-1 pb-3 self-stretch">
                <div className="font-mono text-3xl lg:text-5xl uppercase pb-4">PROJEKT STARTEN</div>
                <div className="text-sm lg:text-base">Erzählen Sie uns kurz, worum es geht. Wir melden uns mit einer klaren Einschätzung zu Umfang, Timing und nächsten Schritten.</div>
              </div>
              <div className="flex-1 sm:flex-[1.2]">
                <Image
                  src="/images/contact-head.png"
                  width={240}
                  height={250}
                  className="w-full h-auto"
                  alt=""
                />
              </div>
            </div>

            <ContactForm />

          </div>

        </div>
      </div>
    );
}
