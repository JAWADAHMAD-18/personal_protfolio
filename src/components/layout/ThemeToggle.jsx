import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa6'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="bg-transparent border-none outline-none text-accent hover:text-text-primary hover:bg-bg-section/20 transition-colors duration-200 p-2 rounded flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FaMoon className="text-lg" />
      ) : (
        <FaSun className="text-lg" />
      )}
    </button>
  )
}

export default ThemeToggle
