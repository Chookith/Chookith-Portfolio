import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
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
        bouncing: {
          "0%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(-20px)" },
          "100%": { transform: "translatey(0px)" },
        },
      },
      animation: {
        dropIn: "dropIn 1s ease 200ms backwards",
        dropIn2: "dropIn2 1400ms ease 400ms backwards",
        bounce: "bouncing 2s ease 200ms normal forward",
      },
      colors: {
        //light
        ashBlue: "#9BBAB2",
        teaGreen: "#BFD7B5",
        summerGreen: "#E7EFC5",
        sunlightYellow: "#F2DDA4",
        cream: "#FDF8ED",
        //dark
        nyx: "#121018",
        mossGreen: "#48502A",
        olive: "#6A6A24",
        caribbeanCurrent: "#08595E",
        goldMetallic: "#977921",
        spaceCadet: "#2A283E",
      },
    },
  },
  plugins: [],
};
export default config;
