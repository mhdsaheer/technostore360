import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrendingProducts } from "@/components/trending-products"
import { AiProducts } from "@/components/ai-products"
import { Brands } from "@/components/brands"
import { Portfolio } from "@/components/portfolio"
import { ResellerCta } from "@/components/reseller-cta"
import { SolutionsTabs } from "@/components/solutions-tabs"
import { Faq } from "@/components/faq"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <TrendingProducts />
        <AiProducts />
        <Brands />
        <Portfolio />
        <ResellerCta />
        <SolutionsTabs />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  )
}
