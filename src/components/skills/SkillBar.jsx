import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SkillBar = ({ skill, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="w-[90%] mb-8 flex items-center gap-4">
      <span className="min-w-[90px] font-semibold text-text-secondary text-lg text-right">
        {skill.name}
      </span>
      <div className="flex-1 bg-[#20242e] rounded-lg h-7 overflow-hidden shadow-md relative">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: index * 0.1 }}
          className="bg-gradient-to-r from-accent to-text-secondary text-bg-primary font-semibold text-right pr-3 leading-7 rounded-l-lg h-full flex items-center justify-end"
        >
          {skill.percentage}%
        </motion.div>
      </div>
    </div>
  )
}

export default SkillBar
