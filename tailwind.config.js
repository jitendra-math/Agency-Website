// tailwind.config.js

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",

  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/data/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },

    extend: {

      /* ===================================== */
      /* Fonts */
      /* ===================================== */

      fontFamily: {
        sf: ["SF UI Text", "system-ui", "sans-serif"],
        oatmeal: ["Oatmeal Sans", "sans-serif"],
        royal: ["RoyalBrand", "cursive"],
      },

      /* ===================================== */
      /* Shine Animation */
      /* ===================================== */

      keyframes: {
        shine: {
          "0%": {
            transform: "translateX(-150%) rotate(25deg)",
          },
          "100%": {
            transform: "translateX(350%) rotate(25deg)",
          },
        },
      },

      animation: {
        shine: "shine 3s ease-in-out infinite",
      },

    },
  },

  plugins: [],
};