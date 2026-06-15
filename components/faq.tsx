"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    q: "What are the main services provided by TechnoStore360?",
    a: "We offer business software, email & collaboration tools, hardware, cloud & security solutions, AI products, and custom IT implementation services for organizations of all sizes.",
  },
  {
    q: "What kind of support does TechnoStore360 offer after purchasing hardware and software solutions?",
    a: "Every purchase includes onboarding assistance, regional support across India, UAE and Oman, plus ongoing maintenance and renewal management for licenses and certifications.",
  },
  {
    q: "What are some of the best software solutions to manage my van sales operations?",
    a: "We recommend integrated POS, inventory, and route-optimization tools combined with cloud invoicing to give field teams real-time visibility into sales and stock.",
  },
  {
    q: "How do IT solution companies handle software implementation?",
    a: "Our team scopes your requirements, configures the platform, migrates existing data, trains your staff, and provides post-launch support to ensure a smooth rollout.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Everything you need to know before getting started
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((item, i) => {
          const isOpen = open === i
          return (
            <div
              key={item.q}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-medium text-foreground">{item.q}</span>
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground">
                  {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" className="rounded-full border-border bg-transparent px-8">
          See more
        </Button>
      </div>
    </section>
  )
}
