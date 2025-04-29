import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import FeaturesSection from './sections/FeaturesSection'
import HowItWorksSection from './sections/HowItWorksSection'
import PricingSection from './sections/PricingSection'
import TestimonialsSection from './sections/TestimonialsSection'
import FAQSection from './sections/FAQSection'
import CTASection from './sections/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App