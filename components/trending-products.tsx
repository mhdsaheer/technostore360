import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  { name: "Google Workspace", vendor: "By Google", initials: "GW", price: "130.06", tint: "text-chart-2" },
  { name: "Restaurant POS", vendor: "By Febno Technologies", initials: "RP", price: "1,858.97", tint: "text-primary" },
  { name: "Microsoft Azure", vendor: "By Microsoft", initials: "AZ", price: "475.00", tint: "text-accent" },
  { name: "Odoo ERP", vendor: "By Odoo", initials: "OD", price: "722.00", tint: "text-chart-5" },
  { name: "Zoho Workplace", vendor: "By Zoho", initials: "ZW", price: "555.12", tint: "text-chart-4" },
]

export function TrendingProducts() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Top trending items</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          See what&apos;s making waves in the market today
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {products.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="mb-5 flex h-24 items-center justify-center rounded-xl bg-secondary">
              <span className={`font-mono text-3xl font-extrabold ${p.tint}`}>
                {p.initials}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-foreground">{p.name}</h3>
            <p className="text-xs text-muted-foreground">{p.vendor}</p>
            <div className="mt-4 border-t border-border pt-4">
              <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                Starting at
              </p>
              <p className="text-lg font-bold text-foreground">
                <span className="text-xs font-medium text-muted-foreground">INR</span> {p.price}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 w-full rounded-full border-border bg-transparent group-hover:border-primary group-hover:text-primary"
            >
              View product <ArrowUpRight className="size-3.5" />
            </Button>
          </article>
        ))}
      </div>
    </section>
  )
}
