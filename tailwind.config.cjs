/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
         'dark-bg':'#121214',
         'primary-color':'#04d361',
         'gray-text':'#9fa2ae',
         'gray-bg':'#091209',
         'gray-light':'#1c1c1f',

         
        },
    },
  },
  plugins: [],
}