/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{vue,js}',
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './plugins/**/*.{vue,js}',
    './nuxt.config.{js,ts}',  // Add this for Nuxt.js projects
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

