/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      `./src/pages/**/*.{js,jsx,ts,tsx}`,
      `./src/components/**/*.{js,jsx,ts,tsx}`,
    ],
    safelist: [
      'overflow-hidden',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
