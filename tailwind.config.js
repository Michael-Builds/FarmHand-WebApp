// Importing Flowbite plugin at the top of the file
import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  // Using the imported plugin directly
  plugins: [flowbitePlugin],
};

export default config;
