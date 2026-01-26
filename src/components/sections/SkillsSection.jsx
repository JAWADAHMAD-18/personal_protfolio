import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills, skillCategories } from '../../data/skills'
import SkillCard from '../skills/SkillCard'

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredSkills = useMemo(() => {
    if (activeFilter === 'All') {
      return skills
    }
    return skills.filter(skill => skill.category === activeFilter)
  }, [activeFilter])

  const filterOptions = [
    'All',
    skillCategories.Languages,
    skillCategories.Frontend,
    skillCategories.Backend,
    skillCategories.Databases,
    skillCategories.Tools,
    skillCategories.AI
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  }

  return (
    <section className="py-20 bg-bg-section rounded-t-[2.5rem] my-8 mx-auto w-[97vw] max-w-[97vw] shadow-lg min-h-[70vh]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <motion.h3 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl mb-8 text-center text-text-primary"
        >
          My Programming Skills
        </motion.h3>

        {/* Filter Pills */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filterOptions.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: activeFilter === filter ? 1.04 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`
                px-4 
                py-2 
                rounded-full 
                text-sm 
                font-medium 
                transition-all 
                duration-300
                inline-block
                ${
                  activeFilter === filter
                    ? 'bg-accent text-bg-primary border-2 border-accent shadow-md shadow-accent/30'
                    : 'bg-bg-primary/50 text-text-secondary border border-accent/20 hover:bg-bg-primary/70 hover:text-text-primary hover:border-accent/30'
                }
              `}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="
              grid 
              grid-cols-3 
              sm:grid-cols-4 
              md:grid-cols-5 
              lg:grid-cols-6 
              gap-x-6 
              gap-y-8
              md:gap-x-8 
              md:gap-y-10
              justify-items-center
              pb-8
            "
          >
            {filteredSkills.map((skill, index) => (
              <SkillCard 
                key={skill.name} 
                skill={skill} 
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default SkillsSection
