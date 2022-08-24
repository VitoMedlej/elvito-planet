import type {AppProps}
from 'next/app'
import '../Styles/Styles.css'
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Layout from '../src/Layout';

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

        <Component {...pageProps}/>
    </ThemeProvider>
}

export default MyApp
