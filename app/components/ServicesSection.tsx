"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, Wrench, Home, Car, Snowflake, Hammer, Palette, Camera, X, Send, Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceDetailModal from "./ServiceDetailModal"

export default function ServicesSection() {
  const services = [
    {
      icon: Zap,
      title: "Electrician",
      description: "Professional electrical services for your home and office needs.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Wrench,
      title: "Plumber",
      description: "Expert plumbing and water system solutions.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Home,
      title: "House Cleaner",
      description: "Professional cleaning services to keep your space spotless.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Car,
      title: "Mechanic",
      description: "Reliable automotive repair and maintenance services.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Snowflake,
      title: "AC Repair",
      description: "Keep your space comfortable with expert HVAC services.",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      icon: Hammer,
      title: "Carpenter",
      description: "Custom woodwork and carpentry for your home projects.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Palette,
      title: "Painter",
      description: "Transform your space with professional painting services.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Camera,
      title: "Photographer",
      description: "Capture your special moments with professional photography.",
      color: "bg-pink-100 text-pink-600",
    },
  ]

  const serviceOptions = [
    "Electrician",
    "Plumber",
    "House Cleaner",
    "Mechanic",
    "AC Repair",
    "Carpenter",
    "Painter",
    "Photographer",
    "Gardening",
    "Appliance Repair",
    "Other",
  ]

  const [isCustomServiceModalOpen, setIsCustomServiceModalOpen] = useState(false)
  const [isServiceDetailModalOpen, setIsServiceDetailModalOpen] = useState(false)
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState<(typeof services)[0] | null>(null)
  const [modalStep, setModalStep] = useState<"select" | "custom" | "success">("select")
  const [selectedService, setSelectedService] = useState("")
  const [customService, setCustomService] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleLearnMore = (service: (typeof services)[0]) => {
    setSelectedServiceForDetail(service)
    setIsServiceDetailModalOpen(true)
  }

  const handleServiceSelect = (service: string) => {
    setSelectedService(service)
    setIsDropdownOpen(false)
    if (service === "Other") {
      setModalStep("custom")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setModalStep("success")

    // Auto close after success
    setTimeout(() => {
      handleCloseModal()
    }, 3000)
  }

  const handleCloseModal = () => {
    setIsCustomServiceModalOpen(false)
    setModalStep("select")
    setSelectedService("")
    setCustomService("")
    setEmail("")
    setIsLoading(false)
    setIsDropdownOpen(false)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <>
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Styled Section Header */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center mb-8"
            >
              <div className="bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100 rounded-full px-6 flex items-center gap-3 shadow-sm border border-white/50 py-1.5">
                <Zap className="w-5 h-5 text-blue-600" />
                <span className="text-gray-800 font-semibold text-lg">Our Professional Services</span>
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Expert <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">At Your Doorstep</p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From emergency repairs to routine maintenance, our verified professionals deliver exceptional quality with
              a smile. Experience the future of home services today.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className="rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white shadow-md"
              >
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <Button
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium"
                  onClick={() => handleLearnMore(service)}
                >
                  Learn More →
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-gray-600 mb-6">Can't find what you're looking for? We offer many more services!</p>
            <Button
              onClick={() => setIsCustomServiceModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium"
            >
              Request Custom Service
            </Button>
          </motion.div>

          {/* Custom Service Modal */}
          <AnimatePresence>
            {isCustomServiceModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={handleCloseModal}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 50 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] mx-auto relative overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={handleCloseModal}
                    className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                  >
                    <X className="w-4 h-4 text-gray-600" />
                  </button>

                  <div className="overflow-y-auto max-h-[90vh]">
                    <AnimatePresence mode="wait">
                      {/* Service Selection Step */}
                      {modalStep === "select" && (
                        <motion.div
                          key="select"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="p-6 md:p-8 text-center"
                        >
                          {/* Service Icon */}
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.2, type: "spring", damping: 15, stiffness: 300 }}
                            className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center"
                          >
                            <Wrench className="w-8 md:w-10 h-8 md:h-10 text-white" />
                          </motion.div>

                          <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 md:mb-4"
                          >
                            Request Custom Service
                          </motion.h2>

                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base"
                          >
                            Select the service you need from our available options.
                          </motion.p>

                          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            {/* Service Dropdown */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 }}
                              className="relative"
                            >
                              <button
                                type="button"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full px-4 py-3 md:py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 text-left flex items-center justify-between bg-white"
                              >
                                <span className={selectedService ? "text-gray-800" : "text-gray-400"}>
                                  {selectedService || "Select a service"}
                                </span>
                                <ChevronDown
                                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                                />
                              </button>

                              <AnimatePresence>
                                {isDropdownOpen && (
                                  <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg z-10 max-h-48 overflow-y-auto"
                                  >
                                    {serviceOptions.map((option) => (
                                      <button
                                        key={option}
                                        type="button"
                                        onClick={() => handleServiceSelect(option)}
                                        className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 first:rounded-t-2xl last:rounded-b-2xl"
                                      >
                                        {option}
                                      </button>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>

                            {/* Email Input */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                            >
                              <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                className="w-full px-4 py-3 md:py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                                required
                              />
                            </motion.div>

                            {/* Submit Button */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.7 }}
                            >
                              <Button
                                type="submit"
                                disabled={!selectedService || !email || isLoading}
                                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white py-3 md:py-4 rounded-2xl font-semibold text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                              >
                                {isLoading ? (
                                  <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                                  />
                                ) : (
                                  <Send className="w-5 h-5 mr-2" />
                                )}
                                {isLoading ? "Submitting..." : "Submit Request"}
                              </Button>
                            </motion.div>
                          </form>

                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4"
                          >
                            We'll get back to you within 24 hours with available professionals
                          </motion.p>
                        </motion.div>
                      )}

                      {/* Custom Service Step */}
                      {modalStep === "custom" && (
                        <motion.div
                          key="custom"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="p-6 md:p-8 text-center"
                        >
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.1, type: "spring", damping: 15, stiffness: 300 }}
                            className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center"
                          >
                            <Wrench className="w-8 md:w-10 h-8 md:h-10 text-white" />
                          </motion.div>

                          <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 md:mb-4"
                          >
                            Describe Your Service
                          </motion.h2>

                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base"
                          >
                            Tell us about the specific service you need and we'll find the right professional for you.
                          </motion.p>

                          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                            >
                              <textarea
                                value={customService}
                                onChange={(e) => setCustomService(e.target.value)}
                                placeholder="Describe the service you need in detail..."
                                rows={4}
                                className="w-full px-4 py-3 md:py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
                                required
                              />
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 }}
                            >
                              <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                className="w-full px-4 py-3 md:py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                                required
                              />
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                            >
                              <Button
                                type="submit"
                                disabled={!customService || !email || isLoading}
                                className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white py-3 md:py-4 rounded-2xl font-semibold text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                              >
                                {isLoading ? (
                                  <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                                  />
                                ) : (
                                  <Send className="w-5 h-5 mr-2" />
                                )}
                                {isLoading ? "Submitting..." : "Submit Request"}
                              </Button>
                            </motion.div>
                          </form>
                        </motion.div>
                      )}

                      {/* Success Step */}
                      {modalStep === "success" && (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="p-6 md:p-8 text-center"
                        >
                          {/* Success Animation */}
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1, type: "spring", damping: 15, stiffness: 300 }}
                            className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center relative"
                          >
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              <Check className="w-8 md:w-10 h-8 md:h-10 text-white" />
                            </motion.div>

                            {/* Confetti Effect */}
                            {[...Array(8)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                  scale: [0, 1, 0],
                                  opacity: [0, 1, 0],
                                  x: [0, Math.cos((i * 45 * Math.PI) / 180) * 40],
                                  y: [0, Math.sin((i * 45 * Math.PI) / 180) * 40],
                                }}
                                transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                                style={{ left: "50%", top: "50%" }}
                              />
                            ))}
                          </motion.div>

                          <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 md:mb-4"
                          >
                            Request Submitted! 🎉
                          </motion.h2>

                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base"
                          >
                            Thank you for your request! We'll connect you with the right professional soon.
                          </motion.p>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="bg-green-50 border border-green-200 rounded-2xl p-3 md:p-4"
                          >
                            <p className="text-green-800 font-medium text-sm md:text-base">
                              📧 Check your email for confirmation and next steps.
                            </p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        isOpen={isServiceDetailModalOpen}
        onClose={() => setIsServiceDetailModalOpen(false)}
        service={selectedServiceForDetail}
      />
    </>
  )
}
