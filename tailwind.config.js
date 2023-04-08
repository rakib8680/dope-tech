/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#4ac94e",

          "secondary": "#b5f77b",

          "accent": "#441bb5",

          "neutral": "#1A1821",

          "base-100": "#2C434E",

          "info": "#55A8E7",

          "success": "#16CAB2",

          "warning": "#ECC032",

          "error": "#E41B2C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}