/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9dffe',
          300: '#7cc2fd',
          400: '#36a4fa',
          500: '#0c87eb',
          600: '#0069c7',
          700: '#0054a1',
          800: '#044885',
          900: '#093d6e',
          950: '#062649',
        },
        navy: {
          50: '#f4f5f7',
          100: '#e9ebef',
          200: '#c8ced8',
          300: '#a7b1c1',
          400: '#657793',
          500: '#233d65',
          600: '#1f375b',
          700: '#1a2e4c',
          800: '#15253d',
          950: '#0e1828',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
