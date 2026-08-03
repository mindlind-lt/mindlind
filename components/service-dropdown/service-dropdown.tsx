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
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [imagePos, setImagePos] = useState({ x: 0, y: 0 });
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const [hasHover, setHasHover] = useState(false);

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
    setCursorPos({ x: e.clientX, y: e.clientY });
    setImagePos({ x: e.clientX, y: e.clientY });
    setIsHovering(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    const animate = () => {
      setImagePos((prev) => {
        const ease = 0.1;
        const newX = prev.x + (cursorPos.x - prev.x) * ease;
        const newY = prev.y + (cursorPos.y - prev.y) * ease;
        return { x: newX, y: newY };
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    if (isHovering) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering, cursorPos]);

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
              className={`service-dropdown-image ${isHovering ? "visible" : ""}`}
              style={{
                left: imagePos.x,
                top: imagePos.y,
                position: "fixed",
              }}
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
