// const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  
  theme: {
    fontFamily: {
      'lexend': ['Lexend'],
      'calistoga': ['Calistoga']
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        pine: "hsl(var(--pine-green))",
        forgetmenot: "hsl(var(--forgetmenot-blue))",
        poppy: "hsl(var(--pine-poppy-red))",
        dandelion: "hsl(var(--dandelion-yellow))",
      },
      dropShadow: {
        'rainbow-left': [
          '-4px 4px 0 #F87474',
          '-4px 4px 0 #F8CB74',
          '-4px 4px 0 #51977B',
          '-4px 4px 0 #516597'
        ],
        'rainbow-center': [
          '0px 6px 0px #F87474',
          '0px 6px 0px #F8CB74',
          '0px 6px 0px #51977B',
          '0px 6px 0px #516597'
        ],
        'rainbow-right': [
          '4px 4px 0 #F87474',
          '4px 4px 0 #F8CB74',
          '4px 4px 0 #51977B',
          '4px 4px 0 #516597'
        ],
        'aura': [
          '0px 2px 2px #ad674e',
          '0px 1px 1px #ad674e'
        ]
      },
      borderRadius: {
      	xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        "collapsible-up": {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
        "page-load": {
          from: {
            transform: 'translateY(2.5%)',
            filter: 'blur(1px)',
            opacity: '0%'
          },
          to: {
              transform: 'translateY(0)',
              filter: 'blur(0px)',
              opacity: '100%'
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
        "page-load": 'page-load 1.2s ease'
      },
    },
  },
  // plugins: [animate],
}