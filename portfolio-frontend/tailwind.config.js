/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Roboto for a cleaner, smaller font style
      },
      animation: {
        gradientShift: "gradientShift 10s ease infinite",
      },
      backgroundSize: {
        "400%": "400% 400%",
      },
      keyframes: {
        gradientShift: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      colors: {
        gradientStart: "#4f46e5", // Indigo
        gradientMid: "#6d28d9", // Purple
        gradientEnd: "#9333ea", // Violet
      },
    },
  },
  plugins: [],
};
