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
          DEFAULT: "#322A90", // Deep Blue / Indigo (from logo)
          50: "#F0F1FA",
          100: "#E0E3F5",
          200: "#C1C6EB",
          300: "#A1A9E1",
          400: "#626FD2",
          500: "#322A90",
          600: "#282173",
          700: "#1E1956",
          800: "#14113A",
          900: "#0A081D",
        },
        accent: {
          DEFAULT: "#DD1C16", // Bright Red (from logo)
          50: "#FDF2F2",
          100: "#FBE3E2",
          200: "#F7C7C5",
          300: "#F38D8B",
          400: "#EE5250",
          500: "#DD1C16",
          600: "#B11612",
          700: "#85110E",
          800: "#590B09",
          900: "#2C0605",
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
          400: "#5A6799",
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
        "glow-accent": "0 0 0 1px rgba(221,28,22,0.1), 0 12px 30px -4px rgba(221,28,22,0.2)",
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
