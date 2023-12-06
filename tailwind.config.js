/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  safelist: [
    {
      pattern: /bg-(cloudy|success|blue|blue_2|red|error|warning)-(20|50|60|100|700|general)/,
    },
    'contents', 
    'italic', 
    'cursor-pointer', 
    'bg-white', 
    'bg-cloudy-110',
    'bg-squash-1',
    'bg-squash-3',
    'rounded-br-lg', 
    'bg-red_general', 
    'bg-blue_general',
    'bg-green_general',
    'text-warning-700',
    'text-error-700',
    'z-60',
    'z-70',
    'z-80',
    'z-90',
    'border-gray-300',
    'hover:bg-yellow-0',
    'hover:bg-squash-1',
    'group-hover:hidden',
    'group-hover:block',
    'focus:outline-none', 
    'focus:border-primary-500', 
    'focus:ring-0', 
    'focus:ring-primary-500'
  ],
  theme: {
    extend: {
      fontFamily: { 
        "roboto": ['Roboto', 'sans-serif'],
        "roboto_condensed": ['Roboto Condensed', 'sans-serif'] 
      },
      boxShadow: {
        'one': '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
        'xs': '0px 1px 2px 0px rgba(16, 24, 40, 0.05);',
        'ds': '0px 12px 16px 0px rgba(129, 134, 142, 0.12);',
        'light_raised': '0px 16px 20px 4px rgba(129, 134, 142, 0.16);',
        '8': '0px 8px 16px 0px rgba(129, 134, 142, 0.08);',
      },
      zIndex: {
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,
      },
    },
    colors: {
      transparent: "transparent",
      current: "current",
      black: "#000000",
      white: "#ffffff",
      primary: {
        1: '#FFF0D9',
        2: '#FFF3D6',
        50: '#F9D88F',
        100: '#F9D070',
        300: '#FAC851',
        500: '#FDBA12',
        700: '#E4A309',
        900: '#CE8E00',
      },
      secondary: {
        50: '#FFFFFF',
        100: '#DEDDDE',
        300: '#BCBDC0',
        500: '#7D8085',
        700: '#444950',
        900: '#10181F',
      },
      success: {
        50: '#ECFDF3',
        100: '#D1FADF',
        700: '#027A48',
      },
      
      green_2: {
        20: '#E5F6E5',
      },
      green: {
        50: '#87D8AF',
        90: '#3B9D3F',
        100: '#65CD9C',
        300: '#44C28A',
        500: '#00AC64',
        700: '#008C4F',
        900: '#006B3A',
        'btn': '#49A462'
      },
      "green_general": '#4CAF50',
      lime: {
        50: '#FDFF9F',
        100: '#EBF27B',
        300: '#D8E657',
        500: '#B3CB0D',
        700: '#96B20B',
        900: '#3D6300',
      },
      navy: {
        50: '#91A3E2',
        100: '#7889CC',
        300: '#5E5EB6',
        500: '#2B3980',
        700: '#162568',
        900: '#001044',
      },
      blue: {
        50: '#8DE1FF',
        90: '#1480D8',
        100: '#73D2F6',
        300: '#5AC3EE',
        500: '#2FA6D7',
        700: '#1489B8',
        900: '#006D93',
      },
      blue_2: {
        20: '#E0EEFA',
        50: '#EFF8FF',
        700: '#175CD3'
      },
      "blue_general": '#2196F3',
      red: {
        8: '#E12121',
        50: '#FFB6BB',
        90: '#CD1924',
        100: '#F48F94',
        300: '#E9686E',
        500: '#D21920',
        700: '#AD0D15',
        900: '#87000A',
      },
      "red_general": '#E52A34',
      orange: {
        50: '#FFD1A4',
        90: '#D75E09',
        100: '#FCC183',
        300: '#F9B061',
        500: '#F3902F',
        700: '#F1701F',
        900: '#EF5120',
      },
      orange_2: {
        20: '#FAEADF',
        50: '#FFF6ED',
        700: '#C4320A',
      },
      purple: {
        50: '#C181F2',
        100: '#AA6CD8',
        300: '#9357BF',
        500: '#6B3293',
        700: '#4B1771',
        900: '#300056',
      },
      chocolate: {
        50: '#BC9273',
        100: '#AA8161',
        300: '#996F4E',
        500: '#774F2E',
        700: '#573316',
        900: '#381902',
      },
      gray: {
        1: '#D9D9D9',
        60: '#B0B8C7',
        100: '#F2F4F7',
        300: '#D0D5DD',
        700: '#344054',
        900: '#381902',
      },
      gray_2: {
        100: '#FDFDFD',
        500: '#667085',
        900: '#101828',
      },
      grey: {
        500: '#E6E6E6',
      },
      warning: {
        50: "#FFFAEB",
        100: "#FEF0C7",
        700: '#B54708',
        800: '#AE4408',
        1000: '#FFEBB1'
      },
      "warning_b_general": '#F26D0F',
      "warning_bg_general": '#FAF4E0',
      error: {
        50: "#FEF3F2",
        100: '#FEE4E2',
        500: "#F04438",
        700: "#B42318"
      },
      cloudy: {
        0: '#FAFBFC',
        10: '#F6F8FB',
        20: '#F2F5FA',
        30: '#E8ECF4',
        40: '#DADFEA',
        50: '#CFD3DB',
        70: '#959DAC',
        80: '#79808F',
        90: '#5E677B',
        100: '#FFFFFF',
        110: '#2C313A',
        120: '#1A202C',
        130: '#1A1D22',
        140: '#E4E7EC',
      },
      gray_natural: {
        100: '#4B5262',
        1300: '#0A090B'
      },
      yellow: {
        0: '#FEF9ED',
        20: '#FFECBD'
      },
      squash: {
        1: '#F3F3F3',
        3: '#FFE9BA'
      },
      semi_white: {
        1: 'rgba(255, 255, 255, 0.00)',
      },
      semi_black: {
        100: '#181818',
      }
    }
  },
  plugins: [],
}