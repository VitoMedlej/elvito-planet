import {Box, Container, Typography} from '@mui/material';
import Image from 'next/image'

const Explore = () => {
    return (
        <Box
            sx={{
            my: {
                xs: '3.5em',
                sm: '5em'
            }
        }}>
            <Box
                sx={{
                width: '100%',
                minHeight: {
                    sm: '400px',
                    lg: '600px'
                },
                height: {
                    xs: '300px',
                    lg: '100vh'
                },
                position: 'relative'
            }}>
                <Image
                    layout='fill'
                    src={`https://lonelyplanetstatic.imgix.net/marketing/2022/homepage/bit_bg.jpg?fit=crop&q=72&auto=format&w=1247&h=929&dpr=1`}/>
                <Box
                    sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: '#00000038',
                    zIndex: '2414'
                }}></Box>

            </Box>
            <Container maxWidth='lg'></Container>
        </Box>
    )
}

export default Explore