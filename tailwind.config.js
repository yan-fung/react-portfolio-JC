/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "DC4492",
        yellow: "#FDCC49",
        grey: "EDEDED",
        green: "#AFF91C",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
        brown: "#3e2723",
        "dark-pink": "rgb(189, 171, 175)",
        "darker-pink": "rgb(207, 192, 195)",
      },
      borderColor: {
        yellow: '#FFD700',
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
  },
  plugins: [],
}

