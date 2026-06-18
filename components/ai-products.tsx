import Image from "next/image"
import { Bot, LineChart, ImageIcon, Network, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const capabilities = [
  { icon: Bot, color: "text-rose-500 bg-rose-500/10 border-rose-500/20" },
  { icon: LineChart, color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20" },
  { icon: ImageIcon, color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
  { icon: Network, color: "text-purple-500 bg-purple-500/10 border-purple-500/20" },
]

export function AiProducts() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
      {/* Outer Bordered Container */}
      <div className="rounded-3xl border border-border bg-card p-6 md:p-10 space-y-8 shadow-2xl">
        
        {/* Header Row */}
        <div className="flex justify-between items-center pb-4 border-b border-border/60">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <span className="text-primary font-extrabold text-base leading-none">*</span> AI &amp; INNOVATION
          </div>
          
          {/* Integration Icons (Social Style) */}
          
        </div>

        {/* Center Visual Frame with Stepped Cutouts */}
        <div className="relative w-full h-[360px] md:h-[480px] overflow-hidden rounded-[2.5rem] bg-secondary/15">
          <Image
            src="/ai-innovative-visual.png"
            alt="Futuristic AI and technology neural network visual"
            fill
            className="object-cover w-full h-full"
            priority
          />
          
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

          {/* Stepped Cutout Masks (Matching Page/Card Background Color) */}
          {/* 1. Top Horizontal Mask (left to 78%) */}
          <div className="absolute top-0 left-0 w-[78%] h-[12%] bg-card pointer-events-none rounded-b-[1.5rem]" />
          
          {/* 2. Top-Left Vertical Mask (overlapping to deepen corner cutout) */}
        
          
          {/* 3. Bottom-Left Cutout Mask */}
          
          
          {/* 4. Bottom-Right Stats Cutout Mask */}
          <div className="absolute bottom-0 right-0 w-[30%] h-[38%] bg-card rounded-tl-[1.5rem] border-t border-l border-border/20 flex flex-col justify-center px-6 py-4">
            <p className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              10k+
            </p>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-1">
              Integrations
            </p>
            <p className="text-[10px] text-muted-foreground opacity-80 mt-0.5">
              99.9% reliability SLA
            </p>
          </div>
        </div>

        {/* Experience Label Sub-strip */}
        <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground">
          <span className="text-primary font-bold">50+</span> AI models
          <span className="text-border">|</span>
          <span className="text-primary font-bold">24/7</span> autonomous agents
        </div>

        {/* Details & Action Grid */}
        <div className="grid gap-8 lg:grid-cols-12 pt-2">
          
          {/* Left Column: Heading and Paragraphs */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl leading-tight">
              Intelligent Automation That Elevates Performance.
            </h2>
            <div className="grid gap-6 md:grid-cols-2 text-sm leading-relaxed text-muted-foreground">
              <p>
                Our ecosystem of AI products is designed to automate complex, repetitive processes and unlock new creative potentials. We integrate next-generation Large Language Models (LLMs) and custom automations directly into your operations, helping your team focus on high-impact strategic growth.
              </p>
              <p>
                From conversational AI assistants that handle customer queries 24/7 to predictive analytics models that optimize supply chains, we build systems that learn and adapt. We serve businesses across India, UAE, and Oman with highly secure, localized deployment options.
              </p>
            </div>
          </div>

          {/* Right Column: Brand, Tagline, and Action Button */}
          <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end text-left lg:text-right space-y-5">
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-wider">
                TECHNOSTORE360
              </p>
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">
                AI Ecosystem
              </p>
            </div>
            
            <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
              Ready to supercharge your business workflows with next-gen AI?
            </p>
            
            <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-xs font-bold uppercase tracking-wider shadow-xl shadow-foreground/10 flex items-center gap-2 group transition-all duration-300">
              Discover AI Products 
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

        </div>

      </div>
    </section>
  )
}
