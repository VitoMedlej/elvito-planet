import {Box, Container, Button, Typography} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/react";
import Image from 'next/image'
import {Autoplay} from "swiper";
import HeroImage from './HeroImage';

const heroImages = [
    'https://lp-cms-production.imgix.net/2022-01/Tourists%20at%20Wat%20Plai%20Laem%20' +
            'in%20Ko%20Samui%2C%20Thailand.jpg?auto=format&q=40&ar=16%3A9&fit=crop&w=1446',
    'https://lp-cms-production.imgix.net/2022-04/GettyImages-1141544632.jpg?auto=form' +
            'at&q=40&ar=16%3A9&fit=crop&w=1446',
    'https://lp-cms-production.imgix.net/2022-05/Croatia-Plitvice-Lakes-National_Park' +
            '-Melinda-Nagy-shutterstock_256094920-RFC.jpg?auto=format&q=40&ar=16%3A9&fit=crop' +
            '&w=1446'
]
const Hero = () => {
    return (
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            height: '100vh'
        }}>

            <Box
                sx={{
                width: '100%',
                display: {
                    xs: 'none',
                    sm: 'flex'
                },
                height: '100%',
                minHeight: '600px'
            }}>

                {heroImages && heroImages.map(img => {

                    return <HeroImage key={img} img={`${img}`}/>
                })
}
            </Box>
            <Box
                sx={{
                display: {
                    xs: 'flex',
                    sm: 'none'
                },
                height: '100%',
                minHeight: '560px'
            }}>

                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                    delay: 1500,
                    disableOnInteraction: false
                }}
                    modules={[Autoplay]}
                    className="mySwiper swiper">

                    {heroImages && heroImages.map(img => {

                        return <SwiperSlide key={img}>
                            <Box
                                sx={{
                                width: '100%',
                                height: '100%'
                            }}>
                                <HeroImage full img={`${img}`}/>

                            </Box>
                        </SwiperSlide>
                    })
}

                </Swiper>

            </Box>
            <Box
                sx={{
                position: 'absolute',
                textAlign: 'center',
                width: '100%',
                top: '35%',
                color: 'white',
                zIndex: 555556,
                overflow: 'hidden'
            }}>
                <Container
                    sx={{
                    overflowX: 'hidden',
                    maxWidth: {
                        xs: 'md',
                        xl: '1200px'
                    },
                    transition: '.5s ease',
                    ':hover': {
                        transform: 'scale(1.1)'
                    }
                }}>
                    <Typography
                        sx={{
                        pointerEvents: 'none'
                    }}
                        fontSize={{
                        xs: '2.2em',
                        sm: '2.7em',
                        md: '3.7em',
                        lg: '4.5em',
                        xl: '6em'
                    }}
                        fontWeight='600'>
                        Discover story-worthy travel moments
                    </Typography>
                </Container>
                <Box
                    sx={{
                    margin: '0 auto',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    display: 'flex'
                }}>

                    <Button
                        variant='contained'
                        sx={{
                        ':hover': {
                            background: 'black',
                            color: 'white'
                        },
                        mt: '.5em',
                        color: 'black',
                        background: 'white'
                    }}>
                        <Typography fontWeight='bold' variant='h3' fontSize='.75em'>
                            Explore
                        </Typography>
                    </Button>
                    <ArrowDropDownIcon fontSize='large'/>
                </Box>

            </Box>

        </Box>
    )
}

export default Hero