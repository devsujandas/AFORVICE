"use client"

import { motion } from "framer-motion"
import { Search, Calendar, CheckCircle, Settings } from "lucide-react"

export default function ProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Browse Services",
      description: "Find and select professional services from our verified providers.",
      color: "bg-blue-500",
    },
    {
      icon: Calendar,
      title: "Book Instantly",
      description: "Schedule your service with just a few clicks at your convenience.",
      color: "bg-red-500",
    },
    {
      icon: CheckCircle,
      title: "Service Delivered",
      description: "Enjoy professional service from verified experts.",
      color: "bg-green-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="process" className="py-16 md:py-24 bg-white">
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
            className="flex items-center justify-center mb-8 leading-4"
          >
            <div className="bg-gradient-to-r from-orange-100 via-red-50 to-pink-100 rounded-full flex items-center gap-3 shadow-sm border border-white/50 leading-4 px-6 py-1.5">
              <Settings className="w-5 h-5 text-orange-600" />
              <span className="text-gray-800 font-semibold text-lg">How It Works</span>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Simple <span className="text-red-500">Process</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting professional service has never been easier. Follow these simple steps to get started.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          {/* Desktop Layout - Horizontal */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-8 lg:gap-12 relative">
              {/* Animated Connection Line */}
              <div className="absolute top-16 left-0 right-0 h-1 bg-gray-200 rounded-full z-0">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 via-red-500 to-green-500 rounded-full relative"
                >
                  {/* Moving dot animation */}
                  <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 3,
                      delay: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                    className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-lg border-2 border-blue-500"
                  />
                </motion.div>
              </div>

              {steps.map((step, index) => (
                <motion.div key={step.title} variants={itemVariants} className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center relative overflow-hidden"
                  >
                    {/* Background Animation */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 0.1 }}
                      transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                      className={`absolute inset-0 ${step.color} rounded-2xl`}
                    />

                    {/* Step Number */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.3 }}
                      className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
                    >
                      {index + 1}
                    </motion.div>

                    {/* Animated Icon */}
                    <motion.div
                      initial={{ rotateY: -90, opacity: 0 }}
                      whileInView={{ rotateY: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.3 + 0.2 }}
                      whileHover={{ rotateY: 360 }}
                      className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 relative`}
                    >
                      <step.icon className="w-8 h-8 text-white relative z-10" />

                      {/* Pulse effect */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                        className={`absolute inset-0 ${step.color} rounded-full`}
                      />
                    </motion.div>

                    {/* Content */}
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.3 + 0.4 }}
                      className="text-xl font-semibold text-gray-800 mb-4"
                    >
                      {step.title}
                    </motion.h3>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.3 + 0.6 }}
                      className="text-gray-600 leading-relaxed"
                    >
                      {step.description}
                    </motion.p>

                    {/* Live Demo Animation */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.3 + 1 }}
                      className="mt-6"
                    >
                      {index === 0 && (
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                          className="w-12 h-12 mx-auto bg-blue-100 rounded-lg flex items-center justify-center"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full"
                          />
                        </motion.div>
                      )}

                      {index === 1 && (
                        <motion.div className="flex justify-center space-x-1">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{ y: [0, -10, 0] }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 + 1 }}
                              className="w-2 h-2 bg-red-500 rounded-full"
                            />
                          ))}
                        </motion.div>
                      )}

                      {index === 2 && (
                        <motion.div
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                          className="w-12 h-12 mx-auto"
                        >
                          <svg viewBox="0 0 24 24" className="w-full h-full text-green-500">
                            <motion.path
                              d="M20 6L9 17l-5-5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 1, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                            />
                          </svg>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Layout - Vertical */}
          <div className="md:hidden space-y-6">
            {/* Vertical Connection Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 rounded-full z-0">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                className="w-full bg-gradient-to-b from-blue-500 via-red-500 to-green-500 rounded-full relative"
              >
                {/* Moving dot animation */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: "100%" }}
                  transition={{
                    duration: 3,
                    delay: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg border-2 border-blue-500"
                />
              </motion.div>
            </div>

            {steps.map((step, index) => (
              <motion.div key={step.title} variants={itemVariants} className="relative z-10 ml-20">
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative overflow-hidden"
                >
                  {/* Step Number Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`absolute -left-12 top-6 w-8 h-8 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-20`}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Background Animation */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                    className={`absolute inset-0 ${step.color} rounded-2xl`}
                  />

                  <div className="flex items-start space-x-4">
                    {/* Animated Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                      className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 relative`}
                    >
                      <step.icon className="w-6 h-6 text-white" />

                      {/* Pulse effect */}
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                        className={`absolute inset-0 ${step.color} rounded-xl`}
                      />
                    </motion.div>

                    <div className="flex-1">
                      <motion.h3
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                        className="text-lg font-semibold text-gray-800 mb-2"
                      >
                        {step.title}
                      </motion.h3>

                      <motion.p
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                        className="text-gray-600 text-sm leading-relaxed"
                      >
                        {step.description}
                      </motion.p>

                      {/* Live Demo Animation */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.8 }}
                        className="mt-4 flex justify-start"
                      >
                        {index === 0 && (
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                            className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center"
                          >
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"
                            />
                          </motion.div>
                        )}

                        {index === 1 && (
                          <motion.div className="flex space-x-1">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 + 1 }}
                                className="w-1.5 h-1.5 bg-red-500 rounded-full"
                              />
                            ))}
                          </motion.div>
                        )}

                        {index === 2 && (
                          <motion.div className="w-8 h-8">
                            <svg viewBox="0 0 24 24" className="w-full h-full text-green-500">
                              <motion.path
                                d="M20 6L9 17l-5-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                              />
                            </svg>
                          </motion.div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
