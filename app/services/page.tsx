'use client';

import Hero from "@/components/hero";
import SectionServices from "@/components/section-services/section-services";
import SectionContact from "@/components/section-contact/section-contact";


export default function PageServices(){
    return (
        <>

            <Hero title="LEISTUNGEN" />


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
