/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*"
  ],
  theme: {
    fontFamily: {
      'Inter': ["Inter", "sans-serif"],
      'Sans': ["DM Sans", "sans-serif"],
      'Assistant': ["Assistant", "sans-serif"]
    },
    fontSize: {
      "3xl": ['2rem', '3rem'],
      "dark": ['1.25rem','2.5rem']
    },


    extend: {
      colors: {
        taintedWhite: 'rgba(0, 0, 0, 0.001)',
        darkerWhite: 'rgba(0, 0, 0, 0.51)',
        text: 'rgb(24, 25, 31)',
      }
    },
    plugins: [ 
      require('@tailwindcss/forms'),
  ],
  }
}
