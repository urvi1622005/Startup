// import React from 'react';
// import { Box, Icon, Link, useColorModeValue } from '@chakra-ui/react';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const MotionBox = motion(Box);

// const SocialLinks = () => {
//   const iconColor = useColorModeValue('gray.600', 'gray.300');

//   return (
//     <MotionBox
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       spacing={4}
//       mt={8}
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <Link href="https://facebook.com" isExternal>
//         <Icon as={FaFacebook} w={8} h={8} color={iconColor} />
//       </Link>
//       <Link href="https://twitter.com" isExternal>
//         <Icon as={FaTwitter} w={8} h={8} color={iconColor} />
//       </Link>
//       <Link href="https://instagram.com" isExternal>
//         <Icon as={FaInstagram} w={8} h={8} color={iconColor} />
//       </Link>
//       <Link href="https://linkedin.com" isExternal>
//         <Icon as={FaLinkedin} w={8} h={8} color={iconColor} />
//       </Link>
//     </MotionBox>
//   );
// };

// export default SocialLinks;
// import React from 'react';
// import { Box, Link, IconButton, VStack } from '@chakra-ui/react';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const MotionIconButton = motion(IconButton);

// const SocialLinks = () => {
//   const socialLinks = [
//     { icon: FaFacebook, url: 'https://facebook.com' },
//     { icon: FaTwitter, url: 'https://twitter.com' },
//     { icon: FaInstagram, url: 'https://instagram.com' },
//     { icon: FaLinkedin, url: 'https://linkedin.com' },
//   ];

//   return (
//     <Box>
//       <VStack spacing={4}>
//         {socialLinks.map((social, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: index * 0.1 }}
//           >
//             <Link href={social.url} isExternal>
//               <MotionIconButton
//                 aria-label={`Link to ${social.url}`}
//                 icon={<social.icon />}
//                 size="lg"
//                 colorScheme="blue"
//                 variant="outline"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               />
//             </Link>
//           </motion.div>
//         ))}
//       </VStack>
//     </Box>
//   );
// };

// export default SocialLinks;
import React from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Stat,
  Link,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const StatCard = ({ platform, icon, engagement, views, growth, index, url }) => {
  const bgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <MotionBox
      as={Link}
      href={url}
      isExternal
      _hover={{ textDecoration: 'none' }}
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        rounded={'lg'}
        bg={bgColor}
      >
        <StatLabel fontWeight={'medium'} isTruncated color={textColor}>
          <Icon as={icon} mr={2} />
          {platform}
        </StatLabel>
        <StatNumber fontSize={'2xl'} fontWeight={'medium'} color={textColor}>
          {engagement}
        </StatNumber>
        <StatHelpText color={textColor}>
          <StatArrow type={growth >= 0 ? 'increase' : 'decrease'} />
          {Math.abs(growth)}%
        </StatHelpText>
        <StatHelpText color={textColor}>{views} views</StatHelpText>
      </Stat>
    </MotionBox>
  );
};

const AnalyticsDashboard = () => {
  const platforms = [
    { name: 'Facebook', icon: FaFacebook, engagement: '1.2K', views: '5.7K', growth: 13.6, url: 'https://facebook.com' },
    { name: 'Twitter', icon: FaTwitter, engagement: '892', views: '4.2K', growth: 8.1, url: 'https://twitter.com' },
    { name: 'Instagram', icon: FaInstagram, engagement: '2.4K', views: '12.3K', growth: 22.5, url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: FaLinkedin, engagement: '438', views: '2.1K', growth: -3.2, url: 'https://linkedin.com' },
  ];

  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <MotionBox
      maxWidth="1200px"
      margin="auto"
      p={5}
      bg={bgColor}
      minHeight="100vh"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Heading mb={5} color={textColor}>Content Performance Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 5, lg: 8 }}>
        {platforms.map((platform, index) => (
          <StatCard
            key={platform.name}
            platform={platform.name}
            icon={platform.icon}
            engagement={platform.engagement}
            views={platform.views}
            growth={platform.growth}
            index={index}
            url={platform.url}
          />
        ))}
      </SimpleGrid>
    </MotionBox>
  );
};

export default AnalyticsDashboard;
