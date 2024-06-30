/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "primary-gradient": "#1e1e2f",
        "secondary-gradient": "#27293d",
      },
      borderColor: {
        "primary-pink": "#e14eca",
      },
    },
  },
  plugins: [],
};
