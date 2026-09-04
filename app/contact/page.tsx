import Hero from "@/components/hero";
import ImageParticles from "@/components/image-particles/image-particles";
import KineticType from "@/components/kinetic-type/kinetic-type";
import ScrollArrow from "@/components/scroll-arrow/scroll-arrow";
import SectionContact from "@/components/section-contact/section-contact";
import type { Metadata } from "next";

import { socialCard } from "@/lib/site";
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
    images: socialCard(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt | Mindlind Werbeagentur",
    description:
      "Projekt im Kopf? Schreiben Sie uns — wir melden uns kurzfristig mit einer ersten Einschätzung.",
    images: socialCard(),
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

      {/* Sits under the fixed header, hence the top margin — the canvas fills
          the container edge to edge, so padding would not move it. */}
      {/* The visible heading is drawn into a WebGL canvas by <KineticType>,
          which leaves no text in the DOM — the page shipped with no <h1> at
          all. This one carries it for crawlers and screen readers without
          changing the design. */}
      <h1 className="sr-only">Kontakt — Mindlind Werbeagentur</h1>

      {/* The heading and the scroll cue share this box. The arrow is a sibling
          of <KineticType>, not a child: everything inside that component is
          painted into one WebGL canvas, and anything layered over it would have
          to fight the canvas for stacking order. The top margin moved up here
          so the arrow is measured against the hero, not against the header. */}
      <div className="relative" style={{ marginTop: "var(--hdr-height)" }}>
        <KineticType
          words={["KONTAKT", "CONTACT US", "WORK WITH US"]}
          hold={2.2}
          widthFraction={0.55}
          heightFraction={0.3}
          // The word is width-bound, so a portrait screen shrinks it twice over:
          // the container is narrow AND the hero above is short. The custom
          // property gives it back a share of that width — a plain prop could
          // not, since it is one number for every screen.
          className="font-mono font-bold uppercase min-h-[80svh] portrait:min-h-[40svh] portrait:[--kinetic-type-width-fraction:0.66]"
        />

        <ScrollArrow />
      </div>

      {/* <ImageParticles
        src="/images/service-content.webp"
        alt=""
        style={{ aspectRatio: "21/9", minHeight: "70svh" }}
      >
        <div className="flex h-full items-center justify-center">
          <h1 className="font-mono text-white text-6xl sm:text-8xl font-bold uppercase">Kontakt</h1>
        </div>
      </ImageParticles> */}
      

      <SectionContact />

    
    </>
  );
}