import CountUpOnView from "@/components/count-up-on-view";
import WorkThumb from "@/components/work-thumb/work-thumb";
import ScrambledText from "@/components/scrambled-text/scrambled-text";

export default function SectionFeatWorks(){

    return (
      <div className="section-works">
        <div className="container mx-auto px-8 py-20">

          <div className="lg:grid grid-cols-3 lg:gap-30">
            <div className="col-span-1">
              <div className="text-primary-500 font-mono text-3xl uppercase mb-12 lg:mb-15">[02]</div>
            </div>
            <div className="col-span-2">
              <div className="font-mono text-2xl lg:text-3xl uppercase mb-15">
                <h2>AUSGEWÄHLTE PROJEKTE</h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 xl:gap-30">

            <div className="col-span-1 order-2 md:order-1">
              <div className="sticky top-6">
                <div className="mb-15">Digitale Produkte mit messbarer Wirkung. Jedes Projekt verbindet Strategie, Design und Entwicklung zu klaren Ergebnissen — mit Fokus auf Performance, Nutzererlebnis und Wachstum.</div>
                <div className="brag mt-10">
                  <CountUpOnView
                    value={34}
                    prefix="+"
                    suffix="%"
                    className="font-mono uppercase text-6xl xl:text-8xl tracking-tight"
                  />
                  <div className="font-mono uppercase text-lg mt-1">CONVERSION RATE</div>
                  <div className="mt-3">Steigerung nach Relaunch und Optimierung der User Journey innerhalb von 90 Tagen.</div>
                </div>
                <div className="brag mt-10">
                  <CountUpOnView
                    value={41}
                    prefix="+"
                    suffix="%"
                    className="font-mono uppercase text-6xl xl:text-8xl tracking-tight"
                  />
                  <div className="font-mono uppercase text-lg mt-1">LEAD GENERIERUNG</div>
                  <div className="mt-3">Mehr Anfragen durch bessere Struktur, schnellere Ladezeiten und klare Kommunikation.</div>
                </div>
              </div>
            </div>

            <div className="col-span-2 relative order-1 md:order-2">

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

                <div className="works-masonry-item lg:pt-40">
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


              <ScrambledText text="[ Alle Projekte ] " as="a" href="#" className="section-works-link" />


            </div>

          </div>

        </div>
      </div>
    )

}
