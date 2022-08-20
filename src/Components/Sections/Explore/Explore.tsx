import {Theme} from '@emotion/react';
import {Box, Container, Typography, Button} from '@mui/material';
import Image from 'next/image'
import {CustomButton} from '../Hero/Hero';

interface IBackDrop {
    br?: string;
    zIndex?: string;
}
export const BackDrop = ({br, zIndex} : IBackDrop) => {
    return <Box
        sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: '#00000098',
        zIndex: zIndex || '0',
        top: 0,
        borderRadius: {
            xs: '0',
            sm: br
                ? br
                : '0'
        }
    }}></Box>
}
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
                  className='relative'
                sx={{
                width: '100%',
                minHeight: {
                    sm: '400px',
                    md: '500px',
                    lg: '600px'
                },
                height: {
                    xs: '300px',
                    lg: '100vh'
                },
              
            }}>
                <Box
                    sx={{
                    position: 'absolute',
                    zIndex: '5555',
                    pt: {
                        xs: '2em',
                        md: '3em',
                        lg: '5em',
                        xl: '7em'
                    },
                    textAlign: 'center',
                    width: '100%'
                }}>
                    <Typography
                        sx={{
                        textShadow: '1px 1px 5px #00000033',
                        fontWeight: '600',
                        fontSize: {
                            xs: '1em',
                            sm: '1.3em'
                        }
                    }}
                        color='white'>Vito Medlej</Typography>
                    <Typography
                        sx={{
                        textShadow: '1px 1px 5px #00000033',
                        fontWeight: '600',
                        fontSize: {
                            xs: '2.2em',
                            sm: '3.5em',
                            md: '4.5em',
                            lg: '7.5em',
                            xl: '9.5em'
                        },
                        px: '.25em'
                    }}
                        color='white'>Best In Travel</Typography>

                </Box>
                <Image
                    layout='fill'
                    src={`https://lonelyplanetstatic.imgix.net/marketing/2022/homepage/bit_bg.jpg?fit=crop&q=72&auto=format&w=1247&h=929&dpr=1`}/>
                <Box
                      className='relative'
                    sx={{
                 
                    width: '100%',
                    height: '100%',
                    margin: '0 auto',
                    maxWidth: '1200px',
                    zIndex: '512455'
                }}>

                    <Image
                        className='transparentimg'
                        layout='fill'
                        src={`https://lonelyplanetstatic.imgix.net/marketing/2022/homepage/bit_travelers.png?fit=crop&q=50&auto=format&w=328&h=379&dpr=2`}/>
                </Box>
                <BackDrop/>

                <Box
                    sx={{
                    display: 'flex',
                    bottom: '-50px',
                    position: 'absolute',
                    width: '100%',
                    py: {
                        xs: '1em',
                        sm: '1.5em',
                        md: '2em'
                    },
                    zIndex: 4141242,
                    background: 'linear-gradient(0deg, rgba(0,0,0,1) 49%, rgba(0,0,0,0.8071603641456583) 66%, rgba(0,0,0,0.5942752100840336) 81%, rgba(0,0,0,0.3617822128851541) 91%, rgba(0,0,0,0) 100%)'
                }}>
                    <Container maxWidth='md'>
                        <Typography
                            sx={{
                            pb: '.25em',
                            width: {
                                xs: '95%',
                                sm: '80%'
                            },
                            fontSize: {
                                xs: '.7em',
                                sm: '.85em',
                                md: '1em'
                            }
                        }}
                            color='white'>The
                            results are in! Explore this year’s expert-approved list of must-see
                            destinations, places, and unforgettable experiences guaranteed to inspire.</Typography>
                        <CustomButton text='Visit'/>
                    </Container>
                </Box>
            </Box>
        </Box>
    )
}

export default Explore