/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2xl": "1536px",
    },
    colors: {
      "qiskit-white": "#FFFFFF",
      "qiskit-black": "#000000",
      "qiskit-yellow": "#FDDC69",
      "qiskit-blue-lighter": "#9EF0F0",
      "qiskit-blue-normal": "#4999D0",
      "qiskit-purple-lighter": "#6929C4",
    },
    fontFamily: {
      "IBM-Plex": ["IBM Plex Sans", "ans-serif"],
    },
    extend: {
      blur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
