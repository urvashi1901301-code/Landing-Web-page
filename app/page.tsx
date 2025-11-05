"use client"
import Header from "@/components/header"
import PromoBar from "@/components/promo-bar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Highlights from "@/components/highlights"
import Testimonials from "@/components/testimonials"
import Events from "@/components/events"
import FAQ from "@/components/faq"
import Newsletter from "@/components/newsletter"
import TrustedPartners from "@/components/trusted-partners"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PromoBar />
      <Hero />
      <About />
      <Highlights />
      <Testimonials />
      <Events />
      <FAQ />
      <Newsletter />
      <TrustedPartners />
      <Footer />
    </main>
  )
}
