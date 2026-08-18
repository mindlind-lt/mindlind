import { Separator } from "@/components/ui/separator";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { ParallaxImage } from "@/components/ui/parallax-image";
import Image from "next/image";
import DoorButton from "@/components/door-button/door-button";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Factory SL",
  description:
    "Website für Factory SL — moderner Markenauftritt für Luxus-Detailing und Fahrzeugaufbereitung.",
  alternates: { canonical: "/projects/factorysl" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/projects/factorysl",
    siteName: "Mindlind Werbeagentur",
    title: "Factory SL | Mindlind Werbeagentur",
    description:
      "Website für Factory SL — moderner Markenauftritt für Luxus-Detailing und Fahrzeugaufbereitung.",
    images: [
      {
        url: "/images/case-factorysl-1.webp",
        alt: "Factory SL — Mindlind Werbeagentur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Factory SL | Mindlind Werbeagentur",
    description:
      "Website für Factory SL — moderner Markenauftritt für Luxus-Detailing und Fahrzeugaufbereitung.",
    images: [
      {
        url: "/images/case-factorysl-1.webp",
        alt: "Factory SL — Mindlind Werbeagentur",
      },
    ],
  },
};

export default function PageCaseFactorysl() {
  return (
    <>

      {/* Hero */}
      <ParallaxImage
        src="/images/case-factorysl-5.webp"
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
            <h1 className="text-8xl tracking-tight font-bold -mt-1 uppercase">Factory SL</h1>
          </div>
          <div>
            <div className="pills justify-end">
              <div className="pills-item">Website</div>
              <div className="pills-item">Luxury Detailing</div>
              <div className="pills-item">Automotive</div>
              <div className="pills-item">Booking System</div>
              <div className="pills-item">Content Production</div>
            </div>
          </div>
        </div>

        <Separator className="bg-black my-15" />

        <div className="flex justify-between gap-10">
          <div>
            <div className="text-xs uppercase mb-5">CLIENT</div>
            <div className="text-base font-medium">Factory SL</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">NICHE</div>
            <div className="text-base font-medium">Luxury Detailing / Automotive Restoration</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">YEAR</div>
            <div className="text-base font-medium">2024</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">TIMELINE</div>
            <div className="text-base font-medium">Ongoing</div>
          </div>
        </div>

        <div className="mt-15">
          <DoorButton className="w-full" href="https://factorysl.de/" target="_blank">OPEN WEBSITE</DoorButton>
        </div>

      </div>


      {/* Short intro text */}
      <div className="container mx-auto px-5">

        <div className="text-2xl font-medium space-y-3 max-w-250 my-12">
          <p>Factory SL ist eine exklusive Detailing- und Restaurationsmarke aus Düsseldorf, spezialisiert auf hochwertige Fahrzeugpflege, Lackveredelung, Schutzfolierung, Innenraumaufbereitung und die Restaurierung besonderer Fahrzeuge. Das Unternehmen arbeitet mit Premiumfahrzeugen, Supersportwagen, Luxusautos und klassischen Oldtimern, bei denen jedes Detail zählt.</p>
          <p>Unsere Aufgabe bestand darin, einen digitalen Auftritt zu entwickeln, der diese Präzision und Exklusivität sichtbar macht. Die Website sollte nicht wie eine gewöhnliche Autopflege-Seite wirken, sondern wie eine moderne High-End-Werkstatt für Fahrzeuge mit besonderem Anspruch.</p>
        </div>

      </div>


      {/* About client */}
      <div className="container mx-auto px-5">
        <div className="bg-[#E74A4110] rounded-xl flex items-center gap-25 my-15 pl-15 pr-30 py-10">
          <div className="flex-1">
            <div className="flex items-center justify-center py-10 px-5 min-h-50">
              <Image 
                src="/images/case-factorysl-logo.webp"
                alt=""
                width={220}
                height={120}
              />
            </div>
          </div>
          <div className="flex-2">
            <p className="text-[#843B35] font-medium text-xl leading-relaxed">Luxusfahrzeuge brauchen keine Standardpflege. Sie brauchen Präzision, Erfahrung und einen digitalen Auftritt, der diesen Qualitätsanspruch sofort spürbar macht.</p>
          </div>
        </div>
      </div>


      {/* Started from */}
      <div className="container mx-auto px-5 py-15 flex gap-20">
        <h2 className="text-xl font-semibold flex-1 max-w-50">Started From</h2>
        <div className="text-base space-y-3 flex-2">Factory SL startete mit einem klaren Qualitätsanspruch und einem sehr spezialisierten Leistungsangebot. Im Mittelpunkt stehen Fahrzeuge, die für ihre Besitzerinnen und Besitzer mehr sind als reine Fortbewegungsmittel: Wertobjekte, Sammlerstücke, emotionale Investments oder seltene Klassiker.</div>
        <div className="text-base space-y-3 flex-2">Wir begannen damit, die Marke nicht als klassische Fahrzeugpflege zu positionieren, sondern als exklusiven Detailing- und Restaurationspartner. Die Website musste zeigen, dass es hier nicht um schnelle Standardleistungen geht, sondern um hochwertige Handarbeit, moderne Technik, professionelle Materialien und einen sehr sorgfältigen Umgang mit jedem Fahrzeug.</div>
      </div>


      <div className="container mx-auto px-5 py-15">
        <Image
          src="/images/case-factorysl-3.webp"
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
          <p>Die zentrale Herausforderung bestand darin, ein technisches und handwerklich präzises Angebot emotional und hochwertig zu präsentieren. Leistungen wie Politur, Keramikversiegelung, Paint Protection Film, Vinylfolierung, Innenraumreinigung und Oldtimer-Restaurierung müssen verständlich erklärt werden, ohne ihren Premium-Charakter zu verlieren.</p>
        </div>
        <div className="text-base space-y-3 flex-2">
          <p>Wir entwickelten eine individuelle Website mit klarer Struktur, starker visueller Inszenierung und einer Nutzerführung, die Interessenten gezielt zu den passenden Leistungen führt. Jeder Bereich wurde so aufgebaut, dass Qualität, Schutz, Werterhalt und Präzision im Vordergrund stehen.</p>
        </div>
        <div className="text-base space-y-3 flex-2">
          <p>Ein wichtiger Bestandteil war außerdem die Integration einer Anfrage- und Buchungslogik. Nutzerinnen und Nutzer können Leistungen entdecken, den passenden Service besser einordnen und direkt den nächsten Schritt zur Anfrage oder Terminvereinbarung gehen.</p>
        </div>
      </div>


      {/* 2 photos */}
      <div className="px-8 py-15">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Image
              src="/images/case-factorysl-2.webp"
              width={600}
              height={600}
              alt=""
              className="w-full rounded-lg object-cover h-[600px]"
            />
          </div>
          <div>
            <Image
              src="/images/case-factorysl-4.webp"
              width={600}
              height={600}
              alt=""
              className="w-full rounded-lg object-cover h-[600px]"
            />
          </div>
        </div>
      </div>


      {/* More text */}
      <div className="container mx-auto px-5 py-15">
        <div className="text-xl space-y-3 max-w-235">
          <p>Die visuelle Richtung wurde bewusst dunkel, technisch und hochwertig entwickelt. Glänzende Lackoberflächen, präzise Lichtreflexe, klare Werkstattdetails und eine futuristische Automotive-Ästhetik erzeugen eine Atmosphäre, die zur Arbeit von Factory SL passt.</p>
          <p>Der digitale Auftritt sollte die gleiche Wirkung haben wie ein perfekt aufbereiteter Lack: sauber, tief, präzise und hochwertig.</p>
        </div>
      </div>


      <Separator />


      {/* Text 2 */}
      <div className="bg-white">
        <div className="container mx-auto px-5 py-15">
          <div className="text-xl space-y-3 max-w-235">
            <p>Neben dem Webdesign spielte auch die Content-Produktion eine wichtige Rolle. Unser Team war vor Ort, um Bild- und Videomaterial für die Website zu erstellen. Dadurch konnten echte Arbeitsprozesse, Fahrzeuge und Details in die digitale Markenwelt integriert werden.</p>
            <p>Die Website wirkt dadurch nicht austauschbar, sondern nah an der tatsächlichen Qualität des Unternehmens. Sie zeigt nicht nur Leistungen, sondern vermittelt das Gefühl von Handwerk, Präzision und exklusiver Fahrzeugpflege.</p>
          </div>
        </div>
      </div>


      <Separator />


      {/* Results */}
      <div className="container mx-auto px-5 py-15 flex gap-20">
        <h2 className="text-xl font-semibold flex-1 max-w-50">Results</h2>
        <div className="text-base space-y-3 flex-2">
          <p>Das Ergebnis ist ein hochwertiger digitaler Auftritt, der Factory SL als exklusive Detailing-Adresse in Düsseldorf positioniert. Die Website verbindet starke visuelle Inszenierung, klare Leistungsstruktur, Anfrage- und Buchungslogik sowie echten Content aus dem Unternehmen.</p>
        </div>
        <div className="text-base space-y-3 flex-2">
          <p>Factory SL wird dadurch nicht nur als Anbieter für Fahrzeugpflege wahrgenommen, sondern als spezialisierte Premium-Marke für Schutz, Pflege und Restaurierung besonderer Fahrzeuge. Der Auftritt stärkt Vertrauen, macht die Qualität sichtbar und schafft eine professionelle Grundlage für Anfragen, Sichtbarkeit und weiteres Wachstum.</p>
        </div>
      </div>

      <div className="h-20"></div>

    </>
  )
}

