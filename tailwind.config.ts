import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        backgroundColor: "background-color",
        textColor: "color",
      },
      colors: {
        lightBackground: "#ffffff",
        lightText: "#000000",

        darkBackground: "#1a1a1a",
        darkText: "#ffffff",
        darkBorder: "#333333",
      },
    },
  },
  plugins: [],
} satisfies Config;
