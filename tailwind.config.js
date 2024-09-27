/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "w-13": "3.25rem",
        "w-81": "350px",
      },
      height: {
        "h-13": "3.25rem",
      },
      colors: {
        "app-c": "#a2a0a0",
        "inv-c": "8e80ff",
        // "bg-dot": "#a39e9e",
      },
      boxShadow: {
        "sm-shad": "0 0 5px rgba(8, 14, 196,1)",
        "mid-shad": "0 0 25px rgba(8, 14, 196,1)",
        "3xl": "0 0 40px rgba(8, 14, 196,1)",
        "4xl": "0 0 200px rgba(8, 14, 196,1)",
        "inner-shad": "inset -1px 0 5px 2px rgba(0, 0, 0, 0.5);",
        "new-shad": "1px 1px 20px rgba(255, 178, 102,1)",
        "full-shad":
          "3px 3px 20px 0.5px rgba(0, 0, 0,1),-3px -3px 20px 0.5px rgba(0, 0, 0,1)",
        "inner-shad-1": "inset 0 -1px 5px 1px rgba(245, 158, 11, 1)",
        "inner-shad-2": "inset 0 -1px 5px rgba(132, 204, 22, 1)",
        "inner-shad-3": "inset 0 -1px 5px rgba(219, 39, 119, 1)",
        "left-shad": "9px 0 60px 1px rgba(0, 0, 0,1)",
      },
      fontFamily: {
        "font-1": ['"Roboto Condensed"', '"sans-serif"'],
      },
      translate: {
        7.5: "7.5rem",
      },
    },
  },
  plugins: [],
};
