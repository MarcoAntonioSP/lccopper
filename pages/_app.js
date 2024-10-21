import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Script from 'next/script';
import Head from 'next/head'; // Importando Head

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
      <Head>
        <meta
          name="keywords"
          content="metalurgia, reposição de solda, usinagem, indústria automotiva, LC Copper Metalúrgica, materiais ferrosos, materiais não ferrosos, soldagem a ponto, projeto de solda, Ferraz de Vasconcelos, São Paulo"
        />
        <meta
          name="description"
          content="A LC Copper Metalúrgica LTDA é referência em reposição de solda e usinagem de materiais ferrosos e não ferrosos, atendendo principalmente a indústria automotiva. Com quase 25 anos de experiência, garantimos qualidade e precisão em nossos serviços."
        />
        <title>LC Copper Metalúrgica LTDA - Soluções em Metalurgia</title>
        <link rel="canonical" href="http://www.lccopper.com.br/" />
        <meta name="robots" content="index, follow" />
      </Head>
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
