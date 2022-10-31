/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Graphik-Regular-Web",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        primary: [
          "Graphik-Regular-Web",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        secondary: [
          "Graphik-Medium-Web",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        tartiary: [
          "Graphik-Semibold-Web",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        primary: "#3F3F46",
      },
    },
  },
  plugins: [],
};
