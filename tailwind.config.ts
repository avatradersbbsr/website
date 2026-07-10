import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F1A3C", // Deep Midnight Sapphire
          50: "#F4F6FC",
          100: "#E6EBF8",
          200: "#C2CEEE",
          300: "#9EAFE3",
          400: "#5773CD",
          500: "#0F1A3C",
          600: "#0B122C",
          700: "#080D21",
          800: "#050916",
          900: "#03050B",
        },
        accent: {
          DEFAULT: "#BE1E2D", // Rich Crimson Red (from logo)
          50: "#FDF2F3",
          100: "#FBE3E5",
          200: "#F6C8CB",
          300: "#ED8F95",
          400: "#E35660",
          500: "#BE1E2D",
          600: "#9A1824",
          700: "#76121B",
          800: "#520D13",
          900: "#2E070B",
        },
        gold: {
          DEFAULT: "#C5A880", // Premium Champagne Gold
          50: "#FAF7F2",
          100: "#F2EBE0",
          200: "#E0D1BA",
          300: "#CEB794",
          400: "#BC9D6E",
          500: "#C5A880",
          600: "#B29162",
          700: "#90734A",
          800: "#6D5638",
          900: "#4B3B26",
        },
        secondary: {
          DEFAULT: "#080E26",
          50: "#F8F9FC",
          100: "#F0F2F9",
          200: "#D3D7E8",
          300: "#A9B1D1",
          400: "#7F8BBB",
          500: "#5564A4",
          600: "#36437B",
          700: "#080E26",
          800: "#050919",
          900: "#02040B",
        },
        canvas: "#FCFCFA", // Luxury Silk Off-White
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 30px -4px rgba(8,14,38,0.04)",
        card: "0 12px 40px -12px rgba(8,14,38,0.08)",
        glow: "0 0 0 1px rgba(15,26,60,0.1), 0 12px 30px -4px rgba(15,26,60,0.15)",
        "glow-accent": "0 0 0 1px rgba(190,30,45,0.1), 0 12px 30px -4px rgba(190,30,45,0.2)",
        "glow-gold": "0 0 0 1px rgba(197,168,128,0.15), 0 12px 30px -4px rgba(197,168,128,0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%,100%": { boxShadow: "0 0 8px 0 rgba(15,26,60,0.2)" },
          "50%": { boxShadow: "0 0 20px 4px rgba(15,26,60,0.4)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "scale-in": "scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in-right": "slide-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
