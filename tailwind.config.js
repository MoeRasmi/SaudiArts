/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary background — warm architectural ivory
        charcoal: {
          DEFAULT: '#F8F5EE',
          lighter: '#EDE8DC',
        },
        // Primary text — warm near-black ink
        ivory: {
          DEFAULT: '#1C1A17',
          darker: '#2E2B26',
        },
        // Antique champagne gold
        gold: {
          DEFAULT: '#B8964E',
          muted: '#8B6F35',
          glow: 'rgba(184, 150, 78, 0.15)',
        },
        // Stone — borders, dividers
        stone: {
          DEFAULT: '#D6CFC0',
          dark: '#BEB5A4',
        },
        // Parchment — card backgrounds
        parchment: {
          DEFAULT: '#EDE8DC',
          dark: '#E0D9CC',
        },
        // Ink — text hierarchy
        ink: {
          DEFAULT: '#1C1A17',
          muted: '#6B6560',
          faint: '#9E9790',
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