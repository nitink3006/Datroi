/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#E6EBF5',
          100: '#C2CEE8',
          200: '#99ADDA',
          300: '#708CCC',
          400: '#4E73C1',
          500: '#2C5BB6',
          600: '#0A2463',
          700: '#081E52',
          800: '#061742',
          900: '#040F31',
        },
        secondary: {
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#D4D4D4',
          300: '#C4C4C4',
          400: '#B3B3B3',
          500: '#A3A3A3',
          600: '#929292',
          700: '#828282',
          800: '#717171',
          900: '#616161',
        },
        accent: {
          50: '#FBF7E9',
          100: '#F5EBC7',
          200: '#EFDF9E',
          300: '#E9D375',
          400: '#E3C74C',
          500: '#D4AF37',
          600: '#B3942F',
          700: '#927927',
          800: '#715E1F',
          900: '#504317',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
      },
    },
  },
  plugins: [],
}