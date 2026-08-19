import { Separator } from "@/components/ui/separator";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { ParallaxImage } from "@/components/ui/parallax-image";
import Image from "next/image";
import DoorButton from "@/components/door-button/door-button";
import type { Metadata } from "next";
import { breadcrumbSchema, caseStudySchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Funky Coffee",
  description:
    "Ein Café verkauft nicht nur Kaffee, sondern Atmosphäre. Digitaler Auftritt in heller, luftiger Food-Ästhetik, der Appetit macht.",
  alternates: { canonical: "/projects/funky-coffee" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/projects/funky-coffee",
    siteName: "Mindlind Werbeagentur",
    title: "Funky Coffee | Mindlind Werbeagentur",
    description:
      "Ein Café verkauft nicht nur Kaffee, sondern Atmosphäre. Digitaler Auftritt in heller, luftiger Food-Ästhetik, der Appetit macht.",
    images: [
      {
        url: "/images/case-funky-coffee-1.webp",
        alt: "Funky Coffee — Mindlind Werbeagentur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Funky Coffee | Mindlind Werbeagentur",
    description:
      "Ein Café verkauft nicht nur Kaffee, sondern Atmosphäre. Digitaler Auftritt in heller, luftiger Food-Ästhetik, der Appetit macht.",
    images: [
      {
        url: "/images/case-funky-coffee-1.webp",
        alt: "Funky Coffee — Mindlind Werbeagentur",
      },
    ],
  },
};


export default function PageCaseFunkyCoffee() {
  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Projekte", path: "/projects" },
              { name: "Funky Coffee", path: "/projects/funky-coffee" },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            caseStudySchema({ path: "/projects/funky-coffee", name: "Funky Coffee" }),
          ),
        }}
      />

      {/* Hero */}
      <ParallaxImage
        src="/images/case-funky-coffee-4.webp"
        alt=""
        height="clamp(340px, 60vh, 750px)"
        strength={80}
        preload
        className="w-full"
      />


      {/* Data */}
      <div className="container mx-auto px-5 py-10 lg:py-15">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl tracking-tight font-bold -mt-1 uppercase">Funky Coffee</h1>
          </div>
          <div>
            <div className="pills flex-wrap lg:justify-end">
              <div className="pills-item">WEBSITE</div>
              <div className="pills-item">Coffee Shop</div>
              <div className="pills-item">Japanese Style</div>
              <div className="pills-item">Onepager</div>
              <div className="pills-item">Animation</div>
            </div>
          </div>
        </div>

        <Separator className="bg-black my-10 lg:my-15" />

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:flex lg:justify-between lg:gap-10">
          <div>
            <div className="text-xs uppercase mb-2 lg:mb-5">CLIENT</div>
            <div className="text-base font-medium">Funky Coffee</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-2 lg:mb-5">NICHE</div>
            <div className="text-base font-medium">Coffee Shop / Food Concept</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-2 lg:mb-5">YEAR</div>
            <div className="text-base font-medium">2026</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-2 lg:mb-5">CLIENT LOCATION</div>
            <div className="text-base font-medium">GERMANY / INTERNATIONAL</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-2 lg:mb-5">TIMELINE</div>
            <div className="text-base font-medium">1 Monat</div>
          </div>
        </div>

        <div className="mt-10 lg:mt-15">
          <DoorButton className="w-full" href="https://funky-coffee.de/" target="_blank">OPEN WEBSITE</DoorButton>
        </div>

      </div>


      {/* Short intro text */}
      <div className="container mx-auto px-5">

        <div className="text-lg sm:text-xl lg:text-2xl font-medium space-y-3 max-w-250 my-8 lg:my-12">
          <p>Funky Coffee ist ein charakterstarkes Café mit japanisch inspirierter Ausrichtung, hochwertigem Kaffee und einem klaren eigenen Stil. Die Marke verbindet Specialty-Coffee-Kultur, hausgemachte Produkte und eine verspielte visuelle Welt, die sich bewusst von klassischen Cafés unterscheidet.</p>
          <p>Im Mittelpunkt stehen hochwertiger Kaffee, japanisch inspirierte Sandwiches, hausgemachte Desserts und ein familiäres Konzept, bei dem viele Produkte direkt im Café hergestellt werden. Unsere Aufgabe bestand darin, diese besondere Mischung aus Qualität, Persönlichkeit und japanischer Ästhetik in einen kompakten, emotionalen Onepager zu übersetzen.</p>
        </div>

      </div>


      {/* About client */}
      <div className="container mx-auto px-5">
        <div className="bg-white rounded-xl flex flex-col lg:flex-row items-center gap-8 lg:gap-25 my-10 lg:my-15 p-6 lg:pl-15 lg:pr-30 lg:py-10">
          <div className="w-full lg:flex-1">
            <div className="flex items-center justify-center py-6 px-5 min-h-40 lg:py-10 lg:min-h-50">
              <Image
                src="/images/case-funky-coffee-logo.svg"
                alt=""
                width={100}
                height={200}
                className="max-w-full h-auto"
              />
            </div>
          </div>
          <div className="w-full lg:flex-2">
            <p className="text-lg lg:text-xl text-[#152F6A] leading-relaxed">Ein Café verkauft nicht nur Kaffee. Es verkauft Atmosphäre, Geschmack, Nähe und das Gefühl, einen Ort gefunden zu haben, an den man zurückkommen möchte.</p>
          </div>
        </div>
      </div>


      {/* Started from */}
      <div className="container mx-auto px-5 py-10 lg:py-15 flex flex-col lg:flex-row gap-6 lg:gap-20">
        <h2 className="text-xl font-semibold flex-1 lg:max-w-50">Started From</h2>
        <div className="text-base space-y-3 flex-2">Funky Coffee startete mit einem klaren Produktfokus und einer starken eigenen Identität. Hochwertiger Kaffee, kreative Getränke, Matcha, japanisch inspirierte Sandwiches und hausgemachte Desserts bilden den Kern des Konzepts. Besonders wichtig war dabei, dass die Produkte nicht beliebig wirken, sondern handgemacht, frisch und persönlich.</div>
        <div className="text-base space-y-3 flex-2">Wir begannen damit, die Marke als kleines, aber eigenständiges Food-Erlebnis zu verstehen. Die Website sollte nicht wie eine einfache Café-Visitenkarte wirken, sondern die Atmosphäre, den Geschmack und den Charakter des Ortes transportieren. Dafür wurde die Seite als emotionaler Onepager aufgebaut, der Besucherinnen und Besucher schnell durch die wichtigsten Bereiche führt.</div>
      </div>


      <div className="container mx-auto px-5 py-10 lg:py-15">
        <Image
          src="/images/case-funky-coffee-1.webp"
          width={1440}
          height={600}
          alt=""
          className="w-full rounded-lg"
        />
      </div>


      {/* Process */}
      <div className="container mx-auto px-5 py-10 lg:py-15 flex flex-col lg:flex-row gap-6 lg:gap-20">
        <h2 className="text-xl font-semibold flex-1 lg:max-w-50">Process</h2>
        <div className="text-base space-y-3 flex-2">Die zentrale Herausforderung bestand darin, ein relativ kompaktes Café-Konzept digital groß und einprägsam wirken zu lassen. Die Website musste erklären, was Funky Coffee besonders macht, ohne zu textlastig oder überladen zu werden. Kaffee, Sandwiches, Desserts, japanische Einflüsse und der Standort mussten auf einer Seite verständlich und appetitlich präsentiert werden.</div>
        <div className="text-base space-y-3 flex-2">
          <p>Wir entwickelten eine visuelle Richtung, die helle Food-Inszenierung, weiche Farben, japanisch inspirierte Details und eine leichte Anime-Ästhetik verbindet. Die Seite wurde bewusst lebendig gestaltet: mit Animationen, interaktiven Elementen und einer Nutzerführung, die beim Scrollen immer wieder neue visuelle Reize setzt.</p>
          <p>So entsteht ein digitaler Auftritt, der nicht nur informiert, sondern Appetit macht und die Atmosphäre des Cafés spürbar werden lässt.</p>
        </div>
      </div>


      <div className="px-5 py-10 lg:px-8 lg:py-15">
        <div className="flex flex-col lg:flex-row gap-5">
          <Image
            src="/images/case-funky-coffee-2.webp"
            width={1000}
            height={600}
            alt=""
            className="w-full rounded-lg"
          />
          <Image
            src="/images/case-funky-coffee-3.webp"
            width={1000}
            height={600}
            alt=""
            className="w-full rounded-lg"
          />
        </div>
      </div>


      {/* More text */}
      <div className="container mx-auto px-5 py-10 lg:py-15">
        <div className="text-lg lg:text-xl space-y-3 max-w-235">
          <p>Die Bildsprache wurde hell, weich und fast traumhaft aufgebaut. Kaffee, Sandwiches und Desserts werden nicht nüchtern präsentiert, sondern in einer luftigen, modernen und leicht surrealen Food-Ästhetik gezeigt.</p>
          <p>Dadurch entsteht ein Look, der frisch, freundlich und einprägsam wirkt — passend zu einem Café, das Qualität mit einem verspielten japanischen Charakter verbindet.</p>
        </div>
      </div>


      <div className="container mx-auto px-5 py-10 lg:py-15">
        <Image
          src="/images/case-funky-coffee-5.webp"
          width={1440}
          height={720}
          alt=""
          className="w-full rounded-lg"
        />
      </div>


      {/* 2 column text */}
      <div className="container mx-auto px-5 py-10 lg:py-15">
        <div className="text-lg lg:text-xl space-y-3 max-w-235">
          <p>Ein besonderer Fokus lag auf den hausgemachten Produkten. Das Brot für die Sandwiches wird nach eigener Rezeptur hergestellt, Desserts entstehen direkt im Café und auch die Getränke folgen einem klaren Qualitätsanspruch.</p>
          <p>Diese Nähe zur Herstellung sollte auf der Website sichtbar werden. Funky Coffee wirkt dadurch nicht wie ein austauschbares Café, sondern wie ein familiärer Ort mit eigener Handschrift.</p>
        </div>
      </div>


      <Separator />


      {/* Results */}
      <div className="container mx-auto px-5 py-10 lg:py-15 flex flex-col lg:flex-row gap-6 lg:gap-20">
        <h2 className="text-xl font-semibold flex-1 lg:max-w-50">Results</h2>
        <div className="text-base space-y-3 flex-2">Das Ergebnis ist ein lebendiger Onepager, der Funky Coffee als eigenständiges Café-Konzept positioniert. Die Website verbindet hochwertigen Kaffee, japanisch inspirierte Sandwiches, hausgemachte Desserts und eine verspielte visuelle Welt in einem klaren digitalen Erlebnis.</div>
        <div className="text-base space-y-3 flex-2">
          <p>Durch Animationen, starke Produktinszenierung und eine einfache Nutzerführung vermittelt der Auftritt nicht nur Informationen, sondern Atmosphäre. Besucherinnen und Besucher verstehen schnell, was Funky Coffee besonders macht, wo sich das Café befindet und warum sich ein Besuch lohnt.</p>
        </div>
        <div className="text-base space-y-3 flex-2">
          <p>Die Marke erhält damit eine digitale Bühne, die Geschmack, Persönlichkeit und Standort klar miteinander verbindet.</p>
        </div>
      </div>


    </>
  )
}

