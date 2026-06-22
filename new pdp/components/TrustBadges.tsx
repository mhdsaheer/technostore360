import { Shield, Headphones, CreditCard, RotateCcw } from 'lucide-react'

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: 'Trusted by 10,000+ Businesses',
      subtitle: 'Join thousands of satisfied customers',
    },
    {
      icon: Headphones,
      title: '24/7 Customer Support',
      subtitle: 'We&apos;re here to help anytime',
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      subtitle: 'Multiple secure payment options',
    },
    {
      icon: RotateCcw,
      title: 'Money Back Guarantee',
      subtitle: '30-day money back guarantee',
    },
  ]

  return (
    <div className="bg-white border-t border-border py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div key={index} className="flex flex-col items-center text-center gap-3">
                <div className="text-primary">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{badge.title}</p>
                  <p className="text-xs text-muted-foreground">{badge.subtitle}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
