/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#7FB069",
        "dark-green": "#3E5842",
        gray: "#37474F",
        "light-gray": "#455A64",
        "border-gray": "#D9D9D9",
        flax: "#F3DE8A",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        "nunito-light": ["Nunito Light", "sans-serif"],
        "nunito-regular": ["Nunito Regular", "sans-serif"],
        "nunito-medium": ["Nunito Medium", "sans-serif"],
        "nunito-bold": ["Nunito Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
  prefix: "tw-",
};
