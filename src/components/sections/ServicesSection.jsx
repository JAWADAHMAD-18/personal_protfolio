import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'
import ServiceCard from '../services/ServiceCard'

const ServicesSection = () => {
  return (
    <section className="py-20 bg-bg-section rounded-[2rem] my-8 mx-auto w-[97vw] max-w-[97vw] shadow-lg">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl md:text-4xl mb-12 text-center text-text-primary"
        >
          <i className="fas fa-cogs mr-2 text-accent"></i>Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/projects"
            className="inline-block px-6 py-3 bg-accent text-bg-primary font-semibold rounded-full hover:bg-accent/90 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Check my Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
