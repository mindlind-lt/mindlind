import { Separator } from "@/components/ui/separator";
import { ImageCarousel } from "@/components/ui/image-carousel";
import Image from "next/image";
import DoorButton from "@/components/door-button/door-button";

export default function PageCase1() {
  return (
    <>

      <Image 
        src="/images/case-mua-1.png"
        width={1000}
        height={600}
        alt=""
        className="w-full"
      />

      <div className="container mx-auto px-8 py-15">

        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-8xl tracking-tight font-bold -mt-1">MUA FAKTUR</h1>
          </div>
          <div>
            <div className="pills justify-end">
              <div className="pills-item">WEBSITE</div>
              <div className="pills-item">E-COMMERCE</div>
              <div className="pills-item">BOOKING SYSTEM</div>
              <div className="pills-item">BRANDING</div>
            </div>
          </div>
        </div>

        <Separator className="bg-black my-15" />
        
        <div className="flex justify-between gap-10">
          <div>
            <div className="text-xs mb-5">YEAR</div>
            <div className="text-base font-medium">2023</div>
          </div>
          <div>
            <div className="text-xs mb-5">INDUSTRY</div>
            <div className="text-base font-medium">BEAUTY / EDUCATION / E-COMMERCE</div>
          </div>
          <div>
            <div className="text-xs mb-5">CLIENT LOCATION</div>
            <div className="text-base font-medium">GERMANY / INTERNATIONAL</div>
          </div>
          <div>
            <div className="text-xs mb-5">DURATION</div>
            <div className="text-base font-medium">1 MONTH</div>
          </div>
          <div>
            <div className="text-xs mb-5">CLIENT</div>
            <div className="text-base font-medium">MUA FAKTUR</div>
          </div>
        </div>

        <div className="mt-15">
          <DoorButton className="w-full">OPEN WEBSITE</DoorButton>
        </div>

      </div>

      <div className="container mx-auto px-8 py-6">
        <div className="text-2xl space-y-3 max-w-[900px]">
          <p>MUA Faktur ist eine Beauty- und Make-up-Marke rund um Oksana Anichuk, eine international ausgezeichnete Make-up-Artistin und Gründerin des Unternehmens. Die Marke verbindet professionelle Make-up-Dienstleistungen, eigene Beauty-Produkte und eine Academy für angehende Make-up-Artists in einem ganzheitlichen Konzept.</p>
        </div>
      </div>


      <div className="container mx-auto px-8 py-15">
        <Image
          src="/images/case-mua-2.png"
          width={1000}
          height={600}
          alt=""
          className="w-full rounded-lg"
        />
      </div>


      <div className="container mx-auto px-8 py-6">
        <div className="text-xl space-y-3 max-w-[900px]">
          <p>Das Besondere an MUA Faktur ist die klare Verbindung aus Persönlichkeit, Expertise und Produktwelt. Oksana Anichuk steht als Gründerin nicht nur für hochwertige Make-up-Arbeit, sondern auch für Erfahrung, Ausbildung und einen starken ästhetischen Anspruch. Das Unternehmen richtet sich an Kundinnen und Kunden, die professionelle Make-up-Services für besondere Anlässe, Events, Produktionen oder internationale Projekte suchen, aber auch an Menschen, die Make-up professionell lernen oder hochwertige Produkte aus einer spezialisierten Beauty-Marke kaufen möchten.</p>
          <p>Für den digitalen Auftritt bestand die zentrale Herausforderung darin, drei unterschiedliche Geschäftsbereiche in einer Website logisch, hochwertig und verständlich zusammenzuführen. Die Website sollte gleichzeitig Beauty-Shop, Academy-Plattform und Service-Präsentation sein — ohne dabei überladen oder unübersichtlich zu wirken.</p>
        </div>
      </div>


      <div className="container mx-auto px-8 py-15">
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


      <div className="container mx-auto px-8 py-6">
        <div className="text-xl space-y-3 max-w-[900px]">
          <p>Der erste Bereich ist der Shop. Hier werden Produkte der eigenen Marke präsentiert und verkauft, darunter Beauty- und Make-up-Produkte aus eigener Produktion. Für diesen Bereich wurde eine klare E-Commerce-Struktur entwickelt, die Produkte hochwertig darstellt, Kaufentscheidungen erleichtert und die Marke nicht wie einen gewöhnlichen Onlineshop wirken lässt, sondern wie eine kuratierte Beauty-Welt.</p>
          <p>Der zweite Bereich ist die Academy. Hier können sich Interessentinnen und Interessenten über Schulungen, Ausbildungen und Make-up-Kurse informieren und direkt passende Termine oder Formate entdecken. Dafür wurde eine Buchungs- und Registrierungssystematik integriert, die den Einstieg in die Ausbildung einfacher macht und die Organisation für das Unternehmen deutlich strukturiert.</p>
          <p>Der dritte Bereich umfasst die professionellen Make-up-Services. MUA Faktur bietet Make-up für Events, Organisationen, private Anlässe, Produktionen und internationale Einsätze an. Dabei kann ein Team von Make-up-Artists gebucht werden, das je nach Projekt auch mobil und international eingesetzt werden kann. Dieser Bereich musste auf der Website so präsentiert werden, dass die Professionalität, Flexibilität und Exklusivität der Leistungen sofort verständlich werden.</p>
        </div>
      </div>


      <div className="container mx-auto px-8 py-15">
        <Image
          src="/images/case-mua-5.png"
          width={1000}
          height={600}
          alt=""
          className="w-full rounded-lg"
        />
      </div>

      <div className="container mx-auto px-8 py-6 mb-20">
        <div className="text-xl space-y-3 max-w-[900px]">
          <p>Visuell sollte der Auftritt nicht klassisch „Beauty“ oder austauschbar wirken, sondern modern, editorial und hochwertig. Deshalb wurde die Website bewusst als starke Markenwelt gestaltet: mit einer klaren Struktur, großflächigen visuellen Elementen, eleganter Typografie und einer hochwertigen Bildsprache, die Beauty, Fashion und digitale Präzision miteinander verbindet.</p>
          <p>Viele Elemente der Website wurden individuell gestaltet und auf die Marke abgestimmt. Ziel war es, keine Standardlösung zu entwickeln, sondern einen Auftritt, der zur Persönlichkeit von Oksana Anichuk und zur Positionierung von MUA Faktur passt. Die Website sollte sowohl Vertrauen aufbauen als auch Inspiration erzeugen — für Kundinnen, Schüler, Eventpartner und Käufer der Produkte.</p>
          <p>Neben Design und Struktur lag ein besonderer Fokus auf der Nutzerführung. Besucherinnen und Besucher müssen schnell verstehen, welchen Bereich sie suchen: Produkte kaufen, Ausbildung buchen oder Make-up-Services anfragen. Deshalb wurde die Website in klare Sektionen gegliedert, die jeweils einen eigenen Zweck erfüllen, aber trotzdem als einheitliche Marke wahrgenommen werden.</p>
          <p>Auch technisch wurde die Plattform so aufgebaut, dass MUA Faktur Inhalte, Produkte, Termine und Angebote langfristig verwalten und weiterentwickeln kann. Der Shop, die Academy-Funktion und die Service-Struktur wurden so verbunden, dass die Website nicht nur schön aussieht, sondern im Alltag als funktionales digitales Verkaufssystem arbeitet.</p>
          <p>Das Ergebnis ist ein digitaler Auftritt, der MUA Faktur als moderne Beauty-Marke mit mehreren starken Säulen positioniert: Produktverkau</p>
        </div>
      </div>

      {/* <div className="overflow-clip">
        <div className="container mx-auto px-8 py-20">
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
