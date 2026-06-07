import Image from "next/image";
import ThreeDScene from "@/components/hero-3d";
import DoorButton from "@/components/door-button/door-button";
import ScrambledText from "@/components/scrambled-text/scrambled-text";
import Showreel from "@/components/showreel/showreel";



export default function Home() {
  return (
    <>


      <div className="hero">

        <ThreeDScene />

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


      <div className="container mx-auto px-5 py-15">
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


      <div className="container mx-auto px-5 py-15">
        <Showreel />
      </div>


    </>
  );
}
