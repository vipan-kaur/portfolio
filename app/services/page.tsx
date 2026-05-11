'use client'

import { motion } from 'framer-motion'
import { FaReact, FaNode, FaDatabase, FaTools } from 'react-icons/fa'

interface Skill {
  id: number
  title: string
  description: string
  icon: React.ComponentType<any>
  items: string[]
  color: string
}

const skills: Skill[] = [
  {
    id: 1,
    title: 'Frontend',
    description: 'Building interactive user interfaces with modern libraries and frameworks.',
    icon: FaReact,
    items: [
      'React & Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Responsive Design',
      'State Management',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Backend',
    description: 'Server-side development with Node.js and Express for building APIs.',
    icon: FaNode,
    items: [
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'Authentication',
      'Middleware',
      'Error Handling',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    title: 'Database',
    description: 'Working with NoSQL and relational databases for data management.',
    icon: FaDatabase,
    items: [
      'MongoDB',
      'MySQL',
      'Data Modeling',
      'Queries & Optimization',
      'Database Design',
      'CRUD Operations',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    title: 'Tools & Others',
    description: 'Version control, development tools, and other technologies.',
    icon: FaTools,
    items: [
      'Git & GitHub',
      'Postman',
      'VS Code',
      'Figma',
      'Console Debugging',
      'Package Managers',
    ],
    color: 'from-orange-500 to-red-500',
  },
]

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      className="group glass rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 cursor-pointer h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -20 }}
    >
      {/* Icon */}
      <motion.div
        className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white text-3xl group-hover:scale-125 transition-transform duration-300`}
        whileHover={{ rotate: 10, scale: 1.2 }}
      >
        <skill.icon />
      </motion.div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
        {skill.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 mb-6 leading-relaxed text-sm">
        {skill.description}
      </p>

      {/* Skills */}
      <div className="space-y-3 mb-6">
        <p className="text-sm font-semibold text-purple-300">Technologies:</p>
        <ul className="space-y-2">
          {skill.items.map((item) => (
            <motion.li
              key={item}
              className="flex items-center gap-3 text-sm text-gray-300"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`} />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
            My <span className="gradient-text">Skills</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Technologies and tools I&apos;m learning and practicing as a Full Stack MERN developer.
          </motion.p>
        </motion.div>
      </section>

      {/* Skills Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <SkillCard key={skill.id} skill={skill} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
