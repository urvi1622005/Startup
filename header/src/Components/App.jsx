import { useState } from 'react'
import '../Components/App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './Header.jsx';

function App() {
  

  return (
    <>
      <ChakraProvider>
        <Header/>

      </ChakraProvider>
    </>
  )
}

export default App
// import React from 'react';
// import Header from './Header'; // Import your Header component

// function App() {
//   return (
//     <div>
//       <Header />
      
//     </div>
//   );
// }

// export default App;
