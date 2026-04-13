/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Luxury light theme (redefined)
        charcoal: {
          DEFAULT: '#FAF9F6', // Actually ivory now for common bg usage
          lighter: '#FDFBF7',
        },
        // Typography
        ivory: {
          DEFAULT: '#1A1A1A', // Actually charcoal now for common text usage
          darker: '#000000',
        },
        // Luxury gold
        gold: {
          DEFAULT: '#C5A059',
          muted: '#8B6F35',
          glow: 'rgba(197, 160, 89, 0.2)',
        },
        // Borders
        stone: {
          DEFAULT: '#E8E3DA',
          dark: '#F5F2ED',
        },
        // Card backgrounds
        parchment: {
          DEFAULT: '#FDFBF7',
          dark: '#F5F2ED',
        },
        // Text hierarchy
        ink: {
          DEFAULT: '#1A1A1A',
          muted: '#666666',
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