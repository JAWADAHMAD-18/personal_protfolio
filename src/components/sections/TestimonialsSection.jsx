import React from 'react'
import { testimonials } from '../../data/testimonials'
import TestimonialCard from '../testimonials/TestimonialCard'

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials-section py-12 flex items-center rounded-[2rem] my-8 mx-auto w-[97vw] max-w-[97vw]">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl mb-8 text-center">
          <i className="fas fa-quote-left mr-2 text-accent"></i>Client Feedback
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
