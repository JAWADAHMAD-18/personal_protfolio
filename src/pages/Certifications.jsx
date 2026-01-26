import React from 'react'
import { motion } from 'framer-motion'
import { certifications } from '../data/certifications'
import CertificationCard from '../components/certifications/CertificationCard'

const Certifications = () => {
  return (
    <section className="py-20 bg-bg-section rounded-[2rem] my-8 mx-auto w-[97vw] max-w-[97vw] shadow-lg min-h-[70vh]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <motion.h3 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl md:text-4xl mb-4 text-center text-text-primary"
        >
          <i className="fas fa-certificate mr-3 text-accent"></i>
          Certifications
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-text-secondary mb-12 text-lg"
        >
          Professional certifications and courses completed
        </motion.p>

        {/* Certifications Grid */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-6 
          md:gap-8
        ">
          {certifications.map((certification, index) => (
            <CertificationCard 
              key={certification.id} 
              certification={certification} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
