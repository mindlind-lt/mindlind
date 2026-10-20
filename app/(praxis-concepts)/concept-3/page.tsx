import type { Metadata } from "next";
import { ConceptFrame, Faq, ProjectImage, ProjectLink, Steps } from "../_components/shared";
import GoalFinder from "../_components/goal-finder";

export const metadata: Metadata = {
  title: "Konzept 3 · Mit Ihrem Praxisziel starten",
  description: "Konzeptvorschau: vom konkreten Praxisziel zum passenden Einstieg ins Marketing.",
  alternates: { canonical: "/concept-3" },
};

export default function ConceptThree() {
  return <ConceptFrame active={3}>
    <GoalFinder />
    <section className="pc-goal-proof pc-wrap">
      <div><p className="pc-eyebrow">Von der Idee zur Praxiswebsite</p><h2>Ein Beispiel, das Sie sich ansehen können.</h2><p>Für MonDent in Düsseldorf haben wir Website und SEO umgesetzt. Der Auftritt ordnet Behandlungen, zeigt die Praxis vor Ort und macht die Terminbuchung gut auffindbar.</p><ProjectLink /></div>
      <div className="pc-goal-proof-image"><ProjectImage /><span>MonDent · Website &amp; SEO</span></div>
    </section>
    <section className="pc-process-band"><div className="pc-wrap"><p className="pc-eyebrow">Der nächste Schritt ist überschaubar</p><h2>Sie brauchen kein Marketing-Briefing.</h2><Steps /></div></section>
    <Faq />
  </ConceptFrame>;
}
