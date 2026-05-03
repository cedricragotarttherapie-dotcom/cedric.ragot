/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // 🎯 BASE
        background: "#fdfcfb",
        foreground: "#1f2937",

        // 🎯 BRAND PRINCIPAL
        primary: {
          DEFAULT: "#6b7c6f",
          light: "#a8b5a2",
          dark: "#4f5d52",
        },

        // 🎯 ACCENT (bois / naturel)
        accent: {
          DEFAULT: "#c4a484",
          light: "#e6d5c3",
          dark: "#9a7c5f",
        },

        // 🎯 UI
        card: "#f8f6f3",
        border: "#e5e7eb",
        muted: "#6b7280",

        // ✅ AJOUT IMPORTANT (évite erreurs Tailwind)
        white: "#ffffff",
        black: "#000000",
      },

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Lora", "serif"],
      },

      boxShadow: {
        soft: "0 6px 30px rgba(0,0,0,0.06)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },

  plugins: [],
};
