import Burger from "./burger";
import GradualBlur from "@/components/gradual-blur/gradual-blur";

import Image from "next/image";
import Link from "@/components/progress-bar/progress-link";

import "./header.css";

export default function Header() {

  return (
    <>

      {/* Blurred backdrop behind the header. zIndex must land under the header's
          own z-index: 50, or it would blur the logo and nav instead of the page
          behind them — `style` is the only prop that can override it, because
          target="page" forces zIndex + 100. */}
      <GradualBlur
        target="page"
        position="top"
        height="var(--hdr-height)"
        strength={2}
        divCount={6}
        curve="bezier"
        opacity={1}
        style={{ zIndex: 40 }}
      />

      <Link className="hdr-logo" href="/">
        <Image 
          src="/images/logo-full.png"
          alt="Mindlind"
          width={150}
          height={28}
        />
      </Link>

      <nav className="hdr-menu">
        <Link data-label="Home" href="/">Home</Link>
        <Link data-label="Agency" href="/agency">Agency</Link>
        <Link data-label="Leistungen" href="/services">Leistungen</Link>
        <Link data-label="Projekte" href="/projects">Projekte</Link>
        {/* <Link data-label="Blog" href="/blog">Blog</Link> */}
        <Link data-label="Contact" href="/contact">Contact</Link>
      </nav>

      <div className="hdr-burger">
        <Burger />
      </div>

    </>
  );
}