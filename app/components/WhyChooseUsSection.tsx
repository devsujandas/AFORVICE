"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Award, Users, Star } from "lucide-react"

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Shield,
      title: "Trusted & Reliable",
      description: "Years of experience delivering quality services you can count on.",
      color: "bg-blue-500",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock support for all your urgent service needs.",
      color: "bg-green-500",
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "We stand behind our work with comprehensive quality guarantees.",
      color: "bg-yellow-500",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals dedicated to exceeding your expectations.",
      color: "bg-purple-500",
    },
  ]

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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Styled Section Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-6 md:mb-8"
          >
            <div className="bg-gradient-to-r from-green-100 via-blue-50 to-purple-100 rounded-full px-6 flex items-center gap-3 shadow-sm border border-white/50 backdrop-blur-sm py-1.5">
              <Star className="w-5 h-5 text-green-600" />
              <span className="text-gray-800 font-semibold text-base md:text-lg">Why Choose AFORVICE</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-800"
          >
            Why Choose <span className="text-blue-600">Us</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Experience the difference with our professional approach and commitment to excellence
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 bg-blue-50"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 ${reason.color} rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <reason.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
