import type { Metadata } from "next";
import LegalPage from "@/components/legal-page/legal-page";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Anbieterkennzeichnung der Mindlind Werbeagentur.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/impressum",
    siteName: "Mindlind Werbeagentur",
    title: "Impressum | Mindlind Werbeagentur",
    description: "Anbieterkennzeichnung der Mindlind Werbeagentur.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Impressum | Mindlind Werbeagentur",
    description: "Anbieterkennzeichnung der Mindlind Werbeagentur.",
  },
};

export default function PageImprint() {
  return (
    <LegalPage title="Impressum" path="/impressum">
      <section>
        <h2 className="font-mono text-xl uppercase mb-4">
          Angaben gemäß § 5 DDG
        </h2>
        <p>
          Mindlind MB
          <br />
          Žirgų g. 18-6, Raudondvario k.
          <br />
          LT-14257 Vilnius
          <br />
          Litauen
        </p>
      </section>

      <section>
        <h2 className="font-mono text-xl uppercase mb-4">Kontakt</h2>
        <p>
          Telefon: +370 675 46 918
          <br />
          E-Mail: info@mindlind.de
        </p>
      </section>

      <section>
        <h2 className="font-mono text-xl uppercase mb-4">
          EU-Streitschlichtung
        </h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          .
          <br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
      </section>

      <section>
        <h2 className="font-mono text-xl uppercase mb-4">
          Verbraucherstreitbeilegung/Universalschlichtungsstelle
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </section>

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
    </LegalPage>
  );
}