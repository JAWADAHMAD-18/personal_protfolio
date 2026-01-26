import React from 'react'
import { motion } from 'framer-motion'

const ContactOption = ({ icon: Icon, label, value, href, index }) => {
  const content = (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="flex items-center p-4 rounded-xl bg-bg-section border border-accent/30 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group cursor-pointer"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300 mr-4 flex-shrink-0">
        <Icon className="text-xl text-accent" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-text-muted text-sm mb-1">{label}</p>
        <p className="text-text-primary font-medium truncate">{value || 'Not provided'}</p>
      </div>
    </motion.div>
  )

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="block"
      >
        {content}
      </a>
    )
  }

  return content
}

export default ContactOption
