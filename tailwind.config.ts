import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                sora: ['Sora', 'sans-serif'],
                grotesk: ['Space Grotesk', 'sans-serif'],
                playfair: ['Playfair Display', 'serif'],
                },
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
                'rotate-cycle': {
                  '0%': { transform: 'rotate(0deg)' },
                  '10%': { transform: 'rotate(450deg)' },   
                  '30%': { transform: 'rotate(450deg)' },   
                  '40%': { transform: 'rotate(0deg)' },     
                  '90%': { transform: 'rotate(0deg)' },    
                  '100%': { transform: 'rotate(0deg)' },    
                },
                'spin-pause': {
                  '0%': { transform: 'rotate(0deg)' },
                  '25%': { transform: 'rotate(360deg)' },
                  '50%': { transform: 'rotate(360deg)' },
                  '75%': { transform: 'rotate(0deg)' },
                  '100%': { transform: 'rotate(0deg)' }, 
                },
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
				},
                gradientX: {
                  '0%, 100%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                 },
                 'star-movement-bottom': {
                    '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
                    '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
                  },
                  'star-movement-top': {
                    '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
                    '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
                  },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'gradient-x': 'gradientX 6s ease infinite',
                'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
                'star-movement-top': 'star-movement-top linear infinite alternate',
                'rotate-cycle': 'rotate-cycle 10s ease-in-out infinite',
                'spin-pause': 'spin-pause 15s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
