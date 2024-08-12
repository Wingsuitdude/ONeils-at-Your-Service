module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Stonecross', 'sans-serif'],
      },
      colors: {
        'irish-green': '#008000',
        'shamrock': '#45b08c',
      },
      animation: {
        'fall': 'fall 5s linear infinite',
      },
      keyframes: {
        fall: {
          '0%': { 
            transform: 'translateY(-10vh) rotate(0deg)', 
            opacity: 1 
          },
          '100%': { 
            transform: 'translateY(100vh) rotate(360deg)', 
            opacity: 0 
          },
        },
      },
    },
  },
  plugins: [],
}