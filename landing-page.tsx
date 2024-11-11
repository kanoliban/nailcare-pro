'use client'

import Header from './Header'
import Hero from './Hero'
import ServicesShowcase from './ServicesShowcase'
import ProblemSolution from './ProblemSolution'
import HowItWorks from './HowItWorks'
import SafetyCredentials from './SafetyCredentials'
import Testimonials from './Testimonials'
import ServiceAreas from './ServiceAreas'
import PricingInsurance from './PricingInsurance'
import FAQ from './FAQ'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesShowcase />
        <ProblemSolution />
        <HowItWorks />
        <SafetyCredentials />
        <Testimonials />
        <ServiceAreas />
        <PricingInsurance />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
