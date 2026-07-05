import Burger from "./burger";

import Image from "next/image";
import Link from "next/link";

import "./header.css";

export default function Header() {

  return (
    <header className="hdr">

      <Link className="hdr-logo" href="/">
        <Image 
          src="/images/logo.svg"
          alt="Mindlind"
          width={150}
          height={28}
        />
      </Link>

      <nav className="hdr-menu">
        <Link data-label="Home" href="/">Home</Link>
        <Link data-label="Agency" href="/agency">Agency</Link>
        <Link data-label="Projekte" href="/projects">Projekte</Link>
        {/* <Link data-label="Blog" href="/blog">Blog</Link> */}
        <Link data-label="Contact" href="/contact">Contact</Link>
      </nav>

      <div className="hdr-burger">
        <Burger />
      </div>

    </header>
  );
}