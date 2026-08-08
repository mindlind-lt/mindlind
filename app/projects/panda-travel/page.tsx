import { Separator } from "@/components/ui/separator";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { ParallaxImage } from "@/components/ui/parallax-image";
import Image from "next/image";
import DoorButton from "@/components/door-button/door-button";

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("/projects/panda-travel");

export default function PageCasePandaTravel() {
  return (
    <>

      {/* Hero */}
      <ParallaxImage
        src="/images/case-pandatravel-1.png"
        height="600px"
        strength={80}
        className="w-full"
      />


      {/* Data */}
      <div className="container mx-auto px-5 py-15">

        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-8xl tracking-tight font-bold -mt-1 uppercase">Panda Travel</h1>
          </div>
          <div>
            <div className="pills justify-end">
              <div className="pills-item">Website</div>
              <div className="pills-item">Business Travel</div>
              <div className="pills-item">China Sourcing</div>
              <div className="pills-item">Booking System</div>
              <div className="pills-item">Custom Design</div>
            </div>
          </div>
        </div>

        <Separator className="bg-black my-15" />

        <div className="flex justify-between gap-10">
          <div>
            <div className="text-xs uppercase mb-5">CLIENT</div>
            <div className="text-base font-medium">Panda Travel</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">NICHE</div>
            <div className="text-base font-medium">Business Travel / China Sourcing / Logistics</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">YEAR</div>
            <div className="text-base font-medium">2024</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">TIMELINE</div>
            <div className="text-base font-medium">1 Monat</div>
          </div>
        </div>

        {/* <div className="mt-15">
          <DoorButton className="w-full" href="https://lux-floor.de/" target="_blank">OPEN WEBSITE</DoorButton>
        </div> */}

      </div>



      {/* Short intro text */}
      <div className="container mx-auto px-5">

        <div className="text-2xl font-medium space-y-3 max-w-250 my-12">
          <p>Panda Travel ist ein internationales Unternehmen mit Sitz in China, das Geschäftsreisen, Lieferantensuche und Handelsbegleitung für Unternehmerinnen, Unternehmer und Unternehmen organisiert. Der Fokus liegt nicht auf klassischen touristischen Reisen, sondern auf strukturierten Business-Reisen nach China.</p>
          <p>Das Angebot richtet sich an Menschen, die neue Lieferanten finden, eigene Produkte entwickeln, Produktionsprozesse verstehen oder ihr Business durch direkte Kontakte in China erweitern möchten. Panda Travel begleitet Teilnehmende dabei von der Vorbereitung über Besuche bei Herstellern bis hin zu Fragen rund um Logistik, Verpackung, Import und Zusammenarbeit mit chinesischen Partnern.</p>
        </div>

      </div>



      {/* About client */}
      <div className="container mx-auto px-5">
        <div className="bg-[#F1E9E1] rounded-xl flex items-center gap-25 my-15 pl-15 pr-30 py-10">
          <div className="flex-1">
            <div className="flex items-center justify-center py-10 px-5 min-h-50">
              <Image 
                src="/images/case-luxfloor-logo.svg"
                alt=""
                width={220}
                height={120}
              />
            </div>
          </div>
          <div className="flex-2">
            <p className="text-xl leading-relaxed">Eine Business-Reise nach China ist mehr als ein Flug und ein Hotel. Sie braucht Orientierung, Vertrauen und einen Partner, der Märkte, Menschen und Prozesse vor Ort versteht.</p>
          </div>
        </div>
      </div>




    </>
  )
}

