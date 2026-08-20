'use client';

// import Hero from "@/components/hero";
import SectionServices from "@/components/section-services/section-services";
import SectionContact from "@/components/section-contact/section-contact";
import ImageParticles from "@/components/image-particles/image-particles";
import ServicesHero from '@/components/services-hero/services-hero';

export default function PageServices(){
    return (
        <>

            {/* <Hero title="LEISTUNGEN" /> */}

            {/* <ImageParticles
                src="/images/service-content.jpg"
                alt=""
                style={{ aspectRatio: "21/9", minHeight: "70svh" }}
            >
                <div className="flex h-full items-center justify-center">
                <h1 className="font-mono text-white text-6xl sm:text-8xl font-bold uppercase">LEISTUNGEN</h1>
                </div>
            </ImageParticles> */}

            {/* Hero section */}
            <ServicesHero title="Leistungen" />


            {/* <div className="pt-[160px] pb-20 border-4 border-dashed border-red-500 relative">
                <div className="container mx-auto px-5 relative z-10">
                    <h1 className="text-[120px] tracking-tighter font-bold">Leistungen</h1>
                    <div className="text-3xl mt-6">Unsere Lösungen werden individuell an Ziele, Branche und Wachstumstempo angepasst.</div>
                </div>
            </div> */}


            <div className="py-20">
                <div className="container mx-auto px-5">

                    <SectionServices />

                </div>
            </div>


            <SectionContact />


        </>
    )
}
