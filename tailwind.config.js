/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: "#1f442f", // deeper green
        accent: "#a9cf3b",
        "soft-blue": "#f0f6ff",
        "blue-accent": "#3b82f6",
        "soft-gray": "#f8f9fa",
        "red-accent": "#e63946",
        "deep-green": "#29592f",
        "light-green": "#b8e986",
      },
    },
  },
  plugins: [],
};
