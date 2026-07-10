import SectionContact from "@/components/section-contact/section-contact";
import SplineContactHero from "@/components/spline-contact-hero";

export default function PageContact() {
  return (
    <>
    
      
      <SplineContactHero />

      <div className="absolute top-32 left-0 right-0">
        <div className="container mx-auto px-8">
          <h1 className="text-[120px] tracking-tighter font-bold">Kontakt</h1>
        </div>
      </div>


      <SectionContact />

    
    </>
  );
}