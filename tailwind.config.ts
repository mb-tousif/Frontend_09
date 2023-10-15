import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minHeight: {
        "70vh": "70vh",
        "50vh": "50vh",
      },
      maxHeight: {
        "70vh": "70vh",
      },
      backgroundImage: {
        main: "url('/src/assets/heroBanner.png')",
      },
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // },
  // important: true,
};
export default config;