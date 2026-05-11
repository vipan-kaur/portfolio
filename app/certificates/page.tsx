'use client'

import { motion } from 'framer-motion'
import { FaMedal } from 'react-icons/fa'

export default function Certificates() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="pt-20 pb-20">
      {/* Hero */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto text-center space-y-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold"
            variants={itemVariants}
          >
            My <span className="gradient-text">Certificates</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Professional certifications and training credentials validating my expertise in web development and technology.
          </motion.p>
        </motion.div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass rounded-2xl p-12 sm:p-16 text-center space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon */}
            <motion.div
              className="flex justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-4xl text-white">
                <FaMedal />
              </div>
            </motion.div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold">
              Certificates Coming Soon!
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed">
              I&apos;m actively working on obtaining professional certifications to validate my expertise in:
            </p>

            {/* Certificate List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
              {[
                'React.js Advanced',
                'Next.js Mastery',
                'Node.js Backend',
                'Web Development',
                'Full Stack MERN',
                'TypeScript Professional',
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  className="p-4 rounded-lg bg-white/5 border border-emerald-400/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                >
                  <p className="text-emerald-300 font-semibold flex items-center justify-center gap-2">
                    <span className="text-lg">📜</span>
                    {cert}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Info */}
            <div className="pt-8 border-t border-gray-700">
              <p className="text-gray-400 mb-4">
                Check back soon for my official certifications and credentials!
              </p>
              <p className="text-sm text-gray-500">
                In the meantime, explore my <a href="/projects" className="text-emerald-400 hover:text-emerald-300 transition-colors">projects</a> to see my practical skills and experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Validation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Proven Expertise Through <span className="gradient-text">Projects</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Full Stack Development',
                description: 'Multiple MERN stack projects demonstrating end-to-end development capabilities',
              },
              {
                title: 'Frontend Excellence',
                description: 'React, Next.js, and Tailwind CSS mastery with modern UI/UX principles',
              },
              {
                title: 'Backend Proficiency',
                description: 'Node.js and Express.js expertise in building secure and scalable APIs',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass p-6 rounded-2xl hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
