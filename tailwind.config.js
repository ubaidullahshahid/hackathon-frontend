/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryC: 'var(--primary-color)',
        secondaryC: 'var(--secondary-color)',
        accentC: 'var(--accent-color)',
        backgroundC: 'var(--background-color)',
        textC: 'var(--text-color)',
      },
      animation: {
        'fade-in-out': 'fade-in 0.3s ease-out, fade-out 0.3s ease-in 2s',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      }
    },
  },
  plugins: [],
};
