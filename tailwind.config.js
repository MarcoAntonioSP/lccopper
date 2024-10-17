/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Inclua todos os arquivos nas pastas de páginas
    "./src/components/**/*.{js,ts,jsx,tsx}", // Inclua todos os arquivos nas pastas de componentes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
