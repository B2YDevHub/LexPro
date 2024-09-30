import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
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
  		bgButton: 'hsl(var(--bg-button))'
  	},
  	screens: {
		header: '850px',
		form: '800px',
  		tablet: '750px',
  		cell: '600px'
  	},
  	boxShadow: {
  		'cardHome': '0px 10px 40px 0px rgba(0, 0, 0, 0.25)'
  	},
  	borderColor: {
  		'zinc1': '#393939'
  	},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
