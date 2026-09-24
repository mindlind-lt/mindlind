import type { Metadata } from "next";

import { socialCard } from "@/lib/site";

/**
 * Content source: MindLind-Praxismarketing-Content-DE.md (Reihenfolge des
 * UX-Makets "DOCTORS.pdf"). Text is transcribed verbatim; only markup is added.
 *
 * Two kinds of material from that document are kept as comments rather than
 * rendered, because the document itself marks them as not belonging on the
 * page: the editorial notes in square brackets, and the image briefs. Image
 * slots keep their Alt-Text so it is ready once the assets exist.
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
  // Matches `published: false` for this route in lib/site.ts, which also keeps
  // it out of sitemap.xml and llms.txt. Flip both together once the page is
  // designed rather than a raw content transcript.
  robots: { index: false, follow: false },
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

export default function LandingPraxis() {
  return (
    <>
      {/* 01 | Hero */}
      <section>
        <p>Online-Marketing für Ärzte</p>

        <h1>Praxismarketing, das zu Ihrer Praxis passt.</h1>

        <p>
          Sie möchten bestimmte Behandlungen stärker in den Fokus rücken, Ihre
          Praxis bekannt machen oder die Online-Terminbuchung erleichtern?
          MindLind verbindet Website, lokale Sichtbarkeit und Werbung zu einem
          klaren Auftritt. Damit Patienten verstehen, wofür Ihre Praxis steht,
          welche Leistungen Sie anbieten und wie sie einen Termin vereinbaren
          können. Ausgerichtet auf Ihre Fachrichtung, Ihre Ziele und die
          Kapazitäten Ihres Teams.
        </p>

        <a href="/contact">Praxisziele besprechen</a>

        {/* Bild 01: Praxisinhaberin in einer modernen, glaubwürdigen Praxis.
            Ruhiges, selbstbewusstes Porträt ohne Werbeinszenierung. Bild rechts
            neben dem Text, Querformat 5:4.
            Alt-Text: "Ärztin in einer hellen, modernen Praxis" */}
      </section>

      {/* 02 | Drei kompakte Akzente */}
      {/* [Ersatz für die drei "100+"-Platzhalter. Die Zahlen beschreiben das auf
          dieser Seite erläuterte Vorgehen, keine unbelegten Erfolge oder
          Unternehmenskennzahlen.] */}
      <section>
        <ul>
          <li>
            <strong>3</strong> <span>Schritte zur Zusammenarbeit</span>
          </li>
          <li>
            <strong>6</strong> <span>Bausteine für Ihren Auftritt</span>
          </li>
          <li>
            <strong>1</strong> <span>Klarer Plan für Ihre Praxis</span>
          </li>
        </ul>
      </section>

      {/* [Die sechs Bausteine: Website, SEO, Google Ads, Texte, Foto/Video und
          digitale Patientenkommunikation. Die folgenden Karten ordnen ihre
          konkreten Leistungen nach dem Nutzen für die Praxis.] */}

      {/* 03 | Drei Leistungskarten */}
      <section>
        <article>
          <h2>Sichtbar werden</h2>
          <ul>
            <li>Suchmaschinenoptimierung</li>
            <li>Google-Unternehmensprofil</li>
            <li>Lokale Google-Ads-Kampagnen</li>
            <li>Seiten für Ihre Behandlungen</li>
            <li>Inhalte mit regionalem Bezug</li>
            <li>Auswertung der Auffindbarkeit</li>
          </ul>
        </article>

        <article>
          <h2>Vertrauen aufbauen</h2>
          <ul>
            <li>Individuelle Praxiswebsite</li>
            <li>Klare Positionierung</li>
            <li>Verständliche medizinische Texte</li>
            <li>Professionelle Praxisfotografie</li>
            <li>Videos für Praxis und Team</li>
            <li>Übersichtliche mobile Darstellung</li>
          </ul>
        </article>

        <article>
          <h2>Kontakt erleichtern</h2>
          <ul>
            <li>Einbindung der Online-Terminbuchung</li>
            <li>Gut erreichbare Kontaktwege</li>
            <li>Antworten auf häufige Fragen</li>
            <li>вы Anfrageformulare</li>
            <li>Klare Hinweise vor dem Termin</li>
            <li>Analyse der Kontaktwege</li>
          </ul>
        </article>
      </section>

      {/* 04 | Großer Text mit Bild und zwei Akzenten */}
      <section>
        <h2>Ihre Praxis ist besonders. Ihr Online-Auftritt sollte zeigen, warum.</h2>

        <p>
          Welche Schwerpunkte setzen Sie? Wie beraten Sie? Was erwartet
          Patienten beim ersten Besuch? Wir machen Ihre Praxis online greifbar:
          mit verständlichen Leistungsseiten, einer klaren Struktur und Bildern,
          die zu Ihnen passen. So können sich Patienten schon vor dem ersten
          Anruf orientieren. Gemeinsam legen wir fest, welche Behandlungen und
          Anliegen im Mittelpunkt stehen sollen.
        </p>

        <figure>
          {/* Bild 02: Arzt im aufmerksamen Gespräch mit einer erwachsenen
              Patientin. Natürliches Licht, zugewandte Haltung, keine Behandlung
              und keine gestellte Handschlag-Szene. Querformat 5:4.
              Alt-Text: "Arzt im persönlichen Gespräch mit einer Patientin" */}

          {/* Akzente auf dem Bild. [Diese beiden Aussagen ersetzen die Zahlen auf
              dem Bild. Keine erfundenen Wachstumswerte ergänzen.] */}
          <ul>
            <li>
              <strong>Klar positioniert</strong>
              <span>Ihre Schwerpunkte im Fokus</span>
            </li>
            <li>
              <strong>Einfach erreichbar</strong>
              <span>Direkter Weg zum Termin</span>
            </li>
          </ul>
        </figure>
      </section>

      {/* 05 | Zwei Textspalten */}
      <section>
        <article>
          <h2>Was Patienten vor dem Termin wissen möchten</h2>
          <ul>
            <li>Behandelt diese Praxis mein Anliegen?</li>
            <li>Welche Erfahrung bringt das Team mit?</li>
            <li>Was erwartet mich bei der Untersuchung?</li>
            <li>Wie kann ich einen Termin vereinbaren?</li>
          </ul>
        </article>

        <article>
          <h2>Was Ihr Online-Auftritt dafür leisten muss</h2>
          <ul>
            <li>Die passenden Leistungsseiten auffindbar machen</li>
            <li>Qualifikationen und Schwerpunkte verständlich zeigen</li>
            <li>Abläufe erklären und offene Fragen beantworten</li>
            <li>Ohne Umwege zur Kontaktaufnahme führen</li>
          </ul>
        </article>
      </section>

      {/* 06 | Portfolio */}
      <section>
        <p>Einblicke in unsere Arbeit</p>

        <h2>So wird medizinische Kompetenz sichtbar.</h2>

        <p>
          Jede Praxis hat eigene Schwerpunkte. Entsprechend individuell
          entwickeln wir ihre digitale Präsentation. Entdecken Sie ausgewählte
          Projekte und die Leistungen dahinter.
        </p>

        {/* [Die drei sichtbaren Karten bzw. der Slider benötigen echte
            MindLind-Projekte mit freigegebenen Namen, Leistungsangaben und
            Screenshots. Keine KI-generierten Praxiswebsites als Referenzen
            verwenden. Ohne vorhandene Projektseite direkt auf die freigegebene
            Website verlinken und den Link "Praxiswebsite ansehen" nennen.] */}
        <ul>
          <li>
            <article>
              <h3>[Name der Praxis]</h3>
              <p>[Fachrichtung · Ort]</p>
              <p>[Tatsächlich erbrachte Leistungen, z. B. Webdesign · Texte · SEO]</p>
              <a href="/projects">Projekt ansehen</a>
            </article>
          </li>
        </ul>
      </section>

      {/* 07 | Haltung und Team */}
      {/* [Dieser Text ersetzt den Referenzblock mit dem fremden Agenturinhaber.
          Das Layout kann bleiben; Name, Porträt, Zitat und Erfahrungsaussagen
          der Referenz werden nicht übernommen.] */}
      <section>
        <h2>Ihr Marketing muss auch im Praxisalltag funktionieren.</h2>

        <p>
          Zusätzliche Anfragen helfen Ihrer Praxis dann, wenn sie zu Ihren
          Leistungen und verfügbaren Terminen passen. Deshalb beginnt unsere
          Arbeit mit einem Gespräch über Ihren Praxisalltag.
        </p>

        {/* Hervorgehobene Aussage, ohne Zitatzeichen */}
        <p>
          <strong>
            Welche Patienten möchten Sie erreichen? Und wofür hat Ihre Praxis
            Kapazität?
          </strong>
        </p>

        <p>
          Vielleicht möchten Sie eine neue Sprechstunde etablieren, einen
          Behandlungsschwerpunkt bekannter machen oder wiederkehrende Fragen
          schon auf der Website beantworten. Wir übersetzen diese Ziele in
          konkrete Inhalte und Maßnahmen. Dabei denken wir den gesamten Weg mit:
          von der ersten Suche über die Information zur Behandlung bis zur
          Kontaktaufnahme.
        </p>

        <figure>
          {/* [Bild: echtes Foto des MindLind-Teams oder eines tatsächlichen
              Ansprechpartners. Kein generierter Mensch als Mitarbeiter oder
              Gründer.] */}
          <figcaption>
            <strong>MindLind</strong>
            <span>Das Team hinter Ihrem Praxisauftritt</span>
          </figcaption>
        </figure>

        <p>
          Sie bringen die medizinische Expertise ein. Wir kümmern uns um die
          digitale Umsetzung.
        </p>

        <p>
          Medizinische Inhalte stimmen wir mit Ihnen ab. Texte, Bilder und
          Kontaktwege entwickeln wir als zusammenhängenden Auftritt.
        </p>
      </section>

      {/* 08 | Vergleichstabelle */}
      <section>
        <h2>Was Ihre Praxis braucht, bestimmt die Maßnahmen.</h2>

        <p>
          Wir besprechen zuerst, was sich für Ihre Praxis verbessern soll.
          Daraus leiten wir ab, welche Inhalte, Kanäle und Kontaktwege sinnvoll
          sind und woran wir die Entwicklung beurteilen.
        </p>

        {/* [Bewusster Ersatz für den Vergleich mit "klassischen Agenturen".
            Keine pauschalen Aussagen über Wettbewerber, garantierten Freigaben,
            erfundenen Terminkosten oder Gewinnversprechen.] */}
        <table>
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
              <td>Welche Behandlungen möchten Sie bekannter machen?</td>
              <td>Eigene Leistungsseiten und darauf abgestimmte Kampagnen</td>
            </tr>
            <tr>
              <th scope="row">Regional gefunden werden</th>
              <td>Aus welchem Einzugsgebiet kommen passende Patienten?</td>
              <td>Lokale SEO, ein gepflegtes Google-Profil und regionale Anzeigen</td>
            </tr>
            <tr>
              <th scope="row">Vertrauen vermitteln</th>
              <td>Welche Fragen stellen Patienten vor dem ersten Besuch?</td>
              <td>
                Verständliche Texte, echte Praxisbilder und klare Informationen
                zum Ablauf
              </td>
            </tr>
            <tr>
              <th scope="row">Die Anmeldung entlasten</th>
              <td>Welche Fragen und Terminwünsche lassen sich online abfangen?</td>
              <td>
                Gut auffindbare Antworten und eine sinnvoll eingebundene
                Terminbuchung
              </td>
            </tr>
            <tr>
              <th scope="row">Das Budget gezielt einsetzen</th>
              <td>Welche Kontaktwege werden genutzt und welche Anfragen passen?</td>
              <td>Auswertung messbarer Kontakte und Optimierung mit Ihrem Feedback</td>
            </tr>
          </tbody>
        </table>

        <p>
          Die Zahlen aus dem Marketing und die Rückmeldung aus Ihrer Praxis
          gehören zusammen.
        </p>
      </section>

      {/* 09 | Zusammenarbeit in drei Schritten */}
      <section>
        <h2>Ein klarer Ablauf. Von der ersten Frage bis zur Umsetzung.</h2>

        <ol>
          <li>
            <h3>01 | Praxis und Ziele verstehen</h3>
            <p>
              Wir sprechen über Ihre Fachrichtung, Ihre Schwerpunkte und die
              aktuelle Situation. Möchten Sie eine neue Leistung bekannt machen,
              eine Praxis eröffnen oder bestehende Abläufe verbessern? Gemeinsam
              legen wir fest, welches Ziel zuerst angegangen werden soll.
            </p>
            {/* Bild 03: Ärztin am Laptop in einem ruhigen Büro innerhalb der
                Praxis, im konzentrierten Videogespräch. Querformat 3:2.
                Alt-Text: "Ärztin bespricht die nächsten Schritte in einem
                Videogespräch" */}
          </li>

          <li>
            <h3>02 | Prioritäten festlegen</h3>
            <p>
              Wir prüfen Ihren bestehenden Auftritt und zeigen, wo sich
              Verbesserungen anbieten. Sie erhalten einen Vorschlag mit
              konkreten Leistungen, Prioritäten und Kosten. So können Sie
              nachvollziehen, was wir empfehlen und wie die Maßnahmen auf Ihr
              Ziel einzahlen.
            </p>
            {/* Bild 04: Detail einer gemeinsamen Planung am Tisch: Laptop,
                Notizen und zwei Personen im Gespräch. Keine lesbaren Kennzahlen
                oder Patientendaten. Querformat 3:2.
                Alt-Text: "Gemeinsame Planung von Website-Inhalten und
                Marketingmaßnahmen" */}
          </li>

          <li>
            <h3>03 | Umsetzen und weiterentwickeln</h3>
            <p>
              Nach Ihrer Freigabe setzen wir die vereinbarten Maßnahmen um.
              Medizinische Inhalte stimmen wir mit Ihnen ab. Anhand der
              verfügbaren Auswertungen und Ihres Feedbacks prüfen wir, was
              funktioniert und wo wir nachjustieren sollten.
            </p>
            {/* Bild 05: Praxisinhaberin und Mitarbeiterin an der Anmeldung, bei
                der gemeinsamen Durchsicht am Bildschirm. Glaubwürdige
                Arbeitssituation, keine Patientendaten sichtbar. Querformat 3:2.
                Alt-Text: "Ärztin und Praxismitarbeiterin besprechen digitale
                Abläufe an der Anmeldung" */}
          </li>
        </ol>

        {/* ["Kostenlos" nur ergänzen, wenn MindLind das Erstgespräch tatsächlich
            kostenfrei anbietet.] */}
        <a href="/contact">Erstgespräch anfragen</a>
        <p>Erzählen Sie uns, was Sie mit Ihrer Praxis vorhaben.</p>
      </section>

      {/* 10 | Local SEO */}
      <section>
        <p>Lokale Sichtbarkeit für Ihre Praxis</p>

        <h2>Gefunden werden, wenn Patienten in Ihrer Nähe suchen.</h2>

        <h3>Ihre Fachrichtung. Ihr Standort. Ihr Leistungsangebot.</h3>
        <p>
          Eine Suche nach einem Facharzt beginnt mit einem konkreten Anliegen.
          Deshalb richten wir Ihre Website auf die Verbindung aus Behandlung und
          Standort aus. Wer nach Ihrer Leistung in Ihrer Stadt sucht, soll
          schnell erkennen können, ob Ihre Praxis der richtige Ansprechpartner
          ist. Dafür braucht es verständliche Inhalte, eine übersichtliche
          Website und stimmige Standortinformationen.
        </p>

        <h3>Website und Google-Profil gemeinsam verbessern</h3>
        <p>
          Wir prüfen Ihr Google-Unternehmensprofil, strukturieren Ihre
          Leistungsseiten und arbeiten relevante Informationen zu Ihrer Praxis
          und Ihrem Einzugsgebiet ein. Öffnungszeiten, Kontaktdaten, Leistungen
          und Bilder sollen ein konsistentes Gesamtbild vermitteln. Dazu kommen
          technische Verbesserungen und eine sinnvolle interne Verlinkung.
          Anhand der verfügbaren Such- und Kontaktdaten beobachten wir die
          Entwicklung und setzen die nächsten Prioritäten.
        </p>

        <a href="/contact">Lokale Sichtbarkeit besprechen</a>

        {/* Bild 06: Porträtformat 2:3. Nahaufnahme eines Smartphones in einer
            Hand vor einer modernen Praxis im städtischen Umfeld. Display
            außerhalb der Schärfe, keine erfundenen Suchergebnisse oder
            Bewertungssterne. Medizinischer Bezug durch den unscharfen
            Praxiseingang.
            Alt-Text: "Person nutzt ein Smartphone vor einer Praxis in der Stadt" */}
      </section>

      {/* 11 | Vertiefung unter Local SEO */}
      {/* [Der Referenzblock enthält eine fremde Case Study mit konkreten
          Erfolgszahlen. Solange kein dokumentierter eigener Fall vorliegt, den
          folgenden vollständig nutzbaren Erklärblock einsetzen. Er nutzt
          dieselben Text- und Bildflächen, behauptet aber keine Kundenresultate.] */}
      <section>
        <p>Von der Suche zum Termin</p>

        <h2>Jeder Schritt sollte die nächste Frage beantworten.</h2>

        <p>
          Ein Patient sucht nach einer Behandlung in seiner Nähe. Ihr
          Google-Profil zeigt, wo Ihre Praxis liegt und wie sie erreichbar ist.
          Auf der passenden Leistungsseite erfährt er, was Sie anbieten und wie
          ein Termin abläuft. Die Kontaktmöglichkeit ist direkt erreichbar.
          Genau diese Übergänge stimmen wir aufeinander ab, damit aus Interesse
          eine konkrete Anfrage werden kann.
        </p>

        <ul>
          <li>
            <strong>Die passende Information</strong>
            <span>Leistungsseiten mit klaren Antworten</span>
          </li>
          <li>
            <strong>Der nächste Schritt</strong>
            <span>Kontakt und Terminbuchung gut erreichbar</span>
          </li>
        </ul>

        {/* [Bild: Detail eines echten, freigegebenen MindLind-Praxisprojekts auf
            einem Smartphone. Alternativ das Smartphone-Motiv aus Bild 06
            verwenden. Einen Website-Screenshot nur aus einem tatsächlichen
            Projekt einsetzen.] */}

        {/* Alternative, sobald ein eigener Referenzfall vorliegt:

            Titelstruktur
            [Praxisname]: [konkretes Projektziel]

            Textstruktur
            [Ausgangssituation in einem Satz.] Für [Praxisname] haben wir
            [tatsächlich umgesetzte Leistungen] realisiert. Im Mittelpunkt stand
            [konkretes Ziel]. [Belegbares Ergebnis einschließlich Zeitraum und
            eindeutiger Kennzahl, sofern vorhanden.]

            [Keine Werte aus der fremden Referenz übernehmen. Ein Projekt kann
            auch ohne Wachstumszahlen überzeugend dargestellt werden: mit einer
            klaren Ausgangsfrage und sichtbaren Verbesserungen.] */}
      </section>

      {/* 12 | Kontakt */}
      <section>
        <h2>Was möchten Sie mit Ihrer Praxis als Nächstes erreichen?</h2>

        <p>
          Eine neue Website, mehr Sichtbarkeit für einen Schwerpunkt oder
          einfachere Wege zur Terminbuchung? Erzählen Sie uns kurz von Ihrer
          Praxis und Ihrem Vorhaben. Wir melden uns, um die nächsten Schritte
          mit Ihnen zu besprechen.
        </p>

        <form>
          <div>
            <label htmlFor="praxis-name">Ihr Name</label>
            <input id="praxis-name" name="name" type="text" />
          </div>

          <div>
            <label htmlFor="praxis-practice">Name der Praxis</label>
            <input id="praxis-practice" name="practice" type="text" />
          </div>

          <div>
            <label htmlFor="praxis-email">E-Mail-Adresse</label>
            <input id="praxis-email" name="email" type="email" />
          </div>

          <div>
            <label htmlFor="praxis-phone">Telefonnummer (optional)</label>
            <input id="praxis-phone" name="phone" type="tel" />
          </div>

          <div>
            <label htmlFor="praxis-website">Praxiswebsite (optional)</label>
            <input id="praxis-website" name="website" type="url" />
          </div>

          <div>
            <label htmlFor="praxis-message">Was möchten Sie verbessern?</label>
            <textarea
              id="praxis-message"
              name="message"
              placeholder="Zum Beispiel: Wir möchten unseren neuen Behandlungsschwerpunkt bekannter machen."
            />
          </div>

          <button type="submit">Gespräch anfragen</button>

          <p>
            Informationen zum Umgang mit Ihren Angaben finden Sie in unserer{" "}
            <a href="/datenschutz">Datenschutzerklärung</a>.
          </p>
        </form>

        {/* Erfolgsmeldung nach dem Absenden (noch keine Absende-Logik):
            "Ihre Anfrage ist angekommen. Wir melden uns bei Ihnen, um Ihr
            Vorhaben zu besprechen." */}
      </section>

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
