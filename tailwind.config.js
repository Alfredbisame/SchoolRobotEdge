/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-violet': 'rgb(88, 14, 88)',
        'accent-green': 'rgb(20, 159, 110)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(34, 197, 94, 0.3)',
        'glow-violet': '0 0 20px rgba(139, 92, 246, 0.3)',
        'neon-green': '0 0 5px rgb(34, 197, 94), 0 0 10px rgb(34, 197, 94), 0 0 15px rgb(34, 197, 94)',
        'neon-violet': '0 0 5px rgb(139, 92, 246), 0 0 10px rgb(139, 92, 246), 0 0 15px rgb(139, 92, 246)',
      }
    },
  },
  plugins: [],
};