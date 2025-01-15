/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        background: "#FAFAFC",
        red: {
          apple: "#b64400",
        },
      },
      fontSize: {
        xxs: ["10px", "12px"],
      },
    },
  },
  plugins: [],
};
