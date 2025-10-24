/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'relo-yellow': '#FFDE00',
        'relo-primary': '#009FDF',
        'relo-primary-pressed': '#045778',
        'relo-primary-lite': 'rgba(163, 189, 199, 0.30)',
        'relo-nav-bg': '#E8E9EA',
        'green-100': '#89E9B8',
        'green-200': '#50CE8E',
        'green-300': '#25B771',
        'green-400': '#179B62',
        'green-500': '#097F54',
      },
      fontFamily: {
        sans: ['Roboto', 'SF Pro Text', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

