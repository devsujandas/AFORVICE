"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { X, Star, CheckCircle, Award, BadgeCheck } from "lucide-react"
import Image from "next/image"

interface ServiceDetailModalProps {
  isOpen: boolean
  onClose: () => void
  service: {
    icon: React.ComponentType<{ className?: string }>
    title: string
    description: string
    color: string
  } | null
}

const serviceDetails = {
  Electrician: {
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our certified electricians provide comprehensive electrical services for residential and commercial properties. From simple repairs to complex installations, we ensure safety and quality in every job.",
    features: [
      "Licensed and insured professionals",
      "24/7 emergency electrical services",
      "Residential and commercial wiring",
      "Electrical panel upgrades",
      "LED lighting installation",
      "Smart home electrical setup",
    ],
    rating: 4.8,
  },
  Plumber: {
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Expert plumbing services for all your water and drainage needs. Our skilled plumbers handle everything from minor leaks to major pipe installations with precision and care.",
    features: [
      "Emergency leak repairs",
      "Pipe installation and replacement",
      "Bathroom and kitchen plumbing",
      "Water heater services",
      "Drain cleaning and unclogging",
      "Fixture installation",
    ],
    rating: 4.9,
  },
  "House Cleaner": {
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Professional house cleaning services that leave your home spotless and fresh. Our trained cleaners use eco-friendly products and proven techniques for the best results.",
    features: [
      "Deep cleaning and regular maintenance",
      "Eco-friendly cleaning products",
      "Kitchen and bathroom sanitization",
      "Floor mopping and vacuuming",
      "Dusting and surface cleaning",
      "Post-construction cleanup",
    ],
    rating: 4.7,
  },
  Mechanic: {
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Reliable automotive repair and maintenance services. Our experienced mechanics diagnose and fix vehicle issues quickly and efficiently, getting you back on the road safely.",
    features: [
      "Engine diagnostics and repair",
      "Brake system maintenance",
      "Oil changes and tune-ups",
      "Tire replacement and alignment",
      "Battery and electrical repairs",
      "AC and heating system service",
    ],
    rating: 4.6,
  },
  "AC Repair": {
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Keep your space comfortable with our professional HVAC services. We repair, maintain, and install air conditioning systems for optimal performance and energy efficiency.",
    features: [
      "AC installation and replacement",
      "Regular maintenance and cleaning",
      "Refrigerant leak detection",
      "Thermostat repair and upgrade",
      "Duct cleaning and sealing",
      "Energy efficiency optimization",
    ],
    rating: 4.8,
  },
  Carpenter: {
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Custom woodwork and carpentry services for your home and office. Our skilled carpenters create beautiful, functional pieces tailored to your specific needs and preferences.",
    features: [
      "Custom furniture design and build",
      "Kitchen cabinet installation",
      "Door and window frame repair",
      "Shelving and storage solutions",
      "Deck and outdoor structure building",
      "Trim and molding installation",
    ],
    rating: 4.9,
  },
  Painter: {
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Transform your space with professional painting services. We use high-quality paints and materials to deliver beautiful, long-lasting results for interior and exterior projects.",
    features: [
      "Interior and exterior painting",
      "Color consultation and matching",
      "Surface preparation and priming",
      "Wallpaper removal and installation",
      "Texture and decorative finishes",
      "Commercial and residential projects",
    ],
    rating: 4.7,
  },
  Photographer: {
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Capture your special moments with professional photography services. Our experienced photographers specialize in various styles and events to preserve your memories beautifully.",
    features: [
      "Event and wedding photography",
      "Portrait and family sessions",
      "Product and commercial photography",
      "Real estate photography",
      "Photo editing and retouching",
      "Digital gallery and prints",
    ],
    rating: 4.8,
  },
}

export default function ServiceDetailModal({ isOpen, onClose, service }: ServiceDetailModalProps) {
  if (!service) return null

  const details = serviceDetails[service.title as keyof typeof serviceDetails]
  if (!details) return null

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] mx-auto relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              {/* Header with Image */}
              <div className="relative">
                <div className="aspect-[4/3] md:aspect-[16/9] relative overflow-hidden">
                  <Image src={details.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Service Icon Overlay */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", damping: 15, stiffness: 300 }}
                  className="absolute bottom-4 left-4 md:bottom-6 md:left-6"
                >
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 ${service.color} rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm`}
                  >
                    <service.icon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Title and Rating */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{service.title}</h2>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="font-semibold text-gray-800">{details.rating}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">About This Service</h3>
                  <p className="text-gray-600 leading-relaxed">{details.fullDescription}</p>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-8"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">What's Included</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {details.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-2xl p-6 border border-blue-100"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                    {/* Verified Professionals */}
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
                      >
                        <BadgeCheck className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-blue-800">Verified Professionals</p>
                        <p className="text-sm text-blue-600">Background checked & certified</p>
                      </div>
                    </div>

                    {/* Quality Guaranteed */}
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg"
                      >
                        <Award className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-green-800">Quality Guaranteed</p>
                        <p className="text-sm text-green-600">100% satisfaction promise</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
