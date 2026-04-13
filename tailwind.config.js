/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light luxury theme
        charcoal: {
          DEFAULT: '#FAF8F5', // Soft cream/ivory main bg
          lighter: '#FDFBF7',
        },
        // Typography - deep black
        ivory: {
          DEFAULT: '#1A1A1A', // Deep black for text
          darker: '#000000',
        },
        // Refined gold - minimal accent
        gold: {
          DEFAULT: '#D4AF37',
          muted: '#A0826D',
          glow: 'rgba(212, 175, 55, 0.15)',
        },
        // Light borders
        stone: {
          DEFAULT: '#E8E3DA',
          dark: '#F5F1E9',
        },
        // Light backgrounds
        parchment: {
          DEFAULT: '#FDFBF7',
          dark: '#F5F1E9',
        },
        // Text hierarchy - now on light backgrounds
        ink: {
          DEFAULT: '#1A1A1A',
          muted: '#4A4A4A',
          faint: '#999999',
        },
        heritage: {
          brown: '#7A5C3A',
          clay: '#8B6555',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        arabic: ['"Amiri"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}