"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import "./showreel.css";

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // The pointer target and the eased position chasing it both change every
  // frame and nothing in the tree needs to re-render for either, so they live
  // in refs and are written straight to the element's style below.
  const target = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    target.current.x = e.clientX - rect.left;
    target.current.y = e.clientY - rect.top;
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

  // Ease the follow-cursor toward the pointer. Writing style directly keeps
  // this off the React render path — as state it re-rendered the whole section
  // 60×/second, and having the target in the deps tore the loop down and
  // rebuilt it on every single mousemove. The loop now only runs while the
  // cursor is actually on screen.
  useEffect(() => {
    if (!cursorVisible || isPlaying) return;

    const el = cursorRef.current;
    if (!el) return;

    let frame = requestAnimationFrame(function animate() {
      position.current.x += (target.current.x - position.current.x) * 0.15;
      position.current.y += (target.current.y - position.current.y) * 0.15;
      el.style.left = `${position.current.x}px`;
      el.style.top = `${position.current.y}px`;
      frame = requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(frame);
  }, [cursorVisible, isPlaying]);

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
          ref={cursorRef}
          className={`showreel-cursor ${isHovered ? "growing" : "shrinking"}`}
        >
          <Play className="w-6 h-6 text-black ml-0.6" />
        </div>
      )}

      {!isPlaying ? (
        <div className="showreel-poster">
          <Image
            src="/images/showreel-poster.webp"
            alt="Showreel"
            fill
            className="object-cover"
          />
          <div className="showreel-text">Showreel</div>

        </div>
      ) : (
        <div className="showreel-video">
          {/* TEMPORARY placeholder reel — swap the src for the real showreel
              export when it lands. Served from /public, so the showreel
              involves no third party and needs no consent; keep it that way
              when replacing the file.

              Heads up for whoever swaps it: every clip currently in the repo
              is portrait 4K (2160x3840) and this frame is locked to 16/9, so
              `object-fit: cover` is showing a cropped horizontal band. A real
              landscape export will fill it properly with no CSS change. */}
          <video
            src="/production/production-2.mp4"
            poster="/images/showreel-poster.webp"
            autoPlay
            controls
            playsInline
          />
        </div>
      )}
    </div>
  );
}
