import {Box, Container, Typography} from '@mui/material';
import TripsCarousel from './TripsCarousel';
import TripCard from '../../Cards/TripCard';

const TripsArray = [
    {
        title: 'Seattle',
        img: 'https://images.pexels.com/photos/2539395/pexels-photo-2539395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        href: '/trips/Seattle'
    }
]

const Trips = () => {
    return (
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
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
                        {[1, 2, 3].map(n => {
                            return <Box key={n} sx={{width:'33.333%'}} className='slide cursor'>

                            <TripCard img={'https://lp-cms-production.imgix.net/2022-01/Tourists%20at%20Wat%20Plai%20Laem%20in%20Ko%20Samui%2C%20Thailand.jpg?auto=format&q=40&ar=16%3A9&fit=crop&w=1446'} title={'trip.title'} href={'trip.img'}  />
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