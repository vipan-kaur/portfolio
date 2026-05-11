'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, href: '#', color: 'hover:text-gray-400' },
  { name: 'LinkedIn', icon: FaLinkedin, href: '#', color: 'hover:text-emerald-400' },
  { name: 'Twitter', icon: FaTwitter, href: '#', color: 'hover:text-teal-400' },
  { name: 'Email', icon: FaEnvelope, href: 'mailto:vipan@example.com', color: 'hover:text-emerald-400' },
]

const footerLinks = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-gray-700">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/50">
                <span className="font-bold text-white">VK</span>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Vipan Kaur
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              B.Tech CSE student learning Full Stack MERN development. Building real-world projects and growing my skills.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                  >
                    → {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Based in Mohali, Punjab, India</p>
              <p>Currently training at Mender Software</p>
              <p>Available for freelance & full-time roles</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-6"
          variants={itemVariants}
        >
          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © {currentYear} Vipan Kaur. All rights reserved. | Crafted with ❤️ using Next.js & Tailwind CSS
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 text-xl transition-colors duration-300 ${social.color}`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.name}
                >
                  <Icon />
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Scroll to Top */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ↑ Back to top
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  )
}
