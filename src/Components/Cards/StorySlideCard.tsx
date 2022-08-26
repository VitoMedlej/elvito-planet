import {Box, Typography} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { IStory } from '../../Types/Types';

const StorySlideCard = ({title,bgImage,shortDescription,date,timeRead,id}:IStory) => {
    const slug = title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
    return (
        <Box sx={{
            maxWidth:'350px',
            width: {xs:'100%',lg:'300px'},
            margin: {xs:'1em auto 0',md:'0 auto'},
          
        }}>
            <Box>
                <Box
        className='relative'

                    sx={{
                 
                    width: '100%',
                    minWidth:'280px',
                    height: '180px',
                    mb: '1em'
                }}>
                    <Image
                         alt=''
                        className='img br1'
                        src={`${bgImage || 'https://lp-cms-production.imgix.net/2022-08/africa-2BM779R-RFC.jpeg?auto=format&q=40&ar=16%3A9&fit=crop&w=1446'}`}
                        layout='fill'/>
                </Box>
                <Box>

                    <Link href={`/story/${id}/${slug}`}>
                        <Typography fontSize="1.35em" fontWeight="600">
                          {title}
                        </Typography>

                    </Link>
                    <Typography fontSize='.8em' fontWeight='500'>
                        {date} • {timeRead} min read
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
                    {shortDescription}
                    </Typography>
                </Box>

            </Box>
        </Box>
    )
}

export default StorySlideCard