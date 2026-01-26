import React from 'react'
import { motion } from 'framer-motion'

const TechBadge = ({ tech, index }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.05,
        ease: 'easeOut'
      }}
      className="
        inline-block
        px-3 
        py-1 
        text-xs 
        md:text-sm 
        font-medium 
        text-text-secondary 
        bg-bg-primary/50
        border 
        border-accent/20 
        rounded-full
        whitespace-nowrap
      "
    >
      {tech}
    </motion.span>
  )
}

export default React.memo(TechBadge)
