import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: {
          light: "#FFFFFF",
          DEFAULT: "#FCFCFC",
          dark: "#DADADA",
        },
        grey: {
          DEFAULT: "#979797",
        },
        primary: {
          DEFAULT: "#94FBAB",
          dark: "#75B082",
        },
        brand: {
          light: "#202D3A",
          dark: "#131B23",
        },
      },
    },
  },
  plugins: [],
};
export default config;
