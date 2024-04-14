import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodoniModa: "var(--font-bodini-moda)",
        barlow: "var(--font-barlow)",
        bellefair: "var(--font-bellefair)",
        redHatDisplay: "var(--font-red-hat-display)",
      },

      colors: {
        brown: "#4b4239",
        darkred: "#bb5943",
        brownlight1: "#6f6861;",
        brownlight2: "#a5a19c",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
