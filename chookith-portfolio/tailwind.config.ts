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
      },
      animation: {
        dropIn: "dropIn 1s ease 200ms backwards",
        dropIn2: "dropIn2 1200ms ease 400ms backwards",
      },
      colors: {
        midnightpurple: "#413C58",
        ashblue: "#9BBAB2",
        teagreen: "#BFD7B5",
        summergreen: "#E7EFC5",
        sunlightyellow: "#F2DDA4",
        cream: "#FDF8ED",
      },
    },
  },
  plugins: [],
};
export default config;
