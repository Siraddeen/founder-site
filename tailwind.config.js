/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./404.html",
    "./for-freelance-agencies/**/*.html",
    "./building-in-public/**/*.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F2F4F6",
        ink: "#0E1A2B",
        muted: "#4A586B",
        line: "#D3DAE2",
        teal: {
          light: "#EAF5F5",
          soft: "#DCEEEF",
          DEFAULT: "#0B6E75",
          dark: "#08565B",
        },
        amber: {
          soft: "#FEF7E6",
          DEFAULT: "#C98A0B",
          dark: "#A36D04",
        },
        night: "#0E1A2B",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        sans: ["Figtree", "system-ui", "sans-serif"],
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(14, 26, 43, 0.05)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
