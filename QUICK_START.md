# Quick Start Guide

## Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd portfolio-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit `http://localhost:5173` to see your portfolio

## Project Structure

```
portfolio-react/
├── public/              # Static assets (images)
├── src/
│   ├── components/     # React components
│   │   ├── layout/     # Navbar, Footer, ThemeToggle
│   │   ├── sections/  # Page sections
│   │   ├── projects/  # Project components
│   │   ├── skills/    # Skill components
│   │   ├── services/  # Service components
│   │   └── testimonials/ # Testimonial components
│   ├── contexts/       # React contexts (Theme)
│   ├── hooks/         # Custom hooks
│   ├── data/          # Data files
│   ├── pages/         # Page components
│   └── styles/        # Global CSS
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Features Implemented

✅ React Router with multiple pages
✅ Dark/Light mode toggle with persistence
✅ Framer Motion animations
✅ AOS scroll animations
✅ Responsive design
✅ Typing effect in hero section
✅ Project filtering
✅ Animated skill bars
✅ Contact form

## Customization

### Update Content

Edit files in `src/data/`:
- `projects.js` - Add/modify projects
- `skills.js` - Update skills
- `services.js` - Modify services
- `testimonials.js` - Update testimonials

### Change Colors

Edit CSS variables in `src/styles/globals.css`:
```css
:root {
  --color-bg: #0f172a;
  --color-section: #1e293b;
  --color-accent: #c59d5f;
  /* ... */
}
```

### Add New Pages

1. Create a new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/layout/Navbar.jsx`

## Notes

- All images should be placed in the `public/` folder
- Use `/image-name.jpg` to reference images in components
- Theme preference is saved in localStorage
- All components are functional components using hooks
