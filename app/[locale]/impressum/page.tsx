import type { Metadata } from "next";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";

export const metadata: Metadata = {
  title: "Impressum – Mindlind",
  description: "Impressum der Mindlind MB gemäß § 5 TMG.",
};

export default function PageImpressum(){
    return (
        <>

            <Header />


            <div className="container">

                <div className="page-header">
                    <h1 className="page-header-title">Impressum</h1>
                </div>

                <div className="page-text pb-15">
                    <h2>Angaben gemäß § 5 TMG</h2>
                    <p>
                        Mindlind MB
                        <br />
                        Žirgų g. 18-6, Raudondvario k.
                        <br />
                        LT-14257 Vilnius
                        <br />Litauen
                    </p>
                    <h2>Kontakt</h2>
                    <p>
                        Telefon: +370 675 46 918
                        <br />
                        E-Mail: <a href="mailto:info@mindlind.de">info@mindlind.de</a>
                    </p>
                    <h2>EU-Streitschlichtung</h2>
                    <p>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.
                        <br />
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                    <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
                    <p>
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                    <p>Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener">eRecht24</a></p>								
                </div>

            </div>


            <Footer />
        
        </>
    )
}
