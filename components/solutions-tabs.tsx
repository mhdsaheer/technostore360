"use client"

import { useState } from "react"
import {
  Wallet,
  Receipt,
  BookOpen,
  CreditCard,
  PiggyBank,
  FileText,
  Calculator,
  Landmark,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const tabs = [
  "Finance",
  "Logistics",
  "Real Estate",
  "Manufacturing",
  "E-Commerce",
  "Automobile",
  "Education",
]

const solutionsByTab: Record<string, { name: string; icon: typeof Wallet }[]> = {
  Finance: [
    { name: "Zoho Finance", icon: Landmark },
    { name: "Petty Cash Management", icon: Wallet },
    { name: "CashBook", icon: BookOpen },
    { name: "Zoho Expense", icon: Receipt },
    { name: "Zoho Payroll", icon: Calculator },
    { name: "Debtors Control", icon: PiggyBank },
    { name: "Zoho Books", icon: FileText },
    { name: "Zoho Invoice", icon: CreditCard },
  ],
}

const fallback = [
  { name: "Inventory Suite", icon: BookOpen },
  { name: "Order Tracking", icon: Receipt },
  { name: "Billing System", icon: CreditCard },
  { name: "Analytics Hub", icon: Calculator },
  { name: "CRM Platform", icon: Wallet },
  { name: "Document Manager", icon: FileText },
  { name: "Asset Control", icon: PiggyBank },
  { name: "Reporting Tools", icon: Landmark },
]

export function SolutionsTabs() {
  const [active, setActive] = useState("Finance")
  const items = solutionsByTab[active] ?? fallback

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Discover our software &amp; hardware solutions
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Tailored toolkits for every industry you operate in
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-border bg-card">
        {/* tabs */}
        <div className="flex gap-1 overflow-x-auto border-b border-border p-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                active === tab
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* grid */}
        <div className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-3 md:grid-cols-4 md:p-8">
          {items.map(({ name, icon: Icon }) => (
            <button
              key={name}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-secondary/30 p-5 text-center transition-all hover:-translate-y-1 hover:border-primary/50"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-card text-accent transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" />
              </span>
              <span className="text-sm font-medium text-foreground">{name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" className="rounded-full border-border bg-transparent px-8">
          View more
        </Button>
      </div>
    </section>
  )
}
