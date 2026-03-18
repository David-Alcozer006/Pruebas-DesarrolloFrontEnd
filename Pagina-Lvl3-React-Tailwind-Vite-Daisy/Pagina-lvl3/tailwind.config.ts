import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e60012",
        primaryHover: "#ac000d",
        secondary: "#efefef",
        graymain: "#434242",
        navy: "#0b2b6b",
        blue: "#d6f0fa",
      },
    },
  },
}

export default config