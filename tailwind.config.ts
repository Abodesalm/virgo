import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { max: "500px" },
      md: { max: "720px" },
      lg: { max: "1024px" },
      xl: { max: "1300px" },
    },
    extend: {
      colors: {
        light: "#FCFCFC",
        bglight: "#EAEAEA",
        dark: "#282828",
        darker: "#181818",
        middark: "#212121",
        lightdark: "#444746",
        success: "#198754",
        danger: "#dc3545",
        prime: "#0d6efd",
        money: "#28B530",
      },
      textIndent: {
        h1: "10px",
        h2: "10px",
        h3: "10px",
        h4: "10px",
        h5: "10px",
        h6: "10px",
        h7: "10px",
        h8: "10px",
        h9: "10px",
        h10: "10px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
