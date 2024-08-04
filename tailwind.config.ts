import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "layer-1": "var(--background-layer-1)",
        "layer-2": "var(--background-layer-2)",
      },
      colors: {
        "primary-accent": "var(--primary-accent-color)",
      },
      textColor: {
        "primary": "var(--text-color-primary)",
        "secondary": "var(--text-color-secondary)",
      },
      borderColor: {
        "primary": "var(--border-primary)",
        "secondary": "var(--border-secondary)",
      },
    },
  },
  plugins: [],
};
export default config;
