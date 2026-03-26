import type { Metadata } from "next";
import ContactForm from "@/components/contact-form/contact-form";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import SocialIcons from "@/components/social-icons/social-icons";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Kontakt – Mindlind",
    description: "Nehmen Sie Kontakt mit Mindlind auf. Wir freuen uns auf Ihr Projekt und beraten Sie gerne zu Webdesign, Entwicklung und digitalem Marketing.",
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
        },
    },
};

export default function Home() {
  return (
    <>

        <Header />

        <div className="container">
            <div className="contact-header">
                <h1 className="contact-header-title">Kontakt</h1>
                <SocialIcons />
            </div>
        </div>


        <div className="container">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-18">

                <div>
                    <div className="absatz text-xl font-medium w-110 max-w-full">
                        <p>Lorem ipsum dolor sit amet dictum consectetur. Pharetra impe orcirdiet mauris non proin integer turpis aliquam fusce. Netus consequat sit mattis.</p>
                        <p>Erat id pharetra blandit nulla id augue ornare. Lectus leo dui eget nascetur neque. Pellentesque proin consectetur et consectetur pulvinar.</p>
                    </div>
                </div>

                <div>
                    <ContactForm/>
                </div>

            </div>
        </div>



        <div className="container pt-20 sm:pt-45 relative z-10">
            <div>

                <div className="cinfo">
                    <div className="cinfo-label">E-Mail</div>
                    <div className="cinfo-value">
                        <a href="#">contact@mindlind.de</a>
                    </div>
                </div>

                <div className="cinfo">
                    <div className="cinfo-label">Telefon</div>
                    <div className="cinfo-value">
                        <a href="#">0176 24685516</a>
                    </div>
                </div>

            </div>
        </div>



        <div className="contact-skyline">
            <img 
                src="/images/contact-photo.jpg"
                alt=""
            />
        </div>


        <Footer />


    </>
  )
}