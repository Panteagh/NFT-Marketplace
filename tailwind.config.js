/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '475px',


      'md': '834px',


      'lg': '1440px',

    },
    
    plugins: [],
  }
}