/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6624FF",
        primaryDark: "#4116A7",
        white: "#FFFFFF",
        whiteDark: "#E3E3E3",
        secondary: "#01092E",
        black: "#131313",
        gray: "#D9D9D9",
        input: "#F1F1F1",
      }
    },
  },
  plugins: [],
}

