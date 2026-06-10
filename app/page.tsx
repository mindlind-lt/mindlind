import Image from "next/image";
import ThreeDScene from "@/components/hero-3d";
import DoorButton from "@/components/door-button/door-button";
import ScrambledText from "@/components/scrambled-text/scrambled-text";
import Showreel from "@/components/showreel/showreel";
import ServiceDropdown from "@/components/service-dropdown/service-dropdown";
import CountUpOnView from "@/components/count-up-on-view";
import WorkThumb from "@/components/work-thumb/work-thumb";



export default function Home() {
  return (
    <>


      <div className="hero">

        {/* <ThreeDScene /> */}

        <div className="container mx-auto px-5 relative">
          <div className="hero-cta">

            <div className="hero-cta-box">
              <div className="hero-cta-box-content">
                <div className="text-xl font-bold uppercase font-mono leading-tight">Start <br />a project</div>
                <div className="text-sm mt-3">Let's book & talk with our manager</div>
                <div className="mt-3">
                  <DoorButton color="white" className="w-full">Book a call</DoorButton>
                </div>
              </div>
              <div className="bg-gray-200 hero-cta-box-media">
                <video 
                  poster="/assets/F3t96ozC3GZuPhKwdm5VWtBIZwM.png"
                  src="/assets/PNQxI2Ed9uKXPFfH9IkZlg9f9qU.mp4" 
                  autoPlay 
                  loop 
                  muted
                ></video>
              </div>
            </div>

            <div className="hero-cta-footer">
              <div>Liked by 50+&nbsp;founders</div>
              <div className="flex">
                <Image 
                  src="/assets/pic-1.jpg"
                  alt="Photos"
                  width={40}
                  height={40}
                  className="rounded-full border-1 border-white w-10 h-10 -ml-2"
                />
                <Image 
                  src="/assets/pic-2.jpg"
                  alt="Photos"
                  width={40}
                  height={40}
                  className="rounded-full border-1 border-white w-10 h-10 -ml-2"
                />
                <Image 
                  src="/assets/pic-3.jpg"
                  alt="Photos"
                  width={40}
                  height={40}
                  className="rounded-full border-1 border-white w-10 h-10 -ml-2"
                />
                <Image 
                  src="/assets/pic-4.jpg"
                  alt="Photos"
                  width={40}
                  height={40}
                  className="rounded-full border-1 border-white w-10 h-10 -ml-2"
                />
              </div>
            </div>

          </div>
        </div>

        <h1 className="hero-title">
            <div className="container mx-auto px-5">
              <div className="hero-title-content">
                <div className="hero-title-lead">Digital Creative Agency</div>
                <div className="hero-title-main">
                    <svg width="1291" height="210" viewBox="0 0 1291 210" fill="black" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 210V0H48L76.2 199.2H79.8L108 0H156V210H132.6V10.8H129L100.8 210H55.2L27 10.8H23.4V210H0Z"/>
                      <path d="M174.091 210V186.6H228.091V23.4H174.091V0H307.291V23.4H253.291V186.6H307.291V210H174.091Z"/>
                      <path d="M333.483 210V0H383.883L444.483 199.2H448.083V0H473.283V210H422.883L362.283 10.8H358.683V210H333.483Z"/>
                      <path d="M496.174 210V186.3H514.174V23.4H496.174V0H565.174C590.974 0 609.874 6.3 621.874 18.9C634.074 31.3 640.174 51 640.174 78V132C640.174 159 634.074 178.8 621.874 191.4C609.874 203.8 590.974 210 565.174 210H496.174ZM539.374 186.6H561.574C573.774 186.6 583.774 185 591.574 181.8C599.574 178.4 605.474 172.6 609.274 164.4C613.074 156.2 614.974 144.8 614.974 130.2V79.8C614.974 65.2 613.074 53.8 609.274 45.6C605.474 37.4 599.574 31.7 591.574 28.5C583.774 25.1 573.774 23.4 561.574 23.4H539.374V186.6Z"/>
                      <path d="M663.066 210V0H688.266V186.6H798.066V210H663.066Z"/>
                      <path d="M824.857 210V186.6H878.857V23.4H824.857V0H958.057V23.4H904.057V186.6H958.057V210H824.857Z"/>
                      <path d="M984.248 210V0H1034.65L1095.25 199.2H1098.85V0H1124.05V210H1073.65L1013.05 10.8H1009.45V210H984.248Z"/>
                      <path d="M1146.94 210V186.3H1164.94V23.4H1146.94V0H1215.94C1241.74 0 1260.64 6.3 1272.64 18.9C1284.84 31.3 1290.94 51 1290.94 78V132C1290.94 159 1284.84 178.8 1272.64 191.4C1260.64 203.8 1241.74 210 1215.94 210H1146.94ZM1190.14 186.6H1212.34C1224.54 186.6 1234.54 185 1242.34 181.8C1250.34 178.4 1256.24 172.6 1260.04 164.4C1263.84 156.2 1265.74 144.8 1265.74 130.2V79.8C1265.74 65.2 1263.84 53.8 1260.04 45.6C1256.24 37.4 1250.34 31.7 1242.34 28.5C1234.54 25.1 1224.54 23.4 1212.34 23.4H1190.14V186.6Z"/>
                    </svg>
                </div>
              </div>
            </div>
        </h1>

      </div>


      <div className="intro py-20">
        <div className="container mx-auto px-5">
          <div className="intro-row">
            <div className="text-5xl text-justify font-mono font-medium uppercase leading-[1.4]"><span className="text-3xl text-primary-500">[01]</span>&nbsp;&nbsp;&nbsp;From strategy to launch we deliver fast, accessible sites and clear brands with Growth-driven results</div>
            <ScrambledText text="[ More about ] " as="a" href="#" className="intro-link" />
          </div>
        </div>
      </div>


      <div className="container mx-auto px-5 py-20">
        <div className="flex gap-24">

          <div>
            <Image 
              src="/assets/images/h354KZtk5kmg0VJiEtNwQdpZc.jpg"
              alt=""
              width={380}
              height={150}
              className="rounded-md"
            />
          </div>

          <div className="flex-1 text-md leading-[1.6]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re a senior creative digital agency focused on clarity and performance. We align strategy, brand, and web into modular systems that ship on time and scale. Our values are simplicity, accountability and measurable impact. The team is small and senior; every project has a lead for strategy, design and build. We partner long-term, iterating with data to keep products fast.</div>

          <div>
            <Image 
              src="/assets/images/h354KZtk5kmg0VJiEtNwQdpZc.jpg"
              alt=""
              width={380}
              height={150}
              className="rounded-md"
            />
          </div>

        </div>
      </div>


      <div className="container mx-auto px-5 py-20">
        <Showreel />
      </div>


      {/* Services section */}

      <div className="container mx-auto px-5 py-20">

        <div className="font-mono text-3xl uppercase pb-15 flex justify-between items-center">
          <h2>Leisungen</h2>
          <div className="text-primary-500">[02]</div>
        </div>

        <div className="services">
          <ServiceDropdown
            align="left"
            title="Web Design"
            label="UX/UI, design systems, prototypes."
            text="We design conversion-focused interfaces with clear hierarchy and measurable goals. Layouts are modular and responsive across breakpoints. Accessibility (AA) and performance budgets guide every screen. Deliverables: wireframes, UI kit, prototypes, and page templates."
            image="/assets/images/h354KZtk5kmg0VJiEtNwQdpZc.jpg"
          />
          <ServiceDropdown
            align="center"
            title="Web Development"
            label="Framer/Next.js, CMS, analytics."
            text="We design conversion-focused interfaces with clear hierarchy and measurable goals. Layouts are modular and responsive across breakpoints. Accessibility (AA) and performance budgets guide every screen. Deliverables: wireframes, UI kit, prototypes, and page templates."
            image="/assets/images/6W0vasxI6uWP2E6mj82VIXCUA.jpg"
          />
          <ServiceDropdown
            align="right"
            title="Brand Strategy"
            label="Create history and values."
            text="We design conversion-focused interfaces with clear hierarchy and measurable goals. Layouts are modular and responsive across breakpoints. Accessibility (AA) and performance budgets guide every screen. Deliverables: wireframes, UI kit, prototypes, and page templates."
            image="/assets/images/CA217Cc8CFDUqJ2Da783rGz8u3w.jpg"
          />
          <ServiceDropdown
            align="center"
            title="Brand Strategy"
            label="Create history and values."
            text="We design conversion-focused interfaces with clear hierarchy and measurable goals. Layouts are modular and responsive across breakpoints. Accessibility (AA) and performance budgets guide every screen. Deliverables: wireframes, UI kit, prototypes, and page templates."
            image="/assets/images/CA217Cc8CFDUqJ2Da783rGz8u3w.jpg"
          />
          <ServiceDropdown
            align="left"
            title="Brand Strategy"
            label="Create history and values."
            text="We design conversion-focused interfaces with clear hierarchy and measurable goals. Layouts are modular and responsive across breakpoints. Accessibility (AA) and performance budgets guide every screen. Deliverables: wireframes, UI kit, prototypes, and page templates."
            image="/assets/images/CA217Cc8CFDUqJ2Da783rGz8u3w.jpg"
          />
        </div>

      </div>


      {/* Featured works section */}

      <div className="section-works">
        <div className="container mx-auto px-5 py-20">
          <div className="grid grid-cols-3 gap-30">

            <div className="col-span-1">
              <div className="sticky top-6">
                <div className="text-primary-500 font-mono text-3xl uppercase mb-15">[02]</div>
                <div className="mb-15">Recent launches with real outcomes. Explore the brief, the system we built, and the impact — each case shows problem → approach → result. Every case lists scope, timeline, stack and KPI movement with before and after.</div>
                <div className="brag mt-10">
                  <CountUpOnView
                    value={34}
                    prefix="+"
                    suffix="%"
                    className="font-mono uppercase text-8xl tracking-tight"
                  />
                  <div className="font-mono uppercase text-lg mt-1">Conversion</div>
                  <div className="mt-3">Uplift after redesign and new funnel (90 days).</div>
                </div>
                <div className="brag mt-10">
                  <CountUpOnView
                    value={41}
                    prefix="+"
                    suffix="%"
                    className="font-mono uppercase text-8xl tracking-tight"
                  />
                  <div className="font-mono uppercase text-lg mt-1">Conversion</div>
                  <div className="mt-3">Uplift after redesign and new funnel (90 days).</div>
                </div>
                <div className="brag mt-10">
                  <CountUpOnView
                    value={3.8}
                    decimals={1}
                    suffix="×"
                    className="font-mono uppercase text-8xl tracking-tight"
                  />
                  <div className="font-mono uppercase text-lg mt-1">Conversion</div>
                  <div className="mt-3">Uplift after redesign and new funnel (90 days).</div>
                </div>
              </div>
            </div>

            <div className="col-span-2">

              <div className="font-mono text-3xl uppercase mb-15">
                <h2>Featured Works</h2>
              </div>


              <div className="works-masonry">

                <div className="works-masonry-item">
                  <WorkThumb
                    href="#"
                    imageSrc="/assets/images/DAjLnXaG8IFvDuszXELpqrUw.jpg"
                    title="White Gate Hotel"
                    pills={["Website", "Content", "Mobile App"]}
                  />
                </div>

                <div className="works-masonry-item">
                  <WorkThumb
                    href="#"
                    imageSrc="/assets/images/fiU9sXRKivF0zCNWzaj9LiysgsE.jpg"
                    title="Urban Outfitters"
                    pills={["E-commerce", "Brand Strategy", "UX/UI"]}
                  />
                </div>

                <div className="works-masonry-item pt-30">
                  <WorkThumb
                    href="#"
                    imageSrc="/assets/images/InPA0zF2DdxpZ1VYRLmFHFucyI.jpg"
                    title="Coffee Co."
                    pills={["Brand Identity", "Website", "Social Media"]}
                  />
                </div>

                <div className="works-masonry-item">
                  <WorkThumb
                    href="#"
                    imageSrc="/assets/images/LCtRY0s4liCVk8BVWfpiJA3ROzo.jpg"
                    title="Green Planet"
                    pills={["Sustainability", "Web Design", "SEO"]}
                  />
                </div>

              </div>


              <div className="text-red-500">View all</div>

            </div>

          </div>
        </div>
      </div>




    </>
  );
}
