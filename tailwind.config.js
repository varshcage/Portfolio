/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        'cream-dark': '#F2EDE4',
        charcoal: '#1C1C1E',
        'charcoal-light': '#2D2D2F',
        warm: '#6B5B47',
        gold: '#C9A84C',
        'gold-light': '#E8C96B',
        'gold-dark': '#A8863A',
        muted: '#8C8278',
        'border-warm': '#E0D8CE',
      },
      fontFamily: {
        alexana:['alexana'],
        display: ['"Playfair Display"', 'Georgia', 'serif', 'alexana'],
        body: ['"Nunito"', 'sans-serif',],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
