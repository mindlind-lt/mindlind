import AmbientVideo from "@/components/ambient-video/ambient-video";
import DoorButton from "@/components/door-button/door-button";
import ScrambledText from "@/components/scrambled-text/scrambled-text";
import Showreel from "@/components/showreel/showreel";
import ServiceDropdown from "@/components/service-dropdown/service-dropdown";
import LogoLoop from '@/components/logo-loop/LogoLoop';
import ContactButton from "@/components/contact-button/contact-button";
import ReviewCard from "@/components/review-card/review-card";
import HoverVideo from "@/components/hover-video/hover-video";
import PostThumb from "@/components/post-thumb/post-thumb";
import SectionContact from "@/components/section-contact/section-contact";

import SplineMedusa from "@/components/spline-medusa";
import SplineTorus from "@/components/spline-torus";
import SectionFeatWorks from "@/components/section-feat-works/section-feat-works";
import SplineCubes from "@/components/spline-cubes";
import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("/");


const clientLogos1 = [
  { src: "/images/client-1.png", alt: "", href: "#", width: 1536, height: 1024 },
  { src: "/images/client-2.png", alt: "", href: "#", width: 1536, height: 1024 },
  { src: "/images/client-3.png", alt: "", href: "#", width: 1536, height: 1024 },
  { src: "/images/client-4.png", alt: "", href: "#", width: 1536, height: 1024 },
  { src: "/images/client-5.png", alt: "", href: "#", width: 1536, height: 1024 },
  { src: "/images/client-6.png", alt: "", href: "#", width: 1536, height: 1024 },
];

const clientLogos2 = [
  { src: "/images/client-7.png", alt: "", href: "#", width: 1536, height: 1024 },
  { src: "/images/client-8.png", alt: "", href: "#", width: 1536, height: 1024 },
  { src: "/images/client-9.png", alt: "", href: "#", width: 1536, height: 1024 },
  { src: "/images/client-10.png", alt: "", href: "#", width: 1536, height: 1024 },
  { src: "/images/client-11.png", alt: "", href: "#", width: 1024, height: 1008 },
];

