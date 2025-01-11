/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 'spotify-green': '#1DB954', 'spotify-black': '#191414', 'spotify-white': '#FFFFFF', 'spotify-gray': '#383840' },
      boxShadow: { '2xl': '0 0px 10px 10px rgba(0, 0, 0, 0)' },
      fontFamily: { 
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}