'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowSmallRight } from 'react-icons/hi2'

export default function CTASection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-3xl blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="glass rounded-3xl p-8 sm:p-12 md:p-16 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Title */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            Ready to Create Something <span className="gradient-text">Amazing Together?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            As a CSE student passionate about learning web development, I'm excited to collaborate on projects 
            and solve real-world problems. Let's build something amazing together and grow through practical experience.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 py-8 border-y border-gray-700"
            variants={containerVariants}
          >
            {[
              { number: '5+', label: 'Student Projects' },
              { number: '∞', label: 'Learning Passion' },
              { number: '6mo', label: 'Active Learning' },
            ].map((stat) => (
              <motion.div key={stat.label} variants={itemVariants}>
                <h3 className="text-2xl sm:text-3xl font-bold gradient-text">{stat.number}</h3>
                <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2 group">
                Start A Project
                <HiArrowSmallRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/about" className="btn-secondary">
                Learn More About Me
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
