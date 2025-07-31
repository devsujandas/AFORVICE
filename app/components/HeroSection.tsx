"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, Award, Clock, Headphones } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("January 1, 2026 12:00:00").getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        return { days, hours, minutes, seconds }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    // Set initial time immediately
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-blue-600">Coming</span> <span className="text-red-500">Soon</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Your trusted platform connecting you with verified professionals for all your home and business service
            needs.
          </motion.p>

          {/* Professional Countdown Timer - Horizontal for All Devices */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto px-2">
              {Object.entries(timeLeft).map(([unit, value], index) => (
                <motion.div
                  key={unit}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 text-center min-w-0"
                >
                  <div className="rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-3 sm:p-4 md:p-6 hover:shadow-xl transition-all duration-300 bg-slate-100">
                    <motion.div
                      key={value}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-xl sm:text-2xl md:text-3xl xl:text-5xl font-bold mb-1 sm:mb-2 md:mb-3 leading-none lg:text-5xl text-[rgba(37,99,235,1)]"
                    >
                      {value.toString().padStart(2, "0")}
                    </motion.div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium capitalize tracking-wide">
                      {unit}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-6 md:mt-8"
            >
              <div className="inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-3 shadow-md bg-red-700 sm:px-3.5 py-[5px] border">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-white sm:text-base">{"Stay Tuned"}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 w-full sm:w-auto">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 w-full sm:w-auto">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Get it on Google Play
            </Button>
          </motion.div>

          <motion.p variants={itemVariants} className="text-gray-600 mb-8">
            Trusted by thousands of customers
          </motion.p>
          {/* Feature Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {[
              {
                icon: Shield,
                title: "Expert Professionals",
                subtitle: "Verified & Trusted",
                bgColor: "bg-blue-50",
                iconColor: "text-blue-600",
                demoImage: "/placeholder.svg?height=120&width=160", // TODO: Replace with your image
              },
              {
                icon: Award,
                title: "Quality Service",
                subtitle: "100% Satisfaction",
                bgColor: "bg-green-50",
                iconColor: "text-green-600",
                demoImage: "/placeholder.svg?height=120&width=160", // TODO: Replace with your image
              },
              {
                icon: Clock,
                title: "Fast Response",
                subtitle: "Quick & Reliable",
                bgColor: "bg-orange-50",
                iconColor: "text-orange-600",
                demoImage: "/placeholder.svg?height=120&width=160", // TODO: Replace with your image
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                subtitle: "Always Available",
                bgColor: "bg-purple-50",
                iconColor: "text-purple-600",
                demoImage: "/placeholder.svg?height=120&width=160", // TODO: Replace with your image
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div
                  className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>

                {/* Demo Image - Easy to replace later */}
                <div className="mb-4">
                  <Image
                    src={feature.demoImage || "/placeholder.svg"}
                    alt={`${feature.title} demo`}
                    width={160}
                    height={120}
                    className="mx-auto rounded-lg object-cover"
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center justify-center gap-2">
                  <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
