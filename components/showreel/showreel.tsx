"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import "./showreel.css";

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [cursorTarget, setCursorTarget] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setCursorTarget({
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

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setCursorPosition((prev) => ({
        x: prev.x + (cursorTarget.x - prev.x) * 0.15,
        y: prev.y + (cursorTarget.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [cursorTarget]);

  return (
    <div
      ref={containerRef}
      className={`showreel-container ${isPlaying ? "showreel-playing" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {cursorVisible && !isPlaying && (
        <div
          className={`showreel-cursor ${isHovered ? "growing" : "shrinking"}`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        >
          <Play className="w-6 h-6 text-black ml-0.6" />
        </div>
      )}

      {!isPlaying ? (
        <div className="showreel-poster">
          <Image
            src="/images/showreel-poster.jpg"
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
