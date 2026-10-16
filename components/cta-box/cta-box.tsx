"use client";

import { usePathname } from "next/navigation";
import "./cta-box.css";
import AmbientVideo from "../ambient-video/ambient-video";
import DoorButton from "../door-button/door-button";

export default function CtaBox() {
    const isPraxis = usePathname() === "/praxis";
    return (
        <>
            <div className="cta-box" data-praxis-cta={isPraxis ? "footer" : undefined}>

              <div className="bg-gray-200 cta-box-media">
                <AmbientVideo
                  poster="/images/cta-poster.webp"
                  src="/videos/cta.mp4"
                />
              </div>

              <div className="cta-box-content">
                <div className="text-xl font-bold uppercase font-mono leading-tight">{isPraxis ? "IHR NÄCHSTER PRAXISSCHRITT" : "IHR WACHSTUM BEGINNT HIER"}</div>
                <div className="text-sm mt-3 flex-1">{isPraxis ? "Klären Sie mit uns, welche Maßnahme zu Ihrem Praxisziel passt. Unverbindlich im Erstgespräch." : "Ob Website, SEO oder Performance Marketing – wir begleiten Sie vom ersten Gespräch bis zum langfristigen Erfolg."}</div>
                <div className="mt-3">
                  <DoorButton color="white" className="w-full" href={isPraxis ? "#praxis-kontakt" : "/contact"}>{isPraxis ? "Erstgespräch anfragen" : "JETZT ANFRAGEN"}</DoorButton>
                </div>
              </div>

            </div>
        </>
    );
}
