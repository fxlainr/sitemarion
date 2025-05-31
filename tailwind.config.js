/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Work Sans"', 'sans-serif'],
      },
      colors: {
        cream: '#f8f5f0',
        gold: '#c9a96e',
        sage: '#8a9a5b',
        moss: '#4a5d23',
        teal: '#3e6b6e',
        navy: '#2c3e50',
        brown: '#4a4236',
        terracotta: '#b56357',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-in-out forwards',
        'fade-in-slow': 'fadeIn 2s ease-in-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};