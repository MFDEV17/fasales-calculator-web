/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "4.5xl": ["3rem", "3rem"],
      },
      screens: {
        md: "320px",
        lg: "396px",
        xl: "768px",
      },
      colors: {
        tg: {
          bg: "var(--tg-theme-bg-color)",
          text: "var(--tg-theme-text-color)",
          hint: "var(--tg-theme-hint-color)",
          link: "var(--tg-theme-link-color)",
          button: "var(--tg-theme-button-color)",
          "button-text": "var(--tg-theme-button-text-color)",
          secondary: "var(--tg-theme-secondary-bg-color)",
          destructive: "#F25A5A",
        },
        test: {
          bg: "#FFFFFF",
          text: "#020202",
          hint: "#8B8B8B",
          link: "#5AC8FB",
          button: "#5AC8FB",
          "button-text": "#FFFFFF",
          secondary: "#F3F2F8",
          destructive: "#F25A5A",
        },
      },
    },
  },
  plugins: [],
};
