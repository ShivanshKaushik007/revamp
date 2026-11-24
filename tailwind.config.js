/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      heading: ["var(--font-heading)", "sans-serif"],
      serif: ["var(--font-serif)", "Georgia", "serif"],
      sans: ["var(--font-sans)", "sans-serif"],
      mono: ["var(--font-mono)", "monospace"],
      primary: ["var(--font-heading)", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#0C0C0E",
        surface: {
          DEFAULT: "#131317",
          muted: "#18181D",
          elevated: "#1E1E24",
          border: "rgba(242, 239, 233, 0.09)",
        },
        accent: {
          DEFAULT: "#F27D42",
          hover: "#FF9259",
          subtle: "rgba(242, 125, 66, 0.12)",
          glow: "rgba(242, 125, 66, 0.25)",
        },
        titanium: {
          50: "#FAF8F5",
          100: "#F2EFE9",
          200: "#DCD7CE",
          300: "#B8B3A9",
          400: "#8E8A81",
          500: "#6B6861",
          600: "#4A4843",
          700: "#2E2D2A",
          800: "#1C1B1A",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
