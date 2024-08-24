/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Add Poppins as the default sans font
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
      screens: {
        'xxl': '1920px', // Custom screen size for 1920px and up
      },
    },
  },
  plugins: [],
}
