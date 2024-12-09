/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./JS/main.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        112: "28rem",
        128: "32rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
