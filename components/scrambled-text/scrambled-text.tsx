'use client';

import { useState, useEffect, useRef, useCallback, ElementType } from 'react';
import "./scrambled-text.css";

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

interface ScrambledTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  [key: string]: any;
}

export default function ScrambledText({ 
  text, 
  as: Component = 'span',
  className = '',
  ...restProps
}: ScrambledTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = useCallback(() => {
    let frames = 0;
    const totalFrames = 15;
    
    clearInterval(intervalRef.current!);
    
    intervalRef.current = setInterval(() => {
      frames++;
      
      if (frames >= totalFrames) {
        clearInterval(intervalRef.current!);
        setDisplayText(text);
        return;
      }
      
      setDisplayText(
        text.split('').map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join('')
      );
    }, 30);
  }, [text]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const ComponentAsAny = Component as any;

  return (
    <ComponentAsAny 
      {...restProps} 
      className={`scrambled-text ${className}`}
      onMouseEnter={scramble}
    >
      {displayText}
    </ComponentAsAny>
  );
}
