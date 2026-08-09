import Hero from "@/components/hero";
import SectionContact from "@/components/section-contact/section-contact";
import SplineContactHero from "@/components/spline-contact-hero";
import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("/contact");


export default function PageContact() {
  return (
    <>
    
      {/* <div className="border-4 border-dashed border-red-500">
        <SplineContactHero />
      </div> */}

      <Hero title="KONTAKT" />


      {/* <div className="absolute top-32 left-0 right-0">
        <div className="container mx-auto px-5">
          <h1 className="text-[120px] tracking-tighter font-bold">Kontakt</h1>
        </div>
      </div> */}


      <SectionContact />

    
    </>
  );
}