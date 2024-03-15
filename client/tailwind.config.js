/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,vue,js,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      aliceBlue: '#EFF5FF',
      primary: '#0D45BB',
      decorator: '#762B89',
      success: '#1DC25F',
      danger: '#EA1750',
      warning: '#FFEE53',
      information: '#9972E1',
      light: '#F2F2F2',
      grey: '#C4C4C4',
      dark: '#06113F',
      darkblue: '#2B2D89',
      black: '#000000',
      white: '#ffffff',
      gradients: {
        peranoPurple: '#AC9EFF',
        peranoBlue: '#9DB9FF',
        orchid: '#DB86DD',
        bilobaFlower: '#B38FFF'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1420px',
      '3xl': '1600px',
      '4xl': '1800px',
    },
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif']
    }
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
  ],
  daisyui: {
    themes: false,
    darkTheme: 'dark',
    base: false,
    logs: false,
  },
}