"use client"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import FeaturesSection from "./components/FeaturesSection"
import ServicesSection from "./components/ServicesSection"
import ProcessSection from "./components/ProcessSection"
import WhyChooseUsSection from "./components/WhyChooseUsSection"
import GetInTouchSection from "./components/GetInTouchSection"
import FAQSection from "./components/FAQSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <ProcessSection />
        <WhyChooseUsSection />
        <GetInTouchSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
