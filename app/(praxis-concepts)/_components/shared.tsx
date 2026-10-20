import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import Header from "@/components/header/header";
import DoorButton from "@/components/door-button/door-button";

const concepts = [
  ["01", "Direkt", "/concept-1"],
  ["02", "Vertrauen", "/concept-2"],
  ["03", "Praxisziel", "/concept-3"],
];

export function ConceptFrame({ active, children }: { active: number; children: ReactNode }) {
  return (
    <div className={`pc pc-${active}`}>
      <a className="pc-skip" href="#inhalt">Zum Inhalt</a>
      <Header />
      <div className="pc-preview">
        <div className="pc-wrap pc-preview-inner">
          <span>Konzeptvorschau <span className="pc-preview-note">· Formulare ohne Versand</span></span>
          <nav aria-label="Konzepte vergleichen">
            {concepts.map(([number, name, href], i) => (
              <Link key={href} href={href} prefetch={false} aria-current={active === i + 1 ? "page" : undefined}>
                {number} <span>{name}</span>
              </Link>
            ))}
            <Link className="pc-original" href="/praxis" prefetch={false}>Original <ArrowUpRight size={12} aria-hidden="true" /></Link>
          </nav>
        </div>
      </div>
      <div id="inhalt" tabIndex={-1}>{children}</div>
      <footer className="pc-footer pc-wrap">
        <div><Image src="/images/logo-full.webp" width={150} height={28} alt="Mindlind" /><p>Ein klarer Auftritt. Ein sinnvoller nächster Schritt.</p></div>
        <nav aria-label="Kontakt und Rechtliches">
          <a href="mailto:info@mindlind.de">info@mindlind.de</a>
          <Link href="/impressum" prefetch={false}>Impressum</Link>
          <Link href="/datenschutz" prefetch={false}>Datenschutz</Link>
        </nav>
      </footer>
    </div>
  );
}

export function Cta({ children = "Erstgespräch anfragen", href = "#kontakt", className = "" }: {
  children?: ReactNode; href?: string; className?: string;
}) {
  return <DoorButton size="lg" className={`pc-button ${className}`} href={href}><span className="pc-button-label">{children}<ArrowRight size={18} aria-hidden="true" /></span></DoorButton>;
}

export function CheckList({ items }: { items: string[] }) {
  return <ul className="pc-checks">{items.map(item => <li key={item}><Check size={17} aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

export function TeamNote() {
  return (
    <div className="pc-team">
      <div className="pc-avatars" aria-hidden="true">
        <Image src="/images/team-2.webp" alt="" width={44} height={44} />
        <Image src="/images/team-4.webp" alt="" width={44} height={44} />
        <Image src="/images/team-3.webp" alt="" width={44} height={44} />
      </div>
      <p><strong>Das MindLind-Team</strong><span>Strategie, Design &amp; Entwicklung</span></p>
    </div>
  );
}

export function ProjectImage({ priority = false }: { priority?: boolean }) {
  return <Image className="pc-project-image" src="/images/praxis-mondent-website.jpg"
    alt="MonDent-Website mit Behandlungsübersicht, Praxisinformationen und direkter Terminbuchung"
    width={1280} height={720} loading={priority ? "eager" : "lazy"} />;
}

export function ProjectLink() {
  return <Link href="/projects/mondent" prefetch={false} className="pc-text-link">MonDent-Projekt ansehen <ArrowUpRight size={16} aria-hidden="true" /></Link>;
}

const questions = [
  ["Muss unsere Website komplett neu gemacht werden?", "Nicht unbedingt. Manchmal helfen bereits klarere Leistungsseiten, bessere Kontaktwege oder ein überarbeitetes Google-Profil. Wir klären, was zu Ihrem Ziel und Ihrem bestehenden Auftritt passt."],
  ["Was kostet die Zusammenarbeit?", "Der Aufwand hängt vom Ziel und Umfang ab. Nach der Klärung erhalten Sie ein individuelles Angebot mit konkreten Leistungen und Kosten. Die Umsetzung beginnt nach Ihrer Freigabe."],
  ["Wie viel muss unser Team übernehmen?", "Sie bringen Ihre Ziele und medizinische Expertise ein und geben Inhalte frei. Konzeption, Gestaltung und technische Umsetzung übernehmen wir. Den Zeitplan und die nötigen Abstimmungen legen wir gemeinsam fest."],
];

export function Faq() {
  return (
    <section className="pc-faq pc-wrap" aria-labelledby="fragen">
      <div><p className="pc-eyebrow">Gut zu wissen</p><h2 id="fragen">Noch eine Frage?</h2></div>
      <div>{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
    </section>
  );
}

export function Steps() {
  return <ol className="pc-steps">
    <li><span>01</span><h3>Ihr Ziel verstehen</h3><p>Wir besprechen Ihre Praxis, Ihre Schwerpunkte und das, was sich verbessern soll.</p></li>
    <li><span>02</span><h3>Den Einstieg klären</h3><p>Sie erhalten eine erste Einschätzung und die Grundlage für ein konkretes Angebot.</p></li>
    <li><span>03</span><h3>Bewusst entscheiden</h3><p>Leistungen und Kosten sind klar, bevor Sie die Umsetzung freigeben.</p></li>
  </ol>;
}
