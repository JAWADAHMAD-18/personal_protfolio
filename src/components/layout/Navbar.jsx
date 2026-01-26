import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { FaBars } from 'react-icons/fa6'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' },
  ]

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-section shadow-lg border-b-2 border-accent min-h-[90px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center text-accent text-2xl font-bold tracking-wider">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="h-[38px] w-[38px] mr-2.5"
            />
            J-Tech
            <ThemeToggle />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden border-2 border-accent bg-accent/10 rounded-lg p-2 transition-colors hover:border-accent/80"
            aria-label="Toggle navigation"
          >
            <FaBars className="text-xl text-accent" />
          </button>

          <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} absolute md:static top-full left-0 right-0 bg-bg-section md:bg-transparent shadow-lg md:shadow-none z-40`}>
            <ul className="flex flex-col md:flex-row md:items-center md:ml-auto md:mb-0 py-4 md:py-0">
              {navLinks.map((link) => (
                <li key={link.path} className="md:mx-2">
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `block px-2 py-2 text-text-primary font-medium text-lg transition-colors relative ${
                        isActive
                          ? 'text-accent border-b-[2.5px] border-accent'
                          : 'hover:text-accent'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
