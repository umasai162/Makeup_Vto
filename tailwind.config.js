/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-burgundy': '#240711',
        'dark-wine': '#3A0C18',
        'burgundy': '#56152A',
        'rose-accent': '#B85C72',
        'soft-blush': '#F2C9D2',
        'light-blush': '#F9E5E9',
        'cream': '#FFF9F5',
        'warm-white': '#FCFAF8',
        'charcoal': '#241E20',
        'muted-text': '#756A6D',
        'border-pink': '#E9D9DD',
        'ai-accent': '#D88EA1',
        // Backward-compatible plum & rose scales mapped to palette
        plum: {
          50: '#FFF9F5',
          100: '#F9E5E9',
          200: '#F2C9D2',
          300: '#D88EA1',
          400: '#B85C72',
          500: '#8A3B4F',
          600: '#56152A',
          700: '#420F1F',
          800: '#3A0C18',
          900: '#240711',
          950: '#17030A',
        },
        rose: {
          50: '#FFF9F5',
          100: '#F9E5E9',
          200: '#F2C9D2',
          300: '#D88EA1',
          400: '#B85C72',
          500: '#B85C72',
          600: '#A04A5F',
          700: '#85374A',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Plus Jakarta Sans', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        'beauty-sm': '0 2px 12px rgba(36, 7, 17, 0.04)',
        'beauty-md': '0 8px 30px rgba(36, 7, 17, 0.08)',
        'beauty-lg': '0 20px 45px rgba(36, 7, 17, 0.12)',
        'glow': '0 0 30px rgba(216, 142, 161, 0.35)',
      },
      animation: {
        'scan': 'scanLine 2.5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        scanLine: {
          '0%, 100%': { top: '0%' },
          '50%': { top: '95%' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.88, transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
