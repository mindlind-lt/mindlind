import { Separator } from "@/components/ui/separator";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { ParallaxImage } from "@/components/ui/parallax-image";
import Image from "next/image";
import DoorButton from "@/components/door-button/door-button";

export default function PageCasePrince() {
  return (
    <>

      <Image 
        src="/images/case-prince-food-2.jpg"
        width={1000}
        height={600}
        alt=""
        className="w-full"
      />

      <div className="container mx-auto px-8 py-15">

        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-8xl tracking-tight font-bold -mt-1 uppercase">Prince Food</h1>
          </div>
          <div>
            <div className="pills justify-end">
              <div className="pills-item">WEBSITE</div>
              <div className="pills-item">FOOD PRODUCTION</div>
              <div className="pills-item">B2B</div>
              <div className="pills-item">Frozen Food</div>
              <div className="pills-item">Brand Presentation</div>
            </div>
          </div>
        </div>

        <Separator className="bg-black my-15" />

        <div className="flex justify-between gap-10">
          <div>
            <div className="text-xs uppercase mb-5">CLIENT</div>
            <div className="text-base font-medium">PRINCE FOOD</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">NICHE</div>
            <div className="text-base font-medium">Food Production / Frozen Food</div>
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
          <DoorButton className="w-full" href="https://prince-food.de/" target="_blank">OPEN WEBSITE</DoorButton>
        </div>

      </div>




    </>
  )
}

