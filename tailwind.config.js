/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    // set default font
    fontFamily: {
      body: ['Brasley', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // main color
      primary: {
        thin: '#FFF5E9',
        light: '#ffbe70',
        DEFAULT: '#F89723',
        dark: '#F89723'
      },
      secondary: {
        light: '#9bc0d1',
        DEFAULT: '#EC4137',
        dark: '#7b99a7'
      },
      success: {
        light: '#87DABE',
        DEFAULT: '#4ACEA1',
        dark: '#4A7868'
      },
      warning: {
        light: '#EE3E2E',
        DEFAULT: '#EFC987',
        dark: '#EA9B15'
      },
      error: {
        light: '#FFC562',
        DEFAULT: '#FF2047',
        dark: '#9D342A'
      },
      default: {
        light: '#FAFAFA',
        DEFAULT: '#E3E3E3',
        dark: '#C7C7C7'
      },
      // end main color
      // "accent-primary": "#BDEBFF",
      // "blue-gray": "rgba(232, 241, 247, 1)",
      // "accent-tertiary": "#C65B52",
      white: {
        DEFAULT: '#FFFFFF',
        1: '#FAFAFA',
        2: '#AFAFAF'
      },
      black: {
        DEFAULT: '#171717',
        light: '#00000099',
        1: '#171717',
        2: '#383838'
      },
      gray: {
        DEFAULT: '#787878',
        1: '#C6C6C6',
        2: '#8E8E8E',
        3: '#DCDCDC',
        4: '#F3F3F3',
        5: '#EFEFEF',
        6: '#939393',
        7: '#BDBDBD',
        8: '#7C7C7C',
        9: '#B9B9B9',
        10: '#6C6C6C',
        11: '#D9D9D9',
        12: '#EEEEEE',
        13: '#EAEAEA'
      },
      green: {
        DEFAULT: '#4ACEA1'
      },
      red: {
        DEFAULT: '#FF2047'
      },
      blue: {
        DEFAULT: '#1974F9'
      },
      yellow: {
        DEFAULT: '#EFC987'
      },
      disabled: '#AFAFAF'
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1400px'
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      boxShadow: {
        '3xl': '0 5px 27px -6px rgba(0, 0, 0, 0.3)'
      }
    }
  }
}
