import { Separator } from "@/components/ui/separator";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { ParallaxImage } from "@/components/ui/parallax-image";
import Image from "next/image";
import DoorButton from "@/components/door-button/door-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MUA Faktur",
  description:
    "Beauty-Marke als skalierbares digitales System: Produkte, Academy und Services als Teile einer größeren Markenwelt.",
  alternates: { canonical: "/projects/muafaktur" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/projects/muafaktur",
    siteName: "Mindlind Werbeagentur",
    title: "MUA Faktur | Mindlind Werbeagentur",
    description:
      "Beauty-Marke als skalierbares digitales System: Produkte, Academy und Services als Teile einer größeren Markenwelt.",
    images: [
      {
        url: "/images/case-mua-2.png",
        alt: "MUA Faktur — Mindlind Werbeagentur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MUA Faktur | Mindlind Werbeagentur",
    description:
      "Beauty-Marke als skalierbares digitales System: Produkte, Academy und Services als Teile einer größeren Markenwelt.",
    images: [
      {
        url: "/images/case-mua-2.png",
        alt: "MUA Faktur — Mindlind Werbeagentur",
      },
    ],
  },
};


export default function PageCaseMua() {
  return (
    <>

      {/* Hero */}
      <ParallaxImage
        src="/images/case-mua-1.png"
        alt=""
        height="750px"
        strength={80}
        preload
        className="w-full"
      />

      <div className="container mx-auto px-5 py-15">

        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-8xl tracking-tight font-bold -mt-1 uppercase">MUA FAKTUR</h1>
          </div>
          <div>
            <div className="pills justify-end">
              <div className="pills-item">WEBSITE</div>
              <div className="pills-item">E-COMMERCE</div>
              <div className="pills-item">Academy</div>
              <div className="pills-item">BOOKING SYSTEM</div>
              <div className="pills-item">Beauty Brand</div>
            </div>
          </div>
        </div>

        <Separator className="bg-black my-15" />
        

        <div className="flex justify-between gap-10">
          <div>
            <div className="text-xs uppercase mb-5">CLIENT</div>
            <div className="text-base font-medium">MUA Faktur</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">NICHE</div>
            <div className="text-base font-medium">Beauty / Make-up / Education</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">YEAR</div>
            <div className="text-base font-medium">2023</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">CLIENT LOCATION</div>
            <div className="text-base font-medium">Germany / International</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">TIMELINE</div>
            <div className="text-base font-medium">1 Month</div>
          </div>
        </div>

        <div className="mt-15">
          <DoorButton className="w-full" href="https://muafaktur.de" target="_blank">OPEN WEBSITE</DoorButton>
        </div>

      </div>

      <div className="container mx-auto px-5">

        <div className="text-2xl font-medium space-y-3 max-w-250 my-12">
          <p>MUA Faktur ist eine Beauty- und Make-up-Marke rund um Oksana Anichuk — eine international ausgezeichnete Make-up-Artistin und Gründerin des Unternehmens. Die Marke verbindet professionelle Make-up-Dienstleistungen, eigene Beauty-Produkte und eine Academy für angehende Make-up-Artists in einem digitalen Auftritt.</p>
          <p>Die Herausforderung bestand darin, drei unterschiedliche Geschäftsbereiche klar, hochwertig und verständlich zusammenzuführen. Wir entwickelten eine Website, auf der Nutzerinnen und Nutzer Beauty-Produkte entdecken, Ausbildungsformate buchen und professionelle Make-up-Services für Events, Produktionen und internationale Projekte anfragen können.</p>
        </div>

        <div className="bg-white rounded-xl flex items-center gap-25 my-15 pl-15 pr-30 py-10">
          <div className="flex-1">
            <div className="flex items-center justify-center py-10 px-5 min-h-50">
              <Image 
                src="/images/case-mua-logo.svg"
                width={200}
                height={100}
                alt=""
              />
            </div>
          </div>
          <div className="flex-2">
            <p className="text-lg">Eine Beauty-Marke braucht mehr als eine schöne Website. Sie braucht eine Struktur, die Produkte verkauft, Expertise sichtbar macht und persönliche Autorität in ein skalierbares digitales System übersetzt.</p>
          </div>
        </div>

      </div>


      <div className="container mx-auto px-5 py-15 flex gap-20">
        <h2 className="text-xl font-semibold flex-1 max-w-50">Started From</h2>
        <div className="text-base space-y-3 flex-2">MUA Faktur startete mit einer starken persönlichen Marke und mehreren Geschäftsbereichen, die digital stärker miteinander verbunden werden sollten. Oksana Anichuk verfügte bereits über professionelle Expertise, eigene Produkte, Ausbildungsformate und Make-up-Services — die Website musste diese Bereiche jedoch so strukturieren, dass sie für Besucherinnen und Besucher sofort verständlich werden.</div>
        <div className="text-base space-y-3 flex-2">Wir begannen damit, die Marke in drei klare Wege zu gliedern: Shop, Academy und Make-up-Services. Jeder Bereich erhielt eine eigene Funktion, eine eigene Nutzerführung und eine klare Conversion-Logik, blieb aber gleichzeitig Teil einer einheitlichen Markenwelt.</div>
      </div>

      <div className="px-8 py-15">
        <ParallaxImage
          src="/images/case-mua-2.png"
          height="600px"
          strength={80}
          className="w-full rounded-lg"
        />
      </div>

      <div className="container mx-auto px-5 py-15 flex gap-20">
        <h2 className="text-xl font-semibold flex-1 max-w-50">Challenge / Process</h2>
        <div className="text-base space-y-3 flex-2">Die größte Herausforderung lag in der Balance zwischen Ästhetik und Funktion. Die Website sollte hochwertig und editorial wirken, gleichzeitig aber als praktisches Business-Tool funktionieren. Der Shop musste Produkte klar präsentieren. Die Academy benötigte eine verständliche Buchungs- und Registrierungsstruktur. Der Servicebereich musste Vertrauen, Qualität und die Möglichkeit vermitteln, ein professionelles Make-up-Team für Events, Organisationen und Produktionen anzufragen.</div>
        <div className="text-base space-y-3 flex-2">Wir entwickelten eine individuelle digitale Plattform mit klarer Navigation, hochwertiger visueller Sprache und einer Struktur, die Besucherinnen und Besucher gezielt durch die unterschiedlichen Angebote führt. Statt einzelne Bereiche voneinander zu trennen, verbanden wir Produktverkauf, Ausbildung und Dienstleistung zu einem konsistenten digitalen Erlebnis.</div>
      </div>

      <div className="px-8 py-15">
        <div className="flex gap-5">
          <Image
            src="/images/case-mua-3.png"
            width={1000}
            height={600}
            alt=""
            className="w-full rounded-lg"
          />
          <Image
            src="/images/case-mua-4.png"
            width={1000}
            height={600}
            alt=""
            className="w-full rounded-lg"
          />
        </div>
      </div>

      <div className="container mx-auto px-5 py-15">
        <div className="text-xl space-y-3 max-w-235">
          <p>Die visuelle Richtung wurde rund um eine moderne Beauty-Ästhetik entwickelt: klare Layouts, hochwertige Produktinszenierung, elegante Typografie und ein fashion-inspirierter Look. Die Website sollte nicht wie ein gewöhnlicher Kosmetikshop wirken, sondern wie eine professionelle Beauty-Plattform mit persönlicher Handschrift.</p>
          <p>Jeder Abschnitt unterstützt die Markenstory: Produkte, Academy und Services werden nicht isoliert dargestellt, sondern als Teile einer größeren Beauty-Welt.</p>
        </div>
      </div>

      <div className="px-8 py-15">
        <Image
          src="/images/case-mua-5.png"
          width={1000}
          height={600}
          alt=""
          className="w-full rounded-lg"
        />
      </div>

      <div className="container mx-auto px-5 py-15">
        <div className="text-xl space-y-3 max-w-235">
          <p>Für die Academy wurde eine klare Buchungs- und Registrierungslogik integriert. Interessentinnen und Interessenten können Ausbildungsformate entdecken, Inhalte besser verstehen und sich gezielt für passende Angebote anmelden.</p>
          <p>Dadurch wird die Website nicht nur zur Präsentationsfläche, sondern zu einem funktionalen System für Anfragen, Registrierungen und langfristiges Wachstum.</p>
        </div>
      </div>

      {/* <div className="bg-red-700 h-20"></div> */}

      <div className="container mx-auto px-5 py-15 flex gap-20">
        <h2 className="text-xl font-semibold flex-1 max-w-50">Results</h2>
        <div className="text-base space-y-3 flex-2">Das Ergebnis ist eine hochwertige digitale Plattform, die E-Commerce, Ausbildung und professionelle Make-up-Dienstleistungen in einer klaren Struktur verbindet. MUA Faktur kann Produkte präsentieren, Academy-Formate bewerben und Service-Anfragen über eine Website erhalten, die elegant, fokussiert und skalierbar wirkt.</div>
        <div className="text-base space-y-3 flex-2">Die Marke wird nicht mehr über einzelne Angebote dargestellt, sondern über ein konsistentes digitales Ökosystem. Die Website stärkt Vertrauen, verbessert die Orientierung und schafft eine professionelle Grundlage für Produktverkäufe, Kursbuchungen und weiteres Markenwachstum.</div>
      </div>

      <div className="container mx-auto px-5 py-15 flex gap-20">
        <h2 className="text-xl font-semibold flex-1 max-w-50">Credits</h2>
        <div className="flex-1">
          <div className="border-b border-gray-200 flex gap-20 mb-2 pb-2">
            <div className="flex-1 font-medium">Creative Direction</div>
            <div className="flex-1">Mindlind</div>
          </div>
          <div className="border-b border-gray-200 flex gap-20 mb-2 pb-2">
            <div className="flex-1 font-medium">Web Design</div>
            <div className="flex-1">Almaz</div>
          </div>
          <div className="border-b border-gray-200 flex gap-20 mb-2 pb-2">
            <div className="flex-1 font-medium">UX / UI</div>
            <div className="flex-1">Jan</div>
          </div>
          <div className="border-b border-gray-200 flex gap-20 mb-2 pb-2">
            <div className="flex-1 font-medium">Development</div>
            <div className="flex-1">Mindlind</div>
          </div>
          <div className="border-b border-gray-200 flex gap-20 mb-2 pb-2">
            <div className="flex-1 font-medium">E-Commerce Structure</div>
            <div className="flex-1">Almaz</div>
          </div>
          <div className="border-b border-gray-200 flex gap-20 mb-2 pb-2">
            <div className="flex-1 font-medium">Booking System</div>
            <div className="flex-1">Georgy</div>
          </div>
        </div>
      </div>

      {/* <div className="overflow-clip">
        <div className="container mx-auto px-5 py-20">
          <ImageCarousel
            slides={[
              { src: "/images/case-mua-3.png" },
              { src: "/images/case-mua-4.png" },
              { src: "/images/case-mua-5.png" },
            ]}
          />
        </div>
      </div> */}

    </>
  )
}
