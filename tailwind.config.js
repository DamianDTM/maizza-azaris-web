/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D65D6A", // Rose/Terracotta (Titles, Buttons)
        secondary: "#4A2C2A", // Chocolate (Text, Contrast)
        background: "#FDF8F5", // Cream (Main Background)
        accent: "#E6A56C", // Gold/Orange (Sparkles, Highlights)
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        script: ["Dancing Script", "cursive"],
        display: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
         'blob-pattern': "url('/blobs.svg')", 
      }
    },
  },
  plugins: [],
}
