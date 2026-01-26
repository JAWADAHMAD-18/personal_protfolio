import React from 'react'
import { motion } from 'framer-motion'
import TechBadge from './TechBadge'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: 'easeOut' 
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.2 }}
        className="
          absolute 
          inset-0 
          rounded-xl 
          bg-accent 
          blur-xl 
          -z-10
          pointer-events-none
        "
      />
      
      <div className="
        h-full 
        shadow-md 
        bg-bg-section 
        rounded-xl 
        overflow-hidden 
        transition-all 
        duration-300
        border 
        border-transparent
        hover:border-accent/30
        hover:shadow-lg
        hover:shadow-accent/20
        relative
        z-10
      ">
        <img
          src={project.image}
          className="w-full h-48 object-cover"
          alt={project.title}
        />
        <div className="p-5">
          <h5 className="text-xl md:text-2xl font-semibold mb-3 text-text-primary group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h5>
          <p className="text-text-secondary mb-4 leading-relaxed">
            {project.description}
          </p>
          
          {/* Tech Stack Badges */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, techIndex) => (
                <TechBadge 
                  key={`${project.id}-${tech}-${techIndex}`} 
                  tech={tech} 
                  index={techIndex}
                />
              ))}
            </div>
          )}
          
          {/* Live Link */}
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex 
              items-center 
              gap-2 
              text-accent 
              font-medium 
              hover:text-accent/80 
              transition-colors 
              duration-300
            "
          >
            <span>Live Demo</span>
            <i className="fas fa-external-link-alt text-sm"></i>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default React.memo(ProjectCard)
