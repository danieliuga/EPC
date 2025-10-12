/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5B027',
        ink: {
          DEFAULT: '#1A1A1A',
          subtle: '#2A2A2A',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F7F7F8',
        },
        border: '#E9EAEC',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Sora', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        md: '10px',
      },
      boxShadow: {
        soft: '0 6px 24px rgba(0,0,0,0.06)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

