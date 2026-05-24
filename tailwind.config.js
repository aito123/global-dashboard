/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body:    ["'Epilogue'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        ink:   "#0a0c10",
        panel: "#11141c",
        rim:   "#1e2333",
        mist:  "#8b93a8",
        snow:  "#e8ecf7",
        gold:  "#f5a623",
        teal:  "#2dd4bf",
        rose:  "#fb7185",
        sky:   "#38bdf8",
        lime:  "#a3e635",
      },
    },
  },
  plugins: [],
};
