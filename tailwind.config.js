/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "cursive"],
      },
      colors: {
        background: "#1A7728",
        darkbg: "#14431B",
      },
    },
  },
  plugins: [],
};
