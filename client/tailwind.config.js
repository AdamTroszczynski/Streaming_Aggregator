/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,vue,js,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      primary: '#0D45BB',
      decorator: '#762B89',
      success: '#1DC25F',
      danger: '#EA1750',
      warning: '#FFEE53',
      info: '#9972E1',
      light: '#F2F2F2',
      dark: '#06113F',
      black: '#000000',
      white: '#ffffff'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1600px',
      '4xl': '1800px',
    },
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