/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",


  theme: {
    extend: {
      colors: {
      primaryCol: "#00bfa6",
      textBlack: "#18171f",
      white: "#fff",
      dark30: "#1F1E29",
      lightPurple: "#6C63FF",
      danger: "#DC3545",
      success: "#28A745"
    },
      dropShadow: {
        shadow: "10px 10px 20px rgba(0, 0, 0, 0.2)"
      }
    },
    

    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [require("daisyui")],
  //plugins: [require("daisyui")],
}

