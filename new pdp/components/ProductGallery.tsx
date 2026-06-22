'use client'

import { useState } from 'react'
import { Heart, Share2 } from 'lucide-react'
import Image from 'next/image'

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    '/images/product-main.png',
    '/images/product-1.png',
    '/images/product-2.png',
    '/images/product-3.png',
    '/images/product-4.png',
  ]

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative bg-secondary rounded-lg overflow-hidden aspect-square flex items-center justify-center">
        <Image
          src={images[selectedImage]}
          alt="Product"
          width={500}
          height={500}
          className="w-full h-full object-cover"
          priority
        />
        
        {/* Action Buttons */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
          <button className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
            <Share2 className="w-5 h-5 text-foreground" />
          </button>
          <button className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
            <Heart className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors flex-shrink-0 ${
              selectedImage === index
                ? 'border-primary'
                : 'border-border hover:border-primary'
            }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
