"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Phone, Mail, Send, Check, User, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

type ModalStep = "contact" | "form" | "success"

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [currentStep, setCurrentStep] = useState<ModalStep>("contact")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleCallUs = () => {
    window.open("tel:+918509851562", "_self")
  }

  const handleMailUs = () => {
    window.open("mailto:aforvice@gmail.com", "_self")
  }

  const handleContactForm = () => {
    setCurrentStep("form")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setCurrentStep("success")

    // Auto close after success
    setTimeout(() => {
      handleClose()
    }, 3000)
  }

  const handleClose = () => {
    setCurrentStep("contact")
    setFormData({ name: "", email: "", message: "" })
    setIsLoading(false)
    onClose()
  }

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

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: -20,
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
          onClick={handleClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] mx-auto relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              <AnimatePresence mode="wait">
                {/* Contact Options Step */}
                {currentStep === "contact" && (
                  <motion.div
                    key="contact"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="p-6 md:p-8 text-center"
                  >
                    {/* Contact Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        damping: 15,
                        stiffness: 300,
                      }}
                      className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 rounded-2xl flex items-center justify-center"
                    >
                      <MessageSquare className="w-8 md:w-10 h-8 md:h-10 text-white" />
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 md:mb-4"
                    >
                      Contact Us
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base"
                    >
                      Get in touch with us! Choose your preferred way to connect and we'll be happy to help.
                    </motion.p>

                    {/* Contact Options */}
                    <div className="space-y-4 mb-6">
                      {/* Call Us Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Button
                          onClick={handleCallUs}
                          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 md:py-4 rounded-2xl font-semibold text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 transform hover:scale-105 flex items-center justify-center gap-3"
                        >
                          <Phone className="w-5 h-5" />
                          Call Us
                        </Button>
                      </motion.div>

                      {/* Mail Us Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <Button
                          onClick={handleMailUs}
                          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 md:py-4 rounded-2xl font-semibold text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 flex items-center justify-center gap-3"
                        >
                          <Mail className="w-5 h-5" />
                          Mail Us
                        </Button>
                      </motion.div>
                    </div>

                    {/* Divider */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 }}
                      className="flex items-center gap-4 mb-6"
                    >
                      <div className="flex-1 h-px bg-gray-200"></div>
                      <span className="text-gray-400 text-sm font-medium">OR</span>
                      <div className="flex-1 h-px bg-gray-200"></div>
                    </motion.div>

                    {/* Contact Form Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Button
                        onClick={handleContactForm}
                        variant="outline"
                        className="w-full border-2 border-gray-200 hover:border-purple-500 text-gray-700 hover:text-purple-600 py-3 md:py-4 rounded-2xl font-semibold text-base md:text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-3 bg-transparent"
                      >
                        <Send className="w-5 h-5" />
                        Send Message
                      </Button>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      className="text-xs md:text-sm text-gray-500 mt-4"
                    >
                      We're here to help! Reach out anytime.
                    </motion.p>
                  </motion.div>
                )}

                {/* Contact Form Step */}
                {currentStep === "form" && (
                  <motion.div
                    key="form"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="p-6 md:p-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.1,
                        type: "spring",
                        damping: 15,
                        stiffness: 300,
                      }}
                      className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center"
                    >
                      <Send className="w-8 md:w-10 h-8 md:h-10 text-white" />
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 md:mb-4"
                    >
                      Send Message
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base"
                    >
                      Fill out the form below and we'll get back to you as soon as possible.
                    </motion.p>

                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                      {/* Name Input */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative"
                      >
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="w-full pl-12 pr-4 py-3 md:py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                          required
                        />
                      </motion.div>

                      {/* Email Input */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="relative"
                      >
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your email address"
                          className="w-full pl-12 pr-4 py-3 md:py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                          required
                        />
                      </motion.div>

                      {/* Message Input */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="relative"
                      >
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Your message..."
                          rows={4}
                          className="w-full pl-12 pr-4 py-3 md:py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
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
                          disabled={!formData.name || !formData.email || !formData.message || isLoading}
                          className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white py-3 md:py-4 rounded-2xl font-semibold text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
                          {isLoading ? "Sending..." : "Send Message"}
                        </Button>
                      </motion.div>
                    </form>

                    {/* Back Button */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="mt-4"
                    >
                      <button
                        onClick={() => setCurrentStep("contact")}
                        className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors duration-200"
                      >
                        ← Back to contact options
                      </button>
                    </motion.div>
                  </motion.div>
                )}

                {/* Success Step */}
                {currentStep === "success" && (
                  <motion.div
                    key="success"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="p-6 md:p-8 text-center"
                  >
                    {/* Success Animation */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.1,
                        type: "spring",
                        damping: 15,
                        stiffness: 300,
                      }}
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
                          transition={{
                            delay: 0.5 + i * 0.1,
                            duration: 1,
                          }}
                          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                          style={{
                            left: "50%",
                            top: "50%",
                          }}
                        />
                      ))}
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 md:mb-4"
                    >
                      Message Sent! 🎉
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base"
                    >
                      Thank you for reaching out! We've received your message and will get back to you soon.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="bg-green-50 border border-green-200 rounded-2xl p-3 md:p-4"
                    >
                      <p className="text-green-800 font-medium text-sm md:text-base">
                        📧 We'll respond within 24 hours!
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
  )
}
