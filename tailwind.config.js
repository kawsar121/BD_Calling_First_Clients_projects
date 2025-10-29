/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
  },
  // daisyui: {
  //   themes: ["light", "dark"],
  // },
  plugins: [
    require('daisyui'),
  ],
}

