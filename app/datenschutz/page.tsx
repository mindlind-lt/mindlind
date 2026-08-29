import type { Metadata } from "next";
import LegalPage from "@/components/legal-page/legal-page";
import ConsentSettingsLink from "@/components/consent/consent-settings-link";

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

/**
 * This page must describe what the site ACTUALLY does. It is the one document
 * whose accuracy can be checked from the outside with a single page load, so a
 * copied template is worse than useless here.
 *
 * When you add, remove or swap a third-party service, three things change
 * together — treat them as one unit:
 *   1. this page,
 *   2. the CATEGORIES copy in components/consent/consent-banner.tsx,
 *   3. CONSENT_VERSION in lib/consent.ts (bumping it re-asks everyone, because
 *      consent given for the old set of services is not consent for the new).
 *
 * ---------------------------------------------------------------------------
 * UNVERIFIED CLAIMS — resolve these before treating this page as final.
 *
 * Everything describing what the CODE does was checked against the running
 * site. The items below are the ones that depend on contracts, corporate facts
 * or legal judgement that cannot be read out of this repository. They are
 * marked inline with `UNVERIFIED #n`.
 *
 *  1. WEB3FORMS (section 6) — the weakest point on this page.
 *     Their privacy page returns 403, their docs contain no privacy/GDPR/terms
 *     pages, and the domain WHOIS is masked. The operating entity, its country,
 *     where submissions are stored and for how long could NOT be established.
 *     The text calls them an Auftragsverarbeiter "nach Art. 28 DSGVO" — that is
 *     a statement about a contract that may not exist. Either obtain a signed
 *     AVV plus their legal details and name them here in full, or drop the
 *     service for a first-party route handler + own SMTP, which removes the
 *     question entirely. Do not leave this as-is.
 *
 *  2. VERCEL AVV (section 4) — Vercel's DPA is offered as part of their terms,
 *     but whether it has actually been accepted for THIS account is unknown.
 *     Confirm in the Vercel dashboard; if not accepted, accept it or soften the
 *     sentence.
 *
 *  3. GOOGLE AVV + GA4 NOT LIVE (section 7) — NEXT_PUBLIC_GA_ID is unset, so
 *     nothing described in section 7 currently runs. Google's Data Processing
 *     Terms are accepted when the GA property is created, which has not
 *     happened yet. Section 7 and the GA measurement ID must go live in the
 *     same deploy.
 *
 *  4. GA4 IP WORDING (section 7) — "IP-Anonymisierung aktiviert" and "gekürzte
 *     IP-Adresse" are Universal Analytics vocabulary. GA4 drops the full IP by
 *     design and the `anonymize_ip` parameter we pass is effectively a no-op.
 *     The claim is defensible but imprecise; a lawyer may want it reworded to
 *     describe GA4's actual behaviour.
 *
 *  5. VERCEL SERVER LOCATION (section 4) — `fra1` (Frankfurt) was observed for
 *     this deployment, but Vercel's Edge Network caches static assets at PoPs
 *     worldwide, so "Auslieferung über Server in der EU" is not guaranteed for
 *     every request from every location. Either verify the account's region
 *     restrictions or weaken the sentence.
 *
 *  6. LOG RETENTION (section 4) — deliberately worded as "nur so lange wie
 *     erforderlich" because Vercel's actual retention period is not documented
 *     anywhere reachable. A concrete number is better if you can obtain one.
 *
 *  7. WHICH ePRIVACY LAW APPLIES — this page cites the German TDDDG throughout
 *     because the site is German-language and targets Germany. The controller
 *     is established in Lithuania, and ePrivacy is implemented nationally, so
 *     Lithuanian law may govern instead. GDPR articles are unaffected either
 *     way. Worth a lawyer's opinion.
 *
 *  8. LEAD SUPERVISORY AUTHORITY (section 3) — VDAI is named on the assumption
 *     that the main establishment is Lithuania. If the central administration
 *     is actually in Germany, the competent authority differs. VDAI's street
 *     address is deliberately omitted rather than risk printing a stale one.
 *
 *  9. VERTRETUNGSBERECHTIGTER (section 1) — "Georgy Cheplagin" was carried over
 *     from the previous version of this file. It is NOT in the Impressum, which
 *     § 5 DDG requires for a legal entity. Confirm the name and add it there
 *     too (the Impressum is also missing a registration number and VAT ID).
 *
 * 10. RETENTION FOR ENQUIRIES (section 6) — refers to commercial and tax
 *     retention periods without naming a jurisdiction, since the controller is
 *     Lithuanian while the site targets Germany. Name the concrete periods once
 *     that is settled.
 *
 * 11. NO DPO SECTION — omitted rather than asserting a Datenschutzbeauftragter
 *     exists or is unnecessary. Whether Art. 37 DSGVO / § 38 BDSG require one
 *     depends on headcount and processing activities. Add a section if needed.
 *
 * 12. SCOPE — the page names new.mindlind.de. Update when the redesign moves to
 *     the apex domain, and note that the old WordPress site at mindlind.de is a
 *     separate service on different hosting with its own policy.
 *
 * 13. STAND — the date below is manual. Bump it whenever this page changes.
 * ---------------------------------------------------------------------------
 */

