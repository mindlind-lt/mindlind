import WorkThumb from "@/components/work-thumb/work-thumb";
import SectionContact from "@/components/section-contact/section-contact";

export default function PageProjects() {
  return (
    <>


      <div className="bg-red-100 py-50 items-center justify-center flex">
        <h1 className="text-4xl font-bold">INTRO FROM SPLINE</h1>
      </div>


      <div className="container mx-auto px-5 py-20">
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
