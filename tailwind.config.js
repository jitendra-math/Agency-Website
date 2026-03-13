// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/data/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sf: ["SF UI Text", "system-ui", "sans-serif"],
        oatmeal: ["Oatmeal Sans", "sans-serif"],
        royal: ["RoyalBrand", "cursive"],
      },

      container: {
        center: true,
        padding: "1rem",
      },

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
        shine: "shine 4s linear infinite",
      },
    },
  },

  plugins: [],
};