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
        "primary-500": "var(--primary-500)",
        "foreground-primary": "var(--foreground-color-primary)",
        "foreground-secondary": "var(--foreground-color-secondary)",
        "border-primary": "var(--border-primary)",
        "border-secondary": "var(--border-secondary)",
        "background-layer-1": "var(--background-layer-1)",
        "background-layer-2": "var(--background-layer-2)",
        "subtle-accent": "var(--subtle-accent-color)",
        "interactive-element-bg": "var(--interactive-element-bg)",
        "interactive-element-fg": "var(--interactive-element-fg)",
      },
      textColor: {
        "primary": "var(--foreground-color-primary)",
        "secondary": "var(--foreground-color-secondary)",
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
