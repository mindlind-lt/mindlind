"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "./showreel.css";

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setCursorPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleClick = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isHovered) {
      setCursorVisible(true);
    } else {
      const timer = setTimeout(() => {
        setCursorVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className="showreel-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {cursorVisible && (
        <div
          className={`showreel-cursor ${isHovered ? "growing" : "shrinking"}`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        />
      )}

      {!isPlaying ? (
        <div className="showreel-poster">
          <Image
            src="/assets/images/bkeTimPti7XlErXV4jwwjfiyBWM.jpg"
            alt="Showreel"
            fill
            className="object-cover"
          />
          <div className="showreel-text">Showreel</div>
        </div>
      ) : (
        <div className="showreel-video">
          <iframe
            src="https://player.vimeo.com/video/76979871?autoplay=1&title=0&byline=0&portrait=0"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Showreel"
          />
        </div>
      )}
    </div>
  );
}
