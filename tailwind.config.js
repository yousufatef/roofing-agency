/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        borderColor: "rgba(255,255,255,0.12)",
        mainColor: "#cb4154",
        globalColor: "#131d3b"
      }
    },
  },
  plugins: [],
}