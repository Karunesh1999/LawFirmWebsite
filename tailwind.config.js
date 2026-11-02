/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mscc: {
          black: '#050505',
          dark: '#141414',
          surface: '#252525',
          concrete: '#777777',
          light: '#F5F5F3',
          border: '#E5E5E2',
          accent: '#B66B43', // Concrete terracotta accent
          accentHover: '#9F5833',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        widest: '0.15em',
        architectural: '0.2em',
      }
    },
  },
  plugins: [],
}

