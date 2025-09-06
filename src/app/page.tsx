import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { ExpenseStats } from "@/components/landing/expense-stats"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Testimonials } from "@/components/landing/testimonials"
import { Security } from "@/components/landing/security"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <ExpenseStats />
        <HowItWorks />
        <Testimonials />
        <Security />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
