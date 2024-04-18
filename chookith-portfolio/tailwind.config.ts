import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        CenturyGothic: ["var(--font-Century-Gothic)"],
      },
      keyframes: {
        dropIn: {
          from: { transform: "translatey(-50px)", opacity: "0" },
          to: { transform: "translate(0)", opacity: "1" },
        },
        dropIn2: {
          from: { transform: "translatey(-60px)", opacity: "0" },
          to: { transform: "translate(0)", opacity: "1" },
        },
        bounce: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        dropIn: "dropIn 1s ease 200ms backwards",
        dropIn2: "dropIn2 1400ms ease 400ms backwards",
        bounce: "bounce 2s ease ",
      },
      colors: {
        //light
        ashBlue: "#9BBAB2",
        teaGreen: "#BFD7B5",
        summerGreen: "#E7EFC5",
        sunlightYellow: "#F2DDA4",
        cream: "#FDF8ED",
        //dark
        midnightpurple: "#413C58",
        mossGreen: "#606C38",
        tigerEyeOrange: "#BC6C25",
      },
    },
  },
  plugins: [],
};
export default config;
