import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import ProjectCard from '../projects/ProjectCard'
import ProjectFilter from '../projects/ProjectFilter'

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects
    }
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section className="py-20 bg-bg-section rounded-[2rem] my-8 mx-auto w-[97vw] max-w-[97vw] shadow-lg">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h3 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl md:text-4xl mb-8 text-center text-text-primary"
        >
          <i className="fas fa-code mr-2 text-accent"></i>Projects
        </motion.h3>
        <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
