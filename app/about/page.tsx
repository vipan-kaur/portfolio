'use client'

import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'
import {  FaCode, FaBriefcase } from 'react-icons/fa'
import React from 'react'

interface TimelineItem {
  id: number
  title: string
  subtitle: string
  description: string
  date: string
  icon: React.ComponentType<any>
}

const timeline: TimelineItem[] = [
  {
    id: 1,
    title: 'College Education',
    subtitle: 'B.Tech in Computer Science Engineering',
    description: 'Pursuing degree in CSE from CT University, Ludhiana with strong foundation in data structures, algorithms, and web development.',
    date: '2022 - 2026',
    icon: HiAcademicCap,
  },
  {
    id: 2,
    title: 'MERN Stack Learning',
    subtitle: 'Full Stack Development',
    description: 'Comprehensive training in MongoDB, Express, React, and Node.js. Built multiple full-stack applications with focus on scalability and performance.',
    date: '2023 - Present',
    icon: FaCode,
  },
  {
    id: 3,
    title: 'Professional Training',
    subtitle: 'Mender Software, Mohali',
    description: 'Currently undergoing professional training at Mender Software, working on real-world projects and industry best practices.',
    date: '2024 - Present',
    icon: FaBriefcase,
  },
]

export default function About() {
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
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center space-y-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold"
              variants={itemVariants}
            >
              About <span className="gradient-text">Me</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              I&apos;m a B.Tech CSE student passionate about learning Full Stack MERN development. I&apos;m building real-world projects,
              learning best practices, and continuously improving my skills in web development.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - About Text */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="glass p-8 rounded-2xl space-y-4"
                variants={itemVariants}
              >
                <h2 className="text-2xl font-bold text-white">Who am I?</h2>
                <p className="text-gray-400 leading-relaxed">
                  I&apos;m Vipan Kaur, a passionate Full Stack MERN Developer currently pursuing my B.Tech in Computer Science Engineering 
                  from CT University, Ludhiana. With a deep interest in web development and modern technologies, I&apos;m committed to building 
                  solutions that not only work efficiently but also provide exceptional user experiences.
                </p>
              </motion.div>

              <motion.div
                className="glass p-8 rounded-2xl space-y-4"
                variants={itemVariants}
              >
                <h2 className="text-2xl font-bold text-white">My Journey</h2>
                <p className="text-gray-400 leading-relaxed">
                  My journey in web development started with a passion for creating interactive and responsive web applications. 
                  Over the years, I&apos;ve honed my skills in both frontend and backend development, learning best practices and industry standards. 
                  Currently, I&apos;m training at Mender Software, Mohali, where I&apos;m gaining practical experience in building real-world applications 
                  and collaborating with professional teams.
                </p>
              </motion.div>

              <motion.div
                className="glass p-8 rounded-2xl space-y-4"
                variants={itemVariants}
              >
                <h2 className="text-2xl font-bold text-white">What I&apos;m Currently Learning</h2>
                <div className="space-y-3">
                  <p className="text-gray-400">I&apos;m actively expanding my skill set with:</p>
                  <ul className="space-y-2">
                    {[
                      'Next.js - Modern React framework for production applications',
                      'TypeScript - Type-safe JavaScript development',
                      'Advanced React Patterns - Hooks, Context API, Performance optimization',
                      'System Design - Building scalable architectures',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span className="text-purple-400 font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Quick Stats */}
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
              
                { number: '100%', label: 'Dedication', color: 'from-blue-500' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="glass p-6 rounded-2xl text-center hover:bg-white/15 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <h3 className={`text-4xl font-bold bg-gradient-to-r ${stat.color} to-pink-500 bg-clip-text text-transparent`}>
                    {stat.number}
                  </h3>
                  <p className="text-gray-400 mt-2 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My <span className="gradient-text">Timeline</span>
          </motion.h2>

          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.id}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className="flex gap-6 md:gap-8">
                    {/* Timeline Marker */}
                    <div className="flex flex-col items-center">
                      <motion.div
                        className="glass w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 hover:scale-110 transition-all duration-300"
                        whileHover={{ scale: 1.15 }}
                      >
                        <Icon className="text-purple-400" />
                      </motion.div>
                      {index < timeline.length - 1 && (
                        <div className="w-1 h-24 bg-gradient-to-b from-purple-500 to-transparent" />
                      )}
                    </div>

                    {/* Timeline Content */}
                    <motion.div
                      className="glass p-6 rounded-2xl flex-1 hover:bg-white/15 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          <p className="text-purple-400 font-semibold">{item.subtitle}</p>
                        </div>
                        <span className="text-sm text-gray-500 font-semibold bg-white/5 px-3 py-1 rounded-full">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
