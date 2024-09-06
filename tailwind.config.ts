const animate = require("tailwindcss-animate")

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
      'sans': ['Lexend', 'Arial', 'helvetica', 'sans-serif'],
      'serif': ['Calistoga', 'Georgia', 'serif']
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        'xs': '475px',
      },
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
        apricot: {
          50: '#FFFAEF',
          100: '#FFEEDF',
          200: '#FFDFCD',
          300: '#FFD3BE',
          400: '#FFC9B0',
          500: '#FFC0A4',
          600: '#FFB797',
          700: '#FDAD8B',
          800: '#F9A37E',
          900: '#F3976F',
          950: '#41090b',
        },
        // apricot: {
        //   50: '#fef3ee',
        //   100: '#fee3d6',
        //   200: '#fbc4ad',
        //   300: '#f89571',
        //   400: '#f56742',
        //   500: '#f1401e',
        //   600: '#e32713',
        //   700: '#bc1a12',
        //   800: '#951717',
        //   900: '#781716',
        //   950: '#41090b',
        // },
        mortar: {
          50: '#f8f7f8',
          100: '#f3f0f3',
          200: '#e9e1e9',
          300: '#d7cad5',
          400: '#bea8bb',
          500: '#a88ca3',
          600: '#907289',
          700: '#795d72',
          800: '#654f5f',
          900: '#5b4856',
          950: '#32252e',
        },
        pine: {
          50: '#f1fde8',
          100: '#defacd',
          200: '#c0f6a0',
          300: '#98ed69',
          400: '#72e03b',
          500: '#53c61c',
          600: '#3c9e12',
          700: '#2f7813',
          800: '#2a6015',
          900: '#255116',
          950: '#0f2d06',
        },
        forgetmenot: {
          50: '#f2f7fd',
          100: '#e3ecfb',
          200: '#c1daf6',
          300: '#8abbef',
          400: '#4b98e5',
          500: '#247bd3',
          600: '#1660b3',
          700: '#134c91',
          800: '#144278',
          900: '#153660',
          950: '#0f2442',
        },
        poppy: {
          50: '#fef3f2',
          100: '#fce9e7',
          200: '#f9d3d2',
          300: '#f4afad',
          400: '#ec8280',
          500: '#e15254',
          600: '#cc323c',
          700: '#ac242f',
          800: '#90212e',
          900: '#7c1f2d',
          950: '#63121c',
        },
        daisy: {
          50: '#fefbe7',
          100: '#fcf7cb',
          200: '#f9f19d',
          300: '#f2e864',
          400: '#e6dc35',
          500: '#ccc416',
          600: '#a39f0d',
          700: '#7c7b0f',
          800: '#636312',
          900: '#525314',
          950: '#2c2e05',
        },
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
        "rolling-text": {
          '0%': {
            top: '0'
          },

          '8%': {
              top: '0'
          },

          '10%': {
              top: 'calc(var(--jump-length)*-1)'
          },

          '18%': {
              top: 'calc(var(--jump-length)*-1)'
          },

          '20%': {
              top: 'calc(var(--jump-length)*-2)'
          },

          '28%': {
              top: 'calc(var(--jump-length)*-2)'
          },

          '30%': {
              top: 'calc(var(--jump-length)*-3)'
          },

          '38%': {
              top: 'calc(var(--jump-length)*-3)'
          },

          '40%': {
              top: 'calc(var(--jump-length)*-4)'
          },

          '48%': {
              top: 'calc(var(--jump-length)*-4)'
          },

          '50%': {
              top: 'calc(var(--jump-length)*-5)'
          },

          '58%': {
              top: 'calc(var(--jump-length)*-5)'
          },

          '60%': {
              top: 'calc(var(--jump-length)*-6)'
          },

          '68%': {
              top: 'calc(var(--jump-length)*-6)'
          },

          '70%': {
              top: 'calc(var(--jump-length)*-7)'
          },

          '78%': {
              top: 'calc(var(--jump-length)*-7)'
          },

          '80%': {
              top: 'calc(var(--jump-length)*-8)'
          },

          '88%': {
              top: 'calc(var(--jump-length)*-8)'
          },

          '90%': {
              top: 'calc(var(--jump-length)*-9)'
          },

          '98%': {
              top: 'calc(var(--jump-length)*-9)'
          }
        },
        "page-load": {
          from: {
            transform: 'translateY(2%)',
            filter: 'blur(2px) contrast(200%) brightness(1000%) saturation(100%)',
            opacity: '0%'
          },
          to: {
              transform: 'translateY(0)',
              filter: 'blur(0px) contrast(100%) brightness(100%)',
              opacity: '100%'
          }
        },
        "off-screen": {
          from: {
            transform: 'translateY(100%)'
          },
          to: {
            transform: 'translateY(0%)'
          }
        },
        "wiggle": {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '10%, 90%': {
            transform: 'rotate(5deg)'
          },
          
          '25%, 75%': {
            transform: 'rotate(-10deg)'
          },
        
          '50%': {
            transform: 'rotate(15deg)'
          },
        
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
        "rolling-text": 'rolling-text 24s ease-in-out infinite',
        "page-load": 'page-load 1.2s ease',
        "off-screen": 'off-screen 1.2s',
        "wiggle": "wiggle .75s ease-in-out"
      },
    },
  },
  plugins: [animate],
  // plugins: [
  //     require('tailwindcss-animated')
  // ]
}