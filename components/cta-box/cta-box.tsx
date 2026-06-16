import "./cta-box.css";
import DoorButton from "../door-button/door-button";

export default function CtaBox() {
    return (
        <>
            <div className="cta-box">

              <div className="bg-gray-200 cta-box-media">
                <video 
                  poster="/assets/F3t96ozC3GZuPhKwdm5VWtBIZwM.png"
                  src="/assets/PNQxI2Ed9uKXPFfH9IkZlg9f9qU.mp4" 
                  autoPlay 
                  loop 
                  muted
                ></video>
              </div>

              <div className="cta-box-content">
                <div className="text-xl font-bold uppercase font-mono leading-tight">Start <br />a project</div>
                <div className="text-sm mt-3">Let's book & talk with our manager</div>
                <div className="mt-3">
                  <DoorButton color="white" className="w-full">Book a call</DoorButton>
                </div>
              </div>

            </div>
        </>
    );
}