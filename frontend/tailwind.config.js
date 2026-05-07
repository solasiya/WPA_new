/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // We'll implement a dark mode toggle, defaulting to dark
  theme: {
    extend: {
      colors: {
        wpa: {
          dark: '#0B1120',
          navy: '#0f172a',
          blue: '#3b82f6',
          purple: '#8b5cf6',
          light: '#f8fafc'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/assets/hero-bg.jpg')",
      }
    },
  },
  plugins: [],
}
