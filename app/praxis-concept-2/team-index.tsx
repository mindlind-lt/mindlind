"use client";

// The team as an editorial index: names set large, one per row. On a pointer
// device a portrait floats beside the cursor and swaps as it moves down the
// list; on touch, where there is no hover, each row carries its own small
// portrait instead (see .c2-person-thumb).

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { gsap, registerGsap } from "@/lib/gsap";

const TEAM = [
  { name: "Jan", role: "Creative Director", img: "/images/team-1.webp" },
  { name: "Georgy", role: "Managing Director", img: "/images/team-2.webp" },
  { name: "Almaz", role: "Webentwickler", img: "/images/team-3.webp" },
  { name: "Lera", role: "Designer", img: "/images/team-4.webp" },
  { name: "Evgeny", role: "Videoproduktion", img: "/images/team-5.webp" },
];

export default function TeamIndex() {
  const listRef = useRef<HTMLUListElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    registerGsap();
    const list = listRef.current;
    const float = floatRef.current;
    if (!list || !float) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    // quickTo keeps one tween per axis alive and retargets it, so the portrait
    // trails the cursor with a little weight instead of sticking to it.
    const toX = gsap.quickTo(float, "x", { duration: 0.6, ease: "power3.out" });
    const toY = gsap.quickTo(float, "y", { duration: 0.6, ease: "power3.out" });

    const onMove = (e: PointerEvent) => {
      const box = list.getBoundingClientRect();
      toX(e.clientX - box.left);
      toY(e.clientY - box.top);
    };

    list.addEventListener("pointermove", onMove);
    return () => list.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    const float = floatRef.current;
    if (!float) return;
    gsap.to(float, {
      autoAlpha: active === null ? 0 : 1,
      scale: active === null ? 0.85 : 1,
      rotation: active === null ? -4 : 0,
      duration: 0.5,
      ease: "power3.out",
    });
  }, [active]);

  return (
    <div className="c2-people">
      <ul className="c2-people-list" ref={listRef} onPointerLeave={() => setActive(null)}>
        {TEAM.map((p, i) => (
          <li
            className={`c2-person${active === i ? " is-active" : ""}`}
            key={p.name}
            onPointerEnter={() => setActive(i)}
            data-c2="person"
          >
            <Image className="c2-person-thumb" src={p.img} alt="" width={1086} height={1448} />
            <span className="c2-person-name">{p.name}</span>
            <span className="c2-person-role">{p.role}</span>
          </li>
        ))}
      </ul>

      <div className="c2-people-float" ref={floatRef} aria-hidden="true">
        {TEAM.map((p, i) => (
          <Image
            key={p.name}
            className={`c2-people-float-img${active === i ? " is-shown" : ""}`}
            src={p.img}
            alt=""
            width={1086}
            height={1448}
          />
        ))}
      </div>
    </div>
  );
}
