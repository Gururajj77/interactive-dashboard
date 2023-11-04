/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "custom-card": "#365FD9",
        "custom-hover": "#00A5FA",
        "main-bg": "#E5E7EB",
        "custom-card-text": "#BBBBBB",
        "table-border": "#D1D5DB",
      },
    },
  },

  plugins: [],
};
