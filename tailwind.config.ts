import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(card|tabs|ripple).js"
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '1rem',
  		screens: {
  			sm: '100%',
  			md: '100%',
  			lg: '100%',
  			xl: '1280px',
  			'2xl': '1280px'
  		}
  	},
  	extend: {
  		backgroundImage: {
  			'pri-custom-gradient': 'linear-gradient(to right, #0BB4D8, #097991)',
  			'sec-button-gradient': 'linear-gradient(186.47deg, rgba(255, 253, 253, 0.4) -20.85%, rgba(255, 253, 253, 0.2) -20.83%, rgba(255, 255, 255, 0) 116.4%)',
  			'custom-gradient-trans': 'linear-gradient(177.72deg, #0BB4D8 16.61%, #097991 117.38%)'
  		},
  		boxShadow: {
  			'inner-button': 'inset 0px 4px 4px 0px #00000040',
  			'feature-card-custom-shadow': '0px 4px 45px -10px rgba(10, 173, 208, 0.1)',
  			'newsletter_custom': '0px -3px 24px 0px #0000000D',
			'sec_shadow':'0px 4px 20px -7px rgba(0, 0, 0, 0.05)',
  		},
  		colors: {
			white40: 'rgba(255, 255, 255, 0.25)',
        	white0f: 'rgba(255, 255, 255, 0.12)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			customTeal: '#0A90AD',
  			custombg: '#FCFCFC',
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
  		},
  		fontFamily: {
  			rubik: [
  				'var(--font-rubik)'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down':'accordion-down 0.2s ease-out',
  			'accordion-up':'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"),nextui()],
} satisfies Config;
