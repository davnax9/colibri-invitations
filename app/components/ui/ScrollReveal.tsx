"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type Direction = "left" | "right" | "up" | "down"

type Props = {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  threshold?: number
  rootMargin?: string
  once?: boolean
  className?: string
}

export default function ScrollReveal({
  children,
  direction = "left",
  delay = 0,
  duration = 700,
  threshold = 0.1,
  rootMargin = "0px",
  once = false,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!once || !hasAnimated) {
            setTimeout(() => {
              setIsVisible(true)
              if (once) setHasAnimated(true)
            }, delay)
          }
        } else {
          if (!once) {
            setIsVisible(false)
          }
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [delay, once, hasAnimated, threshold, rootMargin])

  const transformMap: Record<Direction, string> = {
    left: "translateX(-40px)",
    right: "translateX(40px)",
    up: "translateY(40px)",
    down: "translateY(-40px)",
  }

  const initialTransform = isVisible ? "translateX(0)" : transformMap[direction]

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: initialTransform,
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    willChange: "opacity, transform",
  }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}