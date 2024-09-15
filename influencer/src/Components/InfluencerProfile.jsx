import React, { useState } from 'react';
import {
  Box,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Avatar,
  Select,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaHashtag, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './InfluencerProfile.css';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionFormControl = motion(FormControl);
const MotionButton = motion(Button);

const InfluencerProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    niche: '',
    instagram: '',
    twitter: '',
    linkedin: '',
    followers: '',
    engagement: '',
  });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile submitted:', profile);
    toast({
      title: 'Profile updated.',
      description: 'Your profile has been successfully updated.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const niches = [
    'Fashion', 'Beauty', 'Fitness', 'Travel', 'Food',
    'Technology', 'Gaming', 'Lifestyle', 'Business', 'Entertainment',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box className="influencer-profile-container">
      <MotionBox
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="influencer-profile-form"
      >
        <MotionVStack spacing={5} as="form" onSubmit={handleSubmit} variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <Heading>Influencer Profile</Heading>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Avatar size="2xl" name={profile.name} />
          </motion.div>
          <AnimatePresence>
            {Object.entries(profile).map(([key, value]) => (
              <MotionFormControl key={key} variants={itemVariants}>
                <FormLabel>{key.charAt(0).toUpperCase() + key.slice(1)}</FormLabel>
                <InputGroup>
                  <InputLeftElement>
                    {key === 'name' && <FaUser />}
                    {/* {key === 'niche' && <FaHashtag />} */}
                    {key === 'instagram' && <FaInstagram />}
                    {key === 'twitter' && <FaTwitter />}
                    {key === 'linkedin' && <FaLinkedin />}
                  </InputLeftElement>
                  {key === 'bio' ? (
                    <Textarea name={key} value={value} onChange={handleChange} />
                  ) : key === 'niche' ? (
                    <Select name={key} value={value} onChange={handleChange} placeholder="Select your niche">
                      {niches.map((niche) => (
                        <option key={niche} value={niche}>
                          {niche}
                        </option>
                      ))}
                    </Select>
                  ) : (
                    <Input name={key} value={value} onChange={handleChange} />
                  )}
                </InputGroup>
              </MotionFormControl>
            ))}
          </AnimatePresence>
          <MotionButton
            type="submit"
            colorScheme="blue"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Update Profile
          </MotionButton>
        </MotionVStack>
      </MotionBox>
    </Box>
  );
};

export default InfluencerProfile;
