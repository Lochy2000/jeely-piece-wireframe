/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      colors: {
        "brand-red": "#D71920",
        "brand-red-light": "#FDEEED",
        coral: "#FF8C42",
        "coral-light": "#FFF1E6",
        purple: "#6A5A9A",
        "purple-light": "#ECEAF5",
        green: "#1AD766",
        "green-light": "#E8FBF0",
        cream: "#FAF7F4",
        sand: "#EDE8E1",
        charcoal: "#1C1C1C",
        muted: "#6B6260",
        "warm-white": "#FFFFFF",
      },
      fontFamily: {
        display: ["Nunito", "sans-serif"],
      },
    },
  },
};
