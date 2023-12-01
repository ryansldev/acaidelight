import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundColor: {
      //   "depurple": {
      //     "900": "#48267f",
      //     "800": "#652f91", // primary
      //     "700": "#75349a",
      //     "600": "#873aa4",
      //     "500": "#943faa",
      //     "400": "#a356b7",
      //     "300": "#b373c5",
      //     "200": "#c999d6",
      //     "100": "#dec1e6",
      //     "50": "#f2e6f4",
      //   },
      //   "degreen": {
      //     "900": "#6d7800",
      //     "800": "#849e0d",
      //     "700": "#91b61a",
      //     "600": "#9fcc26",
      //     "500": "#a9de2e", // primary
      //     "400": "#b5e351",
      //     "300": "#c1e971",
      //     "200": "#d3ef9a",
      //     "100": "#e4f5c2",
      //     "50": "#f4fbe7",
      //   }
      // },
      colors: {
        "depurple": {
          "900": "#48267f",
          "800": "#652f91", // primary
          "700": "#75349a",
          "600": "#873aa4",
          "500": "#943faa",
          "400": "#a356b7",
          "300": "#b373c5",
          "200": "#c999d6",
          "100": "#dec1e6",
          "50": "#f2e6f4",
        },
        "degreen": {
          "900": "#6d7800",
          "800": "#849e0d",
          "700": "#91b61a",
          "600": "#9fcc26",
          "500": "#a9de2e", // primary
          "400": "#b5e351",
          "300": "#c1e971",
          "200": "#d3ef9a",
          "100": "#e4f5c2",
          "50": "#f4fbe7",
        }
      }
    },
  },
  plugins: [],
}
export default config
