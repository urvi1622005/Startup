import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './Components/App';
import theme from './Components/theme'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </StrictMode>
);
