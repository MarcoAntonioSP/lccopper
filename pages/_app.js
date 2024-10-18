import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Script from 'next/script'; // Add this import

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Script 
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
        />
        <Script 
          src="https://cdn.jsdelivr.net/npm/popper.js@1.14.6/dist/umd/popper.min.js"  
        />
        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
        />
    </ChakraProvider>
  );
}

export default MyApp;
