"use client"

import { useState } from "react"
import { Building2, Truck, ShoppingCart, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: "arabian-bedding",
    company: "Arabian Bedding LLC",
    sector: "HR & Workforce Management",
    icon: Building2,
    color: "text-rose-500 bg-rose-500/10 border-rose-500/20",
    tags: ["UAE", "Furniture Manufacturing", "Attendance Management"],
    title: "Optimizing attendance management for Arabian Bedding LLC",
    description:
      "Arabian Bedding Trading LLC, a subsidiary of Dubai Furniture Manufacturing Company, faced significant challenges managing its HR operations across multiple locations in Saudi Arabia.",
    stats: [
      { value: "99.9%", label: "Accuracy Rate" },
      { value: "-40%", label: "Admin Workload" },
      { value: "0", label: "Compliance Lapses" },
    ],
    outcomes: [
      {
        title: "Centralized attendance",
        desc: "Attendance data from all branches is now captured in real time and consolidated in a single system.",
      },
      {
        title: "Improved compliance",
        desc: "Automated expiry alerts for contracts, IDs, and certifications let the HR team proactively manage renewals.",
      },
    ],
  },
  {
    id: "logix-global",
    company: "LogixGlobal GCC",
    sector: "Logistics & Fleet Optimization",
    icon: Truck,
    color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
    tags: ["UAE", "Logistics", "Route Optimization"],
    title: "Smart fleet tracking & route optimization for LogixGlobal",
    description:
      "LogixGlobal needed to optimize fuel consumption and delivery schedules across their GCC distribution network to remain competitive.",
    stats: [
      { value: "22%", label: "Fuel Savings" },
      { value: "99.4%", label: "On-Time Delivery" },
      { value: "15k+", label: "Monthly Trips" },
    ],
    outcomes: [
      {
        title: "Real-time tracking",
        desc: "Fleet coordinates and engine diagnostics are monitored continuously with cellular failover.",
      },
      {
        title: "Dynamic routing",
        desc: "AI-driven route calculations adapt to live traffic, weather, and border crossing delays.",
      },
    ],
  },
  {
    id: "retail-corp",
    company: "RetailCorp Oman",
    sector: "Cloud & Omnichannel POS",
    icon: ShoppingCart,
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    tags: ["Oman", "Retail", "Omnichannel POS"],
    title: "Omnichannel retail migration and cloud POS rollout",
    description:
      "RetailCorp migrated 45 physical outlets in Oman from legacy desktop POS to a modern cloud-native system with offline-first capabilities.",
    stats: [
      { value: "45", label: "Outlets Migrated" },
      { value: "3.2s", label: "Avg. Checkout Time" },
      { value: "+18%", label: "Sales Volume" },
    ],
    outcomes: [
      {
        title: "Offline checkout",
        desc: "Store operations continue uninterrupted during network outages, syncing automatically upon reconnection.",
      },
      {
        title: "Unified inventory",
        desc: "Real-time stock availability syncs instantly across online stores and all physical outlets.",
      },
    ],
  },
]

