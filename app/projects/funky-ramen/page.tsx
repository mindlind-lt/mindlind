import { Separator } from "@/components/ui/separator";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { ParallaxImage } from "@/components/ui/parallax-image";
import Image from "next/image";
import DoorButton from "@/components/door-button/door-button";

export default function PageCaseFunky() {
  return (
    <>

      <Image 
        src="/images/case-funky-ramen-1.jpg"
        width={1600}
        height={600}
        alt=""
        className="w-full"
      />


      {/* Data */}
      <div className="container mx-auto px-5 py-15">

        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-8xl tracking-tight font-bold -mt-1 uppercase">Funky Ramen</h1>
          </div>
          <div>
            <div className="pills justify-end">
              <div className="pills-item">WEBSITE</div>
              <div className="pills-item">Restaurant</div>
              <div className="pills-item">Food Concept</div>
              <div className="pills-item">Japanese Style</div>
              <div className="pills-item">Brand Experience</div>
            </div>
          </div>
        </div>

        <Separator className="bg-black my-15" />

        <div className="flex justify-between gap-10">
          <div>
            <div className="text-xs uppercase mb-5">CLIENT</div>
            <div className="text-base font-medium">Funky Ramen</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">NICHE</div>
            <div className="text-base font-medium">Restaurant / Japanese Food</div>
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
          <DoorButton className="w-full" href="https://funky-ramen.de/" target="_blank">OPEN WEBSITE</DoorButton>
        </div>

      </div>


      {/* Short intro text */}
      <div className="container mx-auto px-5">

        <div className="text-2xl font-medium space-y-3 max-w-250 my-12">
          <p>Funky Ramen ist ein japanisch inspiriertes Restaurant in Düsseldorf, das klassische Ramen-Tradition mit eigenen, modernen Geschmacksideen verbindet. Im Mittelpunkt stehen kräftige Brühen, sorgfältig abgestimmte Zutaten und kreative Ramen-Variationen, die bewusst über klassische Standards hinausgehen.</p>
          <p>Neben traditionell zubereiteten Ramen bietet Funky Ramen auch eigene Signature-Kreationen wie Cheese Ramen sowie große, warme und besonders sättigende Rollen. Das Restaurant verbindet japanische Esskultur mit einer starken visuellen Identität, die von Anime-, Samurai- und Street-Culture-Ästhetik geprägt ist.</p>
        </div>

      </div>


      {/* About client */}
      <div className="container mx-auto px-5">
        <div className="bg-[#AD2D14] text-white rounded-xl flex items-center gap-25 my-15 pl-15 pr-30 py-10">
          <div className="flex-1">
            <div className="flex items-center justify-center py-10 px-5 min-h-50">
              <Image 
                src="/images/case-funky-ramen-logo-2.jpg"
                alt=""
                width={200}
                height={100}
              />
            </div>
          </div>
          <div className="flex-2">
            <p className="text-xl leading-relaxed">Ein Restaurant mit Charakter braucht mehr als eine Speisekarte. Es braucht eine digitale Welt, die Geschmack, Atmosphäre und Identität schon vor dem ersten Besuch spürbar macht.</p>
          </div>
        </div>
      </div>


      {/* Started from */}
      <div className="container mx-auto px-5 py-15 flex gap-20">
        <h2 className="text-xl font-semibold flex-1 max-w-50">Started From</h2>
        <div className="text-base space-y-3 flex-2">Funky Ramen startete mit einem klaren gastronomischen Konzept: Ramen nach japanischer Inspiration, eigene kreative Rezepturen und eine Atmosphäre, die sich deutlich von klassischen Restaurants unterscheidet. Die Marke sollte nicht nur über das Essen funktionieren, sondern über ein gesamtes Erlebnis aus Geschmack, Design, Musik, Anime-Stimmung und urbaner Energie.</div>
        <div className="text-base space-y-3 flex-2">Wir begannen damit, die wichtigsten Stärken des Restaurants herauszuarbeiten: intensive Brühen, kreative Ramen-Sorten, warme große Rollen und ein Innenraum, der Gäste in eine japanisch inspirierte, fast filmische Welt bringt. Diese Elemente wurden zur Grundlage für die digitale Struktur und visuelle Richtung der Website.</div>
      </div>


      <div className="px-8 py-15">
        <Image
          src="/images/case-funky-ramen-2.jpg"
          width={1440}
          height={600}
          alt=""
          className="w-full rounded-lg"
        />
      </div>


      {/* Process */}
      <div className="container mx-auto px-5 py-15 flex gap-20">
        <h2 className="text-xl font-semibold flex-1 max-w-50">Process</h2>
        <div className="text-base space-y-3 flex-2">Die Herausforderung bestand darin, Funky Ramen nicht wie ein gewöhnliches Restaurant zu präsentieren. Die Website sollte Appetit machen, aber gleichzeitig die besondere Atmosphäre des Ortes transportieren. Dafür musste der digitale Auftritt genauso eigenständig wirken wie das Restaurant selbst: laut genug, um aufzufallen, aber hochwertig genug, um professionell und vertrauenswürdig zu bleiben.</div>
        <div className="text-base space-y-3 flex-2">Wir entwickelten eine visuelle Richtung, die japanische Esskultur mit modernen Fashion-, Anime- und Samurai-Elementen verbindet. Ramen, Sushi, Rollen und visuelle Details wurden nicht nur als Produkte gezeigt, sondern als Teil einer klaren Markenwelt. Die Seite führt Nutzerinnen und Nutzer durch das Konzept, die Speisen und die Atmosphäre des Restaurants, ohne dabei überladen zu wirken.</div>
      </div>


      <div className="px-8 py-15">
        <div className="flex gap-5">
          <Image
            src="/images/case-funky-ramen-3.jpg"
            width={1000}
            height={600}
            alt=""
            className="w-full rounded-lg"
          />
          <Image
            src="/images/case-funky-ramen-4.jpg"
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
          <p>Die Bildsprache wurde bewusst stark und modern aufgebaut: intensive Farben, glänzende Oberflächen, close-up Food-Motive, japanische Details und eine leichte Anime-Ästhetik. Dadurch entsteht ein Look, der sofort auffällt und den Charakter von Funky Ramen visuell übersetzt.</p>
          <p>Ramen wird nicht nur als Gericht gezeigt, sondern als zentrales Markenelement — warm, kräftig, kreativ und anders als gewöhnliche Restaurantfotografie.</p>
        </div>
      </div>


      <div className="px-8 py-15">
        <Image
          src="/images/case-funky-ramen-5.jpg"
          width={1440}
          height={720}
          alt=""
          className="w-full rounded-lg"
        />
      </div>


      {/* 2 column text */}
      <div className="container mx-auto px-5 py-15">
        <div className="text-xl space-y-3 max-w-235">
          <p>Neben den Ramen-Gerichten wurden auch die warmen Rollen und Signature-Produkte in die Markenkommunikation integriert. Gerade diese Kombination aus japanischer Tradition und eigenen Geschmacksrichtungen macht Funky Ramen besonders.</p>
          <p>Die Website sollte deutlich machen, dass hier nicht einfach Standardgerichte serviert werden, sondern ein eigenes Food-Konzept mit Persönlichkeit, Experimentierfreude und starkem Wiedererkennungswert.</p>
        </div>
      </div>


      <Separator />


      <div className="container mx-auto px-5 py-15 flex gap-20">
        <h2 className="text-xl font-semibold flex-1 max-w-50">Results</h2>
        <div className="text-base space-y-3 flex-2">Das Ergebnis ist ein digitaler Auftritt, der Funky Ramen als eigenständiges Restaurantkonzept in Düsseldorf positioniert. Die Website vermittelt Geschmack, Atmosphäre und Markenidentität auf eine visuelle Weise, die neugierig macht und Lust auf einen Besuch erzeugt.</div>
        <div className="text-base space-y-3 flex-2">Funky Ramen wird dadurch nicht nur als Ort für Ramen und warme Rollen wahrgenommen, sondern als modernes japanisch inspiriertes Erlebnis mit eigener Handschrift. Der Auftritt stärkt die Marke, macht das Konzept verständlich und schafft eine starke Grundlage für Sichtbarkeit, Wiedererkennung und neue Gäste.</div>
      </div>


    </>
  )
}

