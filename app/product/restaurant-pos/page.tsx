"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ShoppingCart,
  Truck,
  Shield,
  Headphones,
  FileText,
  Heart,
  Share2,
  ChevronRight,
  CreditCard,
  RotateCcw,
  Star,
  CheckCircle2,
  ArrowLeft,
  Cloud,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { Button } from "@/components/ui/button"

const IMAGES = [
  "/images/product-main.png",
  "/images/product-1.png",
  "/images/product-2.png",
  "/images/product-3.png",
  "/images/product-4.png",
]

const VARIANTS = [
  {
    name: "The Sunmi T2S",
    price: 1858.97,
    originalPrice: 2655.00,
    desc: "Flagship Android desktop terminal with dual screens, built-in thermal printer, and premium performance for busy restaurant environments.",
  },
  {
    name: "Sunmi V2 Pro Handheld",
    price: 1299.00,
    originalPrice: 1855.00,
    desc: "Ultra-slim wireless handheld POS system with integrated printer. Perfect for tableside ordering, quick checkouts, and queue busting.",
  },
  {
    name: "Sunmi D2 Mini Compact",
    price: 1599.00,
    originalPrice: 2285.00,
    desc: "Compact all-in-one desktop POS. High usability, sleek layout, and integrated printer for small counters or space-constrained locations.",
  },
  {
    name: "Sunmi T2 Lite Single Screen",
    price: 1699.00,
    originalPrice: 2425.00,
    desc: "Sleek and robust single widescreen terminal with optimal performance for high-traffic environments.",
  },
]

