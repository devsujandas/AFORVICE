"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Check, Rocket, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

type ModalStep = "welcome" | "email" | "success"

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [currentStep, setCurrentStep] = useState<ModalStep>("welcome")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleJoinWaitlist = () => {
    setCurrentStep("email")
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setCurrentStep("success")

    // Auto close after success
    setTimeout(() => {
      handleClose()
    }, 3000)
  }

  const handleClose = () => {
    setCurrentStep("welcome")
    setEmail("")
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
            className="bg-white rounded-3xl shadow-2xl w-full max-w-md mx-auto relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            <AnimatePresence mode="wait">
              {/* Welcome Step */}
              {currentStep === "welcome" && (
                <motion.div
                  key="welcome"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="p-8 text-center"
                >
                  {/* Rocket Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                      damping: 15,
                      stiffness: 300,
                    }}
                    className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 rounded-2xl flex items-center justify-center"
                  >
                    <Rocket className="w-10 h-10 text-white" />
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
                  >
                    Ready to Get Started?
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 mb-8 leading-relaxed"
                  >
                    Join the waitlist to be the first to experience AFORVICE when we launch. Get exclusive early access
                    and special offers!
                  </motion.p>

                  {/* Benefits List */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-3 mb-8"
                  >
                    {["Early access to all features", "Special launch discounts", "Priority customer support"].map(
                      (benefit, index) => (
                        <motion.div
                          key={benefit}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </motion.div>
                      ),
                    )}
                  </motion.div>

                  {/* Join Waitlist Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <Button
                      onClick={handleJoinWaitlist}
                      className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 hover:from-blue-600 hover:via-purple-600 hover:to-red-600 text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      Join the Waitlist
                    </Button>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="text-sm text-gray-500 mt-4"
                  >
                    We'll notify you as soon as AFORVICE is available
                  </motion.p>
                </motion.div>
              )}

              {/* Email Step */}
              {currentStep === "email" && (
                <motion.div
                  key="email"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="p-8 text-center"
                >
                  {/* Email Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.1,
                      type: "spring",
                      damping: 15,
                      stiffness: 300,
                    }}
                    className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 rounded-full flex items-center justify-center"
                  >
                    <Mail className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
                  >
                    Join Our Waitlist
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-600 mb-8"
                  >
                    Be the first to know when AFORVICE launches!
                  </motion.p>

                  <form onSubmit={handleSubscribe} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button
                        type="submit"
                        disabled={isLoading || !email}
                        className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 hover:from-blue-600 hover:via-purple-600 hover:to-red-600 text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isLoading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          />
                        ) : (
                          <Mail className="w-5 h-5 mr-2" />
                        )}
                        {isLoading ? "Subscribing..." : "Subscribe to Waitlist"}
                      </Button>
                    </motion.div>
                  </form>
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
                  className="p-8 text-center"
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
                    className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center relative"
                  >
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Check className="w-10 h-10 text-white" />
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
                    className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
                  >
                    Welcome to the Waitlist! 🎉
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-600 mb-6"
                  >
                    Thank you for joining! We'll notify you as soon as AFORVICE is ready to launch.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-green-50 border border-green-200 rounded-2xl p-4"
                  >
                    <p className="text-green-800 font-medium">🚀 You're all set! Check your email for confirmation.</p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
