import CountUpOnView from "@/components/count-up-on-view";
import WorkThumb from "@/components/work-thumb/work-thumb";
import ScrambledText from "@/components/scrambled-text/scrambled-text";

import "./section-feat-works.css";

export default function SectionFeatWorks(){

    return (
      <>

        <div className="section-works-head">
          <div className="section-works-index">[03]</div>
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

          <div className="section-works-media">

            <div className="works-masonry">

              <div className="works-masonry-item">
                <WorkThumb
                  href="/projects/funky-coffee"
                  imageSrc="/images/case-funky-coffee-1.webp"
                  imageAlt="Funky Coffee — Website und UX/UI für ein Coffee-Shop-Konzept"
                  imageWidth={1536}
                  imageHeight={1024}
                  title="Funky Coffee"
                  pills={["Website", "UX/UI"]}
                />
              </div>

              <div className="works-masonry-item">
                <WorkThumb
                  href="/projects/funky-ramen"
                  imageSrc="/images/case-funky-ramen-1.webp"
                  imageAlt="Funky Ramen — Website und UX/UI für ein japanisches Restaurant"
                  imageWidth={1536}
                  imageHeight={1024}
                  title="Funky Ramen"
                  pills={["Website", "UX/UI"]}
                />
              </div>

              <div className="works-masonry-item">
                <WorkThumb
                  href="/projects/princefood"
                  imageSrc="/images/case-prince-food-2.jpg"
                  imageAlt="Prince Food — Website und UX/UI für einen Tiefkühlkost-Hersteller"
                  imageWidth={1536}
                  imageHeight={1024}
                  title="Prince Food"
                  pills={["Website", "UX/UI"]}
                />
              </div>

              <div className="works-masonry-item">
                <WorkThumb
                  href="/projects/muafaktur"
                  imageSrc="/images/case-mua-2.png"
                  imageAlt="MUA Faktur — Website und UX/UI für Beauty- und Make-up-Ausbildung"
                  imageWidth={560}
                  imageHeight={560}
                  title="MUA Faktur"
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
