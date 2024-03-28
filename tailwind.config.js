/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'form-in': 'bounce 1s ease-in'
      }
    },
  },
  plugins: [],
}

