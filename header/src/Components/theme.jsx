// theme.js
import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light', // or 'dark'
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;
