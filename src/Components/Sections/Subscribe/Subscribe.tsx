import React from 'react'
import {Box, Typography, TextField, Button} from '@mui/material';
import Image from 'next/image';
import {BackDrop} from '../Explore/Explore';
import {CustomButton} from '../Hero/Hero';
'https://res.cloudinary.com/dwcu3wcol/image/upload/v1660673044/pexels-photo-21318' +
    '56_bj9ofa.jpg'
const Subscribe = () => {
    return (

        <Box
            sx={{
            mt: '12em',
            position: 'relative',
            width: '100%',
            height: '400px',
            display: 'flex',
            alignItems: 'flex-end'
        }}>
            <Image
                className='img z-4'
                src={`https://res.cloudinary.com/dwcu3wcol/image/upload/v1660673044/pexels-photo-2131856_bj9ofa.jpg`}
                layout='fill'/>
            <BackDrop zIndex='-3'/>

            <Box
                sx={{
                maxWidth: 'lg',
                zIndex: '22421',
                py: '3.5em',
                transform: 'translateY(2em)',
                px: '4em',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                width: '80%',
                background: 'white',
                color: 'black',
                borderRadius: '1em',
                margin: '0 auto',
                display: 'flex',
                gap: '1.5em',
                flexWrap: 'wrap',
                alignItems: 'center'
            }}>
                <Box
                    sx={{
                    width: {
                        xs: '100%',
                        sm: '60%'
                    }
                }}>

                    <Typography fontSize='1.6em' sx={{pb:'.25em'}} fontWeight='600'>
                        Subscribe And Get 20% off
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum accusamus
                        nesciunt sunt tenetur, est suscipit consequatur distinctio laudantium error
                        sequi. Ex sint ut enim earum?
                    </Typography>

                </Box>
                <Box
                    sx={{
                    width: {
                        xs: '100%',
                        sm: '35%'
                    },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TextField
                        type='email'
                        placeholder="Email"
                        size='small'
                        sx={{
                        borderRadius: '1em'
                    }}/>
                    <Box>

                        <CustomButton
                            sx={{
                            my: 0,
                            background: 'black',
                            color: 'white',
                            mx: '.5em',
                            padding: '.80em'
                        }}
                            text='EXPLORE'/>
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}

export default Subscribe