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
import { ScrollReveal } from "@/components/scroll-reveal"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"

export default function Page() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <SiteHeader />
        <main className="overflow-x-hidden">
          <Hero />

          <ScrollReveal variant="fade-up" duration={1000} distance={60} once={false}>
            <TrendingProducts />
          </ScrollReveal>

          <ScrollReveal variant="fade-up" duration={1100} distance={70} delay={100} once={false}>
            <AiProducts />
          </ScrollReveal>

          <ScrollReveal variant="fade-up" duration={1000} distance={50} once={false}>
            <Brands />
          </ScrollReveal>

          <ScrollReveal variant="fade-up" duration={1000} distance={60} once={false}>
            <Portfolio />
          </ScrollReveal>

          <ScrollReveal variant="zoom-in" duration={900} once={false}>
            <ResellerCta />
          </ScrollReveal>

          <ScrollReveal variant="fade-up" duration={1000} distance={50} once={false}>
            <SolutionsTabs />
          </ScrollReveal>

          <ScrollReveal variant="fade-up" duration={900} distance={40} once={false}>
            <Faq />
          </ScrollReveal>
        </main>

        <ScrollReveal variant="fade" duration={800} once={false}>
          <SiteFooter />
        </ScrollReveal>
      </div>
    </SmoothScrollProvider>
  )
}
