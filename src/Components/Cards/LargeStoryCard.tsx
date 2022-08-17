import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import {BackDrop} from '../Sections/Explore/Explore';

const LargeStoryCard = () => {
    return (
        <Box
            sx={{
            position: 'relative',
            width: {
                xs: '100%',
                sm: '90%',
                md: '75%',
                lg : '100%'
            },
            margin: '0 auto',
            borderRadius: '1em',
            height: {
                xs: '400px',
                sm: '500px'
            }
        }}>
            <Image
                className='img br2'
                layout='fill'
                src={`https://lp-cms-production.imgix.net/2022-08/africa-2BM779R-RFC.jpeg?auto=format&q=40&ar=16%3A9&fit=crop&w=1446`}/>
            <BackDrop br={'1em'}/>
            <Box
                sx={{
                zIndex:'1',
                px: '1em',
                    
                position: 'absolute',
                height: '100%',
                transform: {
                    xs: 'translateY(45%)',
                    sm: 'translateY(60%)'
                }
            }}>
                <Link href='/'>
                    <Typography
                        className='cursor'
                        sx={{
                        ':hover': {
                            textDecoration: 'underline'
                        },
                        fontSize: {
                            xs: '1em',
                            sm: '1.4em'
                        }
                    }}
                        fontWeight='600'
                        color='white'>
                        Exploring Botswana on a budget is possible – here’s how to do it
                    </Typography>
                </Link>
                <Typography fontSize='.8em' color='white' fontWeight='500'>
                    Aug 14, 2022 • 7 min read
                </Typography>
                <Typography
                    sx={{
                    pt: '2em',
                    width: {
                        xs: '100%',
                        sm: '80%'
                    },
                    fontSize: {
                        xs: '.75em',
                        sm: '.85em'
                    }
                }}
                    color='white'
                    fontWeight='400'>
                    From urban oases and subtropical sanctuaries to simply perfect stretches of
                    sand, these are some of South Korea’s best beaches.
                </Typography>
            </Box>
        </Box>
    )
}

export default LargeStoryCard