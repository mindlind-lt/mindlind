import { Separator } from "@/components/ui/separator";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { ParallaxImage } from "@/components/ui/parallax-image";
import ImageParticles from "@/components/image-particles/image-particles";
import Image from "next/image";
import DoorButton from "@/components/door-button/door-button";

import type { Metadata } from "next";

import { breadcrumbSchema, caseStudySchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "LuxFloor",
  description:
    "Website und E-Commerce für LuxFloor — moderner Markenauftritt für hochwertige Bodenbeläge und Interior-Produkte.",
  alternates: { canonical: "/projects/luxfloor" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/projects/luxfloor",
    siteName: "Mindlind Werbeagentur",
    title: "LuxFloor | Mindlind Werbeagentur",
    description:
      "Website und E-Commerce für LuxFloor — moderner Markenauftritt für hochwertige Bodenbeläge und Interior-Produkte.",
    images: [
      {
        url: "/images/case-luxfloor-1.webp",
        alt: "LuxFloor — Mindlind Werbeagentur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxFloor | Mindlind Werbeagentur",
    description:
      "Website und E-Commerce für LuxFloor — moderner Markenauftritt für hochwertige Bodenbeläge und Interior-Produkte.",
    images: [
      {
        url: "/images/case-luxfloor-1.webp",
        alt: "LuxFloor — Mindlind Werbeagentur",
      },
    ],
  },
};

export default function PageCaseLuxfloor() {
  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Projekte", path: "/projects" },
              { name: "LuxFloor", path: "/projects/luxfloor" },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            caseStudySchema({ path: "/projects/luxfloor", name: "LuxFloor" }),
          ),
        }}
      />

      {/* Hero */}
      <ImageParticles
        src="/images/case-luxfloor-1.webp"
        alt=""
        style={{ aspectRatio: "21/9", minHeight: "70svh" }}
      />

      {/* Original parallax hero, kept for reference
      <ParallaxImage
        src="/images/case-luxfloor-1.webp"
        height="clamp(340px, 60vh, 750px)"
        strength={80}
        className="w-full"
      />
      */}


      {/* Data */}
      <div className="container mx-auto px-5 py-10 lg:py-15">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl tracking-tight font-bold -mt-1 uppercase">LuxFloor</h1>
          </div>
          <div>
            <div className="pills flex-wrap lg:justify-end">
              <div className="pills-item">Website</div>
              <div className="pills-item">SEO</div>
              <div className="pills-item">E-Commerce</div>
              <div className="pills-item">Custom Calculator</div>
              <div className="pills-item">Interior</div>
            </div>
          </div>
        </div>

        <Separator className="bg-black my-10 lg:my-15" />

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:flex lg:justify-between lg:gap-10">
          <div>
            <div className="text-xs uppercase mb-2 lg:mb-5">CLIENT</div>
            <div className="text-base font-medium">LuxFloor</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-2 lg:mb-5">NICHE</div>
            <div className="text-base font-medium">Flooring / Interior / E-Commerce</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-2 lg:mb-5">YEAR</div>
            <div className="text-base font-medium">2024</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-2 lg:mb-5">TIMELINE</div>
            <div className="text-base font-medium">1 Monat</div>
          </div>
        </div>

        <div className="mt-10 lg:mt-15">
          <DoorButton className="w-full" href="https://lux-floor.de/" target="_blank">OPEN WEBSITE</DoorButton>
        </div>

      </div>


      {/* Short intro text */}
      <div className="container mx-auto px-5">

        <div className="text-lg sm:text-xl lg:text-2xl font-medium space-y-3 max-w-250 my-8 lg:my-12">
          <p>LuxFloor ist ein Anbieter hochwertiger Bodenbeläge mit Fokus auf luxuriöse Laminate, Parkett, Designböden und exklusive Oberflächen für moderne Wohn- und Gewerberäume. Das Unternehmen verbindet ein breites Produktsortiment mit individueller Beratung, einem großen eigenen Lager und europaweiter Lieferung.</p>
          <p>Unsere Aufgabe bestand darin, einen digitalen Auftritt zu entwickeln, der nicht wie ein gewöhnlicher Onlineshop wirkt, sondern wie ein hochwertiger Showroom für exklusive Bodenwelten. Die Website sollte Produkte verkaufen, Qualität sichtbar machen und Kundinnen und Kunden gleichzeitig bei der Auswahl des passenden Bodens unterstützen.</p>
        </div>

      </div>



      {/* About client */}
      <div className="container mx-auto px-5">
        <div className="bg-[#F1E9E1] rounded-xl flex flex-col lg:flex-row items-center gap-8 lg:gap-25 my-10 lg:my-15 p-6 lg:pl-15 lg:pr-30 lg:py-10">
          <div className="w-full lg:flex-1">
            <div className="flex items-center justify-center py-6 px-5 min-h-40 lg:py-10 lg:min-h-50">
              <Image
                src="/images/case-luxfloor-logo.svg"
                alt=""
                width={220}
                height={120}
                className="max-w-full h-auto"
              />
            </div>
          </div>
          <div className="w-full lg:flex-2">
            <p className="text-lg lg:text-xl leading-relaxed">Ein Bodenbelag ist kein einfaches Produkt. Er verändert Räume, Atmosphäre und Kaufentscheidungen — deshalb braucht er eine digitale Präsentation, die Orientierung und Emotion verbindet.</p>
          </div>
        </div>
      </div>


      {/* Started from */}
      <div className="container mx-auto px-5 py-10 lg:py-15 flex flex-col lg:flex-row gap-6 lg:gap-20">
        <h2 className="text-xl font-semibold flex-1 lg:max-w-50">Started From</h2>
        <div className="text-base space-y-3 flex-2">LuxFloor startete mit einem großen Sortiment, starken Produkten und einer klaren Spezialisierung auf hochwertige Bodenbeläge. Die Herausforderung bestand darin, diese Produktvielfalt digital übersichtlich, hochwertig und verkaufsorientiert darzustellen.</div>
        <div className="text-base space-y-3 flex-2">Wir begannen damit, die Website in zwei zentrale Bereiche zu gliedern: eine starke Präsentationsfläche für die Marke und einen leistungsfähigen Shop für das Sortiment. Die Startseite sollte Vertrauen schaffen und die Qualität der Marke vermitteln, während der Shop schnell, logisch und komfortabel durch viele Produkte führt.</div>
      </div>


      <div className="container mx-auto px-5 py-10 lg:py-15">
        <Image
          src="/images/case-luxfloor-2.webp"
          width={1440}
          height={1440}
          alt=""
          className="w-full rounded-lg"
        />
      </div>


      {/* Process */}
      <div className="container mx-auto px-5 py-10 lg:py-15 flex flex-col lg:flex-row gap-6 lg:gap-20">
        <h2 className="text-xl font-semibold flex-1 lg:max-w-50">Process</h2>
        <div className="text-base space-y-3 flex-2">
          <p>Die zentrale Herausforderung lag in der Kombination aus Design, Produktlogik und technischer Alltagstauglichkeit. Bodenbeläge werden nach Farbe, Material, Oberfläche, Format, Struktur und Einsatzbereich ausgewählt. Deshalb musste der Shop deutlich mehr leisten als eine einfache Produktliste.</p>
        </div>
        <div className="text-base space-y-3 flex-2">
          <p>Wir entwickelten eine klare E-Commerce-Struktur mit komfortablen Filtern, verständlichen Kategorien und einer Nutzerführung, die Kundinnen und Kunden schneller zum passenden Produkt bringt. Zusätzlich wurde ein individueller Kalkulator integriert, mit dem der Bedarf für ein Bodenprojekt einfacher eingeschätzt werden kann.</p>
        </div>
        <div className="text-base space-y-3 flex-2">
          <p>Viele Elemente der Website wurden individuell gestaltet: Icons, grafische Bestandteile, Layouts und zentrale Interface-Elemente. Dadurch erhielt LuxFloor keinen Standard-Shop, sondern einen eigenständigen digitalen Auftritt, der zur hochwertigen Positionierung der Marke passt.</p>
        </div>
      </div>


      {/* 2 photos */}
      <div className="px-5 py-10 lg:px-8 lg:py-15">
        <div className="flex flex-col lg:flex-row gap-5">
          <div>
            <Image
              src="/images/case-luxfloor-3.webp"
              width={1000}
              height={600}
              alt=""
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src="/images/case-luxfloor-4.webp"
              width={1000}
              height={600}
              alt=""
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>


      {/* More text */}
      <div className="container mx-auto px-5 py-10 lg:py-15">
        <div className="text-lg lg:text-xl space-y-3 max-w-235">
          <p>Die visuelle Richtung wurde hochwertig, ruhig und architektonisch aufgebaut. Große Flächen, klare Produktdetails, edle Materialien und eine reduzierte Gestaltung stellen die Böden in den Mittelpunkt.</p>
          <p>Der Auftritt sollte nicht nur Produkte zeigen, sondern ein Gefühl für Räume, Oberflächen und Wohnqualität vermitteln.</p>
        </div>
      </div>


      <Separator />


      {/* Text 2 */}
      <div className="bg-white">
        <div className="container mx-auto px-5 py-10 lg:py-15">
          <div className="text-lg lg:text-xl space-y-3 max-w-235">
            <p>Ein besonderer Fokus lag auf der Shop-Nutzung. Kundinnen und Kunden sollen Produkte nach relevanten Kriterien filtern, vergleichen und schneller verstehen können, welcher Boden zu ihrem Projekt passt.</p>
            <p>Der individuelle Kalkulator unterstützt zusätzlich bei der Planung und reduziert Unsicherheit im Kaufprozess — besonders bei Mengen, Flächen und Bedarf.</p>
          </div>
        </div>
      </div>


      <Separator />


      {/* Results */}
      <div className="container mx-auto px-5 py-10 lg:py-15 flex flex-col lg:flex-row gap-6 lg:gap-20">
        <h2 className="text-xl font-semibold flex-1 lg:max-w-50">Results</h2>
        <div className="text-base space-y-3 flex-2">
          <p>Das Ergebnis ist ein hochwertiger digitaler Auftritt, der LuxFloor als moderne, serviceorientierte und exklusive Marke im Bereich Bodenbeläge positioniert. Die Website verbindet eine starke Markenpräsentation mit einem funktionalen Onlineshop, intelligenter Produktstruktur und praktischen Verkaufselementen.</p>
        </div>
        <div className="text-base space-y-3 flex-2">
          <p>LuxFloor erhält damit nicht nur einen Shop, sondern ein digitales Verkaufssystem: übersichtlich, hochwertig, skalierbar und auf langfristige Sichtbarkeit vorbereitet. Durch die SEO-Struktur, die klare Nutzerführung und die einfache Produktverwaltung entsteht eine solide Grundlage für Wachstum im europäischen Markt.</p>
        </div>
      </div>

      <div className="h-10 lg:h-20"></div>


    </>
  )
}

