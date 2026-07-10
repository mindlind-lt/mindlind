import PersonCard from "@/components/person-card/person-card";
import SectionContact from "@/components/section-contact/section-contact";
import SectionServices from "@/components/section-services/section-services";
import TeamCarousel from "@/components/team-carousel/team-carousel";

import SplineAgencyHero from "@/components/spline-agency-hero";
import SplineAgency2 from "@/components/spline-agency-2";

export default function PageAgency() {
  return (
    <>
    

      <SplineAgencyHero />



      <div className="intro py-20">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-[1fr_360px] gap-4">

            <div className="intro-row">
              <div className="text-4xl font-mono font-medium uppercase leading-[1.4]">
                <p><span className="text-3xl text-primary-500">[01]</span>&nbsp;&nbsp;&nbsp;From strategy to launch, we plan, design  and build end-to-end – aligning positioning, content, and modular UI into websites that load fast, meet AA accessibility and are easy to edit.</p>
                <p className="mt-8">Our DNA: clarity over noise, systems over one-offs, speed with accountability.</p>
              </div>
            </div>

            <div className="bg-red-100 py-50 items-center justify-center flex">3D</div>

          </div>
        </div>
      </div>


      <SplineAgency2 />



      <div className="py-20 overflow-hidden">
        <div className="container mx-auto px-8">

            <div className="grid grid-cols-3 gap-30">
              <div className="col-span-1">
                <div className="text-primary-500 font-mono text-3xl uppercase mb-15">[02]</div>
              </div>
              <div className="col-span-2">
                <div className="font-mono text-3xl uppercase mb-15">
                  <h2>Our Team</h2>
                </div>
              </div>
            </div>

            <TeamCarousel>
              <PersonCard />
              <PersonCard />
              <PersonCard />
              <PersonCard />
              <PersonCard />
            </TeamCarousel>

        </div>
      </div>



      <div className="py-20">
        <div className="container mx-auto px-8">

          <div className="flex justify-between gap-30">
            <div className="font-mono text-3xl uppercase mb-15">
              <h2>Our Packages</h2>
            </div>
            <div className="text-primary-500 font-mono text-3xl uppercase mb-15">[03]</div>
          </div>

          <SectionServices />

        </div>
      </div>



      <SectionContact />


    </>
  );
}