export default function Home() {
  return (
    <>


      <div className="hero">

        <SplineMedusa />

        <div className="px-5 sm:px-8 relative z-10 flex flex-col justify-end gap-10 h-full">

          <div className="hero-cta">
            <div className="hero-cta-box">
              <div className="hero-cta-box-content">
                <div className="text-xl font-bold uppercase font-mono leading-tight">IHR WACHSTUM BEGINNT HIER</div>
                <div className="text-sm mt-3 flex-1">Ob Website, SEO oder Performance Marketing – wir begleiten Sie vom ersten Gespräch bis zum langfristigen Erfolg.</div>
                <div className="mt-3">
                  <DoorButton color="white" className="w-full">JETZT ANFRAGEN</DoorButton>
                </div>
              </div>
              <div className="bg-gray-200 hero-cta-box-media">
                <AmbientVideo
                  poster="/images/cta-poster.webp"
                  src="/videos/cta.mp4"
                />
              </div>
            </div>
          </div>

          <h1 className="hero-title">
              <div className="container mx-auto">
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
        <div className="container mx-auto px-5 sm:px-8">
          <div className="intro-row">
            <div className="text-2xl sm:text-4xl lg:text-5xl text-justify font-mono font-medium uppercase leading-[1.4] mb-10 sm:mb-0">
              <span className="text-2xl sm:text-3xl text-primary-700">[01]</span>
              &nbsp;&nbsp;&nbsp;Wir gestalten digitale Erlebnisse, die Marken sichtbar machen und Unternehmen wachsen lassen.
            </div>
            <ScrambledText text="[ ÜBER UNS ] " as="a" href="#" className="intro-link" />
          </div>
        </div>
      </div>



      {/* About section */}

      <div className="container mx-auto px-5 sm:px-8 pb-10 md:pb-0">
        <div
          data-cube-section
          className="relative flex flex-col md:flex-row items-center lg:gap-10 xl:gap-24"
        >

          <div className="">
            <SplineCubes className="w-[400px] h-[450px] xl:w-[500px] xl:h-[550px]" />
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

      <div className="container mx-auto px-5 sm:px-8 py-12 xl:py-20">

        <div className="font-mono text-3xl uppercase pb-15 flex justify-between items-center">
          <h2>Leisungen</h2>
          <div className="text-primary-700">[02]</div>
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
        <div className="container px-5 sm:px-8 section-works-inner">
          <SectionFeatWorks />
        </div>
      </div>



      {/* How we work section */}

      <div className="section-how py-8 xl:py-20">
        <div className="container mx-auto xl:px-8 max-w-430">
          <div className="bg-neutral-900 text-white py-14 px-6 sm:py-20 sm:px-15 xl:py-40 xl:px-25 xl:rounded-xl relative overflow-visible">

            <SplineTorus className="opacity-100 sm:opacity-30 xl:opacity-100" />
            
            <div className="font-mono text-2xl sm:text-3xl uppercase mb-24 sm:mb-60 mt-0 sm:mt-[-90vh] xl:mt-[-95vh] flex justify-between relative z-2">
              <div>How We Work</div>
              <div>[04]</div>
            </div>

            <div className="flex relative z-2 mb-24 sm:mb-0 overflow-hidden">
              <div className="w-full sm:w-100">
                <div className="font-mono uppercase">[001]</div>
                <div className="font-mono text-4xl sm:text-5xl uppercase mt-3 tracking-tight">ANALYSE</div>
                <div className="text-neutral-300 mt-10">Wir starten mit einem klaren Verständnis Ihres Unternehmens, Ihrer Zielgruppe und Ihrer Ziele. Durch Analyse, Wettbewerbsrecherche und Strategie schaffen wir die Grundlage für messbare Ergebnisse.</div>
              </div>
            </div>

            <div className="flex justify-end relative z-2 mb-24 sm:mb-0 overflow-hidden">
              <div className="w-full sm:w-100 text-left sm:text-right">
                <div className="font-mono uppercase">[002]</div>
                <div className="font-mono text-4xl sm:text-5xl uppercase mt-3 tracking-tight">STRATEGIE</div>
                <div className="text-neutral-300 mt-10">Jedes erfolgreiche Projekt beginnt mit einem Plan. Wir entwickeln eine individuelle Strategie für Website, SEO oder Performance Marketing – abgestimmt auf Ihr Unternehmen und Ihre Wachstumsziele.</div>
              </div>
            </div>

            <div className="flex relative z-2 mb-24 sm:mb-0 overflow-hidden">
              <div className="w-full sm:w-100">
                <div className="font-mono uppercase">[003]</div>
                <div className="font-mono text-4xl sm:text-5xl uppercase mt-3 tracking-tight">UMSETZUNG</div>
                <div className="text-neutral-300 mt-10">Design, Entwicklung und Marketing greifen nahtlos ineinander. Während der gesamten Umsetzung bleiben Sie eingebunden und erhalten regelmäßige Einblicke in den Fortschritt.</div>
                <div className="font-mono font-bold text-md tracking-relaxed uppercase text-gray-100 mt-3">1–4 WOCHEN</div>
              </div>
            </div>

            <div className="flex justify-end relative z-2 mb-24 sm:mb-0 overflow-hidden">
              <div className="w-full sm:w-100 text-left sm:text-right">
                <div className="font-mono uppercase">[004]</div>
                <div className="font-mono text-4xl sm:text-5xl uppercase mt-3 tracking-tight">WACHSTUM</div>
                <div className="text-neutral-300 mt-10">Nach dem Launch beginnt die eigentliche Arbeit. Mit SEO, Google Ads, Instagram Ads und kontinuierlicher Optimierung sorgen wir für nachhaltiges Wachstum und mehr qualifizierte Anfragen.</div>
              </div>
            </div>

            <div className="flex relative z-2 mb-24 sm:mb-0 overflow-hidden">
              <div className="w-full sm:w-100">
                <div className="font-mono uppercase">[005]</div>
                <div className="font-mono text-4xl sm:text-5xl uppercase mt-3 tracking-tight">OPTIMIERUNG</div>
                <div className="text-neutral-300 mt-10">Digitale Projekte sind niemals abgeschlossen. Wir analysieren Daten, testen neue Ansätze und verbessern kontinuierlich Ihre Website, SEO und Werbekampagnen, um langfristig bessere Ergebnisse zu erzielen.</div>
              </div>
            </div>

            <div className="flex justify-end relative z-2 mb-24 sm:mb-0 overflow-hidden">
              <div className="w-full sm:w-100 text-left sm:text-right">
                <div className="font-mono uppercase">[006]</div>
                <div className="font-mono text-4xl sm:text-5xl uppercase mt-3 tracking-tight">PARTNERSCHAFT</div>
                <div className="text-neutral-300 mt-10">Unser Ziel ist eine langfristige Zusammenarbeit. Wir begleiten Ihr Unternehmen als digitaler Partner und entwickeln Strategien, die mit Ihrem Wachstum Schritt halten – heute, morgen und in Zukunft.</div>
              </div>
            </div>

            <div className="mt-40">
              <ContactButton />
            </div>

          </div>          
        </div>
      </div>



      {/* Testimonials section */}

      <div className="container mx-auto px-5 sm:px-8 py-12 lg:py-20">

        <div className="font-mono text-2xl lg:text-3xl uppercase pb-10 lg:pb-20 flex items-center">
          <div className="text-primary-700 flex-1">[05]</div>
          <h2 className="text-center flex-2">Produktion</h2>
          <div className="flex-1"></div>
        </div>

        <div className="masonry">

          <div className="masonry-item">
            <div className="space-y-1">
              {/* <Image 
                src="/assets/images/h354KZtk5kmg0VJiEtNwQdpZc.jpg"
                alt=""
                className="rounded-xl"
                width={1000}
                height={500}
              /> */}
              <div className="bg-white rounded-xl p-7 xl:p-10 space-y-1">
                <div className="font-mono text-6xl xl:text-8xl">147+</div>
                <div className="font-mono text-xl uppercase">DIGITALE PROJEKTE</div>
              </div>
              <div className="bg-white rounded-xl py-12 space-y-5 overflow-hidden">
                <LogoLoop
                  logos={clientLogos1}
                  speed={24}
                  direction="right"
                  logoHeight={80}
                  gap={60}
                  hoverSpeed={0}
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#ffffff"
                  ariaLabel=""
                />
                <LogoLoop
                  logos={clientLogos2}
                  speed={24}
                  direction="left"
                  logoHeight={80}
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
            <HoverVideo
              src="/production/production-1.mp4"
              poster="/production/production-1.jpg"
              href="/projects"
              alt=""
              linkLabel="Mehr erfahren"
            />
          </div>

          <div className="masonry-item">
            <HoverVideo
              src="/production/production-2.mp4"
              poster="/production/production-2.jpg"
              href="/projects"
              alt=""
              linkLabel="Mehr erfahren"
            />
          </div>

          <div className="masonry-item">
            <HoverVideo
              src="/production/production-3.mp4"
              poster="/production/production-3.jpg"
              href="/projects"
              alt=""
              linkLabel="Mehr erfahren"
            />
          </div>

          <div className="masonry-item">
            <HoverVideo
              src="/production/production-4.mp4"
              poster="/production/production-4.jpg"
              href="/projects"
              alt=""
              linkLabel="Mehr erfahren"
            />
          </div>

          {/* <div className="masonry-item">
            <ReviewCard />
          </div> */}

          <div className="masonry-item">
            <div className="space-y-1">
                <div className="bg-white rounded-xl p-7 xl:p-10 space-y-1 text-right">
                  <div className="font-mono text-6xl xl:text-8xl">70%</div>
                  <div className="font-mono text-xl uppercase">LANGFRISTIGE KUNDEN</div>
                </div>
                <div className="bg-white rounded-xl p-7 xl:p-10 space-y-1 text-right">
                  <div className="font-mono text-6xl xl:text-8xl">100+</div>
                  <div className="font-mono text-xl uppercase">WEBSITES & KAMPAGNEN</div>
                </div>
                {/* <Image 
                  src="/assets/images/h354KZtk5kmg0VJiEtNwQdpZc.jpg"
                  alt=""
                  className="rounded-xl"
                  width={1000}
                  height={500}
                /> */}
            </div>
          </div>

        </div>

      </div>



      {/* Before after section */}

      {/* <div className="container mx-auto px-5 sm:px-8 py-20">

        <div className="font-mono text-3xl uppercase pb-20 flex justify-between items-center">
          <h2 className="font-medium text-7xl tracking-tight">Before & After</h2>
          <div className="text-primary-700">[06]</div>
        </div>

        <div className="text-4xl text-center py-20 bg-gray-200">PROJECT INFO GOES HERE</div>

      </div> */}



      {/* Insights section */}

      {/* <div className="container mx-auto px-5 sm:px-8 py-20">

        <div className="font-mono text-3xl uppercase pb-10 sm:pb-15   flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-15">
          <div className="text-primary-700">[07]</div>
          <h2 className="">ERKENNTNISSE</h2>
          <div className="flex-1 flex sm:justify-end">
            <ScrambledText text="[ ALLE BEITRÄGE ] " as="a" href="#" />
          </div>
        </div>

        <div className="flex flex-col gap-4   border-4 border-dashed border-red-500">
          <PostThumb />
          <PostThumb align="right" />
          <PostThumb />
        </div>

      </div> */}



      {/* Contact section */}

      <SectionContact />


    </>
  );
}
