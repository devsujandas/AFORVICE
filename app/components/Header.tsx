"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import WaitlistModal from "./WaitlistModal"
import { AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Set scrolled state for styling
      setScrolled(currentScrollY > 50)

      // Handle navbar visibility
      if (currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setIsMenuOpen(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }

      // Update active section
      const sections = ["home", "services", "process", "contact"]
      const sectionElements = sections.map((id) => document.getElementById(id))

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = sectionElements[i]
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sections[i])
            break
          }
        }
      }

      setLastScrollY(currentScrollY)
    }

    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledHandleScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledHandleScroll)
  }, [lastScrollY])

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Services", href: "#services", id: "services" },
    { name: "How It Works", href: "#process", id: "process" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)

    // Use requestAnimationFrame for smoother execution
    requestAnimationFrame(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        // Calculate precise offset
        const headerHeight = 100 // Fixed header height
        const elementRect = element.getBoundingClientRect()
        const elementTop = elementRect.top + window.pageYOffset
        const targetPosition = elementTop - headerHeight

        // Smooth scroll with easing
        const startPosition = window.pageYOffset
        const distance = targetPosition - startPosition
        const duration = 800 // Animation duration in ms
        let startTime: number | null = null

        const easeInOutCubic = (t: number): number => {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
        }

        const animateScroll = (currentTime: number) => {
          if (startTime === null) startTime = currentTime
          const timeElapsed = currentTime - startTime
          const progress = Math.min(timeElapsed / duration, 1)
          const easedProgress = easeInOutCubic(progress)

          window.scrollTo(0, startPosition + distance * easedProgress)

          if (progress < 1) {
            requestAnimationFrame(animateScroll)
          }
        }

        requestAnimationFrame(animateScroll)
      }
    })
  }

  const handleGetStarted = () => {
    setIsModalOpen(true)
    setIsMenuOpen(false)
  }

  const handleMenuToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <motion.div
          animate={{
            scale: scrolled ? 0.95 : 1,
            y: scrolled ? -2 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`
    bg-white/85 backdrop-blur-xl border border-white/20 
    rounded-3xl shadow-2xl shadow-black/10
    transition-all duration-300 w-full max-w-4xl mx-auto
    ${scrolled ? "shadow-black/20 bg-white/90" : ""}
  `}
          style={{
            background: scrolled
              ? "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)"
              : "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)",
            boxShadow: scrolled
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)"
              : "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
          }}
        >
          <div className="flex justify-center items-center h-12 md:h-14 px-6 md:px-8 relative">
            {/* Logo - Positioned on the left */}
            <motion.div whileHover={{ scale: 1.05 }} className="absolute left-6 md:left-8 flex-shrink-0">
              <Image src="/logo.png" alt="AFORVICE" width={120} height={40} className="h-8 md:h-10 w-auto" />
            </motion.div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`font-medium transition-all duration-200 px-4 py-2 rounded-xl relative ${
                    activeSection === item.id
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Get Started Button - Positioned on the right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden md:block absolute right-6 md:right-8"
            >
              <Button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
              >
                Get Started
              </Button>
            </motion.div>

            {/* Mobile menu button - Positioned on the right */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleMenuToggle}
              className="md:hidden absolute right-6 z-30 p-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
              type="button"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-40"
              >
                <div className="flex flex-col p-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`w-full text-left font-medium py-4 px-6 hover:bg-blue-50 transition-all duration-200 border-b border-gray-100 last:border-b-0 relative ${
                        activeSection === item.id ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600"
                      }`}
                      type="button"
                    >
                      {item.name}
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="mobileActiveIndicator"
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    className="pt-4"
                  >
                    <Button
                      onClick={handleGetStarted}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-full font-medium w-full transform hover:scale-105 transition-all duration-200"
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.header>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
