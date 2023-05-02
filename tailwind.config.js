/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",


  theme: {
    extend: {
      dropShadow: {
        shadow: "10px 10px 20px rgba(0, 0, 0, 0.2)"
      }
    },
    colors: {
      primary: "#00bfa6",
      textBlack: "#18171f",
      white: "#fff",
      dark30: "#1F1E29",
      lightPurple: "#6C63FF",
      danger: "#F98080"
    },

    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
  //plugins: [require("daisyui")],
}

