/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#27358F",
        secundary: "#C27B34",
        verde: "#39925E",
        gris: "#DCDEED",
        blanco: "#F9F9FF",
        negro: "#2D2E35"
      }
    },
  },
  plugins: [],
}