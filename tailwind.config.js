/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color1': '#008081',
        'color2': '#5687B0'
      }
    },
  },
  plugins: [],
}

