'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  }

  const loaderVariants = {
    animate: {
      rotate: 360,
      transition: { duration: 2, repeat: Infinity, ease: 'linear' },
    },
  }

  const dotVariants = {
    initial: { scale: 1, opacity: 1 },
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.3, 1, 0.3],
      transition: { duration: 1.5, repeat: Infinity },
    },
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-dark-950 via-emerald-950 to-dark-950"
      variants={containerVariants}
      initial="initial"
      exit="exit"
    >
      <div className="relative w-32 h-32">
        {/* Rotating Circle */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-emerald-500 border-r-teal-500"
          variants={loaderVariants}
          animate="animate"
        />

        {/* Center Glowing Circle */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={dotVariants}
          animate="animate"
        >
          <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-sm" />
        </motion.div>

        {/* Pulsing Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-emerald-400/20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0, 1],
            transition: { duration: 2, repeat: Infinity },
          }}
        />
      </div>

      {/* Loading Text */}
      <motion.div
        className="absolute bottom-20 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="text-lg font-semibold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
          Welcome to my portfolio
        </h2>
        <p className="text-sm text-gray-400 mt-2">Loading amazing content...</p>
      </motion.div>
    </motion.div>
  )
}
