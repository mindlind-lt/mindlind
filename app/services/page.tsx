import SectionServices from "@/components/section-services/section-services";
import SectionContact from "@/components/section-contact/section-contact";
import TorusGlass from "@/components/torus-glass/torus-glass";

export default function PageServices(){
    return (
        <>

            <div className="pt-[160px] pb-20 border-4 border-dashed border-red-500">
                <div className="container mx-auto px-8">
                    <h1 className="text-[120px] tracking-tighter font-bold">Leistungen</h1>
                    <div className="text-3xl mt-6">Unsere Lösungen werden individuell an Ziele, Branche und Wachstumstempo angepasst.</div>
                    <TorusGlass className="absolute inset-0" />
                </div>
            </div>


            <div className="py-20">
                <div className="container mx-auto px-8">

                    <SectionServices />

                </div>
            </div>


            <SectionContact />


        </>
    )
}
