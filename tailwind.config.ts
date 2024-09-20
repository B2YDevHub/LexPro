import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-poppins)',
      inter: 'var(--font-inter)'
    },
    colors: {
      gray400: 'hsl(var(--gray400))',
      gray500: 'hsl(var(--gray500))',
      gray600: 'hsl(var(--gray600))',
      gray700: 'hsl(var(--gray700))',
      gray800: 'hsl(var(--gray800))',
      gray900: 'hsl(var(--gray900))',
      brown200: 'hsl(var(--brown200))',
      brown300: 'hsl(var(--brown300))',
      brown400: 'hsl(var(--brown400))',
      brown500: 'hsl(var(--brown500))',
      brown600: 'hsl(var(--brown600))',
      blue: 'hsl(var(--blue))',
      green: 'hsl(var(--green))',
      white: 'hsl(var(--white))',
      bgButton: 'hsl(var(--bg-button))',
    },
    screens: {
      'tablet': '750px',
      'cell': '600px',
    },
    boxShadow: {
      "card": "0px 10px 40px 0px rgba(0, 0, 0, 0.25)"
    },
    borderColor: {
      "zinc1": "#393939"
    }
  },
  plugins: [],
};
export default config;
