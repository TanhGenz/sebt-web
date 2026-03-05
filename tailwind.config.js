/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        frame1: "#935050",
        frame2: "#520000",
        frame3: "#E8E3DD",
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        lamoric: ["Lamoric", "serif"],
        qalogre: ["Qalogre", "sans-serif"],
        bladeRush: ["BladeRush", "sans-serif"],
      },
    },
  },
  plugins: [],
};
