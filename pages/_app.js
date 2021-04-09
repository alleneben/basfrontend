import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';

import Navbar from '../components/Header';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar><Component {...pageProps} /> </Navbar>

    </ChakraProvider>
  )
}

export default MyApp
