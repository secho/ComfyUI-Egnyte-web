/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 24px 48px -24px rgba(15, 23, 42, 0.45)",
        halo: "0 0 0 1px rgba(148, 163, 184, 0.35), 0 20px 40px -24px rgba(15, 23, 42, 0.4)",
      },
    },
  },
  plugins: [],
};
