import { breadcrumbSchema } from "@/lib/schema";
import type { Metadata } from "next";

import { socialCard } from "@/lib/site";

import PersonCard from "@/components/person-card/person-card";
import SectionContact from "@/components/section-contact/section-contact";
import SectionServices from "@/components/section-services/section-services";
import TeamCarousel from "@/components/team-carousel/team-carousel";
// import SplineAgency2 from "@/components/spline-agency-2";
import Hero from "@/components/hero";
import CreatureBlob from "@/components/creature-blob";

import NoiseOrb from '@/components/noise-orb';



export const metadata: Metadata = {
  title: "Agentur",
  description:
    "Das Team hinter Mindlind, unser 360°-Ansatz und wie wir Marken von der Strategie bis zum Launch begleiten.",
  alternates: { canonical: "/agency" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/agency",
    siteName: "Mindlind Werbeagentur",
    title: "Agentur | Mindlind Werbeagentur",
    description:
      "Das Team hinter Mindlind, unser 360°-Ansatz und wie wir Marken von der Strategie bis zum Launch begleiten.",
    images: socialCard(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentur | Mindlind Werbeagentur",
    description:
      "Das Team hinter Mindlind, unser 360°-Ansatz und wie wir Marken von der Strategie bis zum Launch begleiten.",
    images: socialCard(),
  },
};


export default function PageAgency() {
  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "Agentur", path: "/agency" }]),
          ),
        }}
      />

      <Hero title="AGENCY" />


      <div className="intro pb-12 lg:pb-20">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-1">

            <div className="intro-row flex items-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-mono font-medium uppercase leading-[1.4]">
                <p><span className="text-lg sm:text-xl lg:text-2xl text-primary-700">[01]</span>&nbsp;&nbsp;&nbsp;VON DER ERSTEN IDEE BIS ZUM LAUNCH ENTWICKELN WIR DIGITALE AUFTRITTE, DIE NICHT NUR SICHTBAR SIND, SONDERN VERSTANDEN WERDEN.</p>
                <p className="mt-5">WIR FORMEN AUS IDEEN KLARE STRUKTUREN, AUS STRUKTUREN STARKE ERLEBNISSE UND AUS ERLEBNISSEN MESSBARE WIRKUNG.</p>
                <p className="mt-5">UNSER ANSPRUCH: WENIGER ABLENKUNG, MEHR PRÄZISION. WENIGER OBERFLÄCHE, MEHR SUBSTANZ. DIGITAL DESIGN, DAS MITDENKT UND WEITER WÄCHST.</p>
              </div>
            </div>

            <div className="h-[380px] lg:h-auto">
              {/* <CreatureBlob /> */}
                <NoiseOrb background={false} padding={0} />                          
                {/* or: speed={0.6} particleCount={30000} */}
            </div>

          </div>
        </div>
      </div>



      {/* <div className="border-4 border-dashed border-red-500">
        <SplineAgency2 />
      </div> */}



      <div className="py-12 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-6 sm:px-8">

            <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-30">
              <div className="col-span-1">
                <div className="text-primary-700 font-mono text-2xl sm:text-3xl uppercase mb-8 lg:mb-15">[02]</div>
              </div>
              <div className="col-span-2">
                <div className="font-mono text-2xl sm:text-3xl uppercase mb-8 lg:mb-15">
                  <h2>Unser Team</h2>
                </div>
              </div>
            </div>

            <TeamCarousel className="">
              <PersonCard
                imageSrc="/images/team-1.webp"
                name="Jan"
                role="Creative Director"
                // bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              />
              <PersonCard
                imageSrc="/images/team-2.webp"
                name="Georgy"
                role="Managing Director"
                // bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              />
              <PersonCard
                imageSrc="/images/team-3.webp"
                name="Almaz"
                role="Webentwickler"
                // bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              />
              <PersonCard
                imageSrc="/images/team-4.webp"
                name="Lera"
                role="Designer"
                // bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              />
              <PersonCard
                imageSrc="/images/team-5.webp"
                name="Evgeny"
                role="Videoproduktion"
                // bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              />
              <PersonCard
                imageSrc="/images/team-6.webp"
                name="Elena"
                role="Online-Marketing"
                // bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              />
              <PersonCard
                imageSrc="/images/team-7.webp"
                name="Lisaveta"
                role="Social Media Manager"
                // bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              />
            </TeamCarousel>

        </div>
      </div>



      {/* <div className="py-12 lg:py-20">
        <div className="container mx-auto px-6 sm:px-8">

          <div className="flex justify-between gap-8 lg:gap-30">
            <div className="font-mono text-2xl sm:text-3xl uppercase mb-8 lg:mb-15">
              <h2>Our Packages</h2>
            </div>
            <div className="text-primary-700 font-mono text-2xl sm:text-3xl uppercase mb-8 lg:mb-15">[03]</div>
          </div>

          <SectionServices />

        </div>
      </div> */}



      <SectionContact />


    </>
  );
}