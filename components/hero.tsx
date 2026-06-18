"use client"

import { useState, useEffect, useRef } from "react"
import {
  Search,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { end: 10, suffix: "k+", label: "Businesses powered" },
  { end: 1000, suffix: "+", label: "Vetted products" },
  { end: 3, suffix: "", label: "Countries served" },
  { end: 99.9, suffix: "%", label: "Uptime SLA" },
]

function useCountUp(end: number, suffix: string, duration = 1800) {
  const [display, setDisplay] = useState("0" + suffix)
  const ref = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function startCount() {
      if (intervalRef.current) clearInterval(intervalRef.current)
      const isDecimal = end % 1 !== 0
      const steps = 60
      const increment = end / steps
      let current = 0
      setDisplay("0" + suffix)
      intervalRef.current = setInterval(() => {
        current += increment
        if (current >= end) {
          current = end
          clearInterval(intervalRef.current!)
          intervalRef.current = null
        }
        setDisplay(
          (isDecimal ? current.toFixed(1) : Math.floor(current).toString()) + suffix
        )
      }, duration / steps)
    }

    function stopCount() {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      setDisplay("0" + suffix)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCount()
        } else {
          stopCount()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [end, suffix, duration])

  return { display, ref }
}

const trust = [
  { icon: ShieldCheck, text: "Enterprise-grade security" },
  { icon: Zap, text: "Same-day onboarding" },
  { icon: Globe, text: "India · UAE · Oman" },
  { icon: Star, text: "4.9 / 5 customer rating" },
]

function StatCounter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { display, ref } = useCountUp(end, suffix)
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-foreground tabular-nums">{display}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  )
}

export function Hero() {
  const [query, setQuery] = useState("")

  return (
    <section className="relative overflow-hidden">
      {/* ── Animated gradient orbs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[24rem] w-[24rem] rounded-full bg-accent/15 blur-[80px]" />
        <div className="absolute bottom-0 right-0 h-[20rem] w-[20rem] rounded-full bg-primary/10 blur-[80px]" />
      </div>

      {/* ── Subtle grid overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px,transparent 1px),linear-gradient(90deg,var(--color-foreground) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 text-center md:pb-24 md:pt-28">
        {/* ── Welcome badge ── */}
        <div className="mb-6 inline-flex animate-pulse items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
          <span className="size-1.5 rounded-full bg-primary" />
          Welcome to TechnoStore360
        </div>

        {/* ── Headline ── */}
        <h1 className="mx-auto max-w-4xl text-balance text-5xl font-bold leading-[1.08] tracking-tight md:text-7xl">
          Your one-stop{" "}
          <span className="relative inline-block">
            <span className="text-primary">technology</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 8 Q75 2 150 8 Q225 14 298 8"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-primary/50"
              />
            </svg>
          </span>{" "}
          marketplace
        </h1>

        {/* ── Sub-headline ── */}
        <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          From cloud &amp; cybersecurity to AI tools and point-of-sale hardware —
          discover, compare, and deploy everything your business needs. Serving{" "}
          <span className="font-medium text-foreground">India, UAE &amp; Oman</span>.
        </p>

        {/* ── Hero search ── */}
        <div className="mx-auto mt-10 flex w-full max-w-2xl items-center overflow-hidden rounded-full border border-border bg-card shadow-2xl shadow-primary/10 focus-within:ring-2 focus-within:ring-ring">
          <button className="flex shrink-0 items-center gap-1 border-r border-border px-5 py-3.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
            All <ChevronDown className="size-3.5" />
          </button>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, software, hardware…"
            className="flex-1 bg-transparent px-5 py-3.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          <Button className="m-1.5 rounded-full px-7">
            <Search className="size-4" /> Search
          </Button>
        </div>

        {/* ── CTA buttons ── */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" className="rounded-full px-8 text-base">
            Explore all products <ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-border bg-transparent px-8 text-base"
          >
            Talk to sales
          </Button>
        </div>

        {/* ── Trust strip ── */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trust.map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-2 text-xs text-muted-foreground">
              <Icon className="size-3.5 text-accent" />
              {text}
            </span>
          ))}
        </div>

        {/* ── Stats row ── */}
        <div className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {stats.map(({ end, suffix, label }, i) => (
            <div key={label} className="flex items-center gap-10">
              {i > 0 && <span className="hidden h-8 w-px bg-border sm:block" />}
              <StatCounter end={end} suffix={suffix} label={label} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Gradient fade into next section ── */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  )
}
