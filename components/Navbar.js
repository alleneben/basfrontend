import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import { FcPhone } from 'react-icons/fc';

// NavBar Component
import {
  Box,
  HStack,
  Text,
} from '@chakra-ui/react';

// This contains all the nav for each page.
// Basically it is a static component which doesn't change.
const Navbar = ({ children }) => {
    return (
        <>
            <Box bg="black" w="100%" p={3} color="white">
                <HStack justifyContent='space-evenly'>
                    <HStack>
                        <FcPhone />
                        <Text fontSize="sm" color='pink.500'>+3(800) 2345-37747</Text>
                        <Text fontSize="sm">Days a week from 9:00 am to 7:00 pm</Text>
                    </HStack>

                    <HStack spacing='5'>
                        <FaFacebookF />
                        <FaYoutube />
                        <FaInstagram />
                        <FaLinkedinIn />
                        <FaPinterest />
                    </HStack>
                </HStack>
            </Box>
            {children}

        </>
    )
}

export default Navbar
