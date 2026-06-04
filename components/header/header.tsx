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
          width={30}
          height={41}
        />
      </Link>

      <nav className="hdr-menu">
        <a href="/">Home</a>
        <a href="/agency">Agency</a>
        <a href="/projects">Projects</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </nav>

      <div>Burger</div>

    </header>
  );
}