"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, HelpCircle } from "lucide-react"
import ContactModal from "./ContactModal"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const faqs = [
    {
      question: "How does AFORVICE work?",
      answer:
        "AFORVICE connects you with verified professionals in your area. Simply browse services, select a provider, book your appointment, and enjoy professional service at your doorstep.",
    },
    {
      question: "Are the professionals trustworthy and experienced?",
      answer:
        "Yes, all our professionals go through a rigorous verification process including background checks, skill assessments, and customer reviews to ensure quality and reliability.",
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer:
        "We offer a 100% satisfaction guarantee. If you're not happy with the service, we'll work to make it right or provide a full refund according to our terms.",
    },
    {
      question: "Can I book services for later or schedule recurring visits?",
      answer:
        "You can schedule services for future dates and set up recurring appointments for regular maintenance needs.",
    },
    {
      question: "How does AFORVICE ensure quality and trustworthiness?",
      answer:
        "We maintain quality through professional verification, customer reviews, quality monitoring, and our satisfaction guarantee program.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="flex items-center justify-center mb-8"
            >
              <div className="bg-gradient-to-r from-blue-100 via-sky-50 to-blue-100 rounded-full px-6 flex items-center gap-3 shadow-sm border border-white/50 py-1.5">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <span className="text-gray-800 font-semibold text-lg">FAQ</span>
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-gray-600 text-lg">Everything you need to know about AFORVICE and our services.</p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 md:px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100/50 transition-colors duration-200"
                >
                  <span className={`font-semibold pr-4 text-base md:text-lg transition-colors duration-200 ${openIndex === index ? 'text-blue-600' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-blue-50 transition-colors duration-200"
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-blue-600" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-500 hover:text-blue-500" />
                    )}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 text-gray-600 leading-relaxed text-base">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
            >
              Still have questions? Contact Us →
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  )
}
