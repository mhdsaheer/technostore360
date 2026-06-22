'use client'

import { useState } from 'react'
import { ShoppingCart, Truck, Shield, Headphones, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ProductDetails() {
  const [selectedVariant, setSelectedVariant] = useState(0)

  const variants = [
    { name: 'The Sunmi T2S', selected: true },
    { name: 'The Sunmi T2S' },
    { name: 'The Sunmi T2S' },
    { name: 'The Sunmi T2S' },
  ]

  return (
    <div className="space-y-6">
      {/* Brand */}
      <div>
        <p className="text-sm text-muted-foreground">John Lewis ANYDAY</p>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
          Dynamics 365 Business Central Essentials - PIM - Monthly
        </h1>
      </div>

      {/* Pricing */}
      <div className="space-y-2">
        <div className="flex items-baseline gap-3">
          <span className="text-lg text-muted-foreground line-through">£40.00</span>
          <span className="text-3xl font-bold text-foreground">£28.00</span>
          <span className="bg-accent text-primary px-3 py-1 rounded text-sm font-semibold">30% OFF</span>
        </div>
      </div>

      {/* Rating and Sales */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-foreground">1,238 Sold</span>
        <div className="flex items-center gap-1">
          <span className="text-yellow-400">★</span>
          <span className="font-semibold">4.5</span>
          <span className="text-sm text-muted-foreground">(128 reviews)</span>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <p className="text-foreground text-sm leading-relaxed">
          Powerful Product Information Management solution for Microsoft Dynamics 365 Business Central. Streamline your product data, improve accuracy, and enhance operational efficiency.
        </p>
        <button className="text-primary text-sm font-medium hover:underline">See more...</button>
      </div>

      {/* Type Selector */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground">Type:</span>
          <span className="text-foreground">The Sunmi T2S</span>
        </div>

        {/* Variant Grid */}
        <div className="grid grid-cols-2 gap-3">
          {variants.map((variant, index) => (
            <button
              key={index}
              onClick={() => setSelectedVariant(index)}
              className={`py-3 px-4 rounded-lg border-2 transition-all ${
                selectedVariant === index
                  ? 'border-primary bg-primary bg-opacity-5'
                  : 'border-border hover:border-primary text-foreground'
              }`}
            >
              <span className={`text-sm font-medium ${selectedVariant === index ? 'text-primary' : 'text-foreground'}`}>
                {variant.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-3 gap-4 py-6 border-y border-border">
        <div className="flex flex-col items-center text-center gap-2">
          <Truck className="w-6 h-6 text-primary" />
          <p className="text-xs font-semibold text-foreground">Digital Delivery</p>
          <p className="text-xs text-muted-foreground">Instant Access</p>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          <p className="text-xs font-semibold text-foreground">License Validity</p>
          <p className="text-xs text-muted-foreground">Monthly</p>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <Headphones className="w-6 h-6 text-primary" />
          <p className="text-xs font-semibold text-foreground">Support</p>
          <p className="text-xs text-muted-foreground">Included</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4 pt-4">
        <Button
          className="bg-primary text-white hover:bg-primary/90 gap-2 h-12 text-base font-semibold rounded-lg"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </Button>
        <Button
          variant="outline"
          className="border-2 border-primary text-primary hover:bg-primary/5 h-12 text-base font-semibold rounded-lg"
        >
          Checkout Now
        </Button>
      </div>

      {/* Delivery Info */}
      <button className="flex items-center gap-2 text-primary text-sm font-medium hover:underline">
        <FileText className="w-4 h-4" />
        Delivery T&C
      </button>
    </div>
  )
}
