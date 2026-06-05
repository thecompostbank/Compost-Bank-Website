/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#2E3A2F',
        olive: '#6B7A3E',
        sand: '#DCC8A3',
        terracotta: '#8A5E3C',
        charcoal: '#1F1F1F',
        cream: '#F5F0E8',
        'sand-mid': '#EDE4D0',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        lato: ['Lato', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.28em',
        wide2: '0.18em',
      },
      lineHeight: {
        tight2: '1.06',
      },
    },
  },
  plugins: [],
}
