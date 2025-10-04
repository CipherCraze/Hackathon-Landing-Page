/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        kasavu: '#E8B923',
        saffron: '#FF7A00',
        ivory: '#FFF8E7',
        deepgreen: '#0F5132',
        vermilion: '#E65A0A',
        charcoal: '#1B1B1B',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['"Manjari"', 'serif'],
      },
      backgroundImage: {
        'pookalam-radial': 'radial-gradient(circle at center, rgba(232, 185, 35, 0.35), transparent 55%)',
        'backwater-gradient': 'linear-gradient(135deg, rgba(15, 81, 50, 0.85), rgba(230, 90, 10, 0.55))',
      },
      boxShadow: {
        kasavu: '0 0 35px rgba(232, 185, 35, 0.35)',
      },
      animation: {
        float: 'float 12s ease-in-out infinite',
        sway: 'sway 8s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(232, 185, 35, 0.35)' },
          '50%': { boxShadow: '0 0 25px rgba(232, 185, 35, 0.55)' },
        },
      },
    },
  },
  plugins: [],
}

