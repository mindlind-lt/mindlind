import Hero from "@/components/hero";
import ImageParticles from "@/components/image-particles/image-particles";
import SectionContact from "@/components/section-contact/section-contact";
import SplineContactHero from "@/components/spline-contact-hero";
import type { Metadata } from "next";
import { breadcrumbSchema } from "@/lib/schema";

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "Kontakt", path: "/contact" }]),
          ),
        }}
      />

      <ImageParticles
        src="/images/service-content.jpg"
        alt=""
        style={{ aspectRatio: "21/9", minHeight: "70svh" }}
      >
        <div className="flex h-full items-center justify-center">
          <h1 className="font-mono text-white text-6xl sm:text-8xl font-bold uppercase">Kontakt</h1>
        </div>
      </ImageParticles>
      

      <SectionContact />

    
    </>
  );
}