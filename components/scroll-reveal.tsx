"use client"

import { useEffect, useRef, useState, createContext, useContext, type ReactNode, type CSSProperties } from "react"

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade"
  | "zoom-in"
  | "zoom-out"
  | "slide-up"

interface ScrollRevealProps {
  children: ReactNode
  variant?: AnimationVariant
  /** Delay in ms. Default: 0 */
  delay?: number
  /** Duration in ms. Default: 800 */
  duration?: number
  /** IntersectionObserver threshold. Default: 0.1 */
  threshold?: number
  className?: string
  /** Animate every time (false) or only first time (true). Default: false */
  once?: boolean
  /** Distance in px for translate animations. Default: 40 */
  distance?: number
  /** CSS easing. Default: expo ease-out */
  easing?: string
}

const getHiddenStyle = (variant: AnimationVariant, distance: number): CSSProperties => {
  const base: CSSProperties = { opacity: 0 }
  switch (variant) {
    case "fade-up":    return { ...base, transform: `translate3d(0, ${distance}px, 0)` }
    case "fade-down":  return { ...base, transform: `translate3d(0, -${distance}px, 0)` }
    case "fade-left":  return { ...base, transform: `translate3d(${distance}px, 0, 0)` }
    case "fade-right": return { ...base, transform: `translate3d(-${distance}px, 0, 0)` }
    case "fade":       return base
    case "zoom-in":    return { ...base, transform: "scale3d(0.94, 0.94, 1)" }
    case "zoom-out":   return { ...base, transform: "scale3d(1.06, 1.06, 1)" }
    case "slide-up":   return { ...base, transform: `translate3d(0, ${distance * 1.5}px, 0)` }
  }
}

const REVEALED: CSSProperties = {
  opacity: 1,
  transform: "translate3d(0, 0, 0) scale3d(1, 1, 1)",
}

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 800,
  threshold = 0.1,
  className = "",
  once = false,
  distance = 40,
  easing = "cubic-bezier(0.16, 1, 0.3, 1)", // Premium expo ease-out curve
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  const hiddenStyle = getHiddenStyle(variant, distance)
  const currentStyle: CSSProperties = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: easing,
    transitionDelay: isVisible ? `${delay}ms` : "0ms",
    willChange: "opacity, transform",
    backfaceVisibility: "hidden",
    transformStyle: "preserve-3d",
    ...(isVisible ? REVEALED : hiddenStyle),
  }

  return (
    <div ref={ref} className={className} style={currentStyle}>
      {children}
    </div>
  )
}

// ─── Stagger Context & Components for high-performance grouped animations ───

const StaggerContext = createContext<{ isVisible: boolean }>({ isVisible: false })

interface StaggerContainerProps {
  children: ReactNode
  threshold?: number
  once?: boolean
  className?: string
}

export function StaggerContainer({
  children,
  threshold = 0.08,
  once = false,
  className = "",
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return (
    <StaggerContext.Provider value={{ isVisible }}>
      <div ref={ref} className={className}>
        {children}
      </div>
    </StaggerContext.Provider>
  )
}

interface StaggerItemProps {
  children: ReactNode
  index: number
  variant?: AnimationVariant
  stagger?: number
  delay?: number
  duration?: number
  distance?: number
  easing?: string
  className?: string
}

export function StaggerItem({
  children,
  index,
  variant = "fade-up",
  stagger = 60,
  delay = 0,
  duration = 750,
  distance = 35,
  easing = "cubic-bezier(0.16, 1, 0.3, 1)",
  className = "",
}: StaggerItemProps) {
  const { isVisible } = useContext(StaggerContext)

  const hiddenStyle = getHiddenStyle(variant, distance)
  const currentStyle: CSSProperties = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: easing,
    transitionDelay: isVisible ? `${delay + index * stagger}ms` : "0ms",
    willChange: "opacity, transform",
    backfaceVisibility: "hidden",
    transformStyle: "preserve-3d",
    ...(isVisible ? REVEALED : hiddenStyle),
  }

  return (
    <div className={className} style={currentStyle}>
      {children}
    </div>
  )
}

/**
 * Backward compatibility wrapper.
 */
export function StaggerReveal({
  children,
  variant = "fade-up",
  stagger = 60,
  baseDelay = 0,
  duration = 750,
  threshold = 0.08,
  className = "",
  childClassName = "",
  distance = 35,
  once = false,
}: Omit<StaggerItemProps, "index"> & {
  children: ReactNode[]
  threshold?: number
  once?: boolean
  childClassName?: string
}) {
  return (
    <StaggerContainer threshold={threshold} once={once} className={className}>
      {children.map((child, i) => (
        <StaggerItem
          key={i}
          index={i}
          variant={variant}
          stagger={stagger}
          delay={baseDelay}
          duration={duration}
          distance={distance}
          className={childClassName}
        >
          {child}
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}
