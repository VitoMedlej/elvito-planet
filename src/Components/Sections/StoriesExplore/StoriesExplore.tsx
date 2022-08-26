import {Container, Grid, Box, Typography} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { ISmallStoryCard, IStory } from '../../../Types/Types';
import LargeStoryCard from '../../Cards/LargeStoryCard';
import StorySlider from './StorySlider';

const StoriesExplore = ({stories}:{stories:IStory[]}) => {
    return (
        <Box
        className='relative'
            sx={{
            display: 'flex',
            flexDirection: 'column',
      
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
                }}>Read Latest Stories</Typography>
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
                }}>Our Best Articles</Typography>

            </Container>
            <Container
                sx={{
                maxWidth: {
                    lg: '1200px'
                },
                px:{xs:'0',sm:'1em'}
            }}>

                <Grid container>
                    <Grid item xs={12} lg={8}>

                        <LargeStoryCard story={stories[0]}/>
                    </Grid>
                    <Grid  item xs={12} lg={4}>
                     
<StorySlider stories={stories}/>
                   
                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}

export default StoriesExplore