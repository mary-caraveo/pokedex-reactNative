import { extendTheme } from 'native-base';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#d9fffd',
      100: '#adfff5',
      200: '#7dffee',
      300: '#4dffe8',
      400: '#26ffe1',
      500: '#14e6c7',
      600: '#00b39b',
      700: '#00806f',
      800: '#004e42',
      900: '#001c16',
    },

    secondary: {
      50: '#faecfc',
      100: '#e1cee6',
      200: '#c9afd1',
      300: '#b390bd',
      400: '#9c70a8',
      500: '#83578f',
      600: '#664370',
      700: '#4a2f50',
      800: '#2e1c33',
      900: '#140716',
    },

    tertiary: {
      50: '#ffe4e6',
      100: '#fcb7b9',
      200: '#f58989',
      300: '#f05b64',
      400: '#eb2c44',
      500: '#d31436',
      600: '#a40f35',
      700: '#760a2e',
      800: '#480420',
      900: '#1e000e',
    },
  },

  components: {
    Button: {
      defaultProps: {
        colorScheme: 'primary',
      },
    },
  },
});

export default theme;
