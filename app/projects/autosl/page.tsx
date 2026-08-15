import { Separator } from "@/components/ui/separator";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { ParallaxImage } from "@/components/ui/parallax-image";
import Image from "next/image";
import DoorButton from "@/components/door-button/door-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AutoSL",
  description:
    "Luxusfahrzeuge, präsentiert wie ein kuratiertes Sammlerstück statt wie ein Inserat — jedes Fahrzeug als Objekt mit Charakter und Wert.",
  alternates: { canonical: "/projects/autosl" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/projects/autosl",
    siteName: "Mindlind Werbeagentur",
    title: "AutoSL | Mindlind Werbeagentur",
    description:
      "Luxusfahrzeuge, präsentiert wie ein kuratiertes Sammlerstück statt wie ein Inserat — jedes Fahrzeug als Objekt mit Charakter und Wert.",
    images: [
      {
        url: "/images/case-autosl-1.jpg",
        alt: "AutoSL — Mindlind Werbeagentur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoSL | Mindlind Werbeagentur",
    description:
      "Luxusfahrzeuge, präsentiert wie ein kuratiertes Sammlerstück statt wie ein Inserat — jedes Fahrzeug als Objekt mit Charakter und Wert.",
    images: [
      {
        url: "/images/case-autosl-1.jpg",
        alt: "AutoSL — Mindlind Werbeagentur",
      },
    ],
  },
};


export default function PageCaseAutosl() {
  return (
    <>

      {/* Hero */}
      <ParallaxImage
        src="/images/case-autosl-1.jpg"
        alt=""
        height="750px"
        strength={80}
        preload
        className="w-full"
      />


      {/* Data */}
      <div className="container mx-auto px-5 py-15">

        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-8xl tracking-tight font-bold -mt-1 uppercase">AutoSL</h1>
          </div>
          <div>
            <div className="pills justify-end">
              <div className="pills-item">WEBSITE</div>
              <div className="pills-item">Luxury Cars</div>
              <div className="pills-item">Collector Cars</div>
              <div className="pills-item">Automotive</div>
              <div className="pills-item">CRM Integration</div>
            </div>
          </div>
        </div>

        <Separator className="bg-black my-15" />

        <div className="flex justify-between gap-10">
          <div>
            <div className="text-xs uppercase mb-5">CLIENT</div>
            <div className="text-base font-medium">AutoSL</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">NICHE</div>
            <div className="text-base font-medium">Luxury Automotive / Collector Cars</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">YEAR</div>
            <div className="text-base font-medium">2025</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">CLIENT LOCATION</div>
            <div className="text-base font-medium">GERMANY / INTERNATIONAL</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">TIMELINE</div>
            <div className="text-base font-medium">1 Monat</div>
          </div>
        </div>

        <div className="mt-15">
          <DoorButton className="w-full" href="https://funky-coffee.de/" target="_blank">OPEN WEBSITE</DoorButton>
        </div>

      </div>


      {/* Short intro text */}
      <div className="container mx-auto px-5">

        <div className="text-2xl font-medium space-y-3 max-w-250 my-12">
          <p>AutoSL ist ein international ausgerichtetes Unternehmen für den Verkauf exklusiver Luxus-, Sport- und Sammlerfahrzeuge. Im Mittelpunkt stehen seltene Automobile, limitierte Hypercars, klassische Oldtimer und Fahrzeuge, die für Sammler, Investoren und Enthusiasten einen besonderen Wert haben.</p>
          <p>Zum Portfolio gehören außergewöhnliche Modelle wie limitierte Bugatti-Varianten, Mercedes McLaren, Ferrari, Lamborghini und weitere seltene Fahrzeuge aus dem Premium- und Sammlersegment. Unsere Aufgabe bestand darin, diese Exklusivität digital so zu inszenieren, dass die Website nicht wie ein gewöhnlicher Fahrzeughandel wirkt, sondern wie ein hochwertiger digitaler Showroom.</p>
        </div>

      </div>



      {/* About client */}
      <div className="container mx-auto px-5">
        <div className="bg-white rounded-xl flex items-center gap-25 my-15 pl-15 pr-30 py-10">
          <div className="flex-1">
            <div className="flex items-center justify-center py-10 px-5 min-h-50">
              <Image 
                src="/images/case-autosl-logo.png"
                alt=""
                width={320}
                height={200}
              />
            </div>
          </div>
          <div className="flex-2">
            <p className="text-xl text-[#0E3A90] leading-relaxed">Luxusfahrzeuge brauchen eine digitale Umgebung, die nicht verkauft wie ein Inserat, sondern präsentiert wie ein kuratiertes Sammlerstück.</p>
          </div>
        </div>
      </div>


      {/* Started from */}
      <div className="container mx-auto px-5 py-15 flex gap-20">
        <h2 className="text-xl font-semibold flex-1 max-w-50">Started From</h2>
        <div className="text-base space-y-3 flex-2">AutoSL startete mit einem außergewöhnlichen Fahrzeugportfolio und einer starken Verbindung zur internationalen Automobil- und Motorsportwelt. Die Marke bewegt sich in einem Markt, in dem Vertrauen, Diskretion, Expertise und visuelle Qualität entscheidend sind.</div>
        <div className="text-base space-y-3 flex-2">Wir begannen damit, die Website nicht als klassische Händlerseite zu denken, sondern als digitalen Luxury-Showroom. Jedes Fahrzeug sollte hochwertig präsentiert werden, ohne die Nutzerführung zu verkomplizieren. Gleichzeitig musste die Plattform technisch so aufgebaut werden, dass neue Fahrzeuge effizient verwaltet und automatisch aktualisiert werden können.</div>
      </div>


      <div className="container mx-auto px-5 py-15">
        <Image
          src="/images/case-autosl-2.jpg"
          width={1440}
          height={600}
          alt=""
          className="w-full rounded-lg"
        />
      </div>


      {/* Process */}
      <div className="container mx-auto px-5 py-15 flex gap-20">
        <h2 className="text-xl font-semibold flex-1 max-w-50">Process</h2>
        <div className="text-base space-y-3 flex-2">
          <p>Die zentrale Herausforderung bestand darin, Exklusivität und technische Funktionalität miteinander zu verbinden. AutoSL benötigt einen Auftritt, der visuell dem Niveau der Fahrzeuge entspricht, gleichzeitig aber im Alltag als effizientes Verwaltungssystem funktioniert.</p>
          <p>Ein wichtiger Bestandteil des Projekts war die Anbindung an Mobile.de. Neue Fahrzeuge, die im offiziellen Account veröffentlicht werden, können automatisch auf der Website gespiegelt werden — inklusive hochwertiger Bilder, Fahrzeugdaten und aktueller Verfügbarkeit. Dadurch bleibt das Fahrzeugangebot aktuell, ohne doppelte Pflegeprozesse zu erzeugen.</p>
        </div>
        <div className="text-base space-y-3 flex-2">
          <p>Trotz dieser Integration wurde die Website auf Geschwindigkeit, klare Struktur und eine hochwertige Darstellung optimiert. Die Fahrzeuge werden nicht wie einfache Inserate gezeigt, sondern wie kuratierte Objekte: mit großen Bildern, reduzierter Informationsarchitektur und einer ruhigen, exklusiven Nutzerführung.</p>
        </div>
      </div>


      <div className="px-8 py-15">
        <div className="flex gap-5">
          <Image
            src="/images/case-autosl-3.jpg"
            width={1000}
            height={600}
            alt=""
            className="w-full rounded-lg"
          />
          <Image
            src="/images/case-autosl-4.jpg"
            width={1000}
            height={600}
            alt=""
            className="w-full rounded-lg"
          />
        </div>
      </div>


      {/* More text */}
      <div className="container mx-auto px-5 py-15">
        <div className="text-xl space-y-3 max-w-235">
          <p>Die visuelle Richtung wurde bewusst dunkel, cineastisch und luxuriös gestaltet. Glänzende Oberflächen, starke Kontraste, präzise Lichtführung und reduzierte Typografie erzeugen eine Atmosphäre, die eher an einen privaten Showroom als an einen klassischen Fahrzeugmarkt erinnert.</p>
          <p>So wird jedes Fahrzeug als Objekt mit Charakter, Geschichte und Wert inszeniert.</p>
        </div>
      </div>


      <div className="px-8 py-15">
        <div className="flex gap-5">
          <Image
            src="/images/case-autosl-5.jpg"
            width={1000}
            height={600}
            alt=""
            className="w-full rounded-lg"
          />
          <Image
            src="/images/case-autosl-6.jpg"
            width={1000}
            height={600}
            alt=""
            className="w-full rounded-lg"
          />
        </div>
      </div>


      {/* Text 2 */}
      <div className="container mx-auto px-5 py-15">
        <div className="text-xl space-y-3 max-w-235">
          <p>Ein besonderer Fokus lag auf der Verbindung zwischen Fahrzeugpräsentation und technischer Automatisierung. Die Website musste hochwertige Bilder und aktuelle Fahrzeugdaten übernehmen, gleichzeitig aber schnell, stabil und angenehm nutzbar bleiben.</p>
          <p>Die Integration wurde so umgesetzt, dass AutoSL sein Angebot effizient pflegen kann, während Interessenten eine klare, hochwertige und vertrauenswürdige Übersicht erhalten.</p>
        </div>
      </div>


      <Separator />


      {/* Results */}
      <div className="container mx-auto px-5 py-15 flex gap-20">
        <h2 className="text-xl font-semibold flex-1 max-w-50">Results</h2>
        <div className="text-base space-y-3 flex-2">
          <p>Das Ergebnis ist ein interaktiver digitaler Showroom, der AutoSL als Premium-Marke im internationalen Luxusautomobilmarkt positioniert. Die Website verbindet exklusive Fahrzeugpräsentation, klare Nutzerführung und eine effiziente technische Anbindung an bestehende Verkaufsprozesse.</p>
        </div>
        <div className="text-base space-y-3 flex-2">
          <p>AutoSL erhält damit eine digitale Plattform, die nicht nur Fahrzeuge zeigt, sondern Vertrauen, Wertigkeit und Expertise vermittelt. Die Marke wird als Zugang zu seltenen Automobilen inszeniert — diskret, hochwertig und technisch sauber umgesetzt.</p>
        </div>
      </div>

      <div className="h-20"></div>

    </>
  )
}

