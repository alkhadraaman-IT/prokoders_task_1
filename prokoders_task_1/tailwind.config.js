/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'flame-black': '#0A0A0A', // الأسود الداكن للخلفية
        'flame-orange': '#FF4500', // البرتقالي الناري
        'flame-yellow': '#FFD700', // الأصفر المتوهج
        'flame-red': '#B22222',    // الأحمر العميق للظلال
      },
    },
  },
  plugins: [],
}