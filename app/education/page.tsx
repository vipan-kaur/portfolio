'use client'

import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi2'

interface EducationItem {
  id: number
  degree: string
  institution: string
  duration: string
  location: string
  description: string
  highlights: string[]
}

const education: EducationItem[] = [
  {
    id: 1,
    degree: 'Bachelor of Technology (B.Tech)',
    institution: 'CT University',
    duration: '2022 - 2026',
    location: 'Ludhiana, Punjab',
    description: 'Pursuing Bachelor of Technology in Computer Science Engineering with a strong focus on software development, data structures, algorithms, and web technologies.',
    highlights: [
      'Computer Science & Engineering',
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Web Development',
      'Software Engineering',
      'Object-Oriented Programming',
    ],
  },
]

const learningJourney = [
  {
    category: 'Frontend Development',
    items: [
      'HTML, CSS, JavaScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'UI/UX Principles',
      'Framer Motion & Animations',
    ],
  },
  {
    category: 'Backend Development',
    items: [
      'Node.js',
      'Express.js',
      'REST API Development',
      'Authentication & Authorization',
      'Error Handling',
      'Middleware Concepts',
    ],
  },
  {
    category: 'Database & Tools',
    items: [
      'MongoDB',
      'Database Design',
      'Git & Version Control',
      'Postman API Testing',
      'Swagger Documentation',
      'npm & Package Management',
    ],
  },
  {
    category: 'Currently Learning',
    items: [
      'TypeScript',
      'Advanced Next.js',
      'System Design',
      'Performance Optimization',
      'Cloud Deployment',
      'Testing Frameworks',
    ],
  },
]

export default function Education() {
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
            My <span className="gradient-text">Education</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Academic background and continuous learning journey in technology and web development
          </motion.p>
        </motion.div>
      </section>

      {/* Education Timeline */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="relative"
                variants={itemVariants}
              >
                <div className="flex gap-6">
                  {/* Timeline Marker */}
                  <motion.div
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.15 }}
                  >
                    <div className="glass w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4">
                      <HiAcademicCap className="text-purple-400" />
                    </div>
                    {index < education.length - 1 && (
                      <div className="w-1 h-32 bg-gradient-to-b from-purple-500 to-transparent" />
                    )}
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="glass p-8 rounded-2xl flex-1 hover:bg-white/15 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-purple-400 font-semibold text-lg">{edu.institution}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm mt-2">
                        <span>{edu.location}</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="font-semibold text-purple-300">{edu.duration}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{edu.description}</p>

                    {/* Highlights */}
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-purple-300">Key Subjects & Skills:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {edu.highlights.map((highlight) => (
                          <motion.div
                            key={highlight}
                            className="flex items-center gap-3 text-sm text-gray-300"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                          >
                            <span className="w-2 h-2 rounded-full bg-purple-400" />
                            {highlight}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Learning <span className="gradient-text">Journey</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {learningJourney.map((category, idx) => (
              <motion.div
                key={idx}
                className="glass p-6 rounded-2xl hover:bg-white/15 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <h3 className={`text-lg font-bold mb-6 ${
                  idx === 3 ? 'gradient-text' : 'text-white'
                }`}>
                  {category.category}
                </h3>

                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <span className="text-purple-400 font-bold mt-1">✓</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Call to Action */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto glass rounded-2xl p-8 sm:p-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Continuous Learning</h2>
          <p className="text-gray-400 mb-6">
            I'm committed to staying updated with the latest technologies and best practices in web development. 
            Check out my certificates page for my credentials and training achievements.
          </p>
          <motion.a
            href="/certificates"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Certificates
          </motion.a>
        </motion.div>
      </section>
    </div>
  )
}
