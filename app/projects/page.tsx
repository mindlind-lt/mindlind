import WorkThumb from "@/components/work-thumb/work-thumb";
import SectionContact from "@/components/section-contact/section-contact";
// import SplineProjectsHero from "@/components/spline-projects-hero";

import Hero from "@/components/hero";

import { GlassObject } from "@/components/canvasui/GlassObject";
import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("/projects");




export default function PageProjects() {
  return (
    <>

      <Hero title="PROJEKTE" />

      {/* <div className="border-4 border-dashed border-red-500">
        <SplineProjectsHero />
      </div> */}

      <div className="container mx-auto px-5 pb-20">
        <div className="works-masonry">

          <div className="works-masonry-item">
            <WorkThumb
              headingLevel="h2"
              href="/projects/funky-coffee"
              imageSrc="/images/case-funky-coffee-1.png"
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
              imageSrc="/images/case-funky-ramen-1.jpg"
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
              imageSrc="/images/case-mondent-1.png"
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
              imageSrc="/images/case-autosl-1.jpg"
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
              imageSrc="/images/case-luxfloor-1.png"
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
              imageSrc="/images/case-factorysl-1.jpg"
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
