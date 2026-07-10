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
          DEFAULT: "#1E2A78",
          50: "#EBEDF8",
          100: "#D0D4EF",
          200: "#A1A9DF",
          300: "#727ECF",
          400: "#4353BF",
          500: "#1E2A78",
          600: "#182260",
          700: "#121A48",
          800: "#0C1130",
          900: "#060918",
        },
        accent: {
          DEFAULT: "#E63946",
          50: "#FDE8EA",
          100: "#FABCC0",
          200: "#F59096",
          300: "#EF636D",
          400: "#E63946",
          500: "#C42D38",
          600: "#A2242E",
          700: "#801B24",
          800: "#5E121A",
          900: "#3C0A10",
        },
        secondary: {
          DEFAULT: "#0D1440",
          50: "#F5F6FA",
          100: "#E0E2EE",
          200: "#B3B7D1",
          300: "#808AAF",
          400: "#4D5E8D",
          500: "#2A3566",
          600: "#1A2250",
          700: "#0D1440",
          800: "#080D2D",
          900: "#04071A",
        },
        canvas: "#FAFBFF",
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
        soft: "0 4px 24px -4px rgba(13,20,64,0.08)",
        card: "0 8px 30px -8px rgba(13,20,64,0.12)",
        glow: "0 0 0 1px rgba(30,42,120,0.15), 0 8px 24px -4px rgba(30,42,120,0.25)",
        "glow-accent": "0 0 0 1px rgba(230,57,70,0.15), 0 8px 24px -4px rgba(230,57,70,0.25)",
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
          "0%,100%": { boxShadow: "0 0 8px 0 rgba(30,42,120,0.3)" },
          "50%": { boxShadow: "0 0 20px 4px rgba(30,42,120,0.5)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
