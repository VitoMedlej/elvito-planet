import React from 'react'
import {Box, Typography} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import {IStory} from '../../Types/Types';
import {useRouter} from 'next/router';

const SmallStoryCard = ({title, shortDescription, date,id, bgImage, timeRead} : IStory) => {
    const slug = title
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
    const router = useRouter();
    return (
        <Box
            onClick={() => router.push(`/story/${id}/${slug}`)}
            sx={{
            display: 'flex',
            my: '1em'
        }}>
            <Box
                sx={{
                position: 'relative',
                width: {
                    xs: '120px',
                    sm: '150px',
                    md: '190px'
                },
                height: {
                    xs: '150px',
                    sm: '180px'
                }
            }}>
                <Image
                     alt=''
                    className="img br1"
                    layout='fill'
                    src={bgImage || 'https://res.cloudinary.com/dwcu3wcol/image/upload/v1660988199/pexels-photo-48639' +
                    '68_pjkfbj.jpg'}></Image>
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
                        sx={{
                        fontSize: {
                            xs: '.9em',
                            sm: '1em',
                            md: '1.2em'
                        }
                    }}
                        color='#0057d9'>
                        {title}
                    </Typography>
                </Link>

                <Typography fontWeight='400' fontSize='.85em' color='#505050'>{timeRead}
                    min read - {date}
                </Typography>
                <Typography
                    sx={{
                    pt: '.35em',
                    display: {
                        xs: 'none',
                        sm: 'block'
                    },
                    fontSize: {
                        sm: '9em',
                        md: '1.1em'
                    }
                }}
                    fontWeight='500'
                    color='#222222'>South Korea might {shortDescription}</Typography>

            </Box>
        </Box>
    )
}

export default SmallStoryCard