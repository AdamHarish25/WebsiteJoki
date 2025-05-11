/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm" : '700px',
        "md" : '800px',
        "lg": '1280px',
        "xl": '1450px',
        "2xl": '1660px',
      },
      colors: {
        "Emerald-green" : "#2ECC71",
        "Forest-green" : "#D5F5E3",
        "Soft-white" : "#F8F9FA",
        "Charcoal-gray" : "#2C3E50",
        "Warm-gold" : "#F4D03F",
      }
    },
  },
  plugins: [],
};
