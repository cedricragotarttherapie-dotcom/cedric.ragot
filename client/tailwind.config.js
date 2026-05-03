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
        // Base
        background: "#ffffff",
        foreground: "#1f2937",

        // Branding (sonothérapie = chaleureux + apaisant)
        accent: {
          DEFAULT: "#c08457", // brun chaud / thérapeutique
          light: "#e6c3a3",
          dark: "#9a6a43",
        },

        // UI
        card: "#f8f5f2",
        border: "#e5e7eb",

        // secondaires (sections)
        secondary: "#f3f4f6",

        // états utiles
        muted: "#6b7280",
        success: "#16a34a",
        error: "#dc2626",
      },

      // Typo plus propre
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
        ],
        serif: ["Lora", "serif"], // pour titres premium
      },

      // Ombres + arrondis (effet “pro”)
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
