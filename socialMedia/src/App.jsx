// import React, { useEffect } from 'react';
// import { ChakraProvider, Box, Flex, Text } from '@chakra-ui/react';
// import SocialLinks from './Components/SocialLinks';
// import { useLocation } from 'react-router-dom';
// import LocomotiveScroll from 'locomotive-scroll';
// // import 'locomotive-scroll/dist/locomotive-scroll.css';

// function App() {
//   const location = useLocation();

//   useEffect(() => {
//     const scroll = new LocomotiveScroll({
//       el: document.querySelector('[data-scroll-container]'),
//       smooth: true,
//     });

//     return () => scroll.destroy();
//   }, [location]);

//   return (
//     <ChakraProvider>
//       <Box data-scroll-container>
//         <Flex direction="column" minH="100vh" align="center" justify="center">
//           <Text fontSize="4xl" mb={8}>Connect with Us</Text>
//           <SocialLinks />
//         </Flex>
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default App;
// import { motion } from 'framer-motion';
// import { ChakraProvider, Box, VStack, Heading } from '@chakra-ui/react';
// import SocialLinks from './Components/SocialLinks';

// function App() {
//   return (
//     <ChakraProvider>
//       <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center">
//         <VStack spacing={8}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Heading>Connect with Us</Heading>
//           </motion.div>
//           <SocialLinks />
//         </VStack>
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default App;
import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import SocialLinks from './Components/SocialLinks';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" bg="gray.50">
      <SocialLinks />
      </Box>
    </ChakraProvider>
  );
}

export default App;
