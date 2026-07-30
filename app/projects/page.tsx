import WorkThumb from "@/components/work-thumb/work-thumb";
import SectionContact from "@/components/section-contact/section-contact";
// import SplineProjectsHero from "@/components/spline-projects-hero";

import HeroProjects from "@/components/hero-projects";

import { GlassObject } from "@/components/canvasui/GlassObject";


export default function PageProjects() {
  return (
    <>

      <HeroProjects />

      {/* <div className="border-4 border-dashed border-red-500">
        <SplineProjectsHero />
      </div> */}

      <div className="container mx-auto px-8 py-20">
        <div className="works-masonry   border-4 border-dashed border-red-500">

          <div className="works-masonry-item">
            <WorkThumb
              href="https://prince-food.de/"
              imageSrc="/images/project-prince-1.jpg"
              imageWidth={1536}
              imageHeight={1024}
              title="Prince Food"
              pills={["Website", "UX/UI"]}
            />
          </div>

          <div className="works-masonry-item">
            <WorkThumb
              href="https://factorysl.de/"
              imageSrc="/images/project-factorysl-1.jpg"
              imageWidth={1536}
              imageHeight={1024}
              title="FactorySL"
              pills={["Website", "UX/UI"]}
            />
          </div>

          <div className="works-masonry-item">
            <WorkThumb
              href="https://muafaktur.de/"
              imageSrc="/images/project-mua.jpg"
              imageWidth={2400}
              imageHeight={1680}
              title="MUA Faktur"
              pills={["Website", "UX/UI"]}
            />
          </div>

          <div className="works-masonry-item">
            <WorkThumb
              href="#"
              imageSrc="/images/project-panda-1.jpg"
              imageWidth={1448}
              imageHeight={1086}
              title="Panda Travel"
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
