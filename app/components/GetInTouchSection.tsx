"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function GetInTouchSection() {
  const stats = [
    { number: "500+", label: "Verified Professionals", color: "text-blue-600" },
    { number: "10K+", label: "Happy Customers", color: "text-red-500" },
    { number: "99%", label: "Satisfaction Rate", color: "text-green-500" },
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
    <section id="contact" className="py-16 md:py-24 bg-white">
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
            <div className="bg-gradient-to-r from-pink-100 via-purple-50 to-blue-100 rounded-full flex items-center gap-3 shadow-sm py-1.5 border px-6">
              <MessageCircle className="w-5 h-5 text-pink-600" />
              <span className="text-gray-800 font-semibold text-lg">Connect with us</span>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to transform your service experience? We'd love to hear from you.
          </p>
        </motion.div>

        {/* Visual Cards - Easy to add images later */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center gap-4 mb-16 max-w-2xl mx-auto"
        >
          {/* Card 1 - Replace with your first image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black rounded-2xl p-8 flex-1 relative overflow-hidden aspect-[6/8]"
          >
            {/* TODO: Add your first image here */}
            {/* Example: <Image src="/your-image-1.jpg" alt="Description" fill className="object-cover" /> */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-8 left-8">
              <div className="w-16 h-16 bg-red-500 rounded-full opacity-80"></div>
            </div>
          </motion.div>

          {/* Card 2 - Replace with your second image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-500 rounded-2xl p-8 flex-1 relative overflow-hidden aspect-[6/8]"
          >
            {/* TODO: Add your second image here */}
            {/* Example: <Image src="/your-image-2.jpg" alt="Description" fill className="object-cover" /> */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full"></div>
            <div className="absolute bottom-8 right-8">
              <div className="w-12 h-12 bg-white rounded-lg opacity-80 flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Connect with Professionals</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust AFORVICE for their service needs. Our platform ensures
            quality, reliability, and peace of mind.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div key={stat.label} variants={itemVariants} whileHover={{ scale: 1.05 }} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
