import {Box, Typography} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const StorySlideCard = () => {
    return (
        <Box sx={{
            maxWidth:'350px',
            width: {xs:'100%',lg:'300px'},
            margin: {xs:'0 auto',sm:'1em  auto 0'},
          
        }}>
            <Box>
                <Box
                    sx={{
                    position: 'relative',
                    width: '100%',
                    minWidth:'280px',
                    height: '180px',
                    mb: '1em'
                }}>
                    <Image
                        className='img br1'
                        src={`https://lp-cms-production.imgix.net/2022-08/africa-2BM779R-RFC.jpeg?auto=format&q=40&ar=16%3A9&fit=crop&w=1446`}
                        layout='fill'/>
                </Box>
                <Box>

                    <Link href='/'>
                        <Typography fontSize="1.35em" fontWeight="600">
                            fat title foo farw safwe ff
                        </Typography>

                    </Link>
                    <Typography fontSize='.8em' fontWeight='500'>
                        Aug 14, 2022 • 7 min read
                    </Typography>
                    <Typography
                        sx={{
                        pt: '1em',
                        width: {
                            xs: '100%',
                            sm: '80%'
                        },
                        fontSize: {
                            xs: '.75em',
                            sm: '.85em'
                        }
                    }}
                        fontWeight='400'>
                        From urban oases and subtropical sanctuaries to simply perfect stretches of
                        sand, these are some of South Korea’s best beaches.
                    </Typography>
                </Box>

            </Box>
        </Box>
    )
}

export default StorySlideCard