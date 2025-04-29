/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'Inter', 'sans-serif'],
        display: ['Clash Display', 'Inter var', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        ai: {
          50: '#eef6ff',
          100: '#d8eaff',
          200: '#b8daff',
          300: '#85c4ff',
          400: '#56a4ff',
          500: '#2981ff',
          600: '#0e62f7',
          700: '#0550e3',
          800: '#0a42b8',
          900: '#0e3993',
          950: '#0c235a',
        },
        dark: {
          100: '#d5d6d8',
          200: '#aaadb1',
          300: '#80848b',
          400: '#555b64',
          500: '#2b323d',
          600: '#222831',
          700: '#1a1e25',
          800: '#11151a',
          900: '#090a0d',
        },
        glow: {
          blue: '#0062ff',
          purple: '#8a3ffc',
          teal: '#00b8d9',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'typing': 'typing 2.5s steps(40, end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
        },
      },
      backgroundImage: {
        'ai-gradient': 'linear-gradient(90deg, #0062ff, #8a3ffc, #0062ff)',
        'mesh-gradient': 'radial-gradient(at 100% 0%, rgba(0, 98, 255, 0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(138, 63, 252, 0.15) 0px, transparent 50%)',
        'dot-pattern': 'radial-gradient(rgba(138, 63, 252, 0.1) 1px, transparent 1px)',
      },
      boxShadow: {
        'glow-blue': '0 0 15px rgba(0, 98, 255, 0.5)',
        'glow-purple': '0 0 15px rgba(138, 63, 252, 0.5)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      backdropBlur: {
        'glass': '10px',
      },
      backgroundSize: {
        'dot-large': '24px 24px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.glass-card': {
          background: 'rgba(255, 255, 255, 0.8)',
          'backdrop-filter': 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.3)',
          'box-shadow': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        },
        '.glass-card-dark': {
          background: 'rgba(34, 40, 49, 0.8)',
          'backdrop-filter': 'blur(10px)',
          '-webkit-backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.05)',
          'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        },
        '.text-gradient': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
          'background-image': 'linear-gradient(90deg, #0062ff, #8a3ffc)',
        },
        '.text-gradient-animated': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
          'background-image': 'linear-gradient(90deg, #0062ff, #8a3ffc, #0062ff)',
          'background-size': '200% auto',
          'animation': 'gradientShift 8s ease infinite',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}