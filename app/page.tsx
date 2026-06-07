// import Image from "next/image";
import ThreeDScene from "@/components/hero-3d";

export default function Home() {
  return (
    <>
      <div>


        <div className="hero">

          <ThreeDScene />

          <div className="hero-cta">

            <div className="hero-cta-box">
              <div className="hero-cta-box-content">
                <div className="text-xl font-bold uppercase font-mono">Start a project</div>
                <div>Let's book & talk with our manager</div>
                <div>
                  <a href="#">Book a call</a>
                </div>
              </div>
              <div className="bg-gray-200 hero-cta-box-media">
                Video
              </div>
            </div>

            <div className="hero-cta-customers">
              <div>Liked by 50+ founders</div>
              <div>Photos</div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}
