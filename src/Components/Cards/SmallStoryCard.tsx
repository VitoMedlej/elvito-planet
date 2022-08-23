import React from 'react'
import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import {ISmallStoryCard} from '../../Types/Types';

const SmallStoryCard = ({title, text, date, readTime} : ISmallStoryCard) => {
    return (
        <Box sx={{
            display: 'flex',
            my: '1em'
        }}>
            <Box
                sx={{
                position: 'relative',
                width: '150px',
                height: '180px'
            }}>
                <Image
                    className="img br1"
                    layout='fill'
                    src='https://res.cloudinary.com/dwcu3wcol/image/upload/v1660988199/pexels-photo-4863968_pjkfbj.jpg'></Image>
            </Box>
            <Box
                sx={{
                maxWidth: '650px',
                ml: '1em',
                pt: '.15em'
            }}>
                <Link href='/'>
                    <Typography
                        className='cursor'
                        fontWeight='600'
                        fontSize='1.2em'
                        color='#0057d9'>
                        {title}
                    </Typography>
                </Link>

                <Typography fontWeight='400' fontSize='.85em' color='#505050'>{readTime} min read - {date}
                </Typography>
                <Typography
                    sx={{
                    pt: '.35em'
                }}
                    fontWeight='500'
                    fontSize='1.1em'
                    color='#000000'>South Korea might {text}</Typography>

            </Box>
        </Box>
    )
}

export default SmallStoryCard