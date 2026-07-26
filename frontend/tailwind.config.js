/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#022c22',
          card: '#042f2e',
          accent: '#10b981',
          teal: '#059669',
          rose: '#F43F5E',
        }
      }
    },
  },
  plugins: [],
}
