import React from 'react'
import { motion } from 'framer-motion'

const ServiceCard = ({ service, index }) => {
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
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
      className="group relative"
    >
      <div className="
        bg-bg-section 
        rounded-xl 
        shadow-md 
        p-8 
        text-center 
        transition-all 
        duration-300 
        border 
        border-transparent
        hover:border-accent/30
        hover:shadow-lg
        hover:shadow-accent/20
        h-full
      ">
        <div className="text-5xl text-accent mb-4 transition-transform duration-300 group-hover:scale-110">
          <i className={`fas ${service.icon}`}></i>
        </div>
        <h5 className="text-xl md:text-2xl font-semibold mb-3 text-text-primary group-hover:text-accent transition-colors duration-300">
          {service.title}
        </h5>
        <p className="text-text-secondary leading-relaxed">
          {service.description}
        </p>
        
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
          "
        />
      </div>
    </motion.div>
  )
}

export default React.memo(ServiceCard)
