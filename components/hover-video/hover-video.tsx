"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import "./hover-video.css";

interface HoverVideoProps {
  /** Path to the video file (e.g. "/videos/cta.mp4"). */
  src: string;
  /** Cover image shown before playback (e.g. "/images/cta.jpg"). */
  poster: string;
  /** Destination for the "learn more" link. */
  href: string;
  /** Accessible description of the video content. */
  alt?: string;
  /** Text for the link below the video. */
  linkLabel?: string;
  className?: string;
}

export default function HoverVideo({
  src,
  poster,
  href,
  alt = "",
  linkLabel = "Learn more",
  className,
}: HoverVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    const promise = video.play();
    if (promise) {
      promise.then(() => setIsPlaying(true)).catch(() => {});
    } else {
      setIsPlaying(true);
    }
  }, []);

  const stop = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    setIsPlaying(false);
  }, []);

  // On touch devices (no hover), autoplay while the video is scrolled into view.
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const canHover = window.matchMedia("(hover: hover)").matches;
    if (canHover) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play();
        } else {
          stop();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [play, stop]);

  return (
    <div className={["hover-video", className].filter(Boolean).join(" ")}>
      <div
        ref={containerRef}
        className={`hover-video-media ${isPlaying ? "is-playing" : ""}`}
        onMouseEnter={play}
        onMouseLeave={stop}
      >
        <video
          ref={videoRef}
          className="hover-video-el"
          src={src}
          poster={poster}
          aria-label={alt}
          loop
          muted
          playsInline
          preload="none"
        />
      </div>

      <Link href={href} className="hover-video-link">
        <span>{linkLabel}</span>
        <ArrowUpRight className="hover-video-link-icon" aria-hidden />
      </Link>
    </div>
  );
}
