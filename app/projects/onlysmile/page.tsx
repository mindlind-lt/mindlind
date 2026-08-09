import { Separator } from "@/components/ui/separator";
import { ImageCarousel } from "@/components/ui/image-carousel";
import { ParallaxImage } from "@/components/ui/parallax-image";
import Image from "next/image";
import DoorButton from "@/components/door-button/door-button";

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
export const metadata: Metadata = buildMetadata("/projects/onlysmile");

export default function PageCaseOnlysmile() {
  return (
    <>

      {/* Hero */}
      <ParallaxImage
        src="/images/case-onlysmile-2.png"
        alt=""
        height="600px"
        strength={150}
        direction="down"
        preload
        className="w-full"
      />


      {/* Data */}
      <div className="container mx-auto px-5 py-15">

        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-8xl tracking-tight font-bold -mt-1 uppercase">OnlySmile</h1>
          </div>
          <div>
            <div className="pills justify-end">
              <div className="pills-item">Website</div>
              <div className="pills-item">E-Commerce</div>
              <div className="pills-item">Dental Beauty</div>
              <div className="pills-item">Conversion Design</div>
              <div className="pills-item">Made in Germany</div>
            </div>
          </div>
        </div>

        <Separator className="bg-black my-15" />

        <div className="flex justify-between gap-10">
          <div>
            <div className="text-xs uppercase mb-5">CLIENT</div>
            <div className="text-base font-medium">OnlySmile</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">NICHE</div>
            <div className="text-base font-medium">Dental Beauty / Teeth Whitening</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">YEAR</div>
            <div className="text-base font-medium">2023</div>
          </div>
          <div>
            <div className="text-xs uppercase mb-5">TIMELINE</div>
            <div className="text-base font-medium">1 Monat</div>
          </div>
        </div>

        {/* <div className="mt-15">
          <DoorButton className="w-full" href="https://mondent.de/" target="_blank">OPEN WEBSITE</DoorButton>
        </div> */}

      </div>

    </>
  )
}

