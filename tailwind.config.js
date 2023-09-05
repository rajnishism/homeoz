/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      // ...
    },
    borderRadius: {
      none: "0",
      xs: "2px",
      sm: "5px",
      DEFAULT: "0.25rem",
      DEFAULT: "20px",
      md: "50px",
      lg: "100px",
      full: "9999px",
      large: "25px",
    },
    dropShadow: {
      lg: "6px 3px 6px #000)",

      "2xl": " 2px 2px 12px #555",
      "3xl": "  0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;",
      "4xl": [
        "0 35px 35px rgba(0, 0, 0, 0.25)",
        "0 45px 65px rgba(0, 0, 0, 0.15)",
      ],
    },
  },
  plugins: [],
};
