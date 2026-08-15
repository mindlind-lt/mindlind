import { Separator } from "@/components/ui/separator";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { ParallaxImage } from "@/components/ui/parallax-image";
import Image from "next/image";
import DoorButton from "@/components/door-button/door-button";

import type { Metadata } from "next";

// Placeholder page — `noindex` until the case study is written.
export const metadata: Metadata = {
  title: "OnlySmile",
  description: "Case Study in Vorbereitung.",
  alternates: { canonical: "/projects/onlysmile" },
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/projects/onlysmile",
    siteName: "Mindlind Werbeagentur",
    title: "OnlySmile | Mindlind Werbeagentur",
    description: "Case Study in Vorbereitung.",
    images: [
      {
        url: "/images/case-onlysmile-1.png",
        alt: "OnlySmile — Mindlind Werbeagentur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OnlySmile | Mindlind Werbeagentur",
    description: "Case Study in Vorbereitung.",
    images: [
      {
        url: "/images/case-onlysmile-1.png",
        alt: "OnlySmile — Mindlind Werbeagentur",
      },
    ],
  },
};

export default function PageCaseOnlysmile() {
  return (
    <>

      {/* Hero */}
      <ParallaxImage
        src="/images/case-onlysmile-2.png"
        alt=""
        height="750px"
        strength={150}
        direction="down"
        preload
        className="w-full"
      />


      {/* Data */}
      <div className="container mx-auto px-5 py-15">

        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-8xl tracking-tight font-bold -mt-1 uppercase">OnlySmile</h1>
          </div>
          <div>
            <div className="pills justify-end">
              <div className="pills-item">Website</div>
              <div className="pills-item">E-Commerce</div>
              <div className="pills-item">Dental Beauty</div>
              <div className="pills-item">Conversion Design</div>
              <div className="pills-item">Made in Germany</div>
            </div>
          </div>
        </div>

        <Separator className="bg-black my-15" />

        <div className="flex justify-between gap-10">
          <div>
            <div className="text-xs uppercase mb-5">CLIENT</div>
            <div className="text-base font-medium">OnlySmile</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">NICHE</div>
            <div className="text-base font-medium">Dental Beauty / Teeth Whitening</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">YEAR</div>
            <div className="text-base font-medium">2023</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">TIMELINE</div>
            <div className="text-base font-medium">1 Monat</div>
          </div>
        </div>

        {/* <div className="mt-15">
          <DoorButton className="w-full" href="https://mondent.de/" target="_blank">OPEN WEBSITE</DoorButton>
        </div> */}

      </div>


      {/* Short intro text */}
      <div className="container mx-auto px-5">

        <div className="text-2xl font-medium space-y-3 max-w-250 my-12">
          <p>OnlySmile ist eine deutsche Dental-Beauty-Marke, spezialisiert auf Produkte zur Zahnaufhellung, Whitening-Systeme, Zahnpasten und Reinigungspuder. Das Unternehmen gehört zu den starken Anbietern im europäischen Markt für Zahnaufhellung und verbindet moderne Beauty-Produkte mit einem hohen Qualitätsanspruch in der Herstellung.</p>
          <p>Obwohl die Produkte bereits über Amazon verkauft werden, benötigte OnlySmile einen eigenen digitalen Markenauftritt. Unsere Aufgabe bestand darin, eine individuelle Website zu entwickeln, die Vertrauen stärkt, Produkte hochwertiger präsentiert und die Conversion im eigenen Shop verbessert.</p>
        </div>

      </div>


      {/* About client */}
      <div className="container mx-auto px-5">
        <div className="bg-white rounded-xl flex items-center gap-25 my-15 pl-15 pr-30 py-10">
          <div className="flex-1">
            <div className="flex items-center justify-center py-10 px-5 min-h-50">
              <Image 
                src="/images/case-onlyrooms-logo.avif"
                alt=""
                width={180}
                height={60}
              />
            </div>
          </div>
          <div className="flex-2">
            <p className="text-[#F671AD] font-medium text-xl leading-relaxed">Ein Whitening-Produkt verkauft nicht nur ein Ergebnis. Es verkauft Vertrauen, Sicherheit und das Gefühl, sich bewusst für Qualität zu entscheiden.</p>
          </div>
        </div>
      </div>


      {/* Started from */}
      <div className="container mx-auto px-5 py-15 flex gap-20">
        <h2 className="text-xl font-semibold flex-1 max-w-50">Started From</h2>
        <div className="text-base space-y-3 flex-2">OnlySmile startete mit einer starken Produktbasis und einer bestehenden Präsenz auf großen Verkaufsplattformen. Die Marke verfügte bereits über Whitening-Systeme, Zahnpasten und ergänzende Pflegeprodukte, die sowohl von privaten Kundinnen und Kunden als auch von professionellen Anwendern genutzt werden.</div>
        <div className="text-base space-y-3 flex-2">Die Herausforderung bestand darin, die Marke unabhängiger von Marktplätzen zu positionieren. Ein eigener Onlineshop sollte nicht nur Produkte verkaufen, sondern Herkunft, Qualität, Anwendung und Vertrauen klarer kommunizieren. Besonders wichtig war dabei, OnlySmile nicht wie einen gewöhnlichen Amazon-Seller wirken zu lassen, sondern wie eine eigenständige Dental-Beauty-Brand mit professionellem Anspruch.</div>
      </div>


      <div className="container mx-auto px-5 py-15">
        <Image
          src="/images/case-onlysmile-3.png"
          width={1440}
          height={1440}
          alt=""
          className="w-full rounded-lg"
        />
      </div>


      {/* Process */}
      <div className="container mx-auto px-5 py-15 flex gap-20">
        <h2 className="text-xl font-semibold flex-1 max-w-50">Process</h2>
        <div className="text-base space-y-3 flex-2">
          <p>Die zentrale Herausforderung lag darin, Beauty-Ästhetik, medizinisches Vertrauen und verkaufsorientierte Struktur miteinander zu verbinden. Zahnaufhellung ist ein sensibler Bereich: Kundinnen und Kunden erwarten sichtbare Ergebnisse, möchten aber gleichzeitig sicher sein, dass die Anwendung schonend und hochwertig ist.</p>
        </div>
        <div className="text-base space-y-3 flex-2">
          <p>OnlySmile ist ein familiengeführtes Unternehmen mit Produktion in Deutschland. Dieser Aspekt wurde bewusst in die Markenkommunikation integriert, da Herkunft, Kontrolle und Qualität gerade im Dental-Bereich eine wichtige Rolle spielen.</p>
        </div>
        <div className="text-base space-y-3 flex-2">
          <p>Die Produkte wurden so positioniert, dass ihre besondere Stärke klar verständlich wird: effektive Zahnaufhellung bei schonender Anwendung und ohne unnötige Belastung des Zahnschmelzes. Gleichzeitig musste die Website sowohl private Endkundinnen und Endkunden als auch professionelle Zielgruppen ansprechen, da die Whitening-Systeme auch von Zahnarztpraxen, Kosmetikstudios und professionellen Beauty-Anbietern eingesetzt werden.</p>
        </div>
      </div>


      {/* 2 photos */}
      <div className="px-8 py-15">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Image
              src="/images/case-onlysmile-1.png"
              width={800}
              height={800}
              alt=""
              className="w-full rounded-lg object-cover h-[600px]"
            />
          </div>
          <div>
            <Image
              src="/images/case-onlysmile-2.png"
              width={800}
              height={800}
              alt=""
              className="w-full rounded-lg object-cover h-[600px]"
            />
          </div>
        </div>
      </div>


      {/* More text */}
      <div className="container mx-auto px-5 py-15">
        <div className="text-xl space-y-3 max-w-235">
          <p>Die visuelle Richtung wurde clean, modern und hochwertig aufgebaut. Weiche Pink- und Blautöne, helle Oberflächen, glänzende Produktdetails, Lichtreflexe und eine leichte Nebelästhetik schaffen eine Verbindung zwischen Beauty, Dental Care und Premium-Produktwelt.</p>
          <p>Der Auftritt sollte frisch, sicher und professionell wirken — nicht klinisch kalt, aber auch nicht verspielt oder beliebig.</p>
        </div>
      </div>


      <div className="container mx-auto px-5 py-15">
        <Image
          src="/images/case-onlysmile-4.png"
          width={1440}
          height={720}
          alt=""
          className="w-full rounded-lg"
        />
      </div>


      {/* Text 2 */}
      <div className="container mx-auto px-5 py-15">
        <div className="text-xl space-y-3 max-w-235">
          <p>Ein besonderer Fokus lag auf der Produktpräsentation. Whitening-Geräte, Zahnpasten, Reinigungspuder und Zubehör müssen schnell verständlich sein und gleichzeitig hochwertig wirken.</p>
          <p>Deshalb wurden Produktbereiche, Vorteile, Anwendungshinweise und Trust-Elemente so strukturiert, dass sie die Kaufentscheidung unterstützen. Die Website führt Nutzerinnen und Nutzer klar durch das Angebot und schafft mehr Kontrolle über die Customer Journey als ein externer Marktplatz.</p>
        </div>
      </div>


      <Separator />


      {/* Results */}
      <div className="container mx-auto px-5 py-15 flex gap-20">
        <h2 className="text-xl font-semibold flex-1 max-w-50">Results</h2>
        <div className="text-base space-y-3 flex-1">
          <p>Das Ergebnis ist ein hochwertiger digitaler Markenshop, der OnlySmile als moderne, vertrauenswürdige und professionelle Dental-Beauty-Marke positioniert. Die Website verbindet individuelle Gestaltung, klare Produktkommunikation und eine conversion-orientierte Struktur.</p>
        </div>
        <div className="text-base space-y-3 flex-1">
          <p>OnlySmile erhält damit einen eigenen Markenraum, der weit über einen einfachen Produktshop hinausgeht. Herkunft, Qualität, Sicherheit und Ästhetik werden sichtbar gemacht, während der Shop gleichzeitig als skalierbare Grundlage für Wachstum, Kundenbindung und unabhängige Verkäufe dient.</p>
        </div>
        <div className="text-base space-y-3 flex-1">
          <p>Die Marke kann ihre Produkte nun nicht nur auf Marktplätzen präsentieren, sondern in einer eigenen digitalen Umgebung erklären, inszenieren und gezielt verkaufen.</p>
        </div>
      </div>

      <div className="h-20"></div>


    </>
  )
}

