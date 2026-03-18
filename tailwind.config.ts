import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: "#222837",
        brand: {
          mediumBlue: "#5688f0",
          babyBlue: "#5bade3",
          teal: "#5cc2b9",
          green: "#5cc470",
          lime: "#79b94c",
          yellow: "#e2ba3d",
          orange: "#e87f38",
          red: "#ad403c"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 24px 50px rgba(0,0,0,0.4)"
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out both",
        float: "float 10s ease-in-out infinite",
        carousel: "carousel 36s linear infinite"
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        carousel: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
