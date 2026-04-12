/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Luxury dark theme
        charcoal: {
          DEFAULT: '#0A0A0A',
          lighter: '#1A1A1A',
        },
        // White text
        ivory: {
          DEFAULT: '#FAF9F6',
          darker: '#E8E8E8',
        },
        // Luxury gold
        gold: {
          DEFAULT: '#C5A059',
          muted: '#8B6F35',
          glow: 'rgba(197, 160, 89, 0.2)',
        },
        // Borders
        stone: {
          DEFAULT: '#3A3A3A',
          dark: '#2A2A2A',
        },
        // Card backgrounds
        parchment: {
          DEFAULT: '#1A1A1A',
          dark: '#0A0A0A',
        },
        // Text hierarchy
        ink: {
          DEFAULT: '#FAF9F6',
          muted: '#C0C0C0',
          faint: '#808080',
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