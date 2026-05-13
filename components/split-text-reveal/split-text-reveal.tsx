"use client"

import React, { useState, useEffect, useRef, useCallback } from "react"

interface SplitTextRevealProps {
  lines?: string[]
  splitBy?: "characters" | "words"
  staggerFrom?: "first" | "last" | "center" | "random"
  staggerDelay?: number
  reverse?: boolean
  className?: string
}

const SplitTextReveal = ({
  lines = [],
  splitBy = "characters",
  staggerFrom = "first",
  staggerDelay = 0.025,
  reverse = false,
  className,
}: SplitTextRevealProps) => {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({})
  const containerRef = useRef<HTMLDivElement>(null)
  const lockupRef = useRef<HTMLDivElement>(null)
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([])

  const getAllElements = useCallback(() => {
    const elements: { lineIndex: number; wordIndex: number; charIndex: number; char: string }[] = []
    lines.forEach((line, lineIndex) => {
      const words = line.split(" ")
      words.forEach((word, wordIndex) => {
        if (splitBy === "characters") {
          ;[...word].forEach((char, charIndex) => {
            elements.push({ lineIndex, wordIndex, charIndex, char })
          })
        } else {
          elements.push({ lineIndex, wordIndex, charIndex: 0, char: word })
        }
      })
    })
    return elements
  }, [lines, splitBy])

  const getStaggerOrder = useCallback(
    (count: number) => {
      const indices = [...Array(count).keys()]
      switch (staggerFrom) {
        case "last":
          return indices.reverse()
        case "center": {
          const center = Math.floor(count / 2)
          return [...indices].sort((a, b) => Math.abs(a - center) - Math.abs(b - center))
        }
        case "random":
          return [...indices].sort(() => Math.random() - 0.5)
        case "first":
        default:
          return indices
      }
    },
    [staggerFrom],
  )

  const reveal = useCallback(
    (baseDelay = 0) => {
      const elements = getAllElements()
      const order = getStaggerOrder(elements.length)

      order.forEach((index, i) => {
        const delay = baseDelay + i * staggerDelay * 1000
        const timeout = setTimeout(() => {
          setRevealed((prev) => ({ ...prev, [index]: true }))
        }, delay)
        timeoutsRef.current.push(timeout)
      })
    },
    [getAllElements, getStaggerOrder, staggerDelay],
  )

  const scaleLockup = useCallback(() => {
    if (!lockupRef.current || !containerRef.current) return
    const wrapper = lockupRef.current.parentElement
    if (!wrapper) return
    const wrapperWidth = wrapper.offsetWidth
    lockupRef.current.style.transform = "scale(1)"
    const naturalWidth = lockupRef.current.scrollWidth
    const scale = Math.min(1, wrapperWidth / naturalWidth)
    lockupRef.current.style.transform = `scale(${scale})`
  }, [])

  useEffect(() => {
    scaleLockup()
    window.addEventListener("resize", scaleLockup)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(0)
            observer.disconnect()
          }
        })
      },
      { threshold: 1.0 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      window.removeEventListener("resize", scaleLockup)
      observer.disconnect()
      timeoutsRef.current.forEach(clearTimeout)
    }
  }, [scaleLockup, reveal])

  const getKey = (lineIndex: number, wordIndex: number, charIndex: number) => {
    let index = 0
    for (let l = 0; l < lines.length; l++) {
      const words = lines[l].split(" ")
      for (let w = 0; w < words.length; w++) {
        if (splitBy === "characters") {
          for (let c = 0; c < words[w].length; c++) {
            if (l === lineIndex && w === wordIndex && c === charIndex) return index
            index++
          }
        } else {
          if (l === lineIndex && w === wordIndex) return index
          index++
        }
      }
    }
    return index
  }

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "flex-start",
      gap: "24px",
      width: "100%",
      maxWidth: "1200px",
    },
    lockupWrapper: {
      width: "100%",
      overflow: "hidden",
    },
    lockup: {
      whiteSpace: "nowrap" as const,
      transformOrigin: "top left",
    },
    line: {
      display: "block",
    },
    wordContainer: {
      display: "inline-block",
      whiteSpace: "nowrap" as const,
    },
    charOuter: {
      position: "relative" as const,
      display: "inline-block",
      overflow: "hidden",
      paddingTop: "0.15em",
      paddingBottom: "0.25em",
      marginTop: "-0.15em",
      marginBottom: "-0.25em",
    },
    charInner: (isRevealed: boolean) => ({
      display: "inline-block",
      transform: isRevealed ? "translateY(0)" : `translateY(${reverse ? "-120%" : "120%"})`,
      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
    }),
    wordSpace: {
      display: "inline-block",
      width: "0.3em",
    },
  }

  return (
    <div ref={containerRef} style={styles.container}>
      <div style={styles.lockupWrapper}>
        <div ref={lockupRef} style={styles.lockup} className={className}>
          {lines.map((line, lineIndex) => {
            const words = line.split(" ")
            return (
              <span key={lineIndex} style={styles.line}>
                {words.map((word, wordIndex) => (
                  <React.Fragment key={wordIndex}>
                    <span style={styles.wordContainer}>
                      {splitBy === "characters" ? (
                        [...word].map((char, charIndex) => {
                          const key = getKey(lineIndex, wordIndex, charIndex)
                          return (
                            <span key={charIndex} style={styles.charOuter}>
                              <span style={styles.charInner(revealed[key])}>{char}</span>
                            </span>
                          )
                        })
                      ) : (
                        <span style={styles.charOuter}>
                          <span style={styles.charInner(revealed[getKey(lineIndex, wordIndex, 0)])}>{word}</span>
                        </span>
                      )}
                    </span>
                    {wordIndex < words.length - 1 && <span style={styles.wordSpace} />}
                  </React.Fragment>
                ))}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SplitTextReveal
