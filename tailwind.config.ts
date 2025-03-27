
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["SF Pro Display", "Inter", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        teal: {
          DEFAULT: "#2A5C6E",
          50: "#EAF1F3",
          100: "#CCDDE1",
          200: "#9EBECA",
          300: "#71A0B2",
          400: "#43829A",
          500: "#2A5C6E",
          600: "#1E4350",
          700: "#122A32",
          800: "#061114",
        },
        coral: {
          DEFAULT: "#FF6B6B",
          50: "#FFF0F0",
          100: "#FFDADA",
          200: "#FFB5B5",
          300: "#FF9090",
          400: "#FF6B6B",
          500: "#FF3838",
          600: "#FF0505",
          700: "#D20000",
          800: "#9F0000",
        },
        gold: {
          DEFAULT: "#FFD700",
          50: "#FFFCEB",
          100: "#FFF7CC",
          200: "#FFF099",
          300: "#FFE866",
          400: "#FFE033",
          500: "#FFD700",
          600: "#CCAC00",
          700: "#998100",
          800: "#665600",
        },
        primary: {
          DEFAULT: "#2A5C6E",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FF6B6B",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FFD700",
          foreground: "#000000",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" }
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        "zoom-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "ripple": {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(1.5)", opacity: "0" }
        },
        "palm-scan": {
          "0%": { opacity: "0.5", height: "0%", width: "0%" },
          "40%": { opacity: "0.8", height: "80%", width: "80%" },
          "80%": { opacity: "1", height: "100%", width: "100%" },
          "100%": { opacity: "0.9", height: "90%", width: "90%" }
        },
        "shimmer": {
          "0%": { backgroundPosition: "-500px 0" },
          "100%": { backgroundPosition: "500px 0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-out": "fade-out 0.6s ease-out",
        "slide-in": "slide-in 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "zoom-in": "zoom-in 0.5s ease-out",
        "pulse-subtle": "pulse-subtle 2s infinite ease-in-out",
        "float": "float 3s infinite ease-in-out",
        "ripple": "ripple 1.5s infinite ease-out",
        "palm-scan": "palm-scan 2.5s infinite ease-in-out",
        "shimmer": "shimmer 2s infinite linear"
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'elevated': '0 10px 30px rgba(0, 0, 0, 0.08)',
        'glow-teal': '0 0 15px rgba(42, 92, 110, 0.3)',
        'glow-coral': '0 0 15px rgba(255, 107, 107, 0.3)',
        'glow-gold': '0 0 15px rgba(255, 215, 0, 0.4)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
