/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue' : "#5669FF",
        'soft-blue' : "#F6F7FF",
        'black' : "#000000",
        'white' : "#FFFFFF",
        'grey' : "#656161",
        'soft-grey' : "#D9D9D9",
        'black-grey' : "#4A4545",
      },
      fontFamily: {
        'poppins' : ['Poppins', 'sans-serif']
      },
      fontSize: {
        'heading' : "52px",
        'title' : "35px",
        'sub-heading' : "20px",
      }
    },
  },
  plugins: [],
}