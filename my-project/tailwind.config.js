
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media', 
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], 
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
   
  ],
}