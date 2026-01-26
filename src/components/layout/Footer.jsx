import React from 'react'
const message = "Hi Jawad, I found your portfolio and I want some services from you.";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-text-muted text-lg py-8 rounded-t-[2.5rem] mt-10">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-2">
          <a
            href="https://github.com/JAWADAHMAD-18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent mx-3 hover:text-accent/80 transition-colors"
          >
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jawad-Tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent mx-3 hover:text-accent/80 transition-colors"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=jawadahmad5618@gmail.com&su=Portfolio%20Inquiry&body=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent mx-3 hover:text-accent/80 transition-colors"
          >
            <i className="fas fa-envelope fa-lg"></i>
          </a>

        </div>
        <p className="mb-0">&copy; 2026 Jawad. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
