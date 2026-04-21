import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { Button } from "@/components/button/button";
import { ChevronRight } from "lucide-react";
import { TypingText } from "@/components/typing-text/typing-text";
import { ServiceBlocks } from "@/components/service-blocks/service-blocks";
import { ServiceBlock } from "@/components/service-block/service-block";
import { ServiceBlockItem } from "@/components/service-block-item/service-block-item";

import LiquidEther from '@/components/LiquidEther/LiquidEther';
import Image from "next/image";
import { PortfolioSlider } from "@/components/portfolio-slider/portfolio-slider";
import { ServicesScrollEffect } from "@/components/services-scroll-effect/services-scroll-effect";
import { HeroScrollEffect } from "@/components/hero-scroll-effect/hero-scroll-effect";
import LogosCarousel from "@/components/logos-carousel";

const logoMua = "/images/logo-mua.png";
const logoFunky = "/images/logo-funky.png";
const logoAutosl = "/images/logo-autosl.png";
const logoFactorysl = "/images/logo-factorysl.webp";
const logoPandaDrive = "/images/logo-panda-drive.svg";
const logoPrince = "/images/logo-prince.png";

const LogoImage = ({ src, alt }: { src: string; alt: string }) => (
  <Image
    src={src}
    alt={alt}
    width={180}
    height={100}
    className={`h-[100px] w-[180px] object-contain opacity-70 pointer-events-none select-none`}
    unoptimized
  />
);

export const metadata: Metadata = {
  title: "Mindlind – Webdesign & Entwicklung für digitale Produkte",
  description: "Mindlind begleitet Ihr Projekt von der Konzeption über Design bis zur Entwicklung. Webdesign, UI/UX, Full-Stack-Entwicklung und digitales Marketing aus einer Hand.",
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

export default async function Home() {
  const t = await getTranslations("Hero");
  return (
    <>

      <ServicesScrollEffect />
      <HeroScrollEffect />


      <Header colorTheme="white" position="absolute" />


      <section className="hero">

        <div className="hero-bg">
          <LiquidEther
            colors={["#000702", "#1eff00", "#9effa5", "#a3f0b2"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            // iterationsViscous={32}
            // iterationsPoisson={32}
            resolution={0.5}
            isBounce
            autoDemo
            autoSpeed={0.6}
            autoIntensity={2.2}
            // takeoverDuration={0.25}
            // autoResumeDelay={3000}
            // autoRampDuration={0.6}
          />
        </div>

        <div className="hero-inner">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">{t("title")}</h1>
              <div className="hero-footer">
                <div>
                  <Button href="#" variant="ghost-white" size="lg">
                    {t("cta")}
                    <ChevronRight size={18} aria-hidden="true" />
                  </Button>
                </div>
                <div className="hero-footer-text">
                  {t("subtext")}
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      <div id="intro" className="intro">
        <div className="intro-inner" style={{
          backgroundImage: "url(/images/intro-bg.jpg)",
          backgroundSize: "cover"
        }}>
          <div className="container">
            <div className="intro-row">

              <div className="intro-content">
                <TypingText
                  className="intro-title"
                  text="Von der Konzeption bis zur Entwicklung ganzheitlicher digitaler Lösungen zur Steigerung der Qualität Ihres Produkts"
                />
                <div className="intro-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</div>
              </div>

              <div className="intro-figure">
                <Image
                  src="/images/statue.png" 
                  alt="" 
                  width="900"
                  height="900"
                />
              </div>

            </div>
          </div>
        </div>
      </div>


      <div className="container pt-20 md:pt-38 pb-15 md:pb-20">
        <LogosCarousel count={4} stagger={0.2}>
          <LogoImage src={logoMua} alt="" />
          <LogoImage src={logoFunky} alt="" />
          <LogoImage src={logoAutosl} alt="" />
          <LogoImage src={logoFactorysl} alt="" />
          <LogoImage src={logoPandaDrive} alt="" />
          <LogoImage src={logoPrince} alt="" />
          <LogoImage src={logoMua} alt="" />
          <LogoImage src={logoFunky} alt="" />
        </LogosCarousel>
      </div>


      <div id="services" className="services-section">

        <div className="container">
          <h2 className="services-section-title">Leistungen im <br />Überblick</h2>
        </div>

        <ServiceBlocks>

          <ServiceBlock title="Briefing, Research & Conceptualization">
            <ServiceBlockItem title="Personas">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="Zielgruppe">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="Projektziele">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="Budget und Umfang">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="Erfolgskriterien">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="Wettbewerbsanalyse">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="Branchentrends">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="Keyword-Recherche">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
          </ServiceBlock>

          <ServiceBlock title="Design">
            <ServiceBlockItem title="User Interface Design">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="User Experience Optimierung">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="Wireframes & Prototyping">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="Logo">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="Brand Guidelines">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="Performance & Sicherheit">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
          </ServiceBlock>

          <ServiceBlock title="Development">
            <ServiceBlockItem title="Datenbankarchitektur">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="Full-Stack-Entwicklung">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="iOS / Android / PWA">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="CMS-Integration">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="CI/CD">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="Hosting">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="Deployment">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="Skalierung">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="Bug-Fixes">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="Performance & Sicherheit">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
          </ServiceBlock>

          <ServiceBlock title="Marketing">
            <ServiceBlockItem title="Digitale Werbekampagnen">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="SEO">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="Content Creation">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="Analytics">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
            <ServiceBlockItem title="Performance Reporting">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a error, quia minima nostrum esse dolorem quaerat eaque laudantium? Voluptate libero fugiat sint delectus officiis, perferendis dignissimos non ipsum maxime.</ServiceBlockItem>
          </ServiceBlock>

        </ServiceBlocks>

      </div>


      <div id="works" className="section-works">
        <h2 className="font-extrabold text-white text-3xl sm:text-4xl md:text-6xl text-center absolute right-0 left-0 top-15 pointer-events-none">Portfolio</h2>
        <div className="section-works-slider">
          <PortfolioSlider />
        </div>
      </div>


      <Footer />


    </>
  );
}
