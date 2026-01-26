import React from 'react'
import { motion } from 'framer-motion'
import Avatar from 'react-avatar'
const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: index * 0.3, ease: 'easeOut' }}
      className="col-span-1"
    >
      <div className="bg-[#fafdff] dark:bg-bg-section  rounded-2xl shadow-lg p-8 mb-4 text-text-primary border-l-4 border-accent">
        <div className="flex items-center gap-3">
          <Avatar
            name={testimonial.author}
            size="48"
            round
          />
          <div>
            <p className="mb-2 text-text-primary">{testimonial.quote}</p>
            <span className="text-accent">
              - {testimonial.author}, {testimonial.company}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
