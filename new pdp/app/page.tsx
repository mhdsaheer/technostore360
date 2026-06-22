'use client'

import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import ProductGallery from '@/components/ProductGallery'
import ProductDetails from '@/components/ProductDetails'
import TrustBadges from '@/components/TrustBadges'

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Main Product Section */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Gallery */}
          <ProductGallery />

          {/* Product Details */}
          <ProductDetails />
        </div>
      </main>

      {/* Trust Badges Footer */}
      <TrustBadges />
    </div>
  )
}
