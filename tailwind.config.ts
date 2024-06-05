import aspectRatio, { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import daisyui from 'daisyui'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        ...defaultTheme.screens,
        '3xl': '1600px',
        '4xl': '1920px'
      },
      colors: {
        primary: '#a36146'
      },
      fontFamily: {
        'domaine': 'Domaine Sans Fine'
      }
    },

  },
  variants: {
    fluidType: ['responsive']
  },
  plugins: [
    aspectRatio,
    require('tailwindcss-fluid-type')({
      settings: {
        prefix: 'fluid-',
      },
      values: {
        'lg': [0.1, {
          lineHeight: 1.3
        }]
      }
    }),
    daisyui
  ],
  daisyui: {
    themes: ['light'],
    base: true,
    styled: true,
    logs: true,
  }
};

export default config;
