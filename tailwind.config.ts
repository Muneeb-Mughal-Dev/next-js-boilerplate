import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssTypography from "@tailwindcss/typography";
import { animation, boxShadow, colors, fontFamily, keyframes } from "./theme";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: colors,
      animation: animation,
      fontFamily: fontFamily,
      keyframes: keyframes,
      boxShadow: boxShadow,
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssTypography()],
};
export default config;
