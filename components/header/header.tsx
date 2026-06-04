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
          width={30}
          height={41}
        />
      </Link>

      <nav className="hdr-menu">
        <Link href="/">Home</Link>
        <Link href="/agency">Agency</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className="hdr-burger">
        <Burger />
      </div>

    </header>
  );
}