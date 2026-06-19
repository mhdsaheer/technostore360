"use client"

import { ArrowRight, Award } from "lucide-react"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"

const tierStyles: Record<string, { label: string; dot: string; text: string; bg: string; border: string }> = {
  GOLD:        { label: "Gold Partner",        dot: "#F59E0B", text: "#92400E", bg: "#FFFBEB", border: "#FDE68A" },
  PREMIER:     { label: "Premier Partner",     dot: "#3B82F6", text: "#1E3A8A", bg: "#EFF6FF", border: "#BFDBFE" },
  AUTHORIZED:  { label: "Authorized",          dot: "#10B981", text: "#065F46", bg: "#ECFDF5", border: "#A7F3D0" },
  SILVER:      { label: "Silver Partner",      dot: "#94A3B8", text: "#475569", bg: "#F8FAFC", border: "#CBD5E1" },
  DISTRIBUTOR: { label: "Distributor",         dot: "#8B5CF6", text: "#4C1D95", bg: "#F5F3FF", border: "#DDD6FE" },
  SELECT:      { label: "Select Partner",      dot: "#06B6D4", text: "#164E63", bg: "#ECFEFF", border: "#A5F3FC" },
}

const brands = [
  {
    name: "Microsoft",
    skus: 142,
    tier: "GOLD",
    category: "Cloud & Productivity",
    logo: (
      <svg viewBox="0 0 88 88" width="52" height="52" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="40" height="40" fill="#F25022" />
        <rect x="46" y="2" width="40" height="40" fill="#7FBA00" />
        <rect x="2" y="46" width="40" height="40" fill="#00A4EF" />
        <rect x="46" y="46" width="40" height="40" fill="#FFB900" />
      </svg>
    ),
  },
  {
    name: "Google",
    skus: 38,
    tier: "PREMIER",
    category: "Workspace & AI",
    logo: (
      <svg viewBox="0 0 48 48" width="52" height="52" xmlns="http://www.w3.org/2000/svg">
        <path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.86l6.1-6.1C34.46 3.19 29.55 1 24 1 14.82 1 7.01 6.5 3.44 14.27l7.11 5.52C12.36 13.71 17.74 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.52 24.5c0-1.64-.15-3.22-.43-4.75H24v9h12.7c-.55 2.97-2.18 5.48-4.63 7.18l7.14 5.55C43.3 37.55 46.52 31.49 46.52 24.5z"/>
        <path fill="#FBBC05" d="M10.55 28.21A14.55 14.55 0 0 1 9.5 24c0-1.46.2-2.88.55-4.21l-7.11-5.52A23.48 23.48 0 0 0 .5 24c0 3.77.9 7.34 2.5 10.49l7.55-6.28z"/>
        <path fill="#34A853" d="M24 47c5.55 0 10.21-1.84 13.62-4.99l-7.14-5.55C28.62 38.16 26.42 39 24 39c-6.26 0-11.64-4.21-13.45-9.79l-7.55 6.28C7.01 43.5 14.82 47 24 47z"/>
      </svg>
    ),
  },
  {
    name: "Adobe",
    skus: 64,
    tier: "GOLD",
    category: "Creative Suite",
    logo: (
      <svg viewBox="0 0 240 234" width="46" height="46" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF0000" d="M42.5 0h155L240 234H0z"/>
        <path fill="#fff" d="M126.7 64.3l52.8 133.4h-34.6l-14.9-40.6H90.4l36.3-92.8zm-63.5 133.4H29.8l52.7-133.4 16 40.9-35.3 92.5z"/>
      </svg>
    ),
  },
  {
    name: "Cisco",
    skus: 124,
    tier: "SELECT",
    category: "Networking",
    logo: (
      <svg viewBox="0 0 120 36" width="80" height="24" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="28" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="700" fill="#00BCEB" letterSpacing="1">cisco</text>
      </svg>
    ),
  },
  {
    name: "Dell",
    skus: 78,
    tier: "AUTHORIZED",
    category: "Hardware",
    logo: (
      <svg viewBox="0 0 80 24" width="68" height="20" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="800" fill="#007DB8" letterSpacing="2">DELL</text>
      </svg>
    ),
  },
  {
    name: "HP",
    skus: 96,
    tier: "AUTHORIZED",
    category: "Computing",
    logo: (
      <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="none" stroke="#0096D6" strokeWidth="3"/>
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#0096D6" fontFamily="Arial">hp</text>
      </svg>
    ),
  },
  {
    name: "Zoho",
    skus: 51,
    tier: "AUTHORIZED",
    category: "Business Software",
    logo: (
      <span style={{ fontFamily: "Georgia, serif", fontSize: 30, fontWeight: 700, color: "#E44C23", letterSpacing: -1, lineHeight: 1 }}>
        Zoho
      </span>
    ),
  },
  {
    name: "Fortinet",
    skus: 42,
    tier: "SILVER",
    category: "Cybersecurity",
    logo: (
      <span style={{ fontFamily: "Arial, sans-serif", fontSize: 18, fontWeight: 800, color: "#EE3124", letterSpacing: 0.5, lineHeight: 1 }}>
        FORTINET
      </span>
    ),
  },
  {
    name: "Ubiquiti",
    skus: 87,
    tier: "DISTRIBUTOR",
    category: "Networking",
    logo: (
      <svg viewBox="0 0 48 48" width="44" height="44" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="none" stroke="#2563EB" strokeWidth="4"/>
        <circle cx="24" cy="24" r="8" fill="#2563EB"/>
      </svg>
    ),
  },
  {
    name: "Odoo",
    skus: 22,
    tier: "SILVER",
    category: "ERP",
    logo: (
      <span style={{ fontFamily: "Arial, sans-serif", fontSize: 26, fontWeight: 700, color: "#714B67", letterSpacing: -0.5, lineHeight: 1 }}>
        odoo
      </span>
    ),
  },
  {
    name: "Grandstream",
    skus: 45,
    tier: "AUTHORIZED",
    category: "Communications",
    logo: (
      <span style={{ fontFamily: "Arial, sans-serif", fontSize: 16, fontWeight: 700, color: "#2563EB", letterSpacing: -0.3, lineHeight: 1 }}>
        Grandstream
      </span>
    ),
  },
  {
    name: "ZKTeco",
    skus: 31,
    tier: "DISTRIBUTOR",
    category: "Access Control",
    logo: (
      <span style={{ fontFamily: "Arial, sans-serif", fontSize: 20, fontWeight: 800, color: "#111827", letterSpacing: -0.5, lineHeight: 1 }}>
        ZKTeco
      </span>
    ),
  },
]

