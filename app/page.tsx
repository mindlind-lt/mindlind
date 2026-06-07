// import Image from "next/image";
import ThreeDScene from "@/components/hero-3d";
import DoorButton from "@/components/door-button/door-button";



export default function Home() {
  return (
    <>
      <div>


        <div className="hero">

          <ThreeDScene />

          <div className="hero-cta">

            <div className="hero-cta-box">
              <div className="hero-cta-box-content">
                <div className="text-xl font-bold uppercase font-mono leading-tight">Start <br />a project</div>
                <div className="text-sm mt-3">Let's book & talk with our manager</div>
                <div className="mt-3">
                  <DoorButton color="white" className="w-full">Book a call</DoorButton>
                </div>
              </div>
              <div className="bg-gray-200 hero-cta-box-media">
                <video 
                  poster="/assets/F3t96ozC3GZuPhKwdm5VWtBIZwM.png"
                  src="/assets/PNQxI2Ed9uKXPFfH9IkZlg9f9qU.mp4" 
                  autoPlay 
                  loop 
                  muted
                ></video>
              </div>
            </div>

            <div className="hero-cta-footer">
              <div>Liked by 50+ founders</div>
              <div>Photos</div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}
