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
          DEFAULT: "#1A8E3E",
          50: "#E8F6EC",
          100: "#CDEBD6",
          200: "#9CD7AE",
          300: "#6AC386",
          400: "#3AAE5F",
          500: "#1A8E3E",
          600: "#157232",
          700: "#105627",
          800: "#0B3B1B",
          900: "#061F0E",
        },
        secondary: {
          DEFAULT: "#101010",
          50: "#F5F5F5",
          100: "#E0E0E0",
          200: "#B3B3B3",
          300: "#808080",
          400: "#4D4D4D",
          500: "#2A2A2A",
          600: "#1A1A1A",
          700: "#101010",
          800: "#0A0A0A",
          900: "#050505",
        },
        accent: {
          DEFAULT: "#D8B400",
          50: "#FDF8E3",
          100: "#F9EDB8",
          200: "#F0DC7B",
          300: "#E7CB3E",
          400: "#D8B400",
          500: "#B39400",
          600: "#8E7600",
        },
        canvas: "#F9FAFB",
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
        soft: "0 4px 24px -4px rgba(16,16,16,0.08)",
        card: "0 8px 30px -8px rgba(16,16,16,0.12)",
        glow: "0 0 0 1px rgba(26,142,62,0.15), 0 8px 24px -4px rgba(26,142,62,0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
