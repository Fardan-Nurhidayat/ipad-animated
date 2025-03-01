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
        black: {
          apple: "#1d1d1f",
        },
        blue: {
          apple: "#0066cc",
        },
        finish: {
          "space-black": "#2E2C2E",
          "space-silver": "#E3E4E5",
        },
      },
      fontSize: {
        xxs: ["10px", "12px"],
        heading: ["80px", "84px"],
        subheading: ["28px", "32px"],
      },
    },
  },
  assets: {
    "slider/": "images/",
  },
  plugins: [],
};
