"use client"

import { useState } from "react"
import {
  Search,
  User,
  ChevronDown,
  Menu,
  X,
  Mail,
  Cpu,
  Cloud,
  Sparkles,
  BookOpen,
  AppWindow,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Software", icon: AppWindow },
  { label: "Email & Collaboration", icon: Mail },
  { label: "Hardware", icon: Cpu },
  { label: "Cloud & Security", icon: Cloud },
  { label: "AI", icon: Sparkles },
  { label: "Resources", icon: BookOpen },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      {/* Utility bar */}
      <div className="hidden border-b border-border/60 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-muted-foreground">
          <p>Empowering Diversity in Tech — serving India, UAE & Oman</p>
          <div className="flex items-center gap-4">
            <button className="transition-colors hover:text-foreground">English</button>
            <span className="text-border">|</span>
            <button className="transition-colors hover:text-foreground">India</button>
            <span className="text-border">|</span>
            <button className="transition-colors hover:text-foreground">INR ₹</button>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-4">
        <a href="#" className="flex shrink-0 flex-col leading-none">
          <span className="font-mono text-xl font-extrabold tracking-tight text-foreground">
            TECHNO<span className="text-primary">STORE</span>360
          </span>
          <span className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Empowering Diversity in Tech
          </span>
        </a>

        {/* Search */}
        <div className="ml-auto hidden flex-1 items-center md:flex md:max-w-2xl">
          <div className="flex w-full items-center overflow-hidden rounded-full border border-border bg-card focus-within:ring-2 focus-within:ring-ring">
            <button className="flex items-center gap-1 border-r border-border px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
              All <ChevronDown className="size-3.5" />
            </button>
            <input
              type="text"
              placeholder="Search by category, product or keyword"
              className="flex-1 bg-transparent px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <Button className="m-1 rounded-full px-5">
              <Search className="size-4" /> Search
            </Button>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2 md:ml-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="size-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Category nav */}
      <nav className="hidden border-t border-border md:block">
        <div className="mx-auto flex max-w-7xl items-center gap-1 px-6">
          {navItems.map(({ label, icon: Icon }) => (
            <a
              key={label}
              href="#"
              className="flex items-center gap-2 border-b-2 border-transparent px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              <Icon className="size-4" />
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border md:hidden">
          <div className="space-y-1 px-6 py-4">
            <div className="mb-3 flex items-center overflow-hidden rounded-full border border-border bg-card">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
              />
              <Button size="icon" className="m-1 rounded-full">
                <Search className="size-4" />
              </Button>
            </div>
            {navItems.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Icon className="size-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
