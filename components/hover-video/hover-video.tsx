"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ArrowUpRight, Play, X } from "lucide-react";

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

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function HoverVideo({
  src,
  poster,
  href,
  alt = "",
  linkLabel = "Learn more",
  className,
}: HoverVideoProps) {
  const containerRef = useRef<HTMLButtonElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const play = useCallback(() => {
    const video = previewRef.current;
    if (!video) return;

    const promise = video.play();
    if (promise) {
      promise.then(() => setIsPlaying(true)).catch(() => {});
    } else {
      setIsPlaying(true);
    }
  }, []);

  const stop = useCallback(() => {
    const video = previewRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    setIsPlaying(false);
  }, []);

  // On touch devices (no hover), autoplay the preview while it's scrolled into view.
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

  const openLightbox = useCallback(() => {
    stop();
    setLightboxOpen(true);
  }, [stop]);

  const closeLightbox = useCallback(() => {
    const frame = frameRef.current;
    const backdrop = backdropRef.current;
    const source = containerRef.current;

    if (!frame || !source || prefersReducedMotion()) {
      setLightboxOpen(false);
      return;
    }

    // FLIP in reverse: shrink the frame back into the source tile, then unmount.
    const first = frame.getBoundingClientRect();
    const last = source.getBoundingClientRect();

    const dx = last.left - first.left;
    const dy = last.top - first.top;
    const sx = last.width / first.width;
    const sy = last.height / first.height;

    backdrop?.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 260,
      easing: "ease",
      fill: "forwards",
    });

    const animation = frame.animate(
      [
        { transform: "translate(0, 0) scale(1)", opacity: 1 },
        {
          transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`,
          opacity: 0.6,
        },
      ],
      { duration: 300, easing: "cubic-bezier(0.4, 0, 0.2, 1)", fill: "forwards" }
    );

    animation.onfinish = () => setLightboxOpen(false);
  }, []);

  // FLIP on open: start the frame at the source tile's rect, then grow to center.
  useLayoutEffect(() => {
    if (!lightboxOpen) return;

    const frame = frameRef.current;
    const backdrop = backdropRef.current;
    const source = containerRef.current;
    if (!frame || !source) return;

    const dialogVideo = frame.querySelector("video");
    dialogVideo?.play().catch(() => {});

    if (prefersReducedMotion()) return;

    const first = source.getBoundingClientRect();
    const last = frame.getBoundingClientRect();

    const dx = first.left - last.left;
    const dy = first.top - last.top;
    const sx = first.width / last.width;
    const sy = first.height / last.height;

    backdrop?.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      easing: "ease",
      fill: "forwards",
    });

    frame.animate(
      [
        {
          transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`,
          opacity: 0.6,
        },
        { transform: "translate(0, 0) scale(1)", opacity: 1 },
      ],
      { duration: 340, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "both" }
    );
  }, [lightboxOpen]);

  // Lock body scroll and close on Escape while the lightbox is open.
  useEffect(() => {
    if (!lightboxOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxOpen, closeLightbox]);

  return (
    <div className={["hover-video", className].filter(Boolean).join(" ")}>
      <button
        type="button"
        ref={containerRef}
        className={`hover-video-media ${isPlaying ? "is-playing" : ""}`}
        onMouseEnter={play}
        onMouseLeave={stop}
        onClick={openLightbox}
        aria-label={alt ? `Play video: ${alt}` : "Play video"}
      >
        <video
          ref={previewRef}
          className="hover-video-el"
          src={src}
          poster={poster}
          aria-hidden
          loop
          muted
          playsInline
          preload="none"
        />
        <span className="hover-video-play" aria-hidden>
          <Play className="hover-video-play-icon" />
        </span>
      </button>

      <Link href={href} className="hover-video-link">
        <span>{linkLabel}</span>
        <ArrowUpRight className="hover-video-link-icon" aria-hidden />
      </Link>

      {mounted &&
        lightboxOpen &&
        createPortal(
          <div
            className="hover-video-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={alt || "Video"}
            onClick={closeLightbox}
          >
            <div ref={backdropRef} className="hover-video-lightbox-backdrop" />

            <div
              ref={frameRef}
              className="hover-video-lightbox-frame"
              onClick={(event) => event.stopPropagation()}
            >
              <video
                className="hover-video-lightbox-el"
                src={src}
                poster={poster}
                controls
                autoPlay
                loop
                playsInline
              />
            </div>

            <button
              type="button"
              className="hover-video-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close video"
            >
              <X />
            </button>
          </div>,
          document.body
        )}
    </div>
  );
}
