export default function SectionServices() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-5">

        <div className="flex justify-between gap-30">
          <div className="font-mono text-3xl uppercase mb-15">
            <h2>Our Packages</h2>
          </div>
          <div className="text-primary-500 font-mono text-3xl uppercase mb-15">[03]</div>
        </div>

        <div className="flex gap-3">

          <div className="bg-neutral-900 rounded-[12px] p-[2px] flex-1 flex flex-col gap-[2px]">
            <div className="bg-white rounded-[10px] font-mono p-8">
              <div className="uppercase text-3xl font-bold">INSTAGRAM ADS</div>
              <div className="uppercase text-2xl">ab 600 € / Monat</div>
            </div>
            <div className="flex-1 text-neutral-900 bg-white rounded-[10px] p-8">
              <p className="mb-4">Enthalten:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Kampagnenstrategie</li>
                <li>Zielgruppenanalyse</li>
                <li>Erstellung und Optimierung von Werbeanzeigen</li>
                <li>Conversion-Tracking</li>
                <li>Laufende Performance-Optimierung</li>
                <li>Monatliches Reporting</li>
                <li>Persönlicher Ansprechpartner</li>
              </ul>
              <div className="mt-4">Typische Einrichtungszeit:</div>
              <div className=""><b>5-7 Werktage</b></div>
            </div>
          </div>

          <div className="bg-white rounded-[12px] p-[2px] flex-1 flex flex-col gap-[2px]">
            <div className="bg-background rounded-[10px] font-mono p-8">
              <div className="uppercase text-3xl font-bold">SEO</div>
              <div className="uppercase text-2xl">ab 650 € / Monat</div>
            </div>
            <div className="flex-1 text-neutral-900 bg-background rounded-[10px] p-8">
              <p className="mb-4">Enthalten:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Technisches SEO-Audit</li>
                <li>Keyword-Recherche</li>
                <li>On-Page-Optimierung</li>
                <li>Content-Empfehlungen</li>
                <li>Wettbewerbsanalyse</li>
                <li>Monitoring und Reporting</li>
                <li>Kontinuierliche Optimierung</li>
              </ul>
              <div className="mt-4">Erste Ergebnisse:</div>
              <div className=""><b>meist nach 2-4 Monaten</b></div>
            </div>
          </div>

          <div className="bg-white rounded-[12px] p-[2px] flex-1 flex flex-col gap-[2px]">
            <div className="bg-background rounded-[10px] font-mono p-8">
              <div className="uppercase text-3xl font-bold">GOOGLE ADS</div>
              <div className="uppercase text-2xl">ab 700 € / Monat</div>
            </div>
            <div className="flex-1 text-neutral-900 bg-background rounded-[10px] p-8">
              <p className="mb-4">Enthalten:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Analyse von Markt und Wettbewerb</li>
                <li>Kampagnenaufbau und Strukturierung</li>
                <li>Keyword- und Anzeigenentwicklung</li>
                <li>Conversion-Tracking</li>
                <li>Budgetsteuerung</li>
                <li>Laufende Optimierung</li>
                <li>Monatliche Leistungsberichte</li>
              </ul>
              <div className="mt-4">Typische Einrichtungszeit:</div>
              <div className=""><b>5-10 Werktage</b></div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
