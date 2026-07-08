import SectionServices from "@/components/section-services/section-services";
import SectionContact from "@/components/section-contact/section-contact";

export default function PageServices(){
    return (
        <>

            <div className="pt-[160px] pb-20">
                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-3 gap-20">
                        <div className="col-span-2">
                            <h1 className="text-[120px] tracking-tighter font-bold">Leistungen</h1>
                            <div className="text-3xl mt-6">Unsere Lösungen werden individuell an Ziele, Branche und Wachstumstempo angepasst.</div>
                        </div>
                        <div className="bg-red-100 py-50 items-center justify-center flex">3D</div>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <div className="container mx-auto px-5">

                    <SectionServices />

                </div>
            </div>


            <SectionContact />


        </>
    )
}
