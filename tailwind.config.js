/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        crema: "#F7EFE4",
        espresso: "#201713",
        cacao: "#5E3D2E",
        berry: "#B72D4C",
        sage: "#5E7D5A",
        citrus: "#E6A100",
        milk: "#FFF9F1",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(32, 23, 19, 0.13)",
      },
    },
  },
  plugins: [],
};
