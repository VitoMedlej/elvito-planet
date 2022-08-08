
import type {AppProps}
from 'next/app'
import Layout from './src/Layout';
import './Styles/Styles.css'

import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
    typography: {
        "fontFamily": `'Montserrat', sans-serif`,
        "fontSize": 16,
        
        allVariants: {
            color:
                 '#292929',

        },
      
    },
});



function MyApp({Component, pageProps} : AppProps) {
    return  <Layout desc='' title=''>
        <ThemeProvider theme={theme}>
             {/* <CssBaseline/> */}

        <Component {...pageProps}/>
    </ThemeProvider>
    </Layout>
}

export default MyApp
