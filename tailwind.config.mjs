/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Noto Serif"', "serif"],
      },
      colors: {
        "dublin-inquirer-foreground": "rgb(17, 17, 17)",
        "dublin-inquirer-background": "rgb(243, 241, 235)",
      },
      spacing: {
        gutter: "2rem",
      },
    },
  },
  plugins: [],
};
