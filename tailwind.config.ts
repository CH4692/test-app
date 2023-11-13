import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      accent: "#292352",
      accent2: "#2C1E85",
      complementary: "#9F94EB",
      complementary2: "#CCC4FF",
      complementary3: "#D9D4FF",
    },
  },

  plugins: [],
};
export default config;
