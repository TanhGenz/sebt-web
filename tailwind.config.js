/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // thống nhất một layout cụ thể về phương ngang =>
      container: {
        center: true,
        padding: "2rem", // = px-8
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1440px", // max container 1440px in large screen
        },
      },
      colors: {
        primary: "#935050",
        secondary: "#520000",
        beige: "#E8E3DD",
        // beigebeige
        lightBeige: "#F4EEE7",
        creamBeige: "#EDDCC7",
        warmBeige: "#BFB3A4",

        primaryText: "#82152C",
        secondaryText: "#C18989",
        thirdText: "#ECE0D0",
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        lamoric: ["Lamoric", "serif"],
        qalogre: ["Qalogre", "sans-serif"],
        bladeRush: ["BladeRush", "sans-serif"],
        kamilla: ["Karmila", "sans-serif"],
        morgan: ["Morgan", "sans-serif"],
        onebold: ["Onebold", "sans-serif"],
        cinzel: ["Cinzel", "sans-serif"]
      },
    },
  },
  plugins: [],
};
