import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F2E7D2",
        foreground: "#191C18",
        paper: {
          DEFAULT: "#F2E7D2",
          light: "#FBF5E7",
          mid: "#E8DABF",
          deep: "#DCCBAB",
        },
        ink: {
          DEFAULT: "#191C18",
          2: "#242822",
          3: "#33382F",
          4: "#4A5044",
        },
        muted: {
          DEFAULT: "#5A5A4C",
          foreground: "#3F4036",
          light: "#8A8776",
          dark: "#B9B19C",
        },
        card: {
          DEFAULT: "#FBF5E7",
          foreground: "#191C18",
        },
        border: "#C9B99C",
        accent: {
          DEFAULT: "#C1542D",
          foreground: "#FBF5E7",
          hover: "#9A3B1F",
          light: "#F3D6C6",
          dark: "#7E2F18",
        },
        rust: {
          DEFAULT: "#C1542D",
          light: "#F3D6C6",
          dark: "#9A3B1F",
        },
        gold: {
          DEFAULT: "#E3A23B",
          light: "#F6E2B8",
          dark: "#9C6A15",
        },
        teal: {
          DEFAULT: "#2D7770",
          light: "#CFE6E1",
          dark: "#1E5A55",
        },
        moss: {
          DEFAULT: "#7D9A5A",
          light: "#DFE9CB",
          dark: "#4F6536",
        },
        rose: {
          DEFAULT: "#B44A4A",
          light: "#F3D3D3",
          dark: "#7D2B2B",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        pixel: ["var(--font-pixel)", "var(--font-sans)", "sans-serif"],
        terminal: ["var(--font-terminal)", "ui-monospace", "monospace"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(25, 28, 24, 0.06)",
        card: "0 1px 3px 0 rgba(25, 28, 24, 0.05), 0 1px 2px -1px rgba(25, 28, 24, 0.05)",
        "pixel-sm": "3px 3px 0 0 #191C18",
        pixel: "4px 4px 0 0 #191C18",
        "pixel-md": "6px 6px 0 0 #191C18",
        "pixel-lg": "10px 10px 0 0 #191C18",
        "pixel-rust": "6px 6px 0 0 #C1542D",
        "pixel-gold": "6px 6px 0 0 #E3A23B",
        "pixel-teal": "6px 6px 0 0 #2D7770",
        "pixel-inset": "inset 0 0 0 2px #191C18",
      },
      backgroundImage: {
        "pixel-grid":
          "linear-gradient(to right, rgba(25,28,24,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(25,28,24,0.055) 1px, transparent 1px)",
        "pixel-grid-dark":
          "linear-gradient(to right, rgba(242,231,210,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,231,210,0.06) 1px, transparent 1px)",
        scanlines:
          "repeating-linear-gradient(0deg, rgba(0,0,0,0.55) 0px, rgba(0,0,0,0.55) 1px, transparent 1px, transparent 4px)",
        dither:
          "conic-gradient(from 90deg at 2px 2px, #191C18 90deg, transparent 0) 0 0/4px 4px",
      },
      backgroundSize: {
        "grid-6": "24px 24px",
        "grid-4": "16px 16px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.35)" },
        },
        steam: {
          "0%": { opacity: "0", transform: "translateY(0)" },
          "25%": { opacity: "0.9" },
          "100%": { opacity: "0", transform: "translateY(-14px)" },
        },
        scan: {
          "0%": { transform: "translateY(-8px)" },
          "100%": { transform: "translateY(84px)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "cursor-blink": {
          "0%, 45%": { opacity: "1" },
          "46%, 100%": { opacity: "0" },
        },
        "pulse-frame": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translate3d(0, 18px, 0)" },
          "100%": { opacity: "1", transform: "none" },
        },
        "fade-right": {
          "0%": { opacity: "0", transform: "translate3d(24px, 0, 0)" },
          "100%": { opacity: "1", transform: "none" },
        },
        "fade-left": {
          "0%": { opacity: "0", transform: "translate3d(-24px, 0, 0)" },
          "100%": { opacity: "1", transform: "none" },
        },
      },
      animation: {
        blink: "blink 1.1s steps(1, end) infinite",
        twinkle: "twinkle 3.2s steps(2, end) infinite",
        steam: "steam 3.4s linear infinite",
        scan: "scan 5.5s linear infinite",
        bob: "bob 4s steps(2, end) infinite",
        cursor: "cursor-blink 1s steps(1, end) infinite",
        "pulse-frame": "pulse-frame 2.4s steps(2, end) infinite",
        "fade-up": "fade-up 620ms cubic-bezier(0.2, 0.8, 0.2, 1) both",
        "fade-right": "fade-right 680ms cubic-bezier(0.2, 0.8, 0.2, 1) both",
        "fade-left": "fade-left 680ms cubic-bezier(0.2, 0.8, 0.2, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
