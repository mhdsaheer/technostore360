import Image from "next/image"
import { ShieldCheck, Tag, LayoutGrid, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  { icon: LayoutGrid, title: "Wide offering", desc: "1000+ vetted products" },
  { icon: Tag, title: "Affordable pricing", desc: "Best B2B rates" },
  { icon: ShieldCheck, title: "Reliability & security", desc: "Enterprise grade" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* glow accents */}
      <div className="pointer-events-none absolute -left-40 top-0 size-[32rem] rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-[28rem] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            Smart Tools · Simple Choices · Powerful Results
          </span>

          <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            Empower your business with the{" "}
            <span className="text-primary">perfect software</span> and technology
            solutions
          </h1>

          <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            From cloud and cybersecurity to AI and point-of-sale hardware — source
            everything your teams need from one trusted marketplace.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" className="rounded-full px-7">
              Explore products <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-transparent px-7"
            >
              Talk to sales
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 border-t border-border pt-6 sm:grid-cols-3">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-accent">
                  <Icon className="size-4.5" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-foreground">{title}</p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
            <Image
              src="/hero-professional.png"
              alt="Professional using business technology solutions"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-5 left-5 rounded-2xl border border-border bg-background/80 px-5 py-3 backdrop-blur-md">
            <p className="text-2xl font-bold text-foreground">10k+</p>
            <p className="text-xs text-muted-foreground">Businesses powered</p>
          </div>
        </div>
      </div>
    </section>
  )
}
