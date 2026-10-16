import Image from "next/image";
import PraxisLeadForm from "./praxis-lead-form";
import "./praxis-contact.css";

const QUESTIONS = [
  ["Was habe ich nach dem Erstgespräch?", "Eine erste Einschätzung, welche Maßnahme zu Ihrem Praxisziel passt und welche Informationen für ein konkretes Angebot noch fehlen. Sie entscheiden anschließend, ob Sie mit uns weitergehen möchten."],
  ["Was kostet die Zusammenarbeit?", "Das hängt davon ab, ob es um eine einzelne Verbesserung, eine neue Website oder laufende Betreuung geht. Nach der Klärung von Ziel und Umfang erhalten Sie ein individuelles Angebot mit Leistungen und Kosten. Erst nach Ihrer Freigabe beginnt die Umsetzung."],
  ["Muss meine bestehende Website ersetzt werden?", "Das klären wir anhand Ihres vorhandenen Auftritts. Je nach Zustand und Ziel können einzelne Leistungsseiten, bessere Kontaktwege oder lokale Suchmaschinenoptimierung der passende erste Schritt sein."],
  ["Wie viel Zeit muss unser Praxisteam einplanen?", "Wir brauchen Ihre Ziele, fachliche Informationen und die Freigabe der Inhalte. Konzeption, Gestaltung und technische Umsetzung übernehmen wir. Die nötigen Abstimmungen und den Zeitplan legen wir vor Projektbeginn gemeinsam fest."],
  ["Wer prüft die medizinischen Inhalte?", "Wir bereiten Texte und Seiten verständlich auf. Medizinische Aussagen stimmen wir mit Ihnen ab und veröffentlichen sie nach Ihrer fachlichen Freigabe. Patientendaten brauchen wir für die Anfrage nicht."],
  ["Wann sind Ergebnisse zu erwarten?", "Eine neue Website, lokale SEO und Anzeigen haben unterschiedliche Zeitverläufe. Wir legen passende Ziele und einen realistischen Zeitplan für die vereinbarten Maßnahmen fest. Garantierte Rankings oder feste Patientenzahlen versprechen wir nicht."],
];

export default function PraxisContact() {
  return (
    <section className="praxis-contact-section" aria-labelledby="praxis-contact-title">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="praxis-contact-grid">
          <div className="praxis-contact-copy">
            <p className="praxis-kicker">Etappe 05 · Ihr nächster Schritt</p>
            <h2 id="praxis-contact-title">Was braucht Ihre Praxis <span className="praxis-mark">als Nächstes?</span></h2>
            <p className="praxis-contact-lead">Sie müssen noch nicht wissen, welche Leistung Sie brauchen. Beschreiben Sie kurz Ihr Ziel – wir klären gemeinsam, wo Sie ansetzen können.</p>
          </div>
          <PraxisLeadForm />
          <div className="praxis-contact-details">
            <ol className="praxis-contact-next">
              <li><span>01</span><div><strong>Sie schildern Ihr Anliegen.</strong><p>Ein Ziel oder ein paar Stichpunkte reichen.</p></div></li>
              <li><span>02</span><div><strong>Wir stimmen das Erstgespräch ab.</strong><p>Wir melden uns per E-Mail bei Ihnen.</p></div></li>
              <li><span>03</span><div><strong>Sie erhalten eine erste Einschätzung.</strong><p>Priorität, mögliche Maßnahme und nächster Schritt.</p></div></li>
            </ol>
            <div className="praxis-contact-team">
              <div className="praxis-contact-avatars" aria-hidden="true">
                <Image src="/images/team-2.webp" width={64} height={64} alt="" />
                <Image src="/images/team-4.webp" width={64} height={64} alt="" />
                <Image src="/images/team-3.webp" width={64} height={64} alt="" />
              </div>
              <p><strong>Das MindLind-Team</strong><br />Strategie, Design und Entwicklung</p>
            </div>
            <div className="praxis-contact-direct">
              <p>Lieber direkt Kontakt aufnehmen?</p>
              <a href="mailto:info@mindlind.de">info@mindlind.de <span aria-hidden="true">↗</span></a>
              <a href="tel:+4917624685516">+49 176 24685516 <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
        <div className="praxis-faq">
          <div>
            <p className="praxis-eyebrow">Vor der Zusammenarbeit</p>
            <h2>Ihre Fragen.<br />Klare Antworten.</h2>
          </div>
          <div className="praxis-faq-items">
            {QUESTIONS.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
