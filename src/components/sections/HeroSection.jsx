import React from 'react'
import { motion } from 'framer-motion'
import { useDualTypingEffect } from '../../hooks/useTypingEffect'

const HeroSection = () => {
  const { nameDisplay, subtitleDisplay, showName, showSubtitle } = useDualTypingEffect(
    'Jawad Ahmad  ',
    'Full-Stack Developer | MERN Stack | AI Integration'
  )

  return (
    <section className="py-10 flex items-center justify-center relative overflow-hidden rounded-[2.5rem] my-8 mx-auto w-[97vw] max-w-[97vw] bg-gradient-to-br from-bg-section via-bg-section to-bg-primary bg-cover bg-center bg-no-repeat" >
      <div className="absolute inset-0 bg-bg-primary/70 z-10"></div>
      <div className="container mx-auto px-4 relative z-20 flex flex-col md:flex-row items-center justify-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.7, ease: 'easeOut' }}
          className="mb-8 md:mb-0 md:mr-12 flex items-center justify-center"
        >
          <img
            src="/profile.png"
            alt="Jawad Profile"
            className="w-[220px] h-[220px] md:w-[220px] md:h-[220px] rounded-full object-cover border-[6px] border-accent shadow-[0_12px_48px_rgba(197,157,95,0.33)]"
          />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.7, ease: 'easeOut' }}
          className="text-center md:text-left text-text-primary p-5 bg-bg-section/70 rounded-2xl shadow-lg"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Hi, I'm <span className="text-accent" style={{ opacity: showName ? 1 : 0 }}>{nameDisplay}</span>
          </h2>
          <h3 className="text-xl md:text-2xl font-bold mt-2 mb-3" style={{ opacity: showSubtitle ? 1 : 0 }}>
            {subtitleDisplay}
          </h3>
          {/* Badge Strip */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
            <span className="text-md md:text-md px-3 py-1 bg-accent/20 text-accent rounded-full font-medium">
              2+ years experience
            </span>
            <span className="text-md md:text-md px-3 py-1 bg-accent/20 text-accent rounded-full font-medium">
              MERN Stack
            </span>
            <span className="text-md md:text-md px-3 py-1 bg-accent/20 text-accent rounded-full font-medium">
              AI Integration
            </span>
          </div>
          <p className="text-lg mb-3 max-w-2xl">
            Full-stack developer with 2+ years of coding experience building production-ready applications. 
            I specialize in MERN stack development, Django backend systems, and AI integration. 
            My focus is on creating scalable, efficient solutions that solve real-world problems.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start items-center mt-3 gap-6">
            <a
              href="#"
              className="btn-cv bg-gradient-to-r from-accent to-[#f7c873] text-bg-section font-bold tracking-wide rounded-full px-8 py-3 text-xl shadow-lg hover:from-[#f7c873] hover:to-accent hover:text-bg-primary transition-all duration-200"
            >
              Download CV
            </a>
            <a
              href="https://github.com/JAWADAHMAD-18"
              target="_blank"
              rel="noopener noreferrer"
              className="github-icon text-2xl text-text-primary hover:bg-gradient-to-r hover:from-[#333] hover:to-[#6e5494] hover:text-white hover:scale-110 hover:rotate-[-8deg] transition-all duration-200 rounded-full w-12 h-12 flex items-center justify-center"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jawad-ahmad-18/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon text-2xl text-text-primary hover:bg-gradient-to-r hover:from-[#0077b5] hover:to-[#00c6fb] hover:text-white hover:scale-110 hover:rotate-[8deg] transition-all duration-200 rounded-full w-12 h-12 flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
