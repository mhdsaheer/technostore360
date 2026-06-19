"use client"

import { useEffect, useRef, type ReactNode } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/**
 * SmoothScrollProvider — wraps the page with Lenis for buttery smooth
 * momentum-based scrolling, synced with GSAP ScrollTrigger.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis

    // ─── Sync Lenis → GSAP ScrollTrigger ───
    // This is critical: without this, ScrollTrigger never fires.
    lenis.on("scroll", ScrollTrigger.update)

    // Let GSAP's ticker drive Lenis for frame-perfect sync
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000) // GSAP time is in seconds, Lenis expects ms
    })
    gsap.ticker.lagSmoothing(0) // Disable lag smoothing for consistency

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf as any)
      lenisRef.current = null
    }
  }, [])

  return <>{children}</>
}
