"use client"

import Image from "next/image"
import { ArrowUpRight, TrendingUp, Flame, Zap } from "lucide-react"

const products = [
  {
    rank: 1,
    name: "Google Workspace",
    vendor: "Google",
    category: "Productivity",
    image: "/google-workspace.png",
    price: "130.06",
    badge: "🔥 #1 Best Seller",
    tag: "Most Popular",
  },
  {
    rank: 2,
    name: "Restaurant POS",
    vendor: "Febno Technologies",
    category: "Point of Sale",
    image: null,
    textLogo: { line1: "Restaurant", line2: "POS", bg: "from-amber-500 to-orange-600", text: "text-white" },
    price: "1,858.97",
    badge: "⚡ Rising Fast",
    tag: "Top Rated",
  },
  {
    rank: 3,
    name: "Microsoft Azure",
    vendor: "Microsoft",
    category: "Cloud",
    image: "/microsoft-azure.png",
    price: "475.00",
    badge: "☁️ Cloud Leader",
    tag: "Enterprise",
  },
  {
    rank: 4,
    name: "Odoo ERP",
    vendor: "Odoo",
    category: "ERP",
    image: "/odoo-erp.png",
    price: "722.00",
    badge: "📦 Complete Suite",
    tag: "All-in-One",
  },
  {
    rank: 5,
    name: "Zoho Workplace",
    vendor: "Zoho",
    category: "Collaboration",
    image: "/zoho-workplace.png",
    price: "555.12",
    badge: "🚀 Fast Growth",
    tag: "SMB Favorite",
  },
]

const tickerItems = [
  "Google Workspace · +24% this week",
  "Microsoft Azure · Trending in UAE",
  "Odoo ERP · 3x demand surge",
  "Restaurant POS · Top in hospitality",
  "Zoho Workplace · Best value pick",
  "Google Workspace · +24% this week",
  "Microsoft Azure · Trending in UAE",
  "Odoo ERP · 3x demand surge",
]

export function TrendingProducts() {
  const [featured, ...rest] = products

  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* ── Section background ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ── Header ── */}
        <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <Flame className="size-3.5" />
              Trending Now
            </div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              What the market{" "}
              <span className="text-primary">loves</span>
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              Real-time rankings based on searches, purchases, and reviews across India, UAE &amp; Oman.
            </p>
          </div>

          <a
            href="#"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            See all products
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* ── Live ticker ── */}
        <div className="relative mb-10 overflow-hidden rounded-2xl border border-border bg-card/50">
          <div className="flex items-center">
            <div className="flex shrink-0 items-center gap-2 border-r border-border bg-primary/10 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-primary">
              <TrendingUp className="size-3.5" />
              Live
            </div>
            <div className="ticker-wrapper flex-1 overflow-hidden">
              <div className="ticker-track flex w-max gap-10 py-2.5 text-xs text-muted-foreground">
                {tickerItems.map((item, i) => (
                  <span key={i} className="inline-flex shrink-0 items-center gap-2">
                    <span className="size-1.5 rounded-full bg-primary/60" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:grid-rows-2">

          {/* Featured card — rank #1, spans 2 cols × 2 rows */}
          <article className="group relative col-span-1 flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15 lg:col-span-2 lg:row-span-2">
            {/* Subtle primary hover wash */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/8 via-primary/3 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative flex flex-1 flex-col p-7">
              {/* Rank + badge */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[10rem] font-black leading-none text-foreground/5 select-none absolute -top-6 -left-2">
                  1
                </span>
                <span className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  <Flame className="size-3" /> {featured.badge}
                </span>
                <span className="relative z-10 rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">
                  {featured.category}
                </span>
              </div>

              {/* Logo */}
              <div className="relative z-10 mb-6 flex h-40 items-center justify-center overflow-hidden rounded-2xl border border-border bg-white/90 dark:bg-white/10">
                <Image
                  src={featured.image!}
                  alt={featured.name}
                  width={220}
                  height={140}
                  className="h-24 w-auto max-w-[80%] object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="relative z-10 mt-auto">
                <p className="mb-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  By {featured.vendor}
                </p>
                <h3 className="text-2xl font-bold text-foreground">{featured.name}</h3>

                <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Starting at</p>
                    <p className="text-3xl font-black text-foreground">
                      <span className="mr-1 text-sm font-medium text-muted-foreground">INR</span>
                      {featured.price}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                  >
                    Get started <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Secondary cards — rank #2–5, 2 per row × 2 rows on the right */}
          {rest.map((p) => (
            <article
              key={p.name}
              className="group relative col-span-1 flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Subtle primary hover wash — unified colour */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/8 via-primary/3 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex flex-1 flex-col p-5">
                {/* Rank badge */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-5xl font-black leading-none text-foreground/5 select-none absolute top-2 right-4">
                    {p.rank}
                  </span>
                  <span className="relative z-10 rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    #{p.rank} · {p.tag}
                  </span>
                  <Zap className="relative z-10 size-3.5 text-muted-foreground/40" />
                </div>

                {/* Logo */}
                <div className="relative z-10 mb-4 flex h-20 items-center justify-center overflow-hidden rounded-xl border border-border bg-white/90 dark:bg-white/10">
                  {p.textLogo ? (
                    <div className={`flex h-full w-full flex-col items-center justify-center bg-gradient-to-br ${p.textLogo.bg} px-3`}>
                      <span className={`text-[10px] font-bold leading-none tracking-widest uppercase ${p.textLogo.text} opacity-80`}>
                        {p.textLogo.line1}
                      </span>
                      <span className={`text-xl font-black leading-none tracking-tight ${p.textLogo.text}`}>
                        {p.textLogo.line2}
                      </span>
                    </div>
                  ) : (
                    <Image
                      src={p.image!}
                      alt={p.name}
                      width={120}
                      height={70}
                      className="h-10 w-auto max-w-[75%] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Info */}
                <div className="relative z-10 mt-auto">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {p.vendor}
                  </p>
                  <h3 className="mt-0.5 text-sm font-bold text-foreground leading-tight">{p.name}</h3>

                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-muted-foreground/60">From</p>
                      <p className="text-base font-black text-foreground">
                        <span className="mr-0.5 text-[10px] font-medium text-muted-foreground">INR</span>
                        {p.price}
                      </p>
                    </div>
                    <a
                      href="#"
                      className="flex size-8 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── Ticker CSS ── */}
      <style>{`
        .ticker-wrapper { mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%); }
        .ticker-track { animation: ticker 30s linear infinite; }
        .ticker-track:hover { animation-play-state: paused; }
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </section>
  )
}
