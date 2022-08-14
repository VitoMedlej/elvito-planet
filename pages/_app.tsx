import type {AppProps}
from 'next/app'
import Layout from './src/Layout';
import './Styles/Styles.css'
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider, createTheme} from '@mui/material/styles';

const theme = createTheme({
    typography: {
        'fontFamily': `'Montserrat', sans-serif`,

        allVariants: {
            fontFamily: `'Montserrat', sans-serif`,
            fontSize: 16
        }
    }
});

function MyApp({Component, pageProps} : AppProps) {
    return <ThemeProvider theme={theme}>
        <Layout desc='' title=''>

            <Component {...pageProps}/>
        </Layout>
    </ThemeProvider>
}

export default MyApp
