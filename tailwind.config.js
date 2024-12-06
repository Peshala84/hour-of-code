/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "hour-of-code": {
          "primary": "#2bb8c0",      
          "secondary": "#73dbe0",   
          "tertiary": "#c4eef1",
          "nav-primary":"#000000",     
          "primary-dark": "#22939c", 
          "secondary-dark": "#003833cc",
          "tertiary-dark": "#0f4c54",
          "nav-primary-dark":"#ffffff"
        },
      },
      animation: {
        movedown: 'movedown 1s ease forwards',
        moveline: 'moveline 3s linear forwards'
      },
      keyframes: {
        movedown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        moveline: {
          '0%': { height: '0' },
          '100%': { height: '100%' }
        }
      },
      animationDelay: {
        '0': '1s',
        '1': '2s',
        '2': '3s',
        '3': '4s',
        '4': '5s',
        '5': '6s'
      }
    }
  },
  plugins: [],
};
