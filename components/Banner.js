import {
  Box,
  Flex,
} from '@chakra-ui/react';

const Banner = () => {
    return (
        <Flex justifyContent='space-between' flex={1}>
            <Box p={4} bg='powderblue' h={500} w='50%'>
            </Box>
            <Box p={4} bg='pink' h={500} w='50%'>
            </Box>
        </Flex>

    )
}

export default Banner
