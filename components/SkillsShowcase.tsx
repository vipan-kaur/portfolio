'use client'

import { motion } from 'framer-motion'
import { FaReact, FaNode, FaDatabase, FaCode } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiExpress, SiRedux } from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ComponentType<any>
  level: number
  color: string
}

const skillCategories = {
  frontend: [
    { name: 'React', icon: FaReact, level: 65, color: 'text-emerald-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 70, color: 'text-teal-400' },
    { name: 'Next.js', icon: FaCode, level: 55, color: 'text-emerald-300' },
    { name: 'Redux', icon: SiRedux, level: 50, color: 'text-teal-300' },
  ],
  backend: [
    { name: 'Node.js', icon: FaNode, level: 60, color: 'text-emerald-400' },
    { name: 'Express.js', icon: SiExpress, level: 58, color: 'text-teal-400' },
  ],
  database: [
    { name: 'MongoDB', icon: SiMongodb, level: 62, color: 'text-emerald-400' },
  ],
}

interface SkillProps extends Skill {
  index: number
}

function SkillCard({ name, icon: Icon, level, color, index }: SkillProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5 },
    },
  }

  return (
    <motion.div
      className="glass p-6 rounded-2xl hover:bg-white/15 transition-all duration-300 group cursor-pointer"
      variants={containerVariants}
      whileHover={{ y: -10, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <motion.div
          className={`text-4xl ${color} group-hover:scale-110 transition-transform duration-300`}
          whileHover={{ rotate: 10 }}
        >
          <Icon />
        </motion.div>
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
        </div>
      </div>

      {/* Skill Bar */}
      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  )
}

export default function SkillsShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
            <span className="text-white">My </span>
            <span className="gradient-text">Skills & Learning</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I'm learning and practicing as a student
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Frontend Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-emerald-400 mb-6">Frontend Development</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillCategories.frontend.map((skill, index) => (
                <SkillCard key={skill.name} {...skill} index={index} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-teal-400 mb-6">Backend Development</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillCategories.backend.map((skill, index) => (
                <SkillCard key={skill.name} {...skill} index={index + 4} />
              ))}
            </div>
          </div>

          {/* Database Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-green-400 mb-6">Database & Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillCategories.database.map((skill, index) => (
                <SkillCard key={skill.name} {...skill} index={index + 6} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Skills Tags */}
        <motion.div
          className="mt-16 pt-16 border-t border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-white mb-8">Other Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'HTML/CSS',
              'JavaScript',
              'TypeScript',
              'Bootstrap',
              'Material UI',
              'Flowbite',
              'Swiper',
              'Swagger',
              'REST APIs',
              'Git',
            ].map((tech, index) => (
              <motion.div
                key={tech}
                className="glass px-4 py-2 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(167, 139, 250, 0.1)' }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
