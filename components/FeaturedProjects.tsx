'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowSmallRight, HiEye } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  features: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with MERN stack featuring advanced UI and complete backend APIs.',
    image: 'https://via.placeholder.com/500x300?text=E-commerce',
    tags: ['React', 'Node.js', 'MongoDB', 'Redux', 'Tailwind'],
    features: [
      'User Authentication',
      'Product Management',
      'Shopping Cart System',
      'Payment Integration',
      'Admin Dashboard',
    ],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'E-commerce Platform v2',
    description: 'Enhanced version with improved UI/UX and additional features for better user experience.',
    image: 'https://via.placeholder.com/500x300?text=E-commerce+v2',
    tags: ['React', 'Express', 'MongoDB', 'Bootstrap'],
    features: [
      'Advanced Filtering',
      'User Reviews',
      'Order Tracking',
      'Wishlist Feature',
      'Search Optimization',
    ],
    github: '#',
    demo: '#',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      className="group relative glass rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300"
      variants={cardVariants}
      whileHover={{ y: -10 }}
    >
      {/* Image Container */}
      <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

        {/* Action Buttons */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {project.demo && (
            <motion.a
              href={project.demo}
              className="glass px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiEye className="w-5 h-5" />
              View
            </motion.a>
          )}
          {project.github && (
            <motion.a
              href={project.github}
              className="glass px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-5 h-5" />
              Code
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-500 group-hover:bg-clip-text transition-all duration-300">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          {project.description}
        </p>

        {/* Features List */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-emerald-400">Key Features:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-700">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-white/5 border border-emerald-400/30 text-emerald-300 hover:bg-emerald-400/20"
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturedProjects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my best work and technical expertise in full-stack development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/projects" className="btn-primary inline-flex items-center gap-2 group">
              Explore All Projects
              <HiArrowSmallRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
