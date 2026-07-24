import CountUpOnView from "@/components/count-up-on-view";
import WorkThumb from "@/components/work-thumb/work-thumb";
import ScrambledText from "@/components/scrambled-text/scrambled-text";

import "./section-feat-works.css";

export default function SectionFeatWorks(){

    return (
      <>

        <div className="section-works-head">
          <div className="section-works-index">[02]</div>
          <div className="section-works-title">
            <h2>AUSGEWÄHLTE PROJEKTE</h2>
          </div>
        </div>

        <div className="section-works-body">

          <div className="section-works-info">
            <div className="section-works-info-sticky">

              <div className="section-works-lead">Digitale Produkte mit messbarer Wirkung. Jedes Projekt verbindet Strategie, Design und Entwicklung zu klaren Ergebnissen — mit Fokus auf Performance, Nutzererlebnis und Wachstum.</div>
              
              <div className="flex flex-col sm:flex-row lg:flex-col gap-10">

                <div className="brag">
                  <CountUpOnView
                    value={34}
                    prefix="+"
                    suffix="%"
                    className="brag-value"
                  />
                  <div className="brag-label">CONVERSION RATE</div>
                  <div className="brag-desc">Steigerung nach Relaunch und Optimierung der User Journey innerhalb von 90 Tagen.</div>
                </div>

                <div className="brag">
                  <CountUpOnView
                    value={41}
                    prefix="+"
                    suffix="%"
                    className="brag-value"
                  />
                  <div className="brag-label">LEAD GENERIERUNG</div>
                  <div className="brag-desc">Mehr Anfragen durch bessere Struktur, schnellere Ladezeiten und klare Kommunikation.</div>
                </div>
              
              </div>

            </div>
          </div>

          <div className="section-works-media border-4 border-dashed border-red-500">

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

              <div className="works-masonry-item works-masonry-item--offset">
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

            <div className="flex justify-center xl:block">
              <ScrambledText text="[ Alle Projekte ] " as="a" href="#" className="section-works-link" />
            </div>

          </div>

        </div>

      </>
    )

}
