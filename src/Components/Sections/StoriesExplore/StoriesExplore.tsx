import {Container, Grid, Box, Typography} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import LargeStoryCard from '../../Cards/LargeStoryCard';
import StorySlider from './StorySlider';

const StoriesExplore = () => {
    return (
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            mt: {
                xs: '5.5em',
                sm: '6.5em'
            }
        }}>
            <Container maxWidth='lg'>
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
                    mb: '2em',
                    fontSize: {
                        xs: '1.6em',
                        sm: '2em',
                        md: '2.4em'
                    }
                }}>Where to next?</Typography>

            </Container>
            <Container
                sx={{
                maxWidth: {
                    lg: '1200px'
                }
            }}>

                <Grid container>
                    <Grid item xs={12} lg={8}>

                        <LargeStoryCard/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <StorySlider/>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}

export default StoriesExplore