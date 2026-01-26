/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--color-bg)',
        'bg-section': 'var(--color-section)',
        'accent': 'var(--color-accent)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
      },
      fontFamily: {
        'sans': ['Inter', 'Manrope', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        'heading': ['Inter', 'Poppins', 'Sora', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tight': '-0.02em',
        'tighter': '-0.03em',
      },
      lineHeight: {
        'relaxed': '1.75',
        'comfortable': '1.7',
      },
    },
  },
  plugins: [],
}
