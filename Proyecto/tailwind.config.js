/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D1B14",
          light: "#8B6F47",
        },
        secondary: {
          DEFAULT: "#1F2937",
        },
        accent: {
          DEFAULT: "#D4AF37",
        },
        background: {
          light: "#F5F1EB",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
        dancing: ['"Dancing Script"', "cursive"],
      },
    },
  },
  plugins: [],
};
