/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        'dark-blue': '#14213d',
        orange: '#fca311',
        gray: '#e5e5e5',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}
