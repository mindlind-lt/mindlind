import { Separator } from "@/components/ui/separator";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { ParallaxImage } from "@/components/ui/parallax-image";
import Image from "next/image";
import DoorButton from "@/components/door-button/door-button";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mondent",
  description:
    "Website und SEO für MonDent, eine der größten Zahnarztpraxen in Düsseldorf — klare digitale Struktur für ein breites Behandlungsspektrum.",
  alternates: { canonical: "/projects/mondent" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/projects/mondent",
    siteName: "Mindlind Werbeagentur",
    title: "Mondent | Mindlind Werbeagentur",
    description:
      "Website und SEO für MonDent, eine der größten Zahnarztpraxen in Düsseldorf — klare digitale Struktur für ein breites Behandlungsspektrum.",
    images: [
      {
        url: "/images/case-mondent-1.png",
        alt: "Mondent — Mindlind Werbeagentur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mondent | Mindlind Werbeagentur",
    description:
      "Website und SEO für MonDent, eine der größten Zahnarztpraxen in Düsseldorf — klare digitale Struktur für ein breites Behandlungsspektrum.",
    images: [
      {
        url: "/images/case-mondent-1.png",
        alt: "Mondent — Mindlind Werbeagentur",
      },
    ],
  },
};

export default function PageCaseMondent() {
  return (
    <>

      {/* Hero */}
      <ParallaxImage
        src="/images/case-mondent-3.png"
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
            <h1 className="text-8xl tracking-tight font-bold -mt-1 uppercase">MonDent</h1>
          </div>
          <div>
            <div className="pills justify-end">
              <div className="pills-item">Website</div>
              <div className="pills-item">SEO</div>
              <div className="pills-item">Marketing</div>
              <div className="pills-item">Dental Clinic</div>
              <div className="pills-item">Healthcare</div>
            </div>
          </div>
        </div>

        <Separator className="bg-black my-15" />

        <div className="flex justify-between gap-10">
          <div>
            <div className="text-xs uppercase mb-5">CLIENT</div>
            <div className="text-base font-medium">MonDent</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">NICHE</div>
            <div className="text-base font-medium">Dental Clinic / Healthcare</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">YEAR</div>
            <div className="text-base font-medium">2022</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">TIMELINE</div>
            <div className="text-base font-medium">Ongoing</div>
          </div>
        </div>

        <div className="mt-15">
          <DoorButton className="w-full" href="https://mondent.de/" target="_blank">OPEN WEBSITE</DoorButton>
        </div>

      </div>


      {/* Short intro text */}
      <div className="container mx-auto px-5">

        <div className="text-2xl font-medium space-y-3 max-w-250 my-12">
          <p>MonDent ist eine der größten Zahnarztpraxen in Düsseldorf und verbindet moderne Zahnmedizin, hochwertige Patientenbetreuung und ein breites Behandlungsspektrum an einem zentralen Standort. Die Praxis verfügt über rund zehn Behandlungszimmer und nimmt eine komplette Etage ein — ein klares Zeichen für Größe, Struktur und professionelle Organisation.</p>
          <p>Das Leistungsspektrum reicht von Prophylaxe und ästhetischer Zahnmedizin über Aligner-Behandlungen bis hin zu Chirurgie, Implantologie und komplexeren zahnmedizinischen Versorgungen. Unsere Aufgabe bestand darin, diese Größe und Vielfalt digital so zu strukturieren, dass Patientinnen und Patienten schnell Vertrauen aufbauen und passende Leistungen verständlich finden.</p>
        </div>

      </div>


      {/* About client */}
      <div className="container mx-auto px-5">
        <div className="bg-white rounded-xl flex items-center gap-25 my-15 pl-15 pr-30 py-10">
          <div className="flex-1">
            <div className="flex items-center justify-center py-10 px-5 min-h-50">
              <Image 
                src="/images/case-mondent-logo.png"
                alt=""
                width={180}
                height={120}
              />
            </div>
          </div>
          <div className="flex-2">
            <p className="text-[#1F3E85] font-medium text-xl leading-relaxed">Eine große Zahnarztpraxis braucht keinen überladenen Auftritt, sondern eine digitale Struktur, die Vertrauen schafft, Leistungen verständlich macht und Wachstum langfristig unterstützt.</p>
          </div>
        </div>
      </div>


      {/* Started from */}
      <div className="container mx-auto px-5 py-15 flex gap-20">
        <h2 className="text-xl font-semibold flex-1 max-w-50">Started From</h2>
        <div className="text-base space-y-3 flex-2">MonDent startete mit einer starken realen Grundlage: zentrale Lage in Düsseldorf, große Praxisfläche, zahlreiche Behandlungszimmer, ein breites Leistungsspektrum und eine große bestehende Patientenbasis. Gleichzeitig sollte die digitale Präsenz diesen Anspruch klarer, moderner und professioneller abbilden.</div>
        <div className="text-base space-y-3 flex-2">Wir begannen damit, die Praxis nicht nur als lokale Zahnarztpraxis zu betrachten, sondern als moderne Dentalmarke mit Wachstumspotenzial. Besonders wichtig war es, die vielen Behandlungsbereiche verständlich zu ordnen und eine Struktur zu schaffen, die sowohl neue Patientinnen und Patienten als auch bestehende Zielgruppen abholt.</div>
      </div>


      <div className="container mx-auto px-5 py-15">
        <Image
          src="/images/case-mondent-2.png"
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
          <p>Die zentrale Herausforderung lag darin, eine große Menge an medizinischen Informationen klar und nutzerfreundlich aufzubereiten. Zahnmedizinische Leistungen können schnell komplex wirken. Deshalb musste die Website Vertrauen schaffen, ohne die Besucherinnen und Besucher mit zu vielen Details zu überfordern.</p>
        </div>
        <div className="text-base space-y-3 flex-2">
          <p>Wir entwickelten eine klare Seitenstruktur, verständliche Leistungsbereiche und eine visuelle Richtung, die Sauberkeit, Professionalität und moderne Medizin vermittelt. Gleichzeitig wurde die Website auf langfristige Sichtbarkeit ausgerichtet: SEO-Struktur, lokale Relevanz, klare Inhalte und eine technische Basis, die weiteres Wachstum unterstützt.</p>
        </div>
        <div className="text-base space-y-3 flex-2">
          <p>Neben dem Webdesign betreuen wir MonDent auch im digitalen Marketing. Dazu gehören laufende Optimierungen, SEO-Maßnahmen und die strategische Weiterentwicklung der digitalen Sichtbarkeit.</p>
        </div>
      </div>


      {/* 2 photos */}
      <div className="px-8 py-15">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Image
              src="/images/case-mondent-4.png"
              width={800}
              height={800}
              alt=""
              className="w-full rounded-lg object-cover h-[600px]"
            />
          </div>
          <div>
            <Image
              src="/images/case-mondent-1.png"
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
          <p>Die visuelle Sprache wurde bewusst clean, hell und hochwertig gestaltet. MonDent sollte digital nicht kühl oder austauschbar wirken, sondern professionell, modern und serviceorientiert.</p>
          <p>Große Flächen, klare Typografie, ruhige Farben und eine strukturierte Nutzerführung unterstützen den Eindruck einer Praxis, die sowohl medizinisch als auch organisatorisch auf einem hohen Niveau arbeitet.</p>
        </div>
      </div>


      <div className="container mx-auto px-5 py-15">
        <Image
          src="/images/case-mondent-5.png"
          width={1440}
          height={720}
          alt=""
          className="w-full rounded-lg"
        />
      </div>


      {/* Text 2 */}
      <div className="container mx-auto px-5 py-15">
        <div className="text-xl space-y-3 max-w-235">
          <p>Ein besonderer Fokus lag auf der Präsentation der vielen Leistungsbereiche. Von Vorsorge über Ästhetik bis hin zu chirurgischen und implantologischen Behandlungen musste jede Leistung klar auffindbar und verständlich erklärt werden.</p>
          <p>Die Website hilft Patientinnen und Patienten, schneller Orientierung zu finden und den nächsten Schritt zur Terminvereinbarung einfacher zu gehen.</p>
        </div>
      </div>


      <Separator />


      {/* Results */}
      <div className="container mx-auto px-5 py-15 flex gap-20">
        <h2 className="text-xl font-semibold flex-1 max-w-50">Results</h2>
        <div className="text-base space-y-3 flex-2">
          <p>Das Ergebnis ist ein professioneller digitaler Auftritt, der MonDent als große, moderne und serviceorientierte Zahnarztpraxis in Düsseldorf positioniert. Die Website macht das breite Leistungsspektrum verständlich, stärkt das Vertrauen und unterstützt die Sichtbarkeit der Praxis im lokalen Wettbewerb.</p>
        </div>
        <div className="text-base space-y-3 flex-2">
          <p>MonDent wird dadurch nicht nur als Zahnarztpraxis dargestellt, sondern als moderne Dentalmarke mit klarer Struktur, hohem Qualitätsanspruch und Wachstumspotenzial. Der digitale Auftritt bildet die Grundlage für langfristiges Marketing, SEO und eine stärkere Positionierung im Gesundheitsmarkt.</p>
        </div>
      </div>

      <div className="h-20"></div>


    </>
  )
}

