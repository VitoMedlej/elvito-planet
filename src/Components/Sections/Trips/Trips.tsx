import {Box, Container, Typography} from '@mui/material';
import TripsCarousel from './TripsCarousel';
import TripCard from '../../Cards/TripCard';

export const TripsArray = [
    {
        title: 'Seattle',
        img: 'https://lp-cms-production.imgix.net/2021-10/people-in-a-glass-garden-exhibit_t20' +
                '_3wP4xB.jpg?fit=crop&q=60&auto=format&w=1247&h=538&dpr=1',
        href: '/destination/seattle'
    }, {
        title: 'Czech Republic',
        img: 'https://res.cloudinary.com/dwcu3wcol/image/upload/v1661064667/pexels-photo-3544480_1_1_fclszt.jpg',
        href: '/destination/czech'
    },
    {
        title :'Lebanon',
        href : '/destination/lebanon',
        img :`https://res.cloudinary.com/dwcu3wcol/image/upload/v1661064913/pexels-photo-6462611_1_1_iuvwkn.jpg`
    }
]

const Trips = () => {
    return (
        <Box
        className='relative'
            sx={{
            display: 'flex',
            flexDirection: 'column',
           
            my: {
                xs: '3.5em',
                sm: '5em'
            }
        }}>
            <Container maxWidth="lg">

                <Box>
                    <Typography
                        sx={{
                        color: '#4b4b4b',
                        fontWeight: '500',
                        fontSize: {
                            xs: '1.1em'
                        }
                    }}>Plan your trip</Typography>
                    <Typography
                        sx={{
                        color: 'black',
                        fontWeight: '600',
                        fontSize: {
                            xs: '1.6em',
                            sm: '2em',
                            md: '2.4em'
                        }
                    }}>Where to next?</Typography>
                </Box>
                <Box >

                    <Box
                        sx={{
                        mt: '2em',
                        width: '100%',
                        display: {
                            xs: ' none',
                            sm: 'flex'
                        },
                        height: '100%'
                    }}>

                        <Box
                            sx={{
                            mt: '2em',
                            width: '100%',
                            display: {
                                xs: 'none',
                                md: 'flex'
                            },
                            gap: {
                                sm: '1em',
                                md: '1.5em'
                            },
                            height: '100%'
                        }}>
                            {TripsArray && TripsArray.map(trip => {
                                return <Box
                                    key={trip.title}
                                    sx={{
                                    width: '33.333%'
                                }}
                                    className='slide cursor'>

                                    <TripCard
                                        img={trip.img || 'https://lp-cms-production.imgix.net/2022-01/Tourists%20at%20Wat%20Plai%20Laem%20' +
                                        'in%20Ko%20Samui%2C%20Thailand.jpg?auto=format&q=40&ar=16%3A9&fit=crop&w=1446'}
                                        title={trip.title}
                                        href={trip.href}/>
                                </Box>
                            })}

                        </Box>
                    </Box>

                    <TripsCarousel arr={TripsArray}/>

                </Box>
            </Container>
        </Box>
    )
}

export default Trips