const STAND = "August 2026";

export default function PagePrivacy() {
  return (
    <LegalPage title="Datenschutz" path="/datenschutz">
      <section>
        {/* UNVERIFIED #12 — scope is new.mindlind.de. Update on the move to the
            apex domain; the old WordPress site at mindlind.de is separate. */}
        <p>
          Diese Datenschutzerklärung informiert Sie darüber, welche
          personenbezogenen Daten wir beim Besuch dieser Website verarbeiten,
          zu welchem Zweck und auf welcher Rechtsgrundlage. Sie gilt für die
          Website unter <strong>new.mindlind.de</strong>.
        </p>
      </section>

      {/* 1 */}
      <section>
        <h2 className="font-mono text-xl uppercase mb-4">
          1. Verantwortlicher
        </h2>
        <p className="mb-4">
          Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne
          von Art. 4 Nr. 7 DSGVO ist:
        </p>
        {/* UNVERIFIED #9 — Vertretungsberechtigter carried over from the old file;
            not present in the Impressum, where § 5 DDG requires it. */}
        <p className="mb-4">
          Mindlind MB
          <br />
          Vertreten durch: Georgy Cheplagin
          <br />
          Žirgų g. 18-6, Raudondvario k.
          <br />
          LT-14257 Vilnius
          <br />
          Litauen
          <br />
          Telefon:{" "}
          <a href="tel:+37067546918" className="underline">
            +370 675 46 918
          </a>
          <br />
          E-Mail:{" "}
          <a href="mailto:info@mindlind.de" className="underline">
            info@mindlind.de
          </a>
        </p>
        <p>
          Bei allen Fragen zum Datenschutz und zur Ausübung Ihrer Rechte
          erreichen Sie uns unter den oben genannten Kontaktdaten.
        </p>
      </section>

      {/* 2 */}
      <section>
        <h2 className="font-mono text-xl uppercase mb-4">
          2. Das Wichtigste in Kürze
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Diese Website hat <strong>keine Benutzerkonten</strong>, keinen
            Login und keinen Warenkorb.
          </li>
          <li>
            Ohne Ihre Einwilligung speichern wir{" "}
            <strong>ein einziges Cookie</strong> — es merkt sich Ihre
            Entscheidung über diese Einwilligung. Weitere Cookies, Local
            Storage, Session Storage oder vergleichbare Techniken setzen wir
            ohne Einwilligung nicht ein.
          </li>
          <li>
            Ohne Ihre Einwilligung wird beim Aufruf dieser Seiten{" "}
            <strong>kein Drittanbieter kontaktiert</strong>. Schriftarten,
            Bilder, Videos und die interaktiven 3D-Szenen liefern wir von
            unserem eigenen Server aus.
          </li>
          <li>
            Wir erstellen <strong>keine Nutzerprofile</strong>, betreiben kein
            Re-Targeting und geben Ihre Daten nicht zu Werbezwecken weiter.
          </li>
          <li>
            Ihre Einwilligung ist freiwillig und jederzeit mit Wirkung für die
            Zukunft widerrufbar — siehe Abschnitt 5.
          </li>
        </ul>
      </section>

      {/* 3 */}
      <section>
        <h2 className="font-mono text-xl uppercase mb-4">3. Ihre Rechte</h2>
        <p className="mb-4">
          Sie haben uns gegenüber jederzeit die folgenden Rechte hinsichtlich
          der Sie betreffenden personenbezogenen Daten:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong>Auskunft</strong> (Art. 15 DSGVO): Sie können Auskunft
            darüber verlangen, ob und welche Daten wir über Sie verarbeiten.
          </li>
          <li>
            <strong>Berichtigung</strong> (Art. 16 DSGVO): Sie können
            unrichtige Daten berichtigen und unvollständige Daten
            vervollständigen lassen.
          </li>
          <li>
            <strong>Löschung</strong> (Art. 17 DSGVO): Sie können die Löschung
            Ihrer Daten verlangen, soweit keine gesetzlichen
            Aufbewahrungspflichten entgegenstehen.
          </li>
          <li>
            <strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO).
          </li>
          <li>
            <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO): Herausgabe
            der von Ihnen bereitgestellten Daten in einem strukturierten,
            gängigen und maschinenlesbaren Format.
          </li>
          <li>
            <strong>Widerspruch</strong> (Art. 21 DSGVO): Sie können einer
            Verarbeitung, die wir auf ein berechtigtes Interesse stützen, aus
            Gründen widersprechen, die sich aus Ihrer besonderen Situation
            ergeben.
          </li>
          <li>
            <strong>Widerruf einer Einwilligung</strong> (Art. 7 Abs. 3
            DSGVO): Sie können eine erteilte Einwilligung jederzeit mit
            Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum
            Widerruf erfolgten Verarbeitung bleibt unberührt.
          </li>
        </ul>
        {/* UNVERIFIED #8 — VDAI assumes the main establishment is Lithuania.
            Street address omitted on purpose. */}
        <p>
          Außerdem haben Sie das Recht, sich bei einer Datenschutz-
          Aufsichtsbehörde zu beschweren (Art. 77 DSGVO) — insbesondere in dem
          Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des
          Orts des mutmaßlichen Verstoßes. Für uns als in Litauen
          niedergelassenes Unternehmen ist die{" "}
          <a
            href="https://vdai.lrv.lt"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Valstybinė duomenų apsaugos inspekcija (VDAI)
          </a>{" "}
          zuständig. Wenn Sie in Deutschland ansässig sind, können Sie sich
          ebenso an die Aufsichtsbehörde Ihres Bundeslandes wenden.
        </p>
      </section>

      {/* 4 */}
      <section>
        <h2 className="font-mono text-xl uppercase mb-4">
          4. Hosting und Server-Logfiles
        </h2>
        {/* UNVERIFIED #5 — `fra1` was observed for this deployment, but Vercel's
            Edge Network caches at PoPs worldwide. */}
        <p className="mb-4">
          Wir hosten diese Website bei der Vercel Inc., 440 N Barranca Avenue
          #4133, Covina, CA 91723, USA (nachfolgend „Vercel“). Die Auslieferung
          erfolgt über Server in der Europäischen Union (Region Frankfurt am
          Main); ein Zugriff aus den USA ist technisch nicht ausgeschlossen.
        </p>
        <p className="mb-4">
          Wenn Sie diese Website aufrufen, verarbeitet Vercel in unserem
          Auftrag automatisch Informationen, die Ihr Browser übermittelt
          (Server-Logfiles):
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>IP-Adresse des anfragenden Geräts</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>Übertragene Datenmenge und Meldung über den Abrufstatus</li>
          <li>
            Verwendeter Browsertyp und dessen Version, Betriebssystem und
            Referrer-URL
          </li>
        </ul>
        <p className="mb-4">
          Diese Verarbeitung ist technisch erforderlich, um die Website
          auszuliefern, ihre Stabilität und Sicherheit zu gewährleisten und
          Angriffe abzuwehren. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO;
          unser berechtigtes Interesse liegt in der zuverlässigen und sicheren
          Bereitstellung unseres Onlineangebots. Eine Zusammenführung dieser
          Daten mit anderen Datenquellen nehmen wir nicht vor, und wir werten
          die Logfiles nicht zu Marketingzwecken aus.
        </p>
        {/* UNVERIFIED #6 — vague because Vercel's actual retention is undocumented. */}
        <p className="mb-4">
          Die Logdaten werden nur so lange gespeichert, wie es für die
          genannten Zwecke erforderlich ist, und anschließend gelöscht.
        </p>
        {/* UNVERIFIED #2 — confirm the DPA is actually accepted for this account. */}
        <p>
          Mit Vercel haben wir einen Vertrag über die Auftragsverarbeitung nach
          Art. 28 DSGVO geschlossen. Vercel ist nach dem EU-U.S. Data Privacy
          Framework zertifiziert; ergänzend gelten Standardvertragsklauseln.
          Einzelheiten finden Sie in der{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Datenschutzerklärung von Vercel
          </a>
          .
        </p>
      </section>

      {/* 5 */}
      <section>
        <h2 className="font-mono text-xl uppercase mb-4">
          5. Einwilligung und Cookies
        </h2>
        {/* UNVERIFIED #7 — cites the German TDDDG; the controller is established in
            Lithuania, so national ePrivacy law may differ. */}
        <p className="mb-4">
          Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert
          werden. Das Speichern von Informationen auf Ihrem Endgerät und der
          Zugriff darauf sind nach § 25 Abs. 1 TDDDG nur mit Ihrer
          Einwilligung zulässig — es sei denn, sie sind unbedingt
          erforderlich, damit ein von Ihnen ausdrücklich gewünschter Dienst
          bereitgestellt werden kann (§ 25 Abs. 2 Nr. 2 TDDDG).
        </p>

        <h3 className="font-semibold mb-2">
          Technisch notwendig: das Einwilligungs-Cookie
        </h3>
        <p className="mb-4">
          Damit wir Sie nicht bei jedem Seitenaufruf erneut fragen müssen,
          speichern wir Ihre Entscheidung in einem Cookie. Dieses Cookie ist
          unbedingt erforderlich und wird daher ohne Einwilligung gesetzt.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left border-b border-gray-300">
                <th className="py-2 pr-4 font-semibold">Name</th>
                <th className="py-2 pr-4 font-semibold">Zweck</th>
                <th className="py-2 font-semibold">Speicherdauer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 align-top">
                <td className="py-2 pr-4 font-mono">ml_consent</td>
                <td className="py-2 pr-4">
                  Speichert, welchen Kategorien Sie zugestimmt oder
                  widersprochen haben, sowie den Zeitpunkt und die Version der
                  Einwilligung. Enthält keine Kennung, mit der Sie
                  wiedererkannt werden könnten.
                </td>
                <td className="py-2">6 Monate</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-semibold mb-2">Einwilligungsbedürftige Dienste</h3>
        <p className="mb-4">
          Alle übrigen Dienste aktivieren wir erst, nachdem Sie im
          Einwilligungsbanner zugestimmt haben. Vorher werden sie weder
          geladen noch kontaktiert. Es gibt genau eine solche Kategorie:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <strong>Statistik</strong> — Google Analytics 4 (Abschnitt 7)
          </li>
        </ul>
        <p className="mb-4">
          Rechtsgrundlage für diese Dienste ist Ihre Einwilligung nach Art. 6
          Abs. 1 lit. a DSGVO in Verbindung mit § 25 Abs. 1 TDDDG.
        </p>

        <h3 className="font-semibold mb-2">Einwilligung ändern oder widerrufen</h3>
        <p className="mb-4">
          Sie können Ihre Auswahl jederzeit mit Wirkung für die Zukunft ändern
          oder vollständig widerrufen — der Widerruf ist genauso einfach wie
          die Erteilung:{" "}
          <ConsentSettingsLink className="underline">
            Datenschutz-Einstellungen öffnen
          </ConsentSettingsLink>
          . Denselben Link finden Sie dauerhaft im Fußbereich jeder Seite.
        </p>
        <p>
          Widerrufen Sie die Kategorie „Statistik“, löschen wir die von Google
          Analytics gesetzten Cookies und laden den Dienst nicht erneut.
          Unabhängig davon können Sie Cookies jederzeit in den Einstellungen
          Ihres Browsers löschen oder deren Speicherung generell unterbinden.
        </p>
      </section>

      {/* 6 */}
      <section>
        <h2 className="font-mono text-xl uppercase mb-4">
          6. Kontaktaufnahme
        </h2>

        <h3 className="font-semibold mb-2">Kontaktformular</h3>
        <p className="mb-4">
          Wenn Sie uns über das Formular auf dieser Website schreiben,
          verarbeiten wir die von Ihnen eingegebenen Daten — Ihren Namen, Ihre
          E-Mail-Adresse und Ihre Nachricht — um Ihre Anfrage zu bearbeiten
          und zu beantworten. Das Formular enthält zusätzlich ein für Sie
          unsichtbares Feld zur Spam-Abwehr, das keine personenbezogenen Daten
          erfasst.
        </p>
        {/* UNVERIFIED #1 — HIGHEST PRIORITY. Operator, country, storage location and
            retention could not be established, and the Art. 28 wording below
            asserts a contract that may not exist. Get an AVV or replace the
            service. */}
        <p className="mb-4">
          Für die technische Zustellung dieser Nachrichten an unser Postfach
          nutzen wir den Dienst Web3Forms. Ihre Formulardaten werden dabei an
          diesen Dienstleister übermittelt, der sie in unserem Auftrag als
          Auftragsverarbeiter nach Art. 28 DSGVO verarbeitet und ausschließlich
          zur Weiterleitung an uns verwendet. Eine Übermittlung an den Dienst
          findet erst statt, wenn Sie das Formular absenden.
        </p>
        <p className="mb-4">
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage
          auf den Abschluss eines Vertrags gerichtet ist, im Übrigen Art. 6
          Abs. 1 lit. f DSGVO aufgrund unseres berechtigten Interesses an der
          Beantwortung von Anfragen. Die Angabe der Daten ist freiwillig; ohne
          Name, E-Mail-Adresse und Nachricht können wir Ihre Anfrage jedoch
          nicht bearbeiten.
        </p>

        <h3 className="font-semibold mb-2">E-Mail und Telefon</h3>
        <p className="mb-4">
          Wenn Sie uns per E-Mail oder telefonisch kontaktieren, verarbeiten
          wir die dabei anfallenden Daten zur Bearbeitung Ihres Anliegens.
          Rechtsgrundlage ist ebenfalls Art. 6 Abs. 1 lit. b bzw. lit. f
          DSGVO.
        </p>

        <h3 className="font-semibold mb-2">Speicherdauer</h3>
        {/* UNVERIFIED #10 — no jurisdiction named for the retention periods. */}
        <p>
          Wir löschen Ihre Anfrage, sobald sie abschließend bearbeitet ist und
          der Löschung keine gesetzlichen Aufbewahrungspflichten
          entgegenstehen — etwa handels- oder steuerrechtliche Fristen bei
          Anfragen, aus denen ein Auftrag entsteht. Sie können der Speicherung
          jederzeit widersprechen oder Ihre Einwilligung widerrufen.
        </p>
      </section>

      {/* 7 */}
      <section>
        <h2 className="font-mono text-xl uppercase mb-4">
          7. Webanalyse: Google Analytics 4
        </h2>
        {/* UNVERIFIED #3 — GA4 is not live yet (NEXT_PUBLIC_GA_ID unset). This
            section and the measurement ID must ship in the same deploy. */}
        <p className="mb-4">
          Sofern Sie in die Kategorie „Statistik“ eingewilligt haben, nutzen
          wir Google Analytics 4, einen Webanalysedienst der Google Ireland
          Limited, Gordon House, Barrow Street, Dublin 4, Irland
          (nachfolgend „Google“).
        </p>
        <p className="mb-4">
          Google Analytics ermöglicht uns eine Auswertung darüber, wie unsere
          Website genutzt wird — etwa welche Seiten aufgerufen werden, wie
          lange Besuche dauern und über welche Quellen Besucher zu uns
          gelangen. Dazu setzt Google Cookies auf Ihrem Endgerät und
          verarbeitet unter anderem Ihre gekürzte IP-Adresse, Angaben zu
          Browser und Endgerät sowie Ihre Interaktionen auf der Website. Wir
          nutzen diese Auswertung ausschließlich in aggregierter Form; eine
          Zusammenführung mit anderen Daten oder eine Identifizierung
          einzelner Personen findet durch uns nicht statt.
        </p>
        {/* UNVERIFIED #4 — "IP-Anonymisierung" / "gekürzte IP" is Universal
            Analytics vocabulary; GA4 handles this differently. */}
        <p className="mb-4">
          Wir haben die IP-Anonymisierung aktiviert und den sogenannten
          Consent Mode so konfiguriert, dass sämtliche Einwilligungssignale
          standardmäßig auf „denied“ stehen. Werbebezogene Funktionen sind
          dauerhaft deaktiviert: Wir fragen keine Einwilligung für Werbung ab
          und geben daher auch keine frei.{" "}
          <strong>
            Vor Ihrer Einwilligung wird kein Skript von Google geladen und
            keine Verbindung zu Google hergestellt.
          </strong>
        </p>
        <p className="mb-4">
          Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a
          DSGVO und § 25 Abs. 1 TDDDG. Mit Google besteht ein Vertrag über
          Auftragsverarbeitung nach Art. 28 DSGVO. Eine Übermittlung an die
          Google LLC in den USA kann nicht ausgeschlossen werden; die Google
          LLC ist nach dem EU-U.S. Data Privacy Framework zertifiziert,
          ergänzend gelten Standardvertragsklauseln. Mögliche Risiken einer
          solchen Übermittlung bestehen darin, dass US-Behörden unter
          Umständen auf diese Daten zugreifen können und Ihnen dagegen kein
          mit der EU vergleichbarer Rechtsschutz zur Verfügung steht.
        </p>
        <p>
          Ihre Einwilligung können Sie jederzeit widerrufen (Abschnitt 5);
          wir löschen dann die von Google Analytics gesetzten Cookies. Weitere
          Informationen zum Umgang mit Nutzerdaten bei Google finden Sie in
          der{" "}
          <a
            href="https://policies.google.com/privacy?hl=de"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Datenschutzerklärung von Google
          </a>
          .
        </p>
      </section>

      {/* 8 */}
      <section>
        <h2 className="font-mono text-xl uppercase mb-4">
          8. Schriftarten, Bilder und Videos
        </h2>
        <p className="mb-4">
          Sämtliche Schriftarten, Bilder, Videos und interaktiven 3D-Szenen
          dieser Website liefern wir von unserem eigenen Server aus. Es werden
          insbesondere <strong>keine Google Fonts</strong> und keine anderen
          externen Schriftarten-, Bild- oder Video-Dienste zur Laufzeit
          nachgeladen. Beim Aufruf dieser Seiten wird deshalb keine Verbindung
          zu Google oder einem anderen Drittanbieter hergestellt und Ihre
          IP-Adresse nicht an solche Anbieter übermittelt.
        </p>
        <p>
          Das gilt ausdrücklich auch für die 3D-Szenen: Sie wurden mit der
          Software Spline erstellt, werden aber als Datei auf unserem eigenen
          Server vorgehalten und von dort ausgeliefert. Eine Verbindung zu
          Servern von Spline findet beim Besuch dieser Website zu keinem
          Zeitpunkt statt.
        </p>
      </section>

      {/* 9 */}
      <section>
        <h2 className="font-mono text-xl uppercase mb-4">
          9. Empfänger und Übermittlung in Drittländer
        </h2>
        <p className="mb-4">
          Personenbezogene Daten geben wir nur weiter, soweit dies für die
          oben beschriebenen Zwecke erforderlich ist. Empfänger sind
          ausschließlich:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>unser Hosting-Dienstleister (Abschnitt 4),</li>
          <li>
            der Dienstleister für die Zustellung von Formularnachrichten
            (Abschnitt 6),
          </li>
          <li>
            der in Abschnitt 7 genannte Anbieter — und dieser nur, wenn Sie
            eingewilligt haben.
          </li>
        </ul>
        <p>
          Soweit Daten in die USA übermittelt werden, geschieht dies auf
          Grundlage eines Angemessenheitsbeschlusses (EU-U.S. Data Privacy
          Framework), ergänzender Standardvertragsklauseln oder — bei
          Anbietern ohne solche Garantien — auf Grundlage Ihrer ausdrücklichen
          Einwilligung nach Art. 49 Abs. 1 lit. a DSGVO. Einen Verkauf Ihrer
          Daten schließen wir aus.
        </p>
      </section>

      {/* 10 */}
      <section>
        <h2 className="font-mono text-xl uppercase mb-4">
          10. Datensicherheit
        </h2>
        <p>
          Diese Website nutzt aus Sicherheitsgründen eine
          TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
          daran, dass die Adresszeile Ihres Browsers „https://“ anzeigt.
          Darüber hinaus setzen wir technische und organisatorische Maßnahmen
          ein, um Ihre Daten gegen zufällige oder vorsätzliche Manipulation,
          Verlust, Zerstörung und unberechtigten Zugriff zu schützen.
        </p>
      </section>

      {/* 11 */}
      <section>
        <h2 className="font-mono text-xl uppercase mb-4">
          11. Änderungen dieser Datenschutzerklärung
        </h2>
        <p>
          Wir passen diese Datenschutzerklärung an, sobald sich die
          Datenverarbeitung auf dieser Website ändert — etwa wenn ein Dienst
          hinzukommt oder wegfällt. Ändert sich dabei der Umfang der Dienste,
          für die wir eine Einwilligung benötigen, fragen wir Ihre
          Einwilligung erneut ab.
        </p>
        {/* UNVERIFIED #13 — manual date; bump it whenever this page changes. */}
        <p className="mt-4 text-sm text-gray-500">Stand: {STAND}</p>
      </section>
    </LegalPage>
  );
}
