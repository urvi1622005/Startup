import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import InfluencerProfile from './Components/InfluencerProfile';

function App() {
  return (
    <ChakraProvider>
      <InfluencerProfile />
    </ChakraProvider>
  );
}

export default App;
