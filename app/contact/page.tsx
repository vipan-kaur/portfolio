'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission (you can integrate actual email service here)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitMessage('Message sent successfully! I will get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitMessage(''), 3000)
    } catch (error) {
      setSubmitMessage('Error sending message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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

  const contactInfo = [
    {
      icon: HiEnvelope,
      title: 'Email',
      value: 'vipkaur12@gmail.com',
      href: 'mailto:vipkaur12@gmail.com',
    },
    {
      icon: HiPhone,
      title: 'Phone',
      value: '+91 9779639518',
      href: 'tel:+91',
    },
    {
      icon: HiMapPin,
      title: 'Location',
      value: 'Mohali, Punjab, India',
      href: '#',
    },
  ]

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
            Get In <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you. Reach out and let's create something amazing together!
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  className="glass p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 group"
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <motion.div
                    className="text-4xl text-[#10b981] mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 10 }}
                  >
                    <Icon />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                  <p className="text-gray-400 group-hover:text-purple-300 transition-colors duration-300">
                    {info.value}
                  </p>
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Name Input */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full glass px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:bg-white/15"
                    placeholder="John Doe"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full glass px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:bg-white/15"
                    placeholder="john@example.com"
                  />
                </motion.div>

                {/* Subject Input */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full glass px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:bg-white/15"
                    placeholder="Project Inquiry"
                  />
                </motion.div>

                {/* Message Input */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full glass px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:bg-white/15 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.div>

                {/* Success Message */}
                {submitMessage && (
                  <motion.div
                    className="glass p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm text-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {submitMessage}
                  </motion.div>
                )}
              </motion.form>
            </motion.div>

            {/* Social Links & Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
                <h2 className="text-2xl font-bold text-white mb-6">Follow Me</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Connect with me on social media to stay updated with my latest projects and insights about web development.
                </p>

                <div className="flex gap-4 pt-4">
                  {[
                    { icon: FaGithub, href: '#', label: 'GitHub' },
                    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
                  ].map((social, i) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass w-12 h-12 rounded-full flex items-center justify-center text-lg hover:bg-white/15 transition-all duration-300"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        title={social.label}
                      >
                        <Icon className="text-purple-400" />
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>

              <motion.div
                className="glass p-6 rounded-2xl space-y-4"
                variants={itemVariants}
              >
                <h3 className="text-lg font-bold text-white">Quick Response</h3>
                <p className="text-sm text-gray-400">
                  I aim to respond to all inquiries within 24 hours. Let's get your project started!
                </p>
              </motion.div>

              <motion.div
                className="glass p-6 rounded-2xl space-y-4 border-l-4 border-purple-500"
                variants={itemVariants}
              >
                <h3 className="text-lg font-bold text-white">Availability</h3>
                <p className="text-sm text-gray-400">
                  Available for freelance projects, collaborations, and full-time opportunities.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
