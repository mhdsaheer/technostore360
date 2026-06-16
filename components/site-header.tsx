"use client"

import { useState, useRef, useEffect } from "react"
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
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { label: "Software", icon: AppWindow },
  { label: "Email & Collaboration", icon: Mail },
  { label: "Hardware", icon: Cpu },
  { label: "Cloud & Security", icon: Cloud },
  { label: "AI", icon: Sparkles },
  { label: "Resources", icon: BookOpen },
]

function SearchBar() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Auto-focus input when opened
  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  return (
    <div
      ref={containerRef}
      className="relative hidden md:flex items-center justify-end"
    >
      {open ? (
        /* Expanded — grows leftward via absolute positioning */
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex w-[32rem] items-center overflow-hidden rounded-full border border-border bg-card focus-within:ring-2 focus-within:ring-ring shadow-lg animate-in fade-in slide-in-from-right-2 duration-200 z-10">
          <button className="flex shrink-0 items-center gap-1 border-r border-border px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
            All <ChevronDown className="size-3.5" />
          </button>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search by category, product or keyword"
            className="flex-1 bg-transparent px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          <Button className="m-1 shrink-0 rounded-full px-5">
            <Search className="size-4" /> Search
          </Button>
          {/* Close / collapse button */}
          <button
            onClick={() => setOpen(false)}
            className="mr-2 shrink-0 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Close search"
          >
            <X className="size-4" />
          </button>
        </div>
      ) : (
        /* Collapsed — search icon only */
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={() => setOpen(true)}
          aria-label="Open search"
        >
          <Search className="size-5" />
        </Button>
      )}
    </div>
  )
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Utility bar — not sticky, scrolls away */}
      <div className="hidden border-b border-border/60 md:block bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-muted-foreground">
          <p>Empowering Diversity in Tech — serving India, UAE &amp; Oman</p>
          <div className="flex items-center gap-4">
            <button className="transition-colors hover:text-foreground">English</button>
            <span className="text-border">|</span>
            <button className="transition-colors hover:text-foreground">India</button>
            <span className="text-border">|</span>
            <button className="transition-colors hover:text-foreground">INR ₹</button>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
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

          {/* Category nav — inline, centred */}
          <nav className="hidden flex-1 md:flex items-center justify-center gap-1">
            {navItems.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Icon className="size-4" />
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Search — icon by default, expands to full bar on click */}
            <SearchBar />
            <ThemeToggle />
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
    </>
  )
}
