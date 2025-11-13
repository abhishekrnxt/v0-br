import type { Config } from "tailwindcss";

// all in fixtures is set to tailwind v3 as interims solutions

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			card: {
  				DEFAULT: 'var(--card)',
  				foreground: 'var(--card-foreground)'
  			},
  			popover: {
  				DEFAULT: 'var(--popover)',
  				foreground: 'var(--popover-foreground)'
  			},
  			primary: {
  				DEFAULT: 'var(--primary)',
  				foreground: 'var(--primary-foreground)'
  			},
  			secondary: {
  				DEFAULT: 'var(--secondary)',
  				foreground: 'var(--secondary-foreground)'
  			},
  			muted: {
  				DEFAULT: 'var(--muted)',
  				foreground: 'var(--muted-foreground)'
  			},
  			accent: {
  				DEFAULT: 'var(--accent)',
  				foreground: 'var(--accent-foreground)'
  			},
  			destructive: {
  				DEFAULT: 'var(--destructive)',
  				foreground: 'var(--destructive-foreground)'
  			},
  			border: 'var(--border)',
  			input: 'var(--input)',
  			ring: 'var(--ring)',
  			chart: {
  				'1': 'var(--chart-1)',
  				'2': 'var(--chart-2)',
  				'3': 'var(--chart-3)',
  				'4': 'var(--chart-4)',
  				'5': 'var(--chart-5)'
  			},
  			sidebar: {
  				DEFAULT: 'var(--sidebar)',
  				foreground: 'var(--sidebar-foreground)',
  				primary: 'var(--sidebar-primary)',
  				'primary-foreground': 'var(--sidebar-primary-foreground)',
  				accent: 'var(--sidebar-accent)',
  				'accent-foreground': 'var(--sidebar-accent-foreground)',
  				border: 'var(--sidebar-border)',
  				ring: 'var(--sidebar-ring)'
  			}
  		},
  		fontFamily: {
  			sans: 'var(--font-sans)',
  			serif: 'var(--font-serif)',
  			mono: 'var(--font-mono)'
  		},
  		boxShadow: {
  			'2xs': 'var(--shadow-2xs)',
  			'xs': 'var(--shadow-xs)',
  			'sm': 'var(--shadow-sm)',
  			'DEFAULT': 'var(--shadow)',
  			'md': 'var(--shadow-md)',
  			'lg': 'var(--shadow-lg)',
  			'xl': 'var(--shadow-xl)',
  			'2xl': 'var(--shadow-2xl)'
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
  			},
  			'fade-in': {
  				from: {
  					opacity: '0',
  					transform: 'translateY(4px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'slide-in': {
  				from: {
  					transform: 'translateX(-6px)',
  					opacity: '0'
  				},
  				to: {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			'scale-in': {
  				from: {
  					transform: 'scale(0.97)',
  					opacity: '0'
  				},
  				to: {
  					transform: 'scale(1)',
  					opacity: '1'
  				}
  			},
  			'slide-up': {
  				from: {
  					transform: 'translateY(4px)',
  					opacity: '0'
  				},
  				to: {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			'slide-down': {
  				from: {
  					transform: 'translateY(-4px)',
  					opacity: '0'
  				},
  				to: {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			'badge-in': {
  				from: {
  					transform: 'scale(0.8) translateY(-2px)',
  					opacity: '0'
  				},
  				to: {
  					transform: 'scale(1) translateY(0)',
  					opacity: '1'
  				}
  			},
  			'badge-out': {
  				from: {
  					transform: 'scale(1)',
  					opacity: '1'
  				},
  				to: {
  					transform: 'scale(0.8)',
  					opacity: '0'
  				}
  			},
  			'shimmer': {
  				'0%': {
  					transform: 'translateX(-100%)'
  				},
  				'100%': {
  					transform: 'translateX(100%)'
  				}
  			},
  			'pulse-subtle': {
  				'0%, 100%': {
  					opacity: '1'
  				},
  				'50%': {
  					opacity: '0.8'
  				}
  			},
  			'bounce-subtle': {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-2px)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
  			'accordion-up': 'accordion-up 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
  			'fade-in': 'fade-in 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
  			'slide-in': 'slide-in 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
  			'scale-in': 'scale-in 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)',
  			'slide-up': 'slide-up 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
  			'slide-down': 'slide-down 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
  			'badge-in': 'badge-in 0.12s cubic-bezier(0.34, 1.56, 0.64, 1)',
  			'badge-out': 'badge-out 0.1s cubic-bezier(0.4, 0, 1, 1)',
  			'shimmer': 'shimmer 2s infinite',
  			'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
  			'bounce-subtle': 'bounce-subtle 0.6s ease-in-out infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
