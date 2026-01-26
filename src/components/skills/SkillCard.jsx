import React from 'react'
import { motion } from 'framer-motion'

const SkillCard = ({ skill, index }) => {
  const IconComponent = skill.icon
  const iconColor = skill.brandColor || 'var(--color-text-secondary)'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        ease: 'easeOut'
      }}
      whileHover={{ 
        scale: 1.06,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 1.03,
        transition: { duration: 0.1 }
      }}
      className="group relative flex flex-col items-center"
    >
      <div className="
        w-24 h-24 
        md:w-28 md:h-28 
        rounded-xl 
        bg-bg-section
         
        flex 
        flex-col 
        items-center 
        justify-center 
        cursor-pointer 
        transition-all 
        duration-300
        shadow-md
        hover:shadow-lg
        hover:shadow-accent/20
        border 
        border-transparent
        hover:border-accent/30
        mb-2
      ">
        {/* Icon with brand color */}
        <IconComponent 
          style={{ 
            color: iconColor,
            transition: 'filter 0.3s ease'
          }}
          className="
            text-4xl 
            md:text-5xl 
            z-10
            group-hover:brightness-110
          " 
        />
        
        {/* Category Label - Subtle, shown on hover/tap */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          whileTap={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="
            absolute 
            -top-6 
            left-1/2 
            transform 
            -translate-x-1/2 
            pointer-events-none
            z-20
          "
        >
          <span className="
            text-[10px] 
            text-accent 
            font-medium 
            uppercase 
            tracking-wider
          ">
            {skill.category}
          </span>
        </motion.div>
        
        {/* Glow effect on hover/tap */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.3 }}
          whileTap={{ opacity: 0.2 }}
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
      
      {/* Always-visible Skill Label */}
      <motion.span
        className="skill-label
          text-xs 
          md:text-sm 
          text-text-secondary
          font-medium
          text-center 
          group-hover:text-text-primary
          transition-colors 
          duration-300
          w-full
          px-1
          leading-tight
          mt-1
        "
      >
        {skill.name}
      </motion.span>
    </motion.div>
  )
}

export default React.memo(SkillCard)
