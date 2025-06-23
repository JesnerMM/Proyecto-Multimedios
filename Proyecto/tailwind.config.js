export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D1B14',  // Main Dark Brown
          light: '#8B6F47',    // Light Brown
        },
        secondary: {
          DEFAULT: '#1F2937',  // Dark Green
        },
        accent: {
          DEFAULT: '#D4AF37',  // Subtle Gold
        },
        background: {
          light: '#F5F1EB',    // Beige/Cream
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
}