export default function RestaurantPOSPage() {
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMsg, setNotificationMsg] = useState("")

  const variant = VARIANTS[selectedVariant]
  const discountPercent = Math.round(((variant.originalPrice - variant.price) / variant.originalPrice) * 100)

  const handleAddToCart = () => {
    triggerNotification(`Added ${variant.name} to cart!`)
  }

  const handleCheckout = () => {
    triggerNotification(`Proceeding to checkout with ${variant.name}...`)
  }

  const triggerNotification = (msg: string) => {
    setNotificationMsg(msg)
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false)
    }, 3000)
  }

  const shareProduct = () => {
    if (navigator.share) {
      navigator.share({
        title: "Febno Technologies Restaurant POS",
        text: "Check out this amazing restaurant POS system!",
        url: window.location.href,
      }).catch(console.error)
    } else {
      triggerNotification("Product link copied to clipboard!")
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <SiteHeader />

        {/* Floating Toast Notification */}
        {showNotification && (
          <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3 rounded-2xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-2xl animate-in slide-in-from-bottom duration-300">
            <CheckCircle2 className="size-5" />
            <span>{notificationMsg}</span>
          </div>
        )}

        <main className="max-w-7xl mx-auto px-6 py-8">
          {/* Breadcrumb Navigation aligned with mockup */}
          <div className="mb-6 flex items-center justify-between text-sm">
            <nav className="flex items-center gap-2 text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-foreground">
                Homepage
              </Link>
              <ChevronRight className="size-4 text-muted-foreground" />
              <Link href="/#software" className="transition-colors hover:text-foreground">
                Odoo
              </Link>
              <ChevronRight className="size-4 text-muted-foreground" />
              <Link href="#" className="transition-colors hover:text-foreground">
                Odoo ERP
              </Link>
              <ChevronRight className="size-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Dynamics 365 Business Central Essentials - PIM - Monthly</span>
            </nav>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground font-medium"
            >
              <ArrowLeft className="size-4" /> Back to home
            </Link>
          </div>

          {/* Main Grid Layout to match content placing */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Gallery Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Main Image Container */}
              <div className="relative bg-card rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center border border-border shadow-sm group">
                <Image
                  src={IMAGES[selectedImage]}
                  alt="Restaurant POS System"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  priority
                />
              </div>

              {/* Thumbnail Gallery Row */}
              <div className="flex gap-2.5 overflow-x-auto py-1 scrollbar-none">
                {IMAGES.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 bg-card ${
                      selectedImage === index
                        ? "border-primary shadow-sm"
                        : "border-border hover:border-primary/60"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      width={80}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Share and Wishlist Stack Column (1 col - styled narrow) */}
            <div className="lg:col-span-1 flex lg:flex-col items-center justify-start gap-3 lg:pt-2">
              <button 
                onClick={shareProduct}
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-all shadow-sm"
                title="Share product"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button 
                onClick={() => {
                  setIsWishlisted(!isWishlisted)
                  triggerNotification(isWishlisted ? "Removed from wishlist" : "Added to wishlist!")
                }}
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-card hover:bg-muted transition-all shadow-sm"
                title="Add to wishlist"
              >
                <Heart className={`w-5 h-5 transition-colors ${isWishlisted ? "fill-primary text-primary" : "text-muted-foreground hover:text-foreground"}`} />
              </button>
            </div>

            {/* Details Column (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              {/* Brand and vendor */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Febno Technologies</p>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight tracking-tight">
                  Dynamics 365 Business Central Essentials - PIM - Monthly
                </h1>
              </div>

              {/* Price & Rating Row (on the same line) */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-2 border-b border-border/60">
                {/* Price indicators */}
                <div className="flex items-baseline gap-3">
                  <span className="text-sm text-muted-foreground line-through">
                    INR {variant.originalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                  <span className="text-2xl font-bold text-foreground">
                    INR {variant.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                  <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 px-2 py-0.5 rounded text-xs font-semibold">
                    {discountPercent}% OFF
                  </span>
                </div>

                {/* Rating details */}
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-muted-foreground border-r border-border/80 pr-3">1,238 Sold</span>
                  <div className="flex items-center gap-1">
                    <Star className="size-4 fill-amber-500 text-amber-500" />
                    <span className="font-semibold text-foreground">4.5</span>
                    <span className="text-primary hover:underline cursor-pointer ml-0.5">(128 reviews)</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Powerful Product Information Management solution for Microsoft Dynamics 365 Business Central. Streamline your product data, improve accuracy, and enhance operational efficiency.
                </p>
                <button 
                  onClick={() => triggerNotification("Details: " + variant.desc)}
                  className="text-primary text-xs font-medium hover:underline block"
                >
                  See more...
                </button>
              </div>

              {/* Type Selector (Dynamic 2x2 grid) */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground text-sm">Type:</span>
                  <span className="text-foreground text-sm font-medium">{variant.name}</span>
                </div>

                {/* Variant selection cards grid */}
                <div className="grid grid-cols-2 gap-3">
                  {VARIANTS.map((v, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedVariant(index)}
                      className={`p-3 rounded-lg border-2 text-center transition-all ${
                        selectedVariant === index
                          ? "border-primary bg-primary/5 shadow-sm"
                          : "border-border hover:border-primary/50 text-foreground bg-card/30"
                      }`}
                    >
                      <span className={`text-sm font-semibold ${selectedVariant === index ? "text-primary" : "text-foreground"}`}>
                        {v.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Benefits (Row with icons on the left, text on the right) */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
                <div className="flex items-center gap-3">
                  <div className="text-primary shrink-0">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground leading-tight">Digital Delivery</p>
                    <p className="text-[10px] text-muted-foreground">Instant Access</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-primary shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground leading-tight">License Validity</p>
                    <p className="text-[10px] text-muted-foreground">Monthly</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-primary shrink-0">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground leading-tight">Support</p>
                    <p className="text-[10px] text-muted-foreground">Included</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <Button
                  onClick={handleAddToCart}
                  className="bg-primary text-white hover:bg-primary/95 gap-2 h-12 text-sm font-bold rounded-lg shadow-sm transition-transform active:scale-98"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  onClick={handleCheckout}
                  className="border-2 border-primary text-primary hover:bg-primary/5 h-12 text-sm font-bold rounded-lg transition-transform active:scale-98"
                >
                  Checkout Now
                </Button>
              </div>

              {/* Delivery Agreement Link */}
              <button 
                onClick={() => triggerNotification("Delivery T&C: Free configuration, setup, and 12-month hardware warranty included.")}
                className="flex items-center gap-2 text-primary text-xs font-semibold hover:underline"
              >
                <FileText className="w-4 h-4" />
                Delivery T&C
              </button>
            </div>
          </div>

          {/* Trust Badges Footer Grid */}
          <div className="bg-card border border-border rounded-xl p-6 mt-16 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Trusted by 10,000+ Businesses",
                  subtitle: "Join thousands of satisfied customers",
                },
                {
                  icon: Headphones,
                  title: "24/7 Customer Support",
                  subtitle: "We're here to help anytime",
                },
                {
                  icon: CreditCard,
                  title: "Secure Payments",
                  subtitle: "Multiple secure payment options",
                },
                {
                  icon: RotateCcw,
                  title: "Money Back Guarantee",
                  subtitle: "30-day money back guarantee",
                },
              ].map((badge, index) => {
                const Icon = badge.icon
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-primary shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-xs">{badge.title}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{badge.subtitle}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </SmoothScrollProvider>
  )
}
