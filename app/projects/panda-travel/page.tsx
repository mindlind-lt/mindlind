import { Separator } from "@/components/ui/separator";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { ParallaxImage } from "@/components/ui/parallax-image";
import ImageParticles from "@/components/image-particles/image-particles";
import Image from "next/image";
import DoorButton from "@/components/door-button/door-button";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panda Travel",
  description:
    "Website für Panda Travel — digitale Präsenz für Geschäftsreisen, China-Sourcing und Logistiklösungen.",
  alternates: { canonical: "/projects/panda-travel" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/projects/panda-travel",
    siteName: "Mindlind Werbeagentur",
    title: "Panda Travel | Mindlind Werbeagentur",
    description:
      "Website für Panda Travel — digitale Präsenz für Geschäftsreisen, China-Sourcing und Logistiklösungen.",
    images: [
      {
        url: "/images/case-pandatravel-1.webp",
        alt: "Panda Travel — Mindlind Werbeagentur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panda Travel | Mindlind Werbeagentur",
    description:
      "Website für Panda Travel — digitale Präsenz für Geschäftsreisen, China-Sourcing und Logistiklösungen.",
    images: [
      {
        url: "/images/case-pandatravel-1.webp",
        alt: "Panda Travel — Mindlind Werbeagentur",
      },
    ],
  },
};

export default function PageCasePandaTravel() {
  return (
    <>

      {/* Hero */}
      <ImageParticles
        src="/images/case-pandatravel-1.webp"
        alt=""
        style={{ aspectRatio: "21/9", minHeight: "70svh" }}
      />

      {/* Original parallax hero, kept for reference
      <ParallaxImage
        src="/images/case-pandatravel-1.webp"
        height="clamp(340px, 60vh, 750px)"
        strength={80}
        className="w-full"
      />
      */}


      {/* Data */}
      <div className="container mx-auto px-5 py-10 lg:py-15">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl tracking-tight font-bold -mt-1 uppercase">Panda Travel</h1>
          </div>
          <div>
            <div className="pills flex-wrap lg:justify-end">
              <div className="pills-item">Website</div>
              <div className="pills-item">Business Travel</div>
              <div className="pills-item">China Sourcing</div>
              <div className="pills-item">Booking System</div>
              <div className="pills-item">Custom Design</div>
            </div>
          </div>
        </div>

        <Separator className="bg-black my-10 lg:my-15" />

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:flex lg:justify-between lg:gap-10">
          <div>
            <div className="text-xs uppercase mb-2 lg:mb-5">CLIENT</div>
            <div className="text-base font-medium">Panda Travel</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-2 lg:mb-5">NICHE</div>
            <div className="text-base font-medium">Business Travel / China Sourcing / Logistics</div>
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

        {/* <div className="mt-10 lg:mt-15">
          <DoorButton className="w-full" href="https://lux-floor.de/" target="_blank">OPEN WEBSITE</DoorButton>
        </div> */}

      </div>



      {/* Short intro text */}
      <div className="container mx-auto px-5">

        <div className="text-lg sm:text-xl lg:text-2xl font-medium space-y-3 max-w-250 my-8 lg:my-12">
          <p>Panda Travel ist ein internationales Unternehmen mit Sitz in China, das Geschäftsreisen, Lieferantensuche und Handelsbegleitung für Unternehmerinnen, Unternehmer und Unternehmen organisiert. Der Fokus liegt nicht auf klassischen touristischen Reisen, sondern auf strukturierten Business-Reisen nach China.</p>
          <p>Das Angebot richtet sich an Menschen, die neue Lieferanten finden, eigene Produkte entwickeln, Produktionsprozesse verstehen oder ihr Business durch direkte Kontakte in China erweitern möchten. Panda Travel begleitet Teilnehmende dabei von der Vorbereitung über Besuche bei Herstellern bis hin zu Fragen rund um Logistik, Verpackung, Import und Zusammenarbeit mit chinesischen Partnern.</p>
        </div>

      </div>


      {/* About client */}
      <div className="container mx-auto px-5">
        <div className="bg-white rounded-xl flex flex-col lg:flex-row items-center gap-8 lg:gap-25 my-10 lg:my-15 p-6 lg:pl-15 lg:pr-30 lg:py-10">
          <div className="w-full lg:flex-1">
            <div className="flex items-center justify-center py-6 px-5 min-h-40 lg:py-10 lg:min-h-50">
              <Image
                src="/images/case-pandatravel-logo.webp"
                alt=""
                width={150}
                height={150}
                className="max-w-full h-auto"
              />
            </div>
          </div>
          <div className="w-full lg:flex-2">
            <p className="text-lg lg:text-xl leading-relaxed">Eine Business-Reise nach China ist mehr als ein Flug und ein Hotel. Sie braucht Orientierung, Vertrauen und einen Partner, der Märkte, Menschen und Prozesse vor Ort versteht.</p>
          </div>
        </div>
      </div>


      {/* Started from */}
      <div className="container mx-auto px-5 py-10 lg:py-15 flex flex-col lg:flex-row gap-6 lg:gap-20">
        <h2 className="text-xl font-semibold flex-1 lg:max-w-50">Started From</h2>
        <div className="text-base space-y-3 flex-2">Panda Travel startete mit einem besonderen Konzept: Unternehmerinnen und Unternehmer sollten China nicht nur besuchen, sondern den Handel mit China praktisch verstehen. Dazu gehören Lieferantensuche, Fabrikbesuche, Messebesuche, Verhandlungen, Produktentwicklung, Qualitätsfragen und die organisatorischen Schritte, die vor einem erfolgreichen Import wichtig sind.</div>
        <div className="text-base space-y-3 flex-2">Wir begannen damit, das komplexe Angebot in eine klare digitale Struktur zu bringen. Die Website musste erklären, für wen die Reisen geeignet sind, welche Vorteile Teilnehmende erhalten und warum Panda Travel nicht einfach ein Reiseanbieter ist, sondern ein professioneller Begleiter für Business, Sourcing und internationale Handelsprozesse.</div>
      </div>


      <div className="container mx-auto px-5 py-10 lg:py-15">
        <Image
          src="/images/case-pandatravel-2.webp"
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
          <p>Die zentrale Herausforderung bestand darin, ein erklärungsbedürftiges Angebot verständlich und hochwertig zu präsentieren. Business-Reisen nach China verbinden viele Themen: Reiseplanung, Lieferantensuche, Produktion, Logistik, kulturelle Orientierung und wirtschaftliche Entscheidungen. Diese Inhalte mussten so aufgebaut werden, dass Interessenten schnell Vertrauen entwickeln und den konkreten Nutzen erkennen.</p>
        </div>
        <div className="text-base space-y-3 flex-2">
          <p>Wir entwickelten eine individuelle Website mit klarer Nutzerführung, starker visueller Atmosphäre und einer Struktur, die Schritt für Schritt durch das Angebot führt. Dabei wurde China nicht klischeehaft dargestellt, sondern modern, wirtschaftlich, kulturell und visuell vielseitig inszeniert.</p>
        </div>
        <div className="text-base space-y-3 flex-2">
          <p>Ein wichtiger Bestandteil war außerdem die Buchungs- und Kalendersystematik. Interessenten können nachvollziehen, wann neue Reisen geplant sind, welche Formate verfügbar sind und wie sie sich für kommende Gruppenreisen anmelden können.</p>
        </div>
      </div>


      {/* 2 photos */}
      <div className="px-5 py-10 lg:px-8 lg:py-15">
        <div className="flex flex-col lg:flex-row gap-5">
          <div>
            <Image
              src="/images/case-pandatravel-3.webp"
              width={1000}
              height={600}
              alt=""
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src="/images/case-pandatravel-4.webp"
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
          <p>Die visuelle Richtung wurde dunkel, cineastisch und hochwertig entwickelt. Goldene und türkisfarbene Lichtakzente, moderne Metropolen, traditionelle Architekturelemente und atmosphärische Details schaffen eine Markenwelt, die Business, Reise und China-Kompetenz verbindet.</p>
          <p>Der Auftritt sollte nicht wie ein gewöhnliches Reiseportal wirken, sondern wie ein hochwertiges internationales Business-Erlebnis.</p>
        </div>
      </div>


      <div className="container mx-auto px-5 py-10 lg:py-15">
        <Image
          src="/images/case-pandatravel-5.webp"
          width={1440}
          height={720}
          alt=""
          className="w-full rounded-lg"
        />
      </div>


      {/* Text 2 */}
      <div className="bg-white">
        <div className="container mx-auto px-5 py-10 lg:py-15">
          <div className="text-lg lg:text-xl space-y-3 max-w-235">
            <p>Neben dem geschäftlichen Fokus wurde auch die kulturelle Seite Chinas berücksichtigt. Reisen können mit besonderen Stationen verbunden werden — von modernen Städten und Produktionszentren bis hin zu bekannten Sehenswürdigkeiten, traditionellen Orten und eindrucksvollen Landschaften.</p>
            <p>Dadurch entsteht ein Angebot, das nicht nur geschäftlich relevant ist, sondern auch ein tieferes Verständnis für China vermittelt.</p>
          </div>
        </div>
      </div>


      <Separator />


      {/* Results */}
      <div className="container mx-auto px-5 py-10 lg:py-15 flex flex-col lg:flex-row gap-6 lg:gap-20">
        <h2 className="text-xl font-semibold flex-1 lg:max-w-50">Results</h2>
        <div className="text-base space-y-3 flex-2">
          <p>Das Ergebnis ist ein individueller digitaler Auftritt, der Panda Travel als vertrauenswürdigen Partner für Geschäftsreisen nach China positioniert. Die Website erklärt ein komplexes Angebot klar, schafft Vertrauen und macht den konkreten Nutzen für Unternehmerinnen, Unternehmer und Unternehmen sichtbar.</p>
        </div>
        <div className="text-base space-y-3 flex-2">
          <p>Panda Travel erhält damit nicht nur eine Präsentationsseite, sondern ein funktionales System für Information, Lead-Generierung und Reiseanfragen. Der digitale Auftritt verbindet Business, Sourcing, Logistik und kulturelle Orientierung in einer hochwertigen, interaktiven Markenwelt.</p>
        </div>
      </div>

      <div className="h-10 lg:h-20"></div>


    </>
  )
}

