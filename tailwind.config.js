module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        pale: '#e0ddd8ff',
        darkPale: '#ccbfb7ff',
        beige: '#d2bdacff',
        lightGreen: '#c0c1b1ff',
        brown: '#976445ff',
        darkGreen: '#56584aff',
      },
      fontFamily: {
        baskervville: ['Baskervville', 'serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out',
        bounce: 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};
