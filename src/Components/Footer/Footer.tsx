import {Box, Typography, Divider, Grid} from '@mui/material';

import Link from 'next/link';
import { useRouter } from 'next/router';
function Copyright() {
    return (
<>
        <Divider/>
        <Box
        maxWidth='lg' 
        sx={{
            textAlign:'center',
            margin : '1em auto'
        }}>
            

            <Typography variant='h1' fontSize='1em'>
                {'Copyright © '}
                <Link color="inherit" href="/">
                    elvito-planet.netlify.app
                </Link>{' '} {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
        </>

    );
}
const styles = {
    mt: '1em',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    flexWrap: 'wrap',
}

function Footer() {
    const router = useRouter()
    return (
        <Box sx={{mt: '6em '}}>
            <Divider/>
            <Box
                sx={{
                width: '100%',
                minHeight: '200px',
                display: 'flex',
           
            }}>
                <Grid
                    sx={{
                    gap: '1.5em',
                    mx: {
                        xs: '3vw',
                        lg: 'auto'
                    },
                    my: '2em'
                }}
                    maxWidth='lg'
                    container>
                    <Grid item xs={12} sm={6} md={5}>
                        <Typography variant='h1' fontSize='1.4em' fontWeight='400'>About</Typography>

                        <Box sx={styles}>
                            <Typography variant='h3' fontSize='1em'>
                            elvito-planet is a travel guide aimed to to help more people from more backgrounds experience the joy of exploration. This website design was inspired by various travel website on the internet and I don&apos;t claim to own any of the content whatsoever.  
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant='h1' fontSize='1.4em' fontWeight='400'>Links</Typography>

                        <Box className='link' sx={styles}>
                            <Link 
                            className='FooterLink'
                            href='/'
                            >Home</Link>
                            <Link href='/contact'>Contact</Link>
                         
                            <Link href='/contact'>Contact</Link>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Typography variant='h1' fontSize='1.4em' fontWeight='400'>Contact</Typography>
                        <Box className='link' sx={styles}>
                            <a target='_blank' rel="noreferrer" href='https://github.com/VitoMedlej'>Github</a>
                            <Typography variant='h1' fontSize='1em'>vito.medlej@gmail.com</Typography>
                            <Typography variant='h1' fontSize='1em'>Lebanon/beirut</Typography>
                            <Typography variant='h1' fontSize='1em'>+961/81826445</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Copyright/>
        </Box>

    );

}
export default Footer