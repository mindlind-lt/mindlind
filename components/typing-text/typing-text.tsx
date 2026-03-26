"use client";

import { useEffect, useRef, useState } from "react";

type TypingTextProps = {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
  once?: boolean;
};

export function TypingText({
  text,
  className,
  speed = 20,
  startDelay = 250,
  once = true,
}: TypingTextProps) {
  const [isActive, setIsActive] = useState(false);
  const [index, setIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (once && hasStarted.current) return;
          hasStarted.current = true;
          setIsActive(true);
        } else if (!once) {
          setIsActive(false);
          setIndex(0);
          setIsDone(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [once]);

  useEffect(() => {
    if (!isActive) return;
    if (index >= text.length) {
      setIsDone(true);
      return;
    }

    const delay = index === 0 ? startDelay : speed;
    const timeout = window.setTimeout(() => {
      setIndex((prev) => Math.min(prev + 1, text.length));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [index, isActive, speed, startDelay, text.length]);

  return (
    <div ref={elementRef} className={className} aria-label={text} role="text">
      <span aria-hidden="true">{text.slice(0, index)}</span>
      <span
        className={`typing-caret${isActive && !isDone ? " is-active" : ""}`}
        aria-hidden="true"
      />
    </div>
  );
}
