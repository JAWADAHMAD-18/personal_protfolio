# Portfolio React

A responsive portfolio website built with React, Vite, Tailwind CSS, Framer Motion, and AOS.

## Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🌓 **Dark/Light Mode** - Toggle between themes with persistent storage
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ⚡ **Fast Performance** - Built with Vite for optimal build times
- 🎭 **Smooth Animations** - Framer Motion and AOS for engaging interactions
- 🧩 **Component-Based** - Modular, reusable React components
- 🛣️ **Multi-Page Routing** - React Router for navigation

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **AOS** - Animate on scroll library
- **Font Awesome** - Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio-react/
├── public/              # Static assets (images, favicon)
├── src/
│   ├── components/     # Reusable React components
│   │   ├── layout/    # Layout components (Navbar, Footer, ThemeToggle)
│   │   ├── sections/  # Page sections (Hero, About, Projects, etc.)
│   │   ├── projects/  # Project-related components
│   │   ├── skills/    # Skills-related components
│   │   ├── services/  # Services-related components
│   │   └── testimonials/ # Testimonial components
│   ├── contexts/      # React contexts (ThemeContext)
│   ├── hooks/         # Custom React hooks
│   ├── data/          # Data files (projects, skills, services, testimonials)
│   ├── pages/         # Page components
│   ├── styles/        # Global styles
│   ├── App.jsx        # Main app component
│   └── main.jsx       # Entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Pages

- **/** - Home page (Hero + About sections)
- **/about** - About page
- **/projects** - Projects showcase with filtering
- **/skills** - Skills section with animated progress bars
- **/services** - Services offered
- **/contact** - Contact form



© 2026 Jawad. All rights reserved.
