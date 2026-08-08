import HeroContact from "@/components/hero-contact";
import SectionContact from "@/components/section-contact/section-contact";
import SplineContactHero from "@/components/spline-contact-hero";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default function PageContact() {
  return (
    <>
    
      {/* <div className="border-4 border-dashed border-red-500">
        <SplineContactHero />
      </div> */}

      <HeroContact />


      {/* <div className="absolute top-32 left-0 right-0">
        <div className="container mx-auto px-5">
          <h1 className="text-[120px] tracking-tighter font-bold">Kontakt</h1>
        </div>
      </div> */}


      <SectionContact />

    
    </>
  );
}