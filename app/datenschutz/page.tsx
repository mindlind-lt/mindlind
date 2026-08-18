import type { Metadata } from "next";
import LegalPage from "@/components/legal-page/legal-page";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Mindlind Werbeagentur.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/datenschutz",
    siteName: "Mindlind Werbeagentur",
    title: "Datenschutz | Mindlind Werbeagentur",
    description: "Datenschutzerklärung der Mindlind Werbeagentur.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Datenschutz | Mindlind Werbeagentur",
    description: "Datenschutzerklärung der Mindlind Werbeagentur.",
  },
};

const cookieGroups = [
  {
    name: "Elementor",
    category: "Statistik (anonym)",
    purpose: "Wir verwenden Elementor für Content-Erstellung. Diese Daten werden nicht an Dritte weitergegeben.",
    cookies: [
      { name: "elementor", expiry: "beständig", fn: "Speichert durchgeführte Aktionen der Benutzer auf der Website" },
    ],
  },
  {
    name: "Jetpopup",
    category: "Funktional",
    purpose: "Wir verwenden Jetpopup für die Erstellung von Pop-ups. Diese Daten werden nicht an Dritte weitergegeben.",
    cookies: [
      { name: "jetPopupData", expiry: "beständig", fn: "Speichert, wenn eine Nachricht verworfen wurde" },
    ],
  },
  {
    name: "WordPress",
    category: "Funktional",
    purpose: "Wir verwenden WordPress für die Website-Entwicklung. Diese Daten werden nicht an Dritte weitergegeben.",
    cookies: [
      { name: "wordpress_test_cookie", expiry: "Sitzung", fn: "Überprüft, ob Cookies gesetzt werden können" },
      { name: "wp_lang", expiry: "Sitzung", fn: "Speichert Spracheinstellungen" },
      { name: "wordpress_logged_in_*", expiry: "beständig", fn: "Hält Benutzer eingeloggt" },
    ],
  },
  {
    name: "Pagebuilder (Various)",
    category: "Funktional",
    purpose: "Wir verwenden verschiedene Pagebuilder-Komponenten für das Website-Design. Diese Daten werden nicht an Dritte weitergegeben.",
    cookies: [
      { name: "tAE, tTf, tADu, t3D, tTDe, tTDu, tnsApp, tTE, tMQ, tADe, tC, tPL", expiry: "beständig", fn: "Stellen eine responsive Darstellung der Website bereit" },
    ],
  },
  {
    name: "Google reCAPTCHA",
    category: "Marketing/Tracking",
    purpose: "Wir verwenden Google reCAPTCHA zur Spam-Prävention.",
    cookies: [
      { name: "rc::a", expiry: "beständig", fn: "Liest und filtert Anfragen von Bots" },
      { name: "rc::b, rc::c", expiry: "Sitzung", fn: "Liest und filtert Anfragen von Bots" },
    ],
  },
  {
    name: "Google Maps",
    category: "Marketing/Tracking",
    purpose: "Wir verwenden Google Maps zur Kartendarstellung.",
    cookies: [
      { name: "Google Maps API", expiry: "keins", fn: "Fordert die Benutzer-IP-Adresse an" },
    ],
  },
  {
    name: "YouTube",
    category: "Marketing/Tracking, Funktional",
    purpose: "Wir verwenden YouTube zur Video-Darstellung.",
    cookies: [
      { name: "GPS", expiry: "Sitzung", fn: "Speichert Standortdaten" },
      { name: "YSC", expiry: "Sitzung", fn: "Speichert und verfolgt Interaktionen" },
      { name: "PREF", expiry: "8 Monate", fn: "Speichert Benutzervorlieben" },
      { name: "VISITOR_INFO1_LIVE", expiry: "6 Monate", fn: "Liefert Schätzungen der Bandbreite" },
    ],
  },
];

export default function PagePrivacy() {
  return (
    <LegalPage title="Datenschutz" path="/datenschutz">
      {/* 1 */}
      <section>
        <h2 className="font-mono text-xl uppercase mb-4">
          1. Datenschutz auf einen Blick
        </h2>

        <h3 className="font-semibold mb-2">Allgemeine Hinweise</h3>
        <p className="mb-6">
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen
          zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
          aufgeführten Datenschutzerklärung.
        </p>

        <h3 className="font-semibold mb-2">
          Datenerfassung auf dieser Website
        </h3>
        <div className="space-y-4">
          <div>
            <p className="font-medium">
              Wer ist verantwortlich für die Datenerfassung auf dieser
              Website?
            </p>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
              „Hinweis zur Verantwortlichen Stelle&quot; in dieser
              Datenschutzerklärung entnehmen.
            </p>
          </div>
          <div>
            <p className="font-medium">Wie erfassen wir Ihre Daten?</p>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie
              in ein Kontaktformular eingeben.
            </p>
            <p>
              Andere Daten werden automatisch oder nach Ihrer Einwilligung
              beim Besuch der Website durch unsere IT-Systeme erfasst. Das
              sind vor allem technische Daten (z. B. Internetbrowser,
              Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung
              dieser Daten erfolgt automatisch, sobald Sie diese Website
              betreten.
            </p>
          </div>
          <div>
            <p className="font-medium">Wofür nutzen wir Ihre Daten?</p>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gewährleisten. Andere Daten können
              zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
          </div>
          <div>
            <p className="font-medium">
              Welche Rechte haben Sie bezüglich Ihrer Daten?
            </p>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein
              Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
              Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
              können Sie diese Einwilligung jederzeit für die Zukunft
              widerrufen. Außerdem haben Sie das Recht, unter bestimmten
              Umständen die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
              ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
            <p>
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
              sich jederzeit an uns wenden.
            </p>
          </div>
        </div>
      </section>

      {/* 2 */}
      <section>
        <h2 className="font-mono text-xl uppercase mb-4">2. Hosting</h2>
        <p className="mb-4">
          Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
        </p>
        <h3 className="font-semibold mb-2">Hetzner</h3>
        <p className="mb-4">
          Anbieter ist die Hetzner Online GmbH, Industriestr. 25, 91710
          Gunzenhausen (nachfolgend Hetzner). Details entnehmen Sie der
          Datenschutzerklärung von Hetzner:{" "}
          <a
            href="https://www.hetzner.com/de/rechtliches/datenschutz"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            https://www.hetzner.com/de/rechtliches/datenschutz
          </a>
          .
        </p>
        <p>
          Die Verwendung von Hetzner erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst
          zuverlässigen Darstellung unserer Website. Sofern eine entsprechende
          Einwilligung abgefragt wurde, erfolgt die Verarbeitung
          ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25
          Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies
          oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B.
          Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung
          ist jederzeit widerrufbar.
        </p>
      </section>

      {/* 3 */}
      <section>
        <h2 className="font-mono text-xl uppercase mb-4">
          3. Allgemeine Hinweise und Pflichtinformationen
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Datenschutz</h3>
            <p className="mb-2">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="mb-2">
              Wenn Sie diese Website benutzen, werden verschiedene
              personenbezogene Daten erhoben. Personenbezogene Daten sind
              Daten, mit denen Sie persönlich identifiziert werden können. Die
              vorliegende Datenschutzerklärung erläutert, welche Daten wir
              erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
              welchem Zweck das geschieht.
            </p>
            <p>
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.
              B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
              kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
              Dritte ist nicht möglich.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p className="mb-2">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>
            <p className="mb-2">
              Georgy Cheplagin
              <br />
              MB „Mindlind“
              <br />
              Žirgų g. 18-6, Raudondvario k.
              <br />
              LT-14257 Vilnius
              <br />
              Litauen
              <br />
              Telefon: +370 675 46 918
              <br />
              E-Mail: info@mindlind.de
            </p>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische
              Person, die allein oder gemeinsam mit anderen über die Zwecke
              und Mittel der Verarbeitung von personenbezogenen Daten (z. B.
              Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere
              Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
              Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
              Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
              gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe
              für die Speicherung Ihrer personenbezogenen Daten haben (z. B.
              steuer- oder handelsrechtliche Aufbewahrungsfristen); im
              letztgenannten Fall erfolgt die Löschung nach Fortfall dieser
              Gründe.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Allgemeine Hinweise zu den Rechtsgrundlagen der
              Datenverarbeitung auf dieser Website
            </h3>
            <p>
              Sofern Sie in die Datenverarbeitung eingewilligt haben,
              verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von
              Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO,
              sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
              verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung
              in die Übertragung personenbezogener Daten in Drittstaaten
              erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49
              Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies
              oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via
              Device-Fingerprinting) eingewilligt haben, erfolgt die
              Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1
              TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre
              Daten zur Vertragserfüllung oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
              Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren
              verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer
              rechtlichen Verpflichtung erforderlich sind auf Grundlage von
              Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner
              auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1
              lit. f DSGVO erfolgen. Über die jeweils im Einzelfall
              einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen
              dieser Datenschutzerklärung informiert.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten
            </h3>
            <p>
              Wir verwenden unter anderem Tools von Unternehmen mit Sitz in
              den USA oder sonstigen datenschutzrechtlich nicht sicheren
              Drittstaaten. Wenn diese Tools aktiv sind, können Ihre
              personenbezogene Daten in diese Drittstaaten übertragen und dort
              verarbeitet werden. Wir weisen darauf hin, dass in diesen
              Ländern kein mit der EU vergleichbares Datenschutzniveau
              garantiert werden kann. Beispielsweise sind US-Unternehmen dazu
              verpflichtet, personenbezogene Daten an Sicherheitsbehörden
              herauszugeben, ohne dass Sie als Betroffener hiergegen
              gerichtlich vorgehen könnten. Es kann daher nicht ausgeschlossen
              werden, dass US-Behörden (z. B. Geheimdienste) Ihre auf
              US-Servern befindlichen Daten zu Überwachungszwecken
              verarbeiten, auswerten und dauerhaft speichern. Wir haben auf
              diese Verarbeitungstätigkeiten keinen Einfluss.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
              ausdrücklichen Einwilligung möglich. Sie können eine bereits
              erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
              der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
              Widerruf unberührt.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
              sowie gegen Direktwerbung (Art. 21 DSGVO)
            </h3>
            <p className="mb-2 uppercase text-sm">
              Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit.
              e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus
              Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen
              die Verarbeitung Ihrer personenbezogenen Daten Widerspruch
              einzulegen; dies gilt auch für ein auf diese Bestimmungen
              gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen
              eine Verarbeitung beruht, entnehmen Sie dieser
              Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir
              Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten,
              es sei denn, wir können zwingende schutzwürdige Gründe für die
              Verarbeitung nachweisen, die Ihre Interessen, Rechte und
              Freiheiten überwiegen oder die Verarbeitung dient der
              Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
              (Widerspruch nach Art. 21 Abs. 1 DSGVO).
            </p>
            <p className="uppercase text-sm">
              Werden Ihre personenbezogenen Daten verarbeitet, um
              Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit
              Widerspruch gegen die Verarbeitung Sie betreffender
              personenbezogener Daten zum Zwecke derartiger Werbung
              einzulegen; dies gilt auch für das Profiling, soweit es mit
              solcher Direktwerbung in Verbindung steht. Wenn Sie
              widersprechen, werden Ihre personenbezogenen Daten anschließend
              nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch
              nach Art. 21 Abs. 2 DSGVO).
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h3>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
              Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
              Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
              Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das
              Beschwerderecht besteht unbeschadet anderweitiger
              verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Recht auf Datenübertragbarkeit
            </h3>
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
              Einwilligung oder in Erfüllung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem gängigen,
              maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
              direkte Übertragung der Daten an einen anderen Verantwortlichen
              verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Auskunft, Löschung und Berichtigung
            </h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
              jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
              auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
              weiteren Fragen zum Thema personenbezogene Daten können Sie
              sich jederzeit an uns wenden.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Recht auf Einschränkung der Verarbeitung
            </h3>
            <p className="mb-2">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen. Hierzu können Sie sich
              jederzeit an uns wenden. Das Recht auf Einschränkung der
              Verarbeitung besteht in folgenden Fällen:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                personenbezogenen Daten bestreiten, benötigen wir in der
                Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung
                haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn die Verarbeitung Ihrer personenbezogenen Daten
                unrechtmäßig geschah/geschieht, können Sie statt der Löschung
                die Einschränkung der Datenverarbeitung verlangen.
              </li>
              <li>
                Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen,
                Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung
                von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
                Löschung die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO
                eingelegt haben, muss eine Abwägung zwischen Ihren und
                unseren Interessen vorgenommen werden. Solange noch nicht
                feststeht, wessen Interessen überwiegen, haben Sie das Recht,
                die Einschränkung der Verarbeitung Ihrer personenbezogenen
                Daten zu verlangen.
              </li>
            </ul>
            <p className="mt-2">
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
              eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung
              abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
              Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz
              der Rechte einer anderen natürlichen oder juristischen Person
              oder aus Gründen eines wichtigen öffentlichen Interesses der
              Europäischen Union oder eines Mitgliedstaats verarbeitet
              werden.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              SSL- bzw. TLS-Verschlüsselung
            </h3>
            <p className="mb-2">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
              oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
              SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
              erkennen Sie daran, dass die Adresszeile des Browsers von
              „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in
              Ihrer Browserzeile.
            </p>
            <p>
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
              Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
              werden.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Widerspruch gegen Werbe-E-Mails
            </h3>
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten zur Übersendung von nicht ausdrücklich
              angeforderter Werbung und Informationsmaterialien wird hiermit
              widersprochen. Die Betreiber der Seiten behalten sich
              ausdrücklich rechtliche Schritte im Falle der unverlangten
              Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </div>
        </div>
      </section>

      {/* 4 */}
      <section>
        <h2 className="font-mono text-xl uppercase mb-4">
          4. Datenerfassung auf dieser Website
        </h2>
        <h3 className="font-semibold mb-2">Cookies</h3>
        <div className="space-y-2">
          <p>
            Unsere Internetseiten verwenden so genannte „Cookies“. Cookies
            sind kleine Datenpakete und richten auf Ihrem Endgerät keinen
            Schaden an. Sie werden entweder vorübergehend für die Dauer einer
            Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf
            Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres
            Besuchs automatisch gelöscht. Permanente Cookies bleiben auf
            Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine
            automatische Löschung durch Ihren Webbrowser erfolgt.
          </p>
          <p>
            Teilweise können auch Cookies von Drittunternehmen auf Ihrem
            Endgerät gespeichert werden, wenn Sie unsere Seite betreten
            (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die
            Nutzung bestimmter Dienstleistungen des Drittunternehmens (z. B.
            Cookies zur Abwicklung von Zahlungsdienstleistungen).
          </p>
          <p>
            Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
            technisch notwendig, da bestimmte Websitefunktionen ohne diese
            nicht funktionieren würden (z. B. die Warenkorbfunktion oder die
            Anzeige von Videos). Andere Cookies dienen dazu, das
            Nutzerverhalten auszuwerten oder Werbung anzuzeigen.
          </p>
          <p>
            Cookies, die zur Durchführung des elektronischen
            Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
            erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur
            Optimierung der Website (z. B. Cookies zur Messung des
            Webpublikums) erforderlich sind (notwendige Cookies), werden auf
            Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine
            andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat
            ein berechtigtes Interesse an der Speicherung von notwendigen
            Cookies zur technisch fehlerfreien und optimierten Bereitstellung
            seiner Dienste. Sofern eine Einwilligung zur Speicherung von
            Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt
            wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage
            dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
            TTDSG); die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p>
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen
            von Cookies informiert werden und Cookies nur im Einzelfall
            erlauben, die Annahme von Cookies für bestimmte Fälle oder
            generell ausschließen sowie das automatische Löschen der Cookies
            beim Schließen des Browsers aktivieren. Bei der Deaktivierung von
            Cookies kann die Funktionalität dieser Website eingeschränkt sein.
          </p>
          <p>
            Soweit Cookies von Drittunternehmen oder zu Analysezwecken
            eingesetzt werden, werden wir Sie hierüber im Rahmen dieser
            Datenschutzerklärung gesondert informieren und ggf. eine
            Einwilligung abfragen. Eine vollständige Übersicht der
            eingesetzten Cookies finden Sie in der{" "}
            <a href="#cookie-richtlinie" className="underline">
              Cookie-Richtlinie
            </a>{" "}
            weiter unten.
          </p>
        </div>
      </section>

      {/* 5 */}
      <section>
        <h2 className="font-mono text-xl uppercase mb-4">
          5. Analyse-Tools und Werbung
        </h2>
        <h3 className="font-semibold mb-2">WP Statistics</h3>
        <div className="space-y-2 mb-4">
          <p>
            Diese Website nutzt das Analysetool WP Statistics, um
            Besucherzugriffe statistisch auszuwerten. Anbieter ist
            Veronalabs, Tatari 64, 10134, Tallinn, Estland (
            <a
              href="https://veronalabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              veronalabs.com
            </a>
            ).
          </p>
          <p>
            Mit WP Statistics können wir die Nutzung unserer Website
            analysieren. WP Statistics erfasst dabei u. a. Logdateien
            (IP-Adresse, Referrer, verwendete Browser, Herkunft des Nutzers,
            verwendete Suchmaschine) und Aktionen, die die Websitebesucher auf
            der Seite getätigt haben (z. B. Klicks und Ansichten).
          </p>
          <p>
            Die mit WP Statistics erfassten Daten werden ausschließlich auf
            unserem eigenen Server gespeichert.
          </p>
          <p>
            Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von Art. 6
            Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an der
            anonymisierten Analyse des Nutzerverhaltens, um sowohl unser
            Webangebot als auch unsere Werbung zu optimieren. Sofern eine
            entsprechende Einwilligung abgefragt wurde, erfolgt die
            Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
            DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die
            Speicherung von Cookies oder den Zugriff auf Informationen im
            Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des
            TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
          </p>
        </div>
        <h3 className="font-semibold mb-2">IP-Anonymisierung</h3>
        <p>
          Wir verwenden WP Statistics mit anonymisierter IP. Ihre
          IP-Adresse wird dabei gekürzt, sodass diese Ihnen nicht mehr
          direkt zugeordnet werden kann.
        </p>
      </section>

      {/* 6 */}
      <section>
        <h2 className="font-mono text-xl uppercase mb-4">
          6. Plugins und Tools
        </h2>
        <h3 className="font-semibold mb-2">
          YouTube mit erweitertem Datenschutz
        </h3>
        <div className="space-y-2 mb-4">
          <p>
            Diese Website bindet Videos der Website YouTube ein. Betreiber
            der Seiten ist die Google Ireland Limited („Google“), Gordon
            House, Barrow Street, Dublin 4, Irland.
          </p>
          <p>
            Wir nutzen YouTube im erweiterten Datenschutzmodus. Dieser Modus
            bewirkt laut YouTube, dass YouTube keine Informationen über die
            Besucher auf dieser Website speichert, bevor diese sich das Video
            ansehen. Die Weitergabe von Daten an YouTube-Partner wird durch
            den erweiterten Datenschutzmodus hingegen nicht zwingend
            ausgeschlossen. So stellt YouTube – unabhängig davon, ob Sie sich
            ein Video ansehen – eine Verbindung zum Google
            DoubleClick-Netzwerk her.
          </p>
          <p>
            Sobald Sie ein YouTube-Video auf dieser Website starten, wird eine
            Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem
            YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht
            haben. Wenn Sie in Ihrem YouTube-Account eingeloggt sind,
            ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem
            persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem
            Sie sich aus Ihrem YouTube-Account ausloggen.
          </p>
          <p>
            Des Weiteren kann YouTube nach Starten eines Videos verschiedene
            Cookies auf Ihrem Endgerät speichern oder vergleichbare
            Wiedererkennungstechnologien (z. B. Device-Fingerprinting)
            einsetzen. Auf diese Weise kann YouTube Informationen über
            Besucher dieser Website erhalten. Diese Informationen werden u.
            a. verwendet, um Videostatistiken zu erfassen, die
            Anwenderfreundlichkeit zu verbessern und Betrugsversuchen
            vorzubeugen.
          </p>
          <p>
            Gegebenenfalls können nach dem Start eines YouTube-Videos weitere
            Datenverarbeitungsvorgänge ausgelöst werden, auf die wir keinen
            Einfluss haben.
          </p>
          <p>
            Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden
            Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes
            Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine
            entsprechende Einwilligung abgefragt wurde, erfolgt die
            Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
            DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die
            Speicherung von Cookies oder den Zugriff auf Informationen im
            Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des
            TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p>
            Weitere Informationen über Datenschutz bei YouTube finden Sie in
            deren Datenschutzerklärung unter:{" "}
            <a
              href="https://policies.google.com/privacy?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://policies.google.com/privacy?hl=de
            </a>
            .
          </p>
        </div>

        <p className="text-sm text-gray-500">
          Quelle:{" "}
          <a
            href="https://www.e-recht24.de"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            eRecht24
          </a>
        </p>
      </section>

      {/* Cookie policy appendix */}
      <section id="cookie-richtlinie" className="pt-4 border-t border-black/10">
        <h2 className="font-mono text-2xl uppercase mb-2">
          Cookie-Richtlinie
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Zuletzt aktualisiert am 6. November 2025. Gilt für Besucher und
          Einwohner mit ständigem Wohnsitz im Europäischen Wirtschaftsraum
          und der Schweiz. Diese Cookie-Richtlinie ergänzt die oben stehende
          Datenschutzerklärung und behandelt ausschließlich den Einsatz von
          Cookies auf dieser Website.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">1. Einführung</h3>
            <p>
              Unsere Website{" "}
              <a
                href="https://new.mindlind.de"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                https://new.mindlind.de
              </a>{" "}
              (im Folgenden „die Website“) verwendet Cookies und ähnliche
              Technologien (der Einfachheit halber werden all diese unter
              „Cookies“ zusammengefasst). Cookies werden außerdem von uns
              beauftragten Drittparteien platziert. Im Folgenden informieren
              wir Sie über die Verwendung von Cookies auf unserer Website.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">2. Was sind Cookies?</h3>
            <p>
              Ein Cookie ist eine einfache kleine Datei, die gemeinsam mit den
              Seiten einer Internetadresse versendet und vom Webbrowser auf
              dem PC oder einem anderen Gerät gespeichert werden kann. Die
              darin gespeicherten Informationen können während folgender
              Besuche zu unseren oder den Servern relevanter Drittanbieter
              gesendet werden.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">3. Was sind Skripte?</h3>
            <p>
              Ein Script ist ein Stück Programmcode, das benutzt wird, um
              unserer Website Funktionalität und Interaktivität zu
              ermöglichen. Dieser Code wird auf unseren Servern oder auf
              Ihrem Gerät ausgeführt.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">4. Was ist ein Web Beacon?</h3>
            <p>
              Ein Web-Beacon (auch Pixel-Tag genannt) ist ein kleines
              unsichtbares Textfragment oder Bild auf einer Website, das
              benutzt wird, um den Verkehr auf der Website zu überwachen. Um
              dies zu ermöglichen, werden diverse Daten von Ihnen mittels
              Web-Beacons gespeichert.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">5. Cookies</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium">
                  5.1 Technische oder funktionelle Cookies
                </p>
                <p>
                  Einige Cookies stellen sicher, dass bestimmte Teile der
                  Website ordnungsgemäß funktionieren und Ihre
                  Benutzereinstellungen weiterhin in Erinnerung bleiben.
                  Durch das Setzen funktionaler Cookies erleichtern wir Ihnen
                  den Besuch unserer Website. Wir können diese Cookies ohne
                  Ihre Einwilligung platzieren.
                </p>
              </div>
              <div>
                <p className="font-medium">5.2 Werbecookies</p>
                <p>
                  Auf dieser Website verwenden wir Werbe-Cookies, um Einblicke
                  in die Kampagnenergebnisse zu erhalten. Dies geschieht
                  basierend auf einem Profil, das wir basierend auf Ihrem
                  Verhalten auf new.mindlind.de erstellen. Mit diesen Cookies sind
                  Sie als Website-Besucher mit einer eindeutigen ID verknüpft.
                  Diese Cookies erstellen jedoch kein Profil für Ihr Verhalten
                  und Ihre Interessen, um personalisierte Anzeigen zu
                  schalten.
                </p>
              </div>
              <div>
                <p className="font-medium">
                  5.3 Marketing- / Tracking-Cookies
                </p>
                <p>
                  Marketing- / Tracking-Cookies sind Cookies oder eine andere
                  Form der lokalen Speicherung, die zur Erstellung von
                  Benutzerprofilen verwendet werden, um Werbung anzuzeigen
                  oder den Benutzer auf dieser Website oder über mehrere
                  Websites hinweg für ähnliche Marketingzwecke zu verfolgen.
                  Da diese Cookies als Verfolgungs-Cookie markiert sind,
                  benötigen wir Ihre Einwilligung, um diese zu platzieren.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">6. Platzierte Cookies</h3>
            <div className="space-y-4">
              {cookieGroups.map((group) => (
                <div key={group.name} className="border border-black/10 p-4">
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <p className="font-semibold">{group.name}</p>
                    <p className="text-xs text-gray-500 uppercase">
                      {group.category}
                    </p>
                  </div>
                  <p className="text-sm mb-3">{group.purpose}</p>
                  <ul className="text-sm space-y-1">
                    {group.cookies.map((c) => (
                      <li key={c.name} className="text-gray-600">
                        <span className="font-mono text-xs">{c.name}</span>
                        {" — "}
                        {c.fn} (Ablaufdatum: {c.expiry})
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Neben den oben genannten Diensten können einzelne eingebundene
              Plugins und Skripte weitere technische Cookies setzen. Eine
              aktuelle, vollständige Liste sowie die Möglichkeit, Ihre
              Einwilligung pro Kategorie zu verwalten, finden Sie im
              Cookie-Consent-Banner dieser Website.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">7. Einwilligung</h3>
            <p>
              Wenn Sie unsere Website zum ersten Mal besuchen, zeigen wir
              Ihnen ein Pop-up mit einer Erklärung über Cookies. Sobald Sie
              auf „Einstellungen speichern“ klicken, geben Sie uns Ihre
              Einwilligung, alle von Ihnen gewählten Kategorien von Cookies
              und Plugins wie in dieser Cookie-Richtlinie beschrieben zu
              verwenden. Sie können die Verwendung von Cookies über Ihren
              Browser deaktivieren, bitte beachten Sie jedoch, dass unsere
              Website dann unter Umständen nicht richtig funktioniert.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              8. Aktivierung/Deaktivierung und Löschen von Cookies
            </h3>
            <p className="mb-2">
              Sie können Ihren Internetbrowser verwenden, um automatisch oder
              manuell Cookies zu löschen. Sie können außerdem spezifizieren,
              ob spezielle Cookies nicht platziert werden sollen. Eine andere
              Möglichkeit ist es, Ihren Internetbrowser derart einzurichten,
              dass Sie jedes Mal benachrichtigt werden, wenn ein Cookie
              platziert wird. Für weitere Informationen über diese
              Möglichkeiten beachten Sie die Anweisungen in der Hilfesektion
              Ihres Browsers.
            </p>
            <p>
              Bitte nehmen Sie zur Kenntnis, dass unsere Website möglicherweise
              nicht richtig funktioniert, wenn alle Cookies deaktiviert sind.
              Wenn Sie die Cookies in Ihrem Browser löschen, werden diese neu
              platziert, wenn Sie unsere Website erneut besuchen.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              9. Ihre Rechte in Bezug auf personenbezogene Daten
            </h3>
            <p className="mb-2">
              Sie haben folgende Rechte in Bezug auf Ihre personenbezogenen
              Daten:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Sie haben das Recht zu erfahren, warum Ihre personenbezogenen
                Daten benötigt werden, was damit passiert und wie lange sie
                aufbewahrt werden.
              </li>
              <li>
                Auskunftsrecht: Sie haben das Recht, Ihre uns bekannten
                persönlichen Daten einzusehen.
              </li>
              <li>
                Recht auf Berichtigung: Sie haben das Recht, wann immer Sie
                wünschen, Ihre personenbezogenen Daten zu ergänzen, zu
                korrigieren sowie gelöscht oder blockiert zu bekommen.
              </li>
              <li>
                Wenn Sie uns Ihre Einwilligung zur Verarbeitung Ihrer Daten
                erteilen, haben Sie das Recht, diese Einwilligung zu
                widerrufen und Ihre personenbezogenen Daten löschen zu lassen.
              </li>
              <li>
                Recht auf Datenübertragbarkeit: Sie haben das Recht, alle Ihre
                personenbezogenen Daten von dem für die Verarbeitung
                Verantwortlichen anzufordern und sie vollständig an einen
                anderen für die Verarbeitung Verantwortlichen zu übermitteln.
              </li>
              <li>
                Widerspruchsrecht: Sie können der Verarbeitung Ihrer Daten
                widersprechen. Wir entsprechen dem, es sei denn, es gibt
                berechtigte Gründe für die Verarbeitung.
              </li>
            </ul>
            <p className="mt-2">
              Um diese Rechte auszuüben, kontaktieren Sie uns bitte. Bitte
              beziehen Sie sich auf die Kontaktdaten am Ende dieser
              Cookie-Richtlinie. Wenn Sie eine Beschwerde darüber haben, wie
              wir Ihre Daten behandeln, würden wir diese gerne hören, aber Sie
              haben auch das Recht, diese an die Aufsichtsbehörde
              (Datenschutzbehörde) zu richten.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">10. Kontaktdaten</h3>
            <p className="mb-2">
              Für Fragen und/oder Kommentare über unsere Cookie-Richtlinie
              kontaktieren Sie uns bitte über folgende Kontaktdaten:
            </p>
            <p className="mb-2">
              Georgy Cheplagin
              <br />
              Mindlind MB
              <br />
              Žirgų g. 18-6, Raudondvario k.
              <br />
              LT-14257 Vilnius
              <br />
              Litauen
              <br />
              Telefon: +370 675 46 918
              <br />
              E-Mail: info@mindlind.de
            </p>
            <p className="text-sm text-gray-500">
              Diese Cookie-Richtlinie wurde mit{" "}
              <a
                href="https://cookiedatabase.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                cookiedatabase.org
              </a>{" "}
              synchronisiert.
            </p>
          </div>
        </div>
      </section>
    </LegalPage>
  );
}
