import Hero from "@/components/hero";
import SectionContact from "@/components/section-contact/section-contact";
import SplineContactHero from "@/components/spline-contact-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Projekt im Kopf? Schreiben Sie uns — wir melden uns kurzfristig mit einer ersten Einschätzung.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/contact",
    siteName: "Mindlind Werbeagentur",
    title: "Kontakt | Mindlind Werbeagentur",
    description:
      "Projekt im Kopf? Schreiben Sie uns — wir melden uns kurzfristig mit einer ersten Einschätzung.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt | Mindlind Werbeagentur",
    description:
      "Projekt im Kopf? Schreiben Sie uns — wir melden uns kurzfristig mit einer ersten Einschätzung.",
  },
};


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