'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { HiFilter } from 'react-icons/hi'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  features: string[]
  github?: string
  demo?: string
}

const allProjects: Project[] = [
  {
    id: 1,
    title: 'Task Management App',
    description: 'A full-stack task management application with user authentication and real-time updates.',
    image: 'https://via.placeholder.com/500x400?text=Task+Manager',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
    category: 'Full Stack',
    features: [
      'User Login & Registration',
      'Create & Manage Tasks',
      'Task Categories',
      'Real-time Updates',
      'Responsive Design',
      'MongoDB Integration',
    ],
  },
  {
    id: 2,
    title: 'Weather App',
    description: 'A React weather application using OpenWeather API with city search and forecast display.',
    image: 'https://via.placeholder.com/500x400?text=Weather+App',
    tags: ['React', 'API', 'Tailwind', 'JavaScript'],
    category: 'Frontend',
    features: [
      'Search Cities',
      'Real-time Weather Data',
      '5-Day Forecast',
      'Temperature Conversion',
      'Responsive Layout',
      'Weather Icons',
    ],
  },
  {
    id: 3,
    title: 'Blog Platform',
    description: 'A blogging platform with post creation, editing, and user comments built with MERN stack.',
    image: 'https://via.placeholder.com/500x400?text=Blog+Platform',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    category: 'Full Stack',
    features: [
      'Create Blog Posts',
      'User Comments',
      'Search Posts',
      'User Authentication',
      'Edit Own Posts',
      'Category Filtering',
    ],
  },
]

const categories = ['All', 'Frontend', 'Full Stack']

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative glass rounded-2xl overflow-hidden transition-all duration-300 border border-emerald-400/0 hover:border-emerald-400/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -15, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 -z-10 blur-xl"
        animate={{
          opacity: isHovered ? 0.2 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-500"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
          animate={{
            opacity: isHovered ? 0.7 : 0.6,
          }}
          transition={{ duration: 0.3 }}
        />
        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-300/20 to-transparent"
          animate={{
            x: isHovered ? 500 : -500,
          }}
          transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0, repeatType: 'loop' }}
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <motion.h3
              className="text-xl font-bold text-white"
              animate={{
                color: isHovered ? '#10b981' : '#ffffff',
              }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>
            <motion.span
              className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-400/50"
              animate={{
                scale: isHovered ? 1.1 : 1,
                boxShadow: isHovered ? '0 0 12px rgba(16, 185, 129, 0.4)' : '0 0 0px rgba(16, 185, 129, 0)',
              }}
              transition={{ duration: 0.3 }}
            >
              {project.category}
            </motion.span>
          </div>
          <motion.p
            className="text-gray-400 text-sm"
            animate={{
              color: isHovered ? '#cbd5e1' : '#9ca3af',
            }}
            transition={{ duration: 0.3 }}
          >
            {project.description}
          </motion.p>
        </div>

        {/* Features */}
        <div className="space-y-2">
          <motion.p
            className="text-xs font-semibold text-emerald-400"
            animate={{
              color: isHovered ? '#6ee7b7' : '#10b981',
            }}
            transition={{ duration: 0.3 }}
          >
            Key Features:
          </motion.p>
          <ul className="grid grid-cols-2 gap-2">
            {project.features.slice(0, 4).map((feature, index) => (
              <motion.li
                key={feature}
                className="text-xs text-gray-300 flex items-center gap-2"
                animate={{
                  x: isHovered ? 4 : 0,
                  color: isHovered ? '#e2e8f0' : '#d1d5db',
                }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <motion.span
                  className="w-1 h-1 rounded-full bg-emerald-400"
                  animate={{
                    scale: isHovered ? 1.2 : 1,
                    boxShadow: isHovered ? '0 0 8px rgba(16, 185, 129, 0.8)' : '0 0 0px',
                  }}
                  transition={{ duration: 0.3 }}
                />
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-emerald-400/20">
          {project.tags.map((tag, index) => (
            <motion.span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-emerald-400/5 border border-emerald-400/40 text-emerald-300 cursor-pointer"
              whileHover={{
                scale: 1.1,
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                boxShadow: '0 0 12px rgba(16, 185, 129, 0.5)',
              }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          {project.demo && (
            <motion.a
              href={project.demo}
              className="flex-1 py-2 rounded-lg text-center text-sm font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 text-white relative overflow-hidden"
              whileHover={{
                scale: 1.08,
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                animate={{
                  x: isHovered ? 400 : -400,
                }}
                transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
              />
              <span className="relative z-10">View Live</span>
            </motion.a>
          )}
          {project.github && (
            <motion.a
              href={project.github}
              className="flex-1 py-2 rounded-lg text-center text-sm font-semibold border-2 border-emerald-400 text-emerald-400 bg-emerald-400/5 relative overflow-hidden"
              whileHover={{
                scale: 1.08,
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-emerald-400/10"
                animate={{
                  x: isHovered ? 400 : -400,
                }}
                transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
              />
              <span className="relative z-10">View Code</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory)

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

  return (
    <div className="pt-20 pb-20">
      {/* Hero */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my portfolio of full-stack projects showcasing modern web development practices and innovative solutions.
          </p>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex items-center gap-4 flex-wrap justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <HiFilter className="w-5 h-5 text-emerald-400" />
            </motion.div>
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 relative overflow-hidden ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/50 border border-emerald-300'
                    : 'glass hover:bg-white/15 border border-emerald-400/30 text-gray-300'
                }`}
                whileHover={{
                  scale: 1.08,
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {activeCategory === category && (
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    layoutId="activeCategory"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-12"
                variants={itemVariants}
              >
                <p className="text-gray-400 text-lg">No projects found in this category.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
