import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';

import Navbar from '../components/Header';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <div className='background'>
        <Navbar />
        <Component {...pageProps} />
      </div>

    </ChakraProvider>
  )
}

export default MyApp
