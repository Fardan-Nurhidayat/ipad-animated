/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        background: "#FAFAFC",
      },
      fontSize: {
        xxs: ["10px", "12px"],
      },
    },
  },
  plugins: [],
};
