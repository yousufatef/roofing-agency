/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9F1916",
        secondary: "#09483F",
        lightgray: "#F7F8FA",
        purb:"#AC7AB5"
      },
      fontFamily: {
        somar: [ 'Somar Sans', 'sans-serif' ],
      },
      screens: {
        // => @media (max-width: 1535px) { ... }
        "max-3xl": { max: "1535px" },
        "max-2xl": { max: "1279px" },
        "max-xl": { max: "1150px" },
        "max-lg": { max: "1023px" },
        "max-md": { max: "767px" },
        "max-sm": { max: "639px" },
        "max-xs": {max : "450px"},
        "max-xxs": {max : "340px"},
      },
    },
    },
    plugins: [ 'prettier-plugin-tailwindcss' ],
}
