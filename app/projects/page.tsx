import WorkThumb from "@/components/work-thumb/work-thumb";
import SectionContact from "@/components/section-contact/section-contact";
// import SplineProjectsHero from "@/components/spline-projects-hero";

import Hero from "@/components/hero";

import { GlassObject } from "@/components/canvasui/GlassObject";
import type { Metadata } from "next";
import ImageParticles from "@/components/image-particles/image-particles";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Ausgewählte Arbeiten: Websites, UX/UI und Markenauftritte für Gastronomie, Beauty, Automotive und Produktion.",
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/projects",
    siteName: "Mindlind Werbeagentur",
    title: "Projekte | Mindlind Werbeagentur",
    description:
      "Ausgewählte Arbeiten: Websites, UX/UI und Markenauftritte für Gastronomie, Beauty, Automotive und Produktion.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projekte | Mindlind Werbeagentur",
    description:
      "Ausgewählte Arbeiten: Websites, UX/UI und Markenauftritte für Gastronomie, Beauty, Automotive und Produktion.",
  },
};




export default function PageProjects() {
  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "Projekte", path: "/projects" }]),
          ),
        }}
      />

      {/* <Hero title="PROJEKTE" /> */}

      <ImageParticles
        src="/images/hero-projects.jpg"
        alt=""
        style={{ aspectRatio: "21/9", minHeight: "70svh" }}
      >
        <div className="flex h-full items-center justify-center">
          <h1 className="font-mono text-white text-6xl sm:text-8xl font-bold uppercase">Projekte</h1>
        </div>
      </ImageParticles>

      {/* <div className="border-4 border-dashed border-red-500">
        <SplineProjectsHero />
      </div> */}

      <div className="container mx-auto px-5 py-20 sm:mt-10">
        <div className="works-masonry">

          <div className="works-masonry-item">
            <WorkThumb
              headingLevel="h2"
              href="/projects/funky-coffee"
              imageSrc="/images/case-funky-coffee-1.webp"
              imageAlt="Funky Coffee — Website und UX/UI für ein Coffee-Shop-Konzept"
              imageWidth={1536}
              imageHeight={1024}
              title="Funky Coffee"
              pills={["Website", "UX/UI"]}
            />
          </div>

          <div className="works-masonry-item">
            <WorkThumb
              headingLevel="h2"
              href="/projects/funky-ramen"
              imageSrc="/images/case-funky-ramen-1.webp"
              imageAlt="Funky Ramen — Website und UX/UI für ein japanisches Restaurant"
              imageWidth={1536}
              imageHeight={1024}
              title="Funky Ramen"
              pills={["Website", "UX/UI"]}
            />
          </div>

          <div className="works-masonry-item">
            <WorkThumb
              headingLevel="h2"
              href="/projects/princefood"
              imageSrc="/images/case-prince-food-2.jpg"
              imageAlt="Prince Food — Website und UX/UI für einen Tiefkühlkost-Hersteller"
              imageWidth={1536}
              imageHeight={1024}
              title="Prince Food"
              pills={["Website", "UX/UI"]}
            />
          </div>

          <div className="works-masonry-item">
            <WorkThumb
              headingLevel="h2"
              href="/projects/muafaktur"
              imageSrc="/images/case-mua-2.png"
              imageAlt="MUA Faktur — Website und UX/UI für Beauty- und Make-up-Ausbildung"
              imageWidth={560}
              imageHeight={560}
              title="MUA Faktur"
              pills={["Website", "UX/UI"]}
            />
          </div>

          <div className="works-masonry-item">
            <WorkThumb
              headingLevel="h2"
              href="/projects/mondent"
              imageSrc="/images/case-mondent-1.webp"
              imageAlt="Mondent — Website und UX/UI für eine Zahnarztpraxis"
              imageWidth={560}
              imageHeight={560}
              title="Mondent"
              pills={["Website", "UX/UI"]}
            />
          </div>

          <div className="works-masonry-item">
            <WorkThumb
              headingLevel="h2"
              href="/projects/autosl"
              imageSrc="/images/case-autosl-1.webp"
              imageAlt="AutoSL — Website und UX/UI für einen Sammlerfahrzeug-Händler"
              imageWidth={560}
              imageHeight={560}
              title="AutoSL"
              pills={["Website", "UX/UI"]}
            />
          </div>

          <div className="works-masonry-item">
            <WorkThumb
              headingLevel="h2"
              href="/projects/luxfloor"
              imageSrc="/images/case-luxfloor-1.webp"
              imageAlt="LuxFloor — Website und UX/UI für hochwertige Bodenbeläge"
              imageWidth={560}
              imageHeight={560}
              title="LuxFloor"
              pills={["Website", "UX/UI"]}
            />
          </div>

          <div className="works-masonry-item">
            <WorkThumb
              headingLevel="h2"
              href="/projects/panda-travel"
              imageSrc="/images/case-pandatravel-1.png"
              imageAlt="Panda Travel — Website und UX/UI für Geschäftsreisen und China-Sourcing"
              imageWidth={560}
              imageHeight={560}
              title="Panda Travel"
              pills={["Website", "UX/UI"]}
            />
          </div>

          <div className="works-masonry-item">
            <WorkThumb
              headingLevel="h2"
              href="/projects/factorysl"
              imageSrc="/images/case-factorysl-1.webp"
              imageAlt="Factory SL — Website und UX/UI für Luxus-Detailing und Fahrzeugaufbereitung"
              imageWidth={560}
              imageHeight={560}
              title="Factory SL"
              pills={["Website", "UX/UI"]}
            />
          </div>

          <div className="works-masonry-item">
            <WorkThumb
              headingLevel="h2"
              href="/projects/onlysmile"
              imageSrc="/images/case-onlysmile-1.png"
              imageAlt="OnlySmile — Website und UX/UI für professionelles Zahnbleaching"
              imageWidth={560}
              imageHeight={560}
              title="OnlySmile"
              pills={["Website", "UX/UI"]}
            />
          </div>

        </div>
      </div>


      {/* <GlassObject
        style={{ width: "100%", height: "500px" }}
        ior={1.75}
        thickness={4}
        roughness={0.25}
        dispersion={1.5}
        clearcoat={0.5}
        tintDensity={2}
        depth={0.1}
        bevel={1}
        environmentIntensity={1}
        scale={3}
        xOffset={0}
        yOffset={0}
        floatIntensity={1}
        rotationIntensity={1}
        floatSpeed={2}
        fov={55}
        cameraDistance={4}
        autoRotate={false}
        zoom={false}
        tint=""
        highlight="#066aff"
        backgroundImage="/images/project-factorysl-1.jpg"
      >
      </GlassObject> */}


      {/* Contact section */}
      <SectionContact />


    </>
  );
}
