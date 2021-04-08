import '../styles/globals.css';

import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar><Component {...pageProps} /> </Navbar>

    </ChakraProvider>
  )
}

export default MyApp
