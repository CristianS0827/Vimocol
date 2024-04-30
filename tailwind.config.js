/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#0478AE", // Azul Profundo
        "medium-blue": "#339CC2", // Azul Medio
        "soft-blue": "#6AA6B9", // Azul Suave
        "light-sky-blue": "#A8D1E0", // Azul Cielo Claro
        "neutral-gray": "#829BA2", // Gris Neutral
        "creamy-white": "#F1F1F2",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
