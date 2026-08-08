import "./cta-box.css";
import DoorButton from "../door-button/door-button";

export default function CtaBox() {
    return (
        <>
            <div className="cta-box">

              <div className="bg-gray-200 cta-box-media">
                <video 
                  poster="/images/cta.jpg"
                  src="/videos/cta.mp4" 
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              </div>

              <div className="cta-box-content">
                <div className="text-xl font-bold uppercase font-mono leading-tight">IHR WACHSTUM BEGINNT HIER</div>
                <div className="text-sm mt-3 flex-1">Ob Website, SEO oder Performance Marketing – wir begleiten Sie vom ersten Gespräch bis zum langfristigen Erfolg.</div>
                <div className="mt-3">
                  <DoorButton color="white" className="w-full">JETZT ANFRAGEN</DoorButton>
                </div>
              </div>

            </div>
        </>
    );
}