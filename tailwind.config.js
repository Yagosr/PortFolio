/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      screens: {
        sm: '100px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'dark-gray': '#090e16',
        'gray':'#18263b',
        'purple': '#2c2156',
        'dark-purple':'#313866',
        'wine':'#352F44',
        'white':'#ffffff',
        'black':'#000000',
        'purple-nav': '#0f1120'
      },
      fontFamily: {
        RobotoMono: ['Black Ops One', 'cursive']
      },
    },
    extend: {
  },
  plugins: [],
}
