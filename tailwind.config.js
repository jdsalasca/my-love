/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "love-primary": '#FF6B6B',
        "love-secondary": '#FFD166',
        "love-accent": '#FF5E8A',
        "love-dark": '#333333',
        "love-light": '#FFFAF2',
        "love-background": '#FFF0E5',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        love: '0 4px 20px rgba(255, 107, 107, 0.15)',
      },
    },
  },
  plugins: [],
} 