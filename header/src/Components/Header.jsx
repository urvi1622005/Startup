import React from 'react';
import {
  Box,
  Flex,
  Text,
  Stack,
  Collapse,
  Icon,
  Link,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion'; // Import Framer Motion
import { FaHome, FaInfoCircle, FaServicestack, FaPhone } from 'react-icons/fa'; // Import icons from react-icons
import './header.css'; // Import the custom CSS file

const MotionBox = motion(Box); // Create a motion Box component

const NavItem = ({ children, href, icon }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    className="nav-item" // Apply custom class
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}>
    <Flex align="center">
      <Icon as={icon} mr={2} /> {/* Add icon */}
      {children}
    </Flex>
  </Link>
);

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <Icon
            onClick={onToggle}
            as={isOpen ? CloseIcon : HamburgerIcon}
            w={5}
            h={5}
            className="menu-icon" // Apply custom class
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
            className="logo" // Apply custom class
          >
            Logo
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <Stack direction={'row'} spacing={4}>
              <NavItem href={'#home'} icon={FaHome}>Home</NavItem>
              <NavItem href={'#about'} icon={FaInfoCircle}>About</NavItem>
              <NavItem href={'#services'} icon={FaServicestack}>Services</NavItem>
              <NavItem href={'#contact'} icon={FaPhone}>Contact</NavItem>
            </Stack>
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack
          bg={useColorModeValue('white', 'gray.800')}
          p={4}
          display={{ md: 'none' }}>
          <NavItem href={'#home'} icon={FaHome}>Home</NavItem>
          <NavItem href={'#about'} icon={FaInfoCircle}>About</NavItem>
          <NavItem href={'#services'} icon={FaServicestack}>Services</NavItem>
          <NavItem href={'#contact'} icon={FaPhone}>Contact</NavItem>
        </Stack>
      </Collapse>
    </MotionBox>
  );
}
// import React from 'react';
// import {
//   Box,
//   Flex,
//   Text,
//   Stack,
//   Collapse,
//   Icon,
//   Link,
//   useColorModeValue,
//   useBreakpointValue,
//   useDisclosure,
//   IconButton,
//   InputGroup,
//   Input,
//   InputLeftElement,
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import { FaMoon, FaSun, FaHome, FaInfoCircle, FaServicestack, FaPhone, FaSearch } from 'react-icons/fa';
// import { motion } from 'framer-motion'; // Import Framer Motion
// import './header.css'; // Import custom CSS

// const MotionBox = motion(Box); // Create a motion Box component

// const NavItem = ({ children, href, icon }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     className="nav-item"
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={href}
//   >
//     <Flex align="center">
//       <Icon as={icon} mr={2} />
//       {children}
//     </Flex>
//   </Link>
// );

// const ColorModeToggle = () => {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <IconButton
//       icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
//       isRound={true}
//       size="md"
//       onClick={toggleColorMode}
//       aria-label="Toggle color mode"
//     />
//   );
// };

// const SearchBar = () => (
//   <InputGroup w={{ base: '100%', md: '400px' }}>
//     <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
//     <Input type="search" placeholder="Search..." />
//   </InputGroup>
// );

// const AnimatedLogo = () => (
//   <motion.div
//     whileHover={{ scale: 1.1 }}
//     whileTap={{ scale: 0.9 }}
//     className="logo"
//   >
//     <Text
//       textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
//       fontFamily={'heading'}
//       color={useColorModeValue('gray.800', 'white')}
//     >
//       Logo
//     </Text>
//   </motion.div>
// );

// export default function Header() {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//       <Flex
//         bg={useColorModeValue('white', 'gray.800')}
//         color={useColorModeValue('gray.600', 'white')}
//         minH={'60px'}
//         py={{ base: 2 }}
//         px={{ base: 4 }}
//         borderBottom={1}
//         borderStyle={'solid'}
//         borderColor={useColorModeValue('gray.200', 'gray.900')}
//         align={'center'}
//       >
//         <Flex
//           flex={{ base: 1, md: 'auto' }}
//           ml={{ base: -2 }}
//           display={{ base: 'flex', md: 'none' }}
//         >
//           <Icon
//             onClick={onToggle}
//             as={isOpen ? CloseIcon : HamburgerIcon}
//             w={5}
//             h={5}
//             className="menu-icon"
//           />
//         </Flex>
//         <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
//           <AnimatedLogo />
//           <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
//             <Stack direction={'row'} spacing={4} align="center">
//               <NavItem href={'#home'} icon={FaHome}>
//                 Home
//               </NavItem>
//               <NavItem href={'#about'} icon={FaInfoCircle}>
//                 About
//               </NavItem>
//               <NavItem href={'#services'} icon={FaServicestack}>
//                 Services
//               </NavItem>
//               <NavItem href={'#contact'} icon={FaPhone}>
//                 Contact
//               </NavItem>
//               <SearchBar />
//             </Stack>
//           </Flex>
//         </Flex>
//         <Flex alignItems={'center'}>
//           <ColorModeToggle />
//         </Flex>
//       </Flex>

//       <Collapse in={isOpen} animateOpacity>
//         <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
//           <NavItem href={'#home'} icon={FaHome}>
//             Home
//           </NavItem>
//           <NavItem href={'#about'} icon={FaInfoCircle}>
//             About
//           </NavItem>
//           <NavItem href={'#services'} icon={FaServicestack}>
//             Services
//           </NavItem>
//           <NavItem href={'#contact'} icon={FaPhone}>
//             Contact
//           </NavItem>
//         </Stack>
//       </Collapse>
//     </MotionBox>
//   );
// }
