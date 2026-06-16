"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("theme") as "dark" | "light" | null
    if (saved) {
      setTheme(saved)
      document.documentElement.classList.remove("dark", "light")
      document.documentElement.classList.add(saved)
    }
  }, [])

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    document.documentElement.classList.remove("dark", "light")
    document.documentElement.classList.add(next)
    localStorage.setItem("theme", next)
  }

  // Avoid hydration mismatch — render a placeholder until mounted
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full"
        aria-label="Toggle theme"
      >
        <span className="size-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative rounded-full overflow-hidden"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <Sun
        className={`size-5 transition-all duration-500 ${
          theme === "dark"
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
        style={{ position: theme === "dark" ? "absolute" : "static" }}
      />
      <Moon
        className={`size-5 transition-all duration-500 ${
          theme === "light"
            ? "-rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
        style={{ position: theme === "light" ? "absolute" : "static" }}
      />
    </Button>
  )
}
