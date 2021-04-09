// NavBar Component
import {
  Box,
  HStack,
} from '@chakra-ui/react';

// This contains all the nav for each page.
// Basically it is a static component which doesn't change.
const Navbar = ({ children }) => {
    return (
        <>
      
            <Box w="100%" h='90%' p={5} bg='red.300'>
                <HStack >
                    {/* <Image

                        src="/logo.png"
                        alt="Logo Images"
                        height='70%'
                        width='70%'
                    /> */}
                </HStack>
            </Box>
            {children}
        </>
    );
};

export default Navbar;
