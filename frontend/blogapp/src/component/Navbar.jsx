import React from 'react';
import { Box, Flex, Button, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.900" color="white">
      <Flex p={4} align="center">
        <Box>
          <img src="/path/to/logo.png" alt="Logo" />
        </Box>
        <IconButton
          icon={<HamburgerIcon />}
          variant="ghost"
          color="white"
          onClick={onOpen}
          aria-label="Open menu"
          ml="auto"
          display={{ base: 'block', md: 'none' }}
        />
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg="gray.900" color="white">
            <DrawerCloseButton color="white" />
            <DrawerBody p={0}>
              <Flex direction="column" p={4}>
               <Link to ='/'> <Button variant="ghost" color="white" mb={4} onClick={onClose}>Home</Button></Link>
               <Link to ='/about'> <Button variant="ghost" color="white" mb={4} onClick={onClose}>About</Button></Link>
                <Link to ='/profile'><Button variant="ghost" color="white" mb={4} onClick={onClose}>Products</Button></Link>
               <Link to ='/login'> <Button variant="ghost" color="white" mb={4} onClick={onClose}>Login</Button></Link>
              <Link to ='/signup'>  <Button variant="ghost" color="white" onClick={onClose}>Sign Up</Button></Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Flex ml="auto" display={{ base: 'none', md: 'flex' }}>
          <Link to ='/'><Button variant="ghost" color="white" mr={4}>Home</Button></Link>
          <Link to ='/about'> <Button variant="ghost" color="white" mr={4}>About</Button></Link>
           <Link to ='/profile'><Button variant="ghost" color="white" mr={4}>Products</Button></Link>
           <Link to ='/login'> <Button variant="ghost" color="white" mr={4}>Login</Button></Link>
           <Link to ='/signup'> <Button colorScheme="teal" variant="solid">Sign Up</Button></Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
