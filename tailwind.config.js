module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'desktop': '1400px',
        'laptop': '1000px',
        'tablet': '600px',
        'phone': '300px'
      },
      colors: {
        'theme-back': '#0e0b21',
        'theme-hover': '#1B1540',
        'theme-grey': '#30343F',
        'deep-pink': '#89023E',
        'hot-pink': '#EA638C',
        'soft-pink': '#FFD9DA',
      },
    },
  },
  plugins: [],
}