export function Brands() {
  return (
    <section className="relative overflow-hidden bg-background py-14">
      {/* ── Subtle background decoration ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-foreground) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/10 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ── Header ── */}
        <div className="mb-10 flex flex-col gap-0 md:flex-row md:items-end md:justify-between">
          {/* Left: eyebrow + headline + description */}
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5">
              <Award className="size-3.5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Shop by Brand
              </span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl leading-[1.1]">
              Authorized partner.{" "}
              <span className="text-primary">Real licenses.</span>
              <br className="hidden md:block" />
              Genuine warranty.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground leading-relaxed">
              We&apos;re a tier&#8209;1 reseller for the brands B2B buyers actually need.
              Volume pricing, multi-year contracts and CSP billing supported across all listings.
            </p>

            {/* Inline stats row */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              {[
                { value: "60+", label: "Brand partners" },
                { value: "750+", label: "Total SKUs" },
                { value: "Tier-1", label: "Reseller status" },
                { value: "3", label: "Countries" },
              ].map(({ value, label }, i) => (
                <div key={label} className="flex items-center gap-6">
                  {i > 0 && <span className="h-4 w-px bg-border" />}
                  <span className="text-sm text-muted-foreground">
                    <span className="font-extrabold text-foreground">{value}</span>
                    {" "}{label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA */}
          <div className="mt-6 md:mt-0 md:pb-1">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-md"
            >
              View all 60+ brands
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* ── Brand grid ── */}
        <StaggerContainer className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {brands.map((brand, idx) => {
            const t = tierStyles[brand.tier]
            return (
              <StaggerItem
                key={brand.name}
                index={idx}
                variant="fade-up"
                stagger={50}
                duration={600}
                distance={20}
              >
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card shadow-[0_1px_3px_0_rgb(0,0,0,0.04),0_0_0_1px_rgb(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-border/80"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle at 50% 0%, rgba(var(--primary-rgb,59,130,246),0.06) 0%, transparent 70%)" }}
                />

                {/* Tier badge */}
                <div className="px-4 pt-4">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide"
                    style={{ background: t.bg, color: t.text, border: `1px solid ${t.border}` }}
                  >
                    <span className="size-1.5 rounded-full" style={{ background: t.dot }} />
                    {t.label}
                  </span>
                </div>

                {/* Logo area */}
                <div className="flex items-center justify-center px-6 py-6">
                  <div className="flex h-12 items-center justify-center">
                    {brand.logo}
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-border/40 px-4 py-3">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-sm font-bold text-foreground">{brand.name}</p>
                      <p className="text-[11px] text-muted-foreground">{brand.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-extrabold text-foreground">{brand.skus}</p>
                      <p className="text-[10px] text-muted-foreground">SKUs</p>
                    </div>
                  </div>
                </div>
              </a>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* ── Mobile CTA ── */}
        <div className="mt-8 flex md:hidden justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          >
            View all 60+ brands <ArrowRight className="size-4" />
          </a>
        </div>

        {/* ── Partnership tier legend ── */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <span className="text-xs text-muted-foreground">Partnership tiers:</span>
          {Object.entries(tierStyles).map(([key, s]) => (
            <span key={key} className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: s.text }}>
              <span className="size-2 rounded-full" style={{ background: s.dot }} />
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
