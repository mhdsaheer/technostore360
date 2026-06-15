import { Building2, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const outcomes = [
  {
    title: "Centralized attendance",
    desc: "Attendance data from all branches is now captured in real time and consolidated in a single system.",
  },
  {
    title: "Improved compliance",
    desc: "Automated expiry alerts for contracts, IDs, and certifications let the HR team proactively manage renewals.",
  },
]

export function Portfolio() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Project portfolio &amp; outcomes
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Real-world solutions delivered across industries. Explore our work and get a
          custom proposal for your needs.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-border bg-card">
        <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {["UAE", "Furniture Manufacturing", "Attendance Management"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-secondary px-3 py-1 font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold leading-snug text-foreground">
              Optimizing attendance management for Arabian Bedding LLC
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Arabian Bedding Trading LLC, a subsidiary of Dubai Furniture Manufacturing
              Company, faced significant challenges managing its HR operations across
              multiple locations in Saudi Arabia.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="rounded-full px-6">
                See case study <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline" className="rounded-full border-border bg-transparent px-6">
                Get a similar project
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/50 p-4">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Building2 className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Arabian Bedding LLC</p>
                <p className="text-xs text-muted-foreground">HR &amp; Workforce Management</p>
              </div>
            </div>
            <p className="pt-1 text-sm font-semibold text-foreground">Results &amp; benefits</p>
            {outcomes.map((o) => (
              <div
                key={o.title}
                className="flex gap-3 rounded-2xl border border-border bg-secondary/30 p-4"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{o.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
