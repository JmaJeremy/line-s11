/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'linx-blue': '#0066cc',
        'linx-green': '#00a651',
      }
    },
  },
  plugins: [],
}
