import React from 'react';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaShoppingCart,
  FaYoutube,
} from 'react-icons/fa';
import { FcPhone } from 'react-icons/fc';

import {
  Box,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';

import Logo from './BrandLogo';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>

            <UpperSection />
            <NavBarContainer {...props}>
                <Logo
                    w="100px"
                    color={["white", "white", "primary.500", "primary.500"]}
                />
                <MenuToggle toggle={toggle} isOpen={isOpen} />
                <MenuLinks isOpen={isOpen} />
                <MenuLast />
            </NavBarContainer>

            {props.children}
        </>
    );
};


const UpperSection = () => {
    return (
        <Box bg="black" w="100%" p={3} color="white">
            <HStack justifyContent="space-around" >
                <HStack>
                    <FcPhone />
                    <Text fontSize="sm" color="pink.500">
                        +3(800) 2345-37747
                </Text>
                    <Text fontSize="sm">Days a week from 9:00 am to 7:00 pm</Text>
                </HStack>

                <HStack spacing="5">
                    <FaFacebookF />
                    <FaYoutube />
                    <FaInstagram />
                    <FaLinkedinIn />
                    <FaPinterest />
                </HStack>
            </HStack>
        </Box>
    )
}

const MenuLast = () => {
    return (
        <Stack spacing={8}
            align="center"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}>
            <MenuItem to="/" className='borderFade'>Login</MenuItem>
            <MenuItem to="/how" className='slideUpBtn'>SignUp</MenuItem>
            <FaShoppingCart />
        </Stack>
    )
}

const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill="white"
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = () => (
    <svg
        width="24px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
    >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Box>
    );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
        <Link href={to} _hover={{
            color: 'pink',
        }}>
            <Text display="block" {...rest} fontWeight='normal' fontSize='18px' color='black' _hover={{
                color: 'pink',

            }}>
                {children}
            </Text>
        </Link>
    );
};

const MenuLinks = ({ isOpen }) => {
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={5}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem to="/">Hair</MenuItem>
                <MenuItem to="/how">Massage </MenuItem>
                <MenuItem to="/faetures">Nails</MenuItem>
                <MenuItem to="/pricing">Face</MenuItem>
                <MenuItem to="/pricing">Body</MenuItem>
                <MenuItem to="/pricing">Men's</MenuItem>
            </Stack>
        </Box>
    );
};

const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-around"
            wrap="wrap"
            w="100%"
            mb={2}
            p={3}
            bg={["red", "primary.500", "transparent", "transparent"]}
            color={["red", "white", "primary.700", "primary.700"]}
            {...props}
        >
            {children}
        </Flex>
    );
};

export default NavBar;