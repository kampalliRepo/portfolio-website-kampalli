/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#05050f",
          800: "#0a0a1c",
          700: "#101028",
          600: "#161636",
          500: "#1d1d45",
        },
        violet: {
          DEFAULT: "#8b5cf6",
          soft: "#a78bfa",
          deep: "#6d28d9",
        },
        muted: "#9aa0c0",
      },
      fontFamily: {
        sans: ["Outfit", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        script: ["Caveat", "cursive"],
      },
      boxShadow: {
        glow: "0 0 30px -8px rgba(139, 92, 246, 0.55)",
        card: "0 18px 50px -25px rgba(0, 0, 0, 0.9)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 20% 0%, rgba(139,92,246,0.18), transparent 45%), radial-gradient(circle at 90% 20%, rgba(109,40,217,0.18), transparent 40%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseRing: {
          "0%": { opacity: "0.6", transform: "scale(0.95)" },
          "100%": { opacity: "0", transform: "scale(1.25)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseRing: "pulseRing 2.8s ease-out infinite",
      },
    },
  },
  plugins: [],
};
