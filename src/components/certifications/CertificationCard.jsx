import React from 'react'
import { motion } from 'framer-motion'

const CertificationCard = ({ certification, index }) => {
  const IconComponent = certification.icon

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
      whileTap={{ 
        scale: 1.01,
        transition: { duration: 0.1 }
      }}
      className="group relative"
    >
      <div className="
        h-full
        rounded-xl 
        bg-[#20242e] 
        p-6
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
      ">
        {/* Icon */}
        <div className="mb-4">
          <IconComponent 
            className="
              text-5xl 
              md:text-6xl 
              text-accent
              transition-transform
              duration-300
              group-hover:scale-110
            " 
          />
        </div>
        
        {/* Certificate Name */}
        <h4 className="
          text-lg 
          md:text-xl 
          font-semibold 
          text-text-primary 
          text-center 
          mb-2
          group-hover:text-accent
          transition-colors
          duration-300
        ">
          {certification.name}
        </h4>
        
        {/* Issuer */}
        <p className="
          text-sm 
          text-text-muted 
          text-center 
          mb-4
        ">
          {certification.issuer}
        </p>
        
        {/* Verify Link (if available) */}
        {certification.verifyLink && (
          <a
            href={certification.verifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-xs 
              text-accent 
              hover:text-accent/80 
              underline 
              transition-colors
              flex 
              items-center 
              gap-1
            "
            onClick={(e) => e.stopPropagation()}
          >
            Verify Certificate
            <i className="fas fa-external-link-alt text-[10px]"></i>
          </a>
        )}
        
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

export default React.memo(CertificationCard)
