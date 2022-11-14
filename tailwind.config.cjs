/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        myTheme: {
          "primary": '#0fcfec',
          "secondary": '#19d3ae',
          "neutral": "#3D4451", 
          "accent": '#3A4256',
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
