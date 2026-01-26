import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const AboutSection = () => {
  return (
    <section id="about" className="py-12 bg-bg-section text-text-primary rounded-[2rem] my-8 mx-auto w-[97vw] max-w-[97vw] shadow-lg">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Image */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="w-full md:w-5/12 mb-6 md:mb-0"
          >
            <img
              src="/about.jpg"
              alt="About Jawad"
              className="w-full rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
            className="w-full md:w-7/12"
          >
            <h3 className="text-2xl md:text-3xl mb-6">
              <i className="fas fa-user mr-2 text-accent"></i>About Me
            </h3>

            {/* About Summary */}
            <div className="mb-6 text-lg">
              <p className="mb-4 text-text-secondary leading-relaxed">
                Full-stack web developer with 2 years of coding experience, building production-ready applications with React, Node.js, and Django. 
                I develop real-world dashboards, portals, and management systems with role-based access, 
                authentication, and AI-powered features using API integrations and rule-based logic.
              </p>
            </div>

            {/* What I Build */}
            <div className="mb-6">
              <h4 className="text-xl mb-3 text-text-primary font-semibold">
                What I Build
              </h4>
              <ul className="list-none space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <span className="timeline-dot w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Modern frontend applications using React & Tailwind CSS</span>
                </li>
                <li className="flex items-start">
                  <span className="timeline-dot w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Backend APIs and role-based systems with Node.js, Express, and Django</span>
                </li>
                <li className="flex items-start">
                  <span className="timeline-dot w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Authentication systems, dashboards, and admin panels</span>
                </li>
                <li className="flex items-start">
                  <span className="timeline-dot w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>AI-powered features using APIs and rule-based logic</span>
                </li>
              </ul>
            </div>

            {/* Project-Based Experience */}
            <div className="mb-6">
              <h4 className="text-xl mb-3 text-text-primary font-semibold">
                Project-Based Experience
              </h4>
              <ul className="list-none space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="timeline-dot w-3 h-3 bg-accent rounded-full mr-3 mt-1 flex-shrink-0"></span>
                  <div>
                    <span className="font-semibold text-text-primary">TripFusion</span> <span className="text-accent text-sm">(Final Year Project)</span> — Currently working MERN stack travel platform with token-based authentication (Access + Refresh tokens), realtime chat using Socket.io, and AI-assisted features including a rule-based chatbot API.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="timeline-dot w-3 h-3 bg-accent rounded-full mr-3 mt-1 flex-shrink-0"></span>
                  <div>
                    <span className="font-semibold text-text-primary">BizTrack</span> — Business tracking and management system with comprehensive dashboard and data analytics.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="timeline-dot w-3 h-3 bg-accent rounded-full mr-3 mt-1 flex-shrink-0"></span>
                  <div>
                    <span className="font-semibold text-text-primary">Student & Teacher Career Guidance Portal</span> — Full-stack system with Django backend, role-based access, and guidance features.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="timeline-dot w-3 h-3 bg-accent rounded-full mr-3 mt-1 flex-shrink-0"></span>
                  <div>
                    <span className="font-semibold text-text-primary">Blogging Platform</span> — Appwrite backend with React frontend, authentication, and content management.
                  </div>
                </li>
              </ul>
            </div>

            {/* Certifications & Education */}
            <div>
              <h4 className="text-xl mb-3 text-text-primary font-semibold">
                Certifications & Education
              </h4>
              <ul className="list-none space-y-3 text-text-secondary mb-4">
              <li className="flex items-center">
                <span className="timeline-dot w-3 h-3 bg-accent rounded-full mr-3"></span>
                  <span>
                    <b className="text-text-primary">Certifications:</b> DataCamp certificates in data science and programming. 
                    Check out my certifications <Link to="/certifications" className="text-accent hover:text-accent/80 underline transition-colors">here</Link>.
                  </span>
              </li>
              <li className="flex items-center">
                <span className="timeline-dot w-3 h-3 bg-accent rounded-full mr-3"></span>
                  <span><b className="text-text-primary">Education:</b> BSc in Computer Science, Islamia University of Bahawalpur (2022–2026)</span>
              </li>
            </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
