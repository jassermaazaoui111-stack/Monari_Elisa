/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        avorio: "#FAF6EF",
        avorioScuro: "#F1EADB",
        inchiostro: "#221F1A",
        bosco: "#2F3B2C",
        boscoScuro: "#1D251B",
        bronzo: "#B08D57",
        bronzoChiaro: "#D9C4A0",
        terra: "#C98B7A",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-work-sans)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      letterSpacing: {
        tag: "0.14em",
      },
    },
  },
  plugins: [],
};
