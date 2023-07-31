/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  animation: {
    float: 'float 3s ease-in-out infinite',
  },
  keyframes: {
    float: {
      '0%': { transform: 'translate(0, 0px);' },
      '50%': { transform: 'translate(0, 15px);' },
      '100%': { transform: 'translate(0, -0px);' },
    },
  },
  plugins: [],
};
