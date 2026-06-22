"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ShoppingCart,
  Star,
  Cloud,
  Zap,
  Headphones,
  Shield,
  Lock,
  MessageSquare,
  CheckCircle2,
  Users,
  Building,
  ArrowLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const PLANS = [
  {
    id: "starter",
    name: "Business Starter",
    price: 130.00,
    features: [
      "Custom business email",
      "100-participant video meetings",
      "30 GB pooled storage per user",
      "Security & management controls",
      "Standard Support",
    ],
  },
  {
    id: "standard",
    name: "Business Standard",
    price: 650.00,
    isPopular: true,
    features: [
      "Custom business email",
      "150-participant video meetings + recording",
      "2 TB pooled storage per user",
      "Security & management controls",
      "Standard Support (paid upgrade to Enhanced)",
    ],
  },
  {
    id: "plus",
    name: "Business Plus",
    price: 1200.00,
    features: [
      "Custom business email + eDiscovery, retention",
      "500-participant video meetings + recording, tracking",
      "5 TB pooled storage per user",
      "Enhanced security & vault controls",
      "Standard Support (paid upgrade to Enhanced)",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    features: [
      "Custom business email + S/MIME encryption",
      "500-participant video meetings + transcription, translation",
      "As much storage as you need",
      "Advanced security, compliance & DLP controls",
      "Enhanced Support",
    ],
  },
]

export default function GoogleWorkspacePDP() {
  const [selectedPlan, setSelectedPlan] = useState("standard")
  const [userCount, setUserCount] = useState(5)
  const [activeTab, setActiveTab] = useState("overview")

  const currentPlan = PLANS.find((p) => p.id === selectedPlan) || PLANS[1]
  const isCustomPrice = typeof currentPlan.price === "string"
  const pricePerUser = typeof currentPlan.price === "number" ? currentPlan.price : 0
  const totalPrice = pricePerUser * userCount

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />

        <main className="mx-auto max-w-7xl px-6 py-8">
          {/* Breadcrumbs & Back Link */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
              <ChevronRight className="size-3.5" />
              <Link href="/#software" className="transition-colors hover:text-foreground">
                Software
              </Link>
              <ChevronRight className="size-3.5" />
              <span className="text-foreground font-medium">Google Workspace</span>
            </nav>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" /> Back to home
            </Link>
          </div>

          {/* Main Product Section */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left/Middle Columns: Image & Details */}
            <div className="lg:col-span-8 space-y-10">
              {/* Product Header Card */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-start">
                {/* Product Image */}
                <div className="md:col-span-5 bg-white/95 dark:bg-white/10 border border-border rounded-3xl p-8 h-48 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/google-workspace.png"
                    alt="Google Workspace"
                    width={320}
                    height={100}
                    className="h-20 w-auto max-w-[85%] object-contain"
                  />
                </div>

                {/* Main product info */}
                <div className="md:col-span-7 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                      ★ #1 Best Seller
                    </span>
                    <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Productivity
                    </span>
                  </div>

                  <h1 className="text-4xl font-extrabold tracking-tight">Google Workspace</h1>
                  <p className="text-sm text-muted-foreground">By Google Cloud Partner Network</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="size-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <span className="font-semibold text-foreground ml-1">4.9</span>
                      <span>(342 reviews)</span>
                    </div>
                    <span>•</span>
                    <span className="text-foreground font-medium">10k+ Subscribed</span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    Collaborate, create, and communicate seamlessly with Google Workspace. Professional business email,
                    cloud storage, high-definition video conferencing, shared calendars, and all office productivity tools in one unified, secure platform.
                  </p>

                  {/* Highlight Features */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                    <div className="flex flex-col items-center gap-2 text-center p-3 rounded-2xl bg-card/30 border border-border/50">
                      <Cloud className="size-5 text-primary" />
                      <div className="text-xs font-bold">Cloud Built</div>
                      <div className="text-[10px] text-muted-foreground">Zero hardware</div>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center p-3 rounded-2xl bg-card/30 border border-border/50">
                      <Zap className="size-5 text-primary" />
                      <div className="text-xs font-bold">Instant Setup</div>
                      <div className="text-[10px] text-muted-foreground">Go live today</div>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-center p-3 rounded-2xl bg-card/30 border border-border/50">
                      <Headphones className="size-5 text-primary" />
                      <div className="text-xs font-bold">24/7 Expert</div>
                      <div className="text-[10px] text-muted-foreground">Priority support</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs Section */}
              <div className="border-t border-border pt-10">
                <div className="flex gap-6 border-b border-border overflow-x-auto pb-px">
                  {[
                    { id: "overview", label: "Overview" },
                    { id: "features", label: "Included Applications" },
                    { id: "benefits", label: "Business Benefits" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-4 text-sm font-semibold transition-all relative whitespace-nowrap ${
                        activeTab === tab.id
                          ? "text-primary border-b-2 border-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="py-8">
                  {activeTab === "overview" && (
                    <div className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        Google Workspace integrates core collaboration tools like Gmail, Google Calendar, Google Meet,
                        and Google Drive, enabling teams to co-author documents, manage projects, and communicate effectively
                        across any desktop or mobile device. Standardized on the world's most secure cloud architecture,
                        it includes robust admin controls to keep your company's data protected.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Domain-based custom email address",
                          "Real-time co-authoring in Docs & Sheets",
                          "Advanced smart canvas elements for planning",
                          "Seamless interoperability with Office files",
                          "99.9% guaranteed uptime SLA",
                          "Enterprise-grade security controls",
                        ].map((item, idx) => (
                          <div key={idx} className="flex gap-2 items-start">
                            <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "features" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { title: "Gmail", desc: "Custom business email with advanced spam and security filters." },
                        { title: "Google Drive", desc: "Secure cloud file storage with granular sharing controls." },
                        { title: "Google Meet", desc: "HD voice & video meetings with screen sharing and chat." },
                        { title: "Google Sheets & Docs", desc: "Create, collaborate, and revise documents instantly together." },
                        { title: "Google Calendar", desc: "Shareable calendars for team coordination and resource booking." },
                        { title: "Admin Console", desc: "Manage users, devices, and security profiles from one dashboard." },
                      ].map((app, idx) => (
                        <div key={idx} className="p-5 rounded-2xl border border-border bg-card/20 hover:border-primary/20 transition-all">
                          <h4 className="font-bold text-foreground mb-1 flex items-center gap-2">
                            <Sparkles className="size-4 text-primary" /> {app.title}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">{app.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "benefits" && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl bg-card/30 border border-border">
                          <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                            <Users className="size-4 text-primary" /> Enhanced Team Collaboration
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            No more version conflicts or scattered email attachments. Teams work on a single file simultaneously with automatic saving and revision histories.
                          </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card/30 border border-border">
                          <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                            <Shield className="size-4 text-primary" /> Scalable Enterprise Security
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            Your domain's security is backed by Google's industry-leading malware and phishing protection. Control device policies and wipe data remotely.
                          </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card/30 border border-border">
                          <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                            <Lock className="size-4 text-primary" /> Hybrid Work Ready
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            Access your office workspace seamlessly from any location, browser, or smartphone. Integrated offline support keeps work going without Internet.
                          </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-card/30 border border-border">
                          <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                            <Building className="size-4 text-primary" /> Local IT Partner Support
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            By subscribing via TechnoStore360, your business gets priority onboarding, domain setup, local currency billing, and dedicated support.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Pricing Plans & Configuration Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-card border border-border rounded-3xl p-6 lg:sticky lg:top-24 space-y-6 shadow-xl will-change-transform">
                <div>
                  <h3 className="text-xl font-bold mb-2">Configure Subscription</h3>
                  <p className="text-xs text-muted-foreground">Select a plan and license quantity to view cost.</p>
                </div>

                {/* Plan Selection Cards */}
                <div className="space-y-3">
                  {PLANS.map((plan) => {
                    const isSelected = selectedPlan === plan.id
                    return (
                      <div
                        key={plan.id}
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`relative p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                          isSelected
                            ? "border-primary bg-primary/5"
                            : "border-border bg-card/30 hover:border-border/80 hover:bg-card/50"
                        }`}
                      >
                        {plan.isPopular && (
                          <span className="absolute -top-2.5 right-4 bg-primary text-[10px] font-bold text-primary-foreground px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Popular
                          </span>
                        )}
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-sm">{plan.name}</span>
                          <input
                            type="radio"
                            name="workspace-plan"
                            checked={isSelected}
                            onChange={() => {}}
                            className="accent-primary"
                          />
                        </div>
                        <div className="text-sm font-semibold">
                          {typeof plan.price === "number" ? (
                            <>
                              INR {plan.price.toFixed(2)}{" "}
                              <span className="text-xs font-normal text-muted-foreground">/ user / month</span>
                            </>
                          ) : (
                            plan.price
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* User License Count Slider */}
                {!isCustomPrice && (
                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium flex items-center gap-1.5">
                        <Users className="size-4 text-primary" /> Number of Users
                      </span>
                      <span className="font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                        {userCount} {userCount === 1 ? "User" : "Users"}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={userCount}
                      onChange={(e) => setUserCount(parseInt(e.target.value))}
                      data-lenis-prevent
                      className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-[10px] text-muted-foreground">
                      <span>1 User</span>
                      <span>50 Users</span>
                      <span>100+ Users</span>
                    </div>
                  </div>
                )}

                {/* Price Display / CTA */}
                <div className="pt-4 border-t border-border space-y-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-muted-foreground">Estimated Total:</span>
                    <div className="text-right">
                      {isCustomPrice ? (
                        <span className="text-2xl font-black">Let's Talk</span>
                      ) : (
                        <>
                          <span className="text-xs font-medium text-muted-foreground mr-1">INR</span>
                          <span className="text-3xl font-black text-foreground">{totalPrice.toLocaleString()}</span>
                          <span className="text-[10px] text-muted-foreground block">/ month</span>
                        </>
                      )}
                    </div>
                  </div>

                  {isCustomPrice ? (
                    <a
                      href="mailto:sales@technostore360.com?subject=Google%20Workspace%20Enterprise%20Inquiry"
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "w-full rounded-2xl py-6 h-auto font-bold text-sm flex items-center justify-center"
                      )}
                    >
                      Contact Sales
                    </a>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="rounded-2xl py-6 font-bold text-sm">
                        Add to Cart
                      </Button>
                      <Button className="rounded-2xl py-6 font-bold text-sm">
                        Buy Now
                      </Button>
                    </div>
                  )}
                </div>

                {/* Checkout security badge */}
                <div className="bg-card/40 rounded-2xl border border-border p-4 flex gap-3">
                  <Shield className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs">100% Authorized Google Cloud Partner</div>
                    <div className="text-[10px] text-muted-foreground">
                      Secure invoicing, domain registration assistance, and deployment included.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Value Badges footer */}
          <div className="mt-20 border-t border-border pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-3 bg-card/20 p-4 rounded-2xl border border-border">
              <CheckCircle2 className="size-8 text-primary shrink-0" />
              <div>
                <p className="font-bold text-sm">Official Google Partner</p>
                <p className="text-xs text-muted-foreground">Full service deployment</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card/20 p-4 rounded-2xl border border-border">
              <Headphones className="size-8 text-primary shrink-0" />
              <div>
                <p className="font-bold text-sm">24/7 Priority Support</p>
                <p className="text-xs text-muted-foreground">No queues or bots</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card/20 p-4 rounded-2xl border border-border">
              <Lock className="size-8 text-primary shrink-0" />
              <div>
                <p className="font-bold text-sm">Secure Payment & Billing</p>
                <p className="text-xs text-muted-foreground">Direct local invoicing</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card/20 p-4 rounded-2xl border border-border">
              <Shield className="size-8 text-primary shrink-0" />
              <div>
                <p className="font-bold text-sm">Authorized Reseller</p>
                <p className="text-xs text-muted-foreground">100% authentic licenses</p>
              </div>
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </SmoothScrollProvider>
  )
}
