/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
 theme: {
     extend: 
     {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        customPrimary: "#B88E2F",
        customWhite: "#FFFFFF",
        customRedAccents: "#E97171",
        customGreenAccents: "#2EC1AC",
        customBlack1: "#000000",
        customBlack2: "333333",
        customGray1: "#3A3A3A",
        customGray2: "#9F9F9F",
        customGray3: "#898989",
        customGray4: "#B0B0B0",
        customGray5: "#616161",
        customGray6: "#666666",
        customGray7: "#D9D9D9",
        customYellow1: "#FFC700",
        customYellow2: "#F9F1E7",
        customYellow3: "FFF3E3",
        customYellow4: "#FAF3EA",
        customBlue: "#816DFA",        
      },
     },
 },
 plugins: [],
}