export function Portfolio() {
  const [activeIdx, setActiveIdx] = useState(0)
  const activeProject = projects[activeIdx]

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 relative">
      {/* Subtle Background Glows */}
      <div className="pointer-events-none absolute -left-4 top-1/4 h-[30rem] w-[30rem] rounded-full bg-primary/5 blur-[120px] -z-10" />
      <div className="pointer-events-none absolute -right-4 bottom-1/4 h-[30rem] w-[30rem] rounded-full bg-accent/5 blur-[120px] -z-10" />

      {/* Header */}
      <div className="mb-14 text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase">
          Case Studies
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
          Project portfolio &amp; outcomes
        </h2>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground">
          Real-world solutions delivered across industries. Explore our work and get a
          custom proposal for your needs.
        </p>
      </div>

      {/* Interactive Dashboard Container */}
      <div className="overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur-xl shadow-2xl">
        <div className="grid gap-0 lg:grid-cols-12 min-h-[580px]">
          {/* Left Column: Project Selector */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-border bg-secondary/15 p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-2">
                Select Case Study
              </h3>
              
              {/* Mobile View: Horizontal Scrollable List */}
              <div className="flex gap-3 overflow-x-auto pb-3 lg:hidden snap-x">
                {projects.map((proj, idx) => {
                  const ProjIcon = proj.icon
                  const isActive = idx === activeIdx
                  return (
                    <button
                      key={proj.id}
                      onClick={() => setActiveIdx(idx)}
                      className={`flex items-center gap-3 shrink-0 snap-start rounded-2xl border px-5 py-3 transition-all duration-300 text-left ${
                        isActive
                          ? "bg-card border-primary text-foreground shadow-md"
                          : "bg-secondary/40 border-border/60 text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                      }`}
                    >
                      <span className={`flex size-8 items-center justify-center rounded-xl border ${proj.color}`}>
                        <ProjIcon className="size-4" />
                      </span>
                      <div>
                        <p className="text-xs font-bold leading-tight">{proj.company}</p>
                        <p className="text-[10px] opacity-80 mt-0.5">{proj.sector}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Desktop View: Vertical Navigation List */}
              <div className="hidden lg:flex flex-col gap-3">
                {projects.map((proj, idx) => {
                  const ProjIcon = proj.icon
                  const isActive = idx === activeIdx
                  return (
                    <button
                      key={proj.id}
                      onClick={() => setActiveIdx(idx)}
                      className={`group flex items-center gap-4 w-full rounded-2xl border p-4 transition-all duration-300 text-left ${
                        isActive
                          ? "bg-card border-primary/40 shadow-xl shadow-primary/5 translate-x-1"
                          : "bg-transparent border-transparent text-muted-foreground hover:bg-secondary/30 hover:text-foreground"
                      }`}
                    >
                      <span className={`flex size-11 items-center justify-center rounded-xl border transition-all duration-300 ${
                        isActive ? proj.color : "bg-secondary/50 border-border/80 group-hover:bg-secondary"
                      }`}>
                        <ProjIcon className="size-5" />
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-bold transition-colors ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                          {proj.company}
                        </p>
                        <p className="text-xs opacity-75 mt-0.5 truncate">{proj.sector}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Pitch / Dynamic Proposal Footer */}
            <div className="hidden lg:block rounded-2xl bg-primary/5 border border-primary/10 p-5 space-y-3">
              <h4 className="text-xs font-bold text-primary uppercase tracking-wider">
                Need similar outcomes?
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We design, build, and deploy tailored solutions for businesses in India, UAE &amp; Oman.
              </p>
              <Button size="sm" className="w-full rounded-xl text-xs py-4 font-semibold">
                Get a custom proposal
              </Button>
            </div>
          </div>

          {/* Right Column: Project Details */}
          <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-between bg-card/20">
            {/* Animating key helper to trigger entry effects when activeIdx changes */}
            <div key={activeIdx} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
              
              {/* Tags and Title */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary/60 px-3.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-foreground leading-tight md:max-w-xl">
                  {activeProject.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground md:max-w-2xl">
                  {activeProject.description}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 border-y border-border/60 py-6">
                {activeProject.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="text-center md:text-left space-y-1">
                    <p className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Outcomes List */}
              <div className="space-y-4">
                <p className="text-sm font-bold text-foreground uppercase tracking-wider">
                  Results &amp; benefits
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {activeProject.outcomes.map((o) => (
                    <div
                      key={o.title}
                      className="flex gap-3.5 rounded-2xl border border-border bg-secondary/20 p-5 hover:bg-secondary/35 transition-colors"
                    >
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-foreground">{o.title}</p>
                        <p className="text-xs leading-relaxed text-muted-foreground">{o.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Button className="rounded-full px-8 py-6 text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all">
                  See case study <ArrowRight className="size-4 ml-1" />
                </Button>
                <Button variant="outline" className="rounded-full border-border bg-transparent px-8 py-6 text-sm font-semibold hover:bg-secondary/50">
                  Get a similar project
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
