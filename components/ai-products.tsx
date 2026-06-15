import Image from "next/image"
import { Bot, LineChart, ImageIcon, Network, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const capabilities = [
  { icon: Bot, label: "AI Chatbots & Virtual Assistants" },
  { icon: LineChart, label: "AI Analytics & Automation Tools" },
  { icon: ImageIcon, label: "AI Image & Video Generators" },
  { icon: Network, label: "Smart Integrations" },
]

export function AiProducts() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-7 p-8 md:p-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              <span className="size-1.5 rounded-full bg-accent" /> AI & Innovative Products
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Future-ready solutions powered by artificial intelligence
            </h2>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Explore our range of AI-driven products designed to simplify complex
              challenges. From intelligent automation to smart gadgets, we help
              businesses and individuals achieve more with technology.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {capabilities.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-secondary/50 p-3"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <Icon className="size-4.5" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>

            <Button className="rounded-full px-6">
              Discover AI products <ArrowRight className="size-4" />
            </Button>
          </div>

          <div className="relative h-64 lg:h-full lg:min-h-[26rem]">
            <Image
              src="/ai-visual.png"
              alt="Futuristic AI robot representing innovative AI products"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-card via-card/30 to-transparent lg:bg-gradient-to-r" />
          </div>
        </div>
      </div>
    </section>
  )
}
