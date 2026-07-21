import Image from "next/image";
import DoorButton from "@/components/door-button/door-button";
import ScrambledText from "@/components/scrambled-text/scrambled-text";
import Showreel from "@/components/showreel/showreel";
import ServiceDropdown from "@/components/service-dropdown/service-dropdown";
import LogoLoop from '@/components/logo-loop/LogoLoop';
import ContactButton from "@/components/contact-button/contact-button";
import ReviewCard from "@/components/review-card/review-card";
import PostThumb from "@/components/post-thumb/post-thumb";
import SectionContact from "@/components/section-contact/section-contact";

import SplineMedusa from "@/components/spline-medusa";
import SplineTorus from "@/components/spline-torus";
import SectionFeatWorks from "@/components/section-feat-works/section-feat-works";


const imageLogos = [
  { src: "/assets/images/Vbq7Fp6o8KdtjpOPsc8wVaQWxYY.png", alt: "", href: "#" },
  { src: "/assets/images/Vbq7Fp6o8KdtjpOPsc8wVaQWxYY.png", alt: "", href: "#" },
  { src: "/assets/images/Vbq7Fp6o8KdtjpOPsc8wVaQWxYY.png", alt: "", href: "#" },
];

export default function Home() {
  return (
    <>


      <div className="hero">

        <SplineMedusa />

        <div className="container mx-auto px-8 relative flex flex-col justify-end gap-10 h-full">

          <div className="hero-cta">
            <div className="hero-cta-box">
              <div className="hero-cta-box-content">
                <div className="text-xl font-bold uppercase font-mono leading-tight">Start <br />a project</div>
                <div className="text-sm mt-3 flex-1">Let's book & talk with our manager</div>
                <div className="mt-3">
                  <DoorButton color="white" className="w-full">Book a call</DoorButton>
                </div>
              </div>
              <div className="bg-gray-200 hero-cta-box-media">
                <video 
                  poster="/images/cta.jpg"
                  src="/videos/cta.mp4" 
                  autoPlay 
                  loop 
                  muted
                ></video>
              </div>
            </div>
          </div>

          <h1 className="hero-title">
              <div className="container mx-auto px-8">
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

      </div>



      {/* Intro section */}

      <div className="intro py-12 xl:py-20">
        <div className="container mx-auto px-8">
          <div className="intro-row">
            <div className="text-4xl lg:text-5xl text-justify font-mono font-medium uppercase leading-[1.4]"><span className="text-3xl text-primary-500">[01]</span>&nbsp;&nbsp;&nbsp;Wir gestalten digitale Erlebnisse, die Marken sichtbar machen und Unternehmen wachsen lassen.</div>
            <ScrambledText text="[ More about ] " as="a" href="#" className="intro-link" />
          </div>
        </div>
      </div>



      {/* About section */}

      <div className="container mx-auto px-8 py-12 xl:py-20">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-20">

          <div className="flex-1">
            <Image 
              src="/assets/images/h354KZtk5kmg0VJiEtNwQdpZc.jpg"
              alt=""
              width={380}
              height={150}
              className="rounded-md w-full"
            />
          </div>

          <div className="flex-1 text-md leading-[1.6] xl:pr-20">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wir sind eine kreative Digitalagentur mit Fokus auf Klarheit, Performance und Wachstum. Wir verbinden Strategie, Branding und Webentwicklung zu modernen Systemen, die skalieren und nachhaltig funktionieren. Unser Ansatz ist einfach: weniger Komplexität, mehr Wirkung. Jedes Projekt wird mit Präzision gestaltet — von der ersten Idee bis zum finalen Produkt. <b>Schnell. Klar. Effektiv.</b></p>
          </div>

        </div>
      </div>



      {/* Showreel section */}

      <div className="container mx-auto xl:px-8 py-12 xl:py-20">
        <Showreel />
      </div>


      {/* Services section */}

      <div className="container mx-auto px-8 py-12 xl:py-20">

        <div className="font-mono text-3xl uppercase pb-15 flex justify-between items-center">
          <h2>Leisungen</h2>
          <div className="text-primary-500">[02]</div>
        </div>

        <div className="services">

          <ServiceDropdown
            align="left"
            title="Web Design"
            label="Digitale Erlebnisse mit Klarheit und Charakter"
            text="Wir gestalten moderne Websites, die Ästhetik, Funktionalität und Benutzerfreundlichkeit vereinen. Durch durchdachte Strukturen und präzises Design entstehen digitale Erlebnisse, die Vertrauen schaffen und nachhaltig begeistern."
            image="/images/service-web-design.jpg"
          />

          <ServiceDropdown
            align="center"
            title="Branding"
            label="Markenidentitäten, die in Erinnerung bleiben"
            text="Wir entwickeln unverwechselbare Marken, die Strategie, Emotion und visuelle Klarheit miteinander verbinden. So entsteht ein konsistenter Auftritt, der Wiedererkennung schafft und langfristige Beziehungen zu Kunden aufbaut."
            image="/images/service-branding.jpg"
          />

          <ServiceDropdown
            align="right"
            title="Content"
            label="Inhalte mit Bedeutung"
            text="Wir gestalten Inhalte, die Informationen in Erlebnisse verwandeln. Klar, präzise und auf Ihre Marke abgestimmt, damit jede Botschaft nachhaltig wirkt."
            image="/images/service-content.jpg"
          />

          <ServiceDropdown
            align="center"
            title="Mobile"
            label="Mobile Erlebnisse mit Leichtigkeit"
            text="Wir gestalten mobile Interfaces, die intuitiv, schnell und klar funktionieren. Jede Interaktion wird so aufgebaut, dass Inhalte mühelos erreichbar bleiben und digitale Produkte auf jedem Bildschirm hochwertig wirken."
            image="/images/service-mobile.jpg"
          />

        </div>

      </div>



      {/* Featured works section */}

      <div className="section-works relative py-8 xl:py-20">
        <div className="container px-8 section-works-inner">
          <SectionFeatWorks />
        </div>
      </div>


      {/* How we work section */}

      <div className="section-how py-8 xl:py-20">
        <div className="container mx-auto xl:px-8 max-w-430">
          <div className="bg-neutral-900 text-white py-20 xl:py-40 px-15 xl:px-25 xl:rounded-xl relative overflow-visible">

            <SplineTorus className="opacity-30 xl:opacity-100" />
            
            <div className="font-mono text-3xl uppercase mb-60 mt-[-90vh] xl:mt-[-95vh] flex justify-between relative z-2">
              <div>How We Work</div>
              <div>[04]</div>
            </div>

            <div className="flex relative z-2">
              <div className="w-100">
                <div className="font-mono uppercase">[001]</div>
                <div className="font-mono text-7xl uppercase mt-3 tracking-tight">Discover</div>
                <div className="text-neutral-300 mt-10">We align on goals, audience, and constraints. We review analytics and current assets, run stakeholder interviews, and map risks and assumptions. The outcome is shared clarity on what success looks like.</div>
                <div className="font-mono font-bold text-md tracking-relaxed uppercase text-gray-100 mt-3">2–4 days</div>
              </div>
            </div>

            <div className="flex justify-end relative z-2">
              <div className="w-100 text-right">
                <div className="font-mono uppercase">[002]</div>
                <div className="font-mono text-7xl uppercase mt-3 tracking-tight">Define</div>
                <div className="text-neutral-300 mt-10">We translate goals into scope, timeline, and KPIs. We draft the roadmap, responsibilities, and the measurement plan so every step is testable. Trade-offs are explicit and documented.</div>
                <div className="font-mono font-bold text-md tracking-relaxed uppercase text-gray-100 mt-3">2–4 days</div>
              </div>
            </div>

            <div className="flex relative z-2">
              <div className="w-100">
                <div className="font-mono uppercase">[003]</div>
                <div className="font-mono text-7xl uppercase mt-3 tracking-tight">Design</div>
                <div className="text-neutral-300 mt-10">We explore concepts, then systematize into a modular UI and brand toolkit. Content structure, accessibility, and motion are specified so the build phase is predictable. Iterations are time-boxed with weekly reviews.</div>
                <div className="font-mono font-bold text-md tracking-relaxed uppercase text-gray-100 mt-3">1–2 weeks</div>
              </div>
            </div>

            <div className="flex justify-end relative z-2">
              <div className="w-100 text-right">
                <div className="font-mono uppercase">[004]</div>
                <div className="font-mono text-7xl uppercase mt-3 tracking-tight">Build</div>
                <div className="text-neutral-300 mt-10">We implement production-ready components, CMS schemas and integrations. Performance budgets guide choices; QA runs continuously across devices. Analytics and events are instrumented from day one.</div>
                <div className="font-mono font-bold text-md tracking-relaxed uppercase text-gray-100 mt-3">1–2 weeks</div>
              </div>
            </div>

            <div className="flex relative z-2">
              <div className="w-100">
                <div className="font-mono uppercase">[005]</div>
                <div className="font-mono text-7xl uppercase mt-3 tracking-tight">Launch</div>
                <div className="text-neutral-300 mt-10">We ship behind a checklist: QA, Core Web Vitals, redirects, tracking, and security. We monitor the first 72 hours and fix issues fast. Your team gets a short handover and edit training.</div>
                <div className="font-mono font-bold text-md tracking-relaxed uppercase text-gray-100 mt-3">1–2 weeks</div>
              </div>
            </div>

            <div className="flex justify-end relative z-2">
              <div className="w-100 text-right">
                <div className="font-mono uppercase">[006]</div>
                <div className="font-mono text-7xl uppercase mt-3 tracking-tight">Improve</div>
                <div className="text-neutral-300 mt-10">We implement production-ready components, CMS schemas and integrations. Performance budgets guide choices; QA runs continuously across devices. Analytics and events are instrumented from day one.</div>
                <div className="font-mono font-bold text-md tracking-relaxed uppercase text-gray-100 mt-3">1–2 weeks</div>
              </div>
            </div>

            <div className="mt-40">
              <ContactButton />
            </div>

          </div>          
        </div>
      </div>


      {/* Testimonials section */}

      <div className="container mx-auto px-8 py-20">

        <div className="font-mono text-3xl uppercase pb-20 flex items-center">
          <div className="text-primary-500 flex-1">[05]</div>
          <h2 className="text-center flex-2">Produktion</h2>
          <div className="flex-1"></div>
        </div>

        <div className="masonry">

          <div className="masonry-item">
            <div className="space-y-1">
              <Image 
                src="/assets/images/h354KZtk5kmg0VJiEtNwQdpZc.jpg"
                alt=""
                className="rounded-xl"
                width={1000}
                height={500}
              />
              <div className="bg-white rounded-xl p-7 xl:p-10 space-y-1">
                <div className="font-mono text-6xl xl:text-8xl">200+</div>
                <div className="font-mono text-xl uppercase">Worldwide  Clients</div>
              </div>
              <div className="bg-white rounded-xl py-12 space-y-4 overflow-hidden">
                <LogoLoop
                  logos={imageLogos}
                  speed={30}
                  direction="right"
                  logoHeight={60}
                  gap={60}
                  hoverSpeed={0}
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#ffffff"
                  ariaLabel=""
                />
                <LogoLoop
                  logos={imageLogos}
                  speed={30}
                  direction="left"
                  logoHeight={60}
                  gap={60}
                  hoverSpeed={0}
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#ffffff"
                  ariaLabel=""
                />
              </div>
            </div>
          </div>

          <div className="masonry-item">
            <ReviewCard />
          </div>

          <div className="masonry-item">
            <ReviewCard />
          </div>

          <div className="masonry-item">
            <ReviewCard />
          </div>

          <div className="masonry-item">
            <ReviewCard />
          </div>

          <div className="masonry-item">
            <div className="space-y-1">
                <div className="bg-white rounded-xl p-7 xl:p-10 space-y-1 text-right">
                  <div className="font-mono text-6xl xl:text-8xl">93%</div>
                  <div className="font-mono text-xl uppercase">Repeat Clients</div>
                </div>
                <div className="bg-white rounded-xl p-7 xl:p-10 space-y-1 text-right">
                  <div className="font-mono text-6xl xl:text-8xl">100×</div>
                  <div className="font-mono text-xl uppercase">Increased clients profits</div>
                </div>
                <Image 
                  src="/assets/images/h354KZtk5kmg0VJiEtNwQdpZc.jpg"
                  alt=""
                  className="rounded-xl"
                  width={1000}
                  height={500}
                />
            </div>
          </div>

        </div>

      </div>


      {/* Before after section */}

      {/* <div className="container mx-auto px-8 py-20">

        <div className="font-mono text-3xl uppercase pb-20 flex justify-between items-center">
          <h2 className="font-medium text-7xl tracking-tight">Before & After</h2>
          <div className="text-primary-500">[06]</div>
        </div>

        <div className="text-4xl text-center py-20 bg-gray-200">PROJECT INFO GOES HERE</div>

      </div> */}



      {/* Insights section */}

      <div className="container mx-auto px-8 py-20">

        <div className="font-mono text-3xl uppercase pb-15 flex items-center gap-15">
          <div className="text-primary-500">[07]</div>
          <h2 className="">ERKENNTNISSE</h2>
          <div className="flex-1 flex justify-end">
            <ScrambledText text="[ ALLE BEITRÄGE ] " as="a" href="#" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <PostThumb />
          <PostThumb align="right" />
          <PostThumb />
        </div>

      </div>



      {/* Contact section */}

      <SectionContact />


    </>
  );
}
