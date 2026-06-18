import { ArrowRight, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResellerCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
      <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card to-card p-8 md:p-12">
        <div className="pointer-events-none absolute -right-10 -top-10 size-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
          <div className="flex items-center gap-4">
            <span className="text-6xl font-extrabold text-primary md:text-7xl">25%</span>
            <div className="border-l border-border pl-4">
              <p className="text-xl font-bold leading-tight text-foreground">
                Join as a <span className="text-primary">Reseller</span>
              </p>
              <p className="text-xl font-bold leading-tight text-foreground">
                and earn a commission!
              </p>
            </div>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Partner with TechnoStore360 to expand your offerings and boost your earnings.
            Start reselling leading business tools and enjoy a rewarding 25% commission.
          </p>

          <Button size="lg" className="rounded-full px-7">
            <Handshake className="size-4" /> Become a reseller <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
