import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        wrapper: "90%",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        subheading: "rgba(6, 33, 38, 0.7)",
      },
    },
    screens:{
      mobile:'320px',
      tablet:'728px',
      laptop:'1024px'
    }
  },
  plugins: [],
};
export default config;
