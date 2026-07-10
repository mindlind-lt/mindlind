import WorkThumb from "@/components/work-thumb/work-thumb";
import SectionContact from "@/components/section-contact/section-contact";
import SplineProjectsHero from "@/components/spline-projects-hero";

export default function PageProjects() {
  return (
    <>


      <SplineProjectsHero />



      <div className="container mx-auto px-8 py-20">
        <div className="works-masonry">

          <div className="works-masonry-item">
            <WorkThumb
              href="https://prince-food.de/"
              imageSrc="/images/project-prince-1.jpg"
              title="Prince Food"
              pills={["Website", "UX/UI"]}
            />
          </div>

          <div className="works-masonry-item">
            <WorkThumb
              href="https://factorysl.de/"
              imageSrc="/images/project-factorysl-1.jpg"
              title="FactorySL"
              pills={["Website", "UX/UI"]}
            />
          </div>

          <div className="works-masonry-item">
            <WorkThumb
              href="https://muafaktur.de/"
              imageSrc="/images/project-mua.jpg"
              title="MUA Faktur"
              pills={["Website", "UX/UI"]}
            />
          </div>

          <div className="works-masonry-item">
            <WorkThumb
              href="#"
              imageSrc="/images/project-panda-1.jpg"
              title="Panda Travel"
              pills={["Website", "UX/UI"]}
            />
          </div>

        </div>
      </div>


      {/* Contact section */}
      <SectionContact />


    </>
  );
}
