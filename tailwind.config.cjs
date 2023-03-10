/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*"
  ],
  theme: {
    fontFamily: {
      'Inter': ["Inter", "sans-serif"],
      'Sans': ["DM Sans", "sans-serif"]
    },
    borderRadius: {
      pic: '4rem'
    },
    

    extend: {
      colors: {
        taintedWhite: 'rgba(0, 0, 0, 0.001)',
        darkerWhite: 'rgba(0, 0, 0, 0.51)',
        text: 'rgb(24, 25, 31)',
      }
    },
    plugins: [],
  }
}
