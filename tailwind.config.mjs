/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f5f1ea',
          100: '#ebe4d6',
          200: '#d4c5a8',
          300: '#b8a37a',
          400: '#8b6f47',
          500: '#5a4a30',
          600: '#3d3220',
          700: '#2a2218',
          800: '#1a1612',
          900: '#0d0b08',
        },
        cream: {
          50: '#faf7f2',
          100: '#f5f1ea',
          200: '#ebe4d6',
        },
        wood: {
          light: '#d4a574',
          DEFAULT: '#8b5a3c',
          dark: '#5a3826',
        },
        gold: {
          light: '#e6c98a',
          DEFAULT: '#c9a961',
          dark: '#a08644',
        },
        lacquer: {
          black: '#0d0b08',
          gray: '#1a1612',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        shimmer: 'shimmer 2s linear infinite',
        'border-beam': 'border-beam 6s linear infinite',
        'shine': 'shine 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'border-beam': {
          '100%': { 'offset-distance': '100%' },
        },
        shine: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(37, 211, 102, 0.6)' },
          '50%': { boxShadow: '0 0 40px rgba(37, 211, 102, 0.9)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-shine': 'linear-gradient(110deg, transparent 33%, #c9a961 50%, transparent 67%)',
      },
    },
  },
  plugins: [],
};
