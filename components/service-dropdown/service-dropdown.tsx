"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

import "./service-dropdown.css";

interface ServiceDropdownProps {
  align: "left" | "center" | "right";
  title: string;
  label: string;
  text: string;
  className?: string;
  image?: string;
}

export default function ServiceDropdown({
  align,
  title,
  label,
  text,
  className: additionalClassName,
  image,
}: ServiceDropdownProps) {
  const [expanded, setExpanded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const [hasHover, setHasHover] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  // Pointer target and the eased position trailing it. Refs, not state: as
  // state the pointer position re-rendered this card and its portal on every
  // mousemove, and the eased position did it again on every frame.
  const cursor = useRef({ x: 0, y: 0 });
  const imagePos = useRef({ x: 0, y: 0 });

  const className = [
    "service-dropdown",
    `service-dropdown-align-${align}`,
    expanded ? "service-dropdown-expanded" : null,
    additionalClassName,
  ]
    .filter(Boolean)
    .join(" ");

  // Initialize portal root and detect hover capability
  useEffect(() => {
    let root = document.getElementById("service-dropdown-portal-root");
    if (!root) {
      root = document.createElement("div");
      root.id = "service-dropdown-portal-root";
      document.body.appendChild(root);
    }
    setPortalRoot(root);

    // Detect if device has hover capability
    const mediaQuery = window.matchMedia('(hover: hover)');
    setHasHover(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setHasHover(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    // Seed both so the image doesn't trail in from wherever the last hover left it.
    cursor.current = { x: e.clientX, y: e.clientY };
    imagePos.current = { x: e.clientX, y: e.clientY };
    setIsHovering(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    cursor.current.x = e.clientX;
    cursor.current.y = e.clientY;
  };

  // Trail the preview image behind the pointer, writing style directly so the
  // loop costs nothing in React. Only runs while this card is hovered.
  useEffect(() => {
    if (!isHovering) return;

    const el = imageRef.current;
    if (!el) return;

    const write = () => {
      el.style.left = `${imagePos.current.x}px`;
      el.style.top = `${imagePos.current.y}px`;
    };
    write();

    let frame = requestAnimationFrame(function animate() {
      const ease = 0.1;
      imagePos.current.x += (cursor.current.x - imagePos.current.x) * ease;
      imagePos.current.y += (cursor.current.y - imagePos.current.y) * ease;
      write();
      frame = requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(frame);
  }, [isHovering]);

  return (
    <>
      <div
        className={className}
        onClick={() => setExpanded(!expanded)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        <div className="service-dropdown-content">
          <button className="service-dropdown-header">
            <div className="service-dropdown-title">
              {title}
              <span className="service-dropdown-plus" aria-hidden="true">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </div>
            <div className="service-dropdown-label">{label}</div>
          </button>
          <div className="service-dropdown-text">
            <div className="service-dropdown-text-label">{label}</div>
            {text}
          </div>
        </div>
      </div>

      {image && portalRoot && hasHover
        ? createPortal(
            <div
              ref={imageRef}
              className={`service-dropdown-image ${isHovering ? "visible" : ""}`}
              style={{ position: "fixed" }}
            >
              <Image
                src={image}
                alt=""
                width={300}
                height={200}
                className="rounded-md object-cover"
              />
            </div>,
            portalRoot
          )
        : null}
    </>
  );
}
