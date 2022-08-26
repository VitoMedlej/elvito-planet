import React from 'react'
import {Box, Typography, TextField, Button} from '@mui/material';
import Image from 'next/image';
import {BackDrop} from '../Explore/Explore';
import {CustomButton} from '../Hero/Hero';
'https://res.cloudinary.com/dwcu3wcol/image/upload/v1660673044/pexels-photo-21318' +
    '56_bj9ofa.jpg'
const Subscribe = () => {
    return (
<>
        <Box
        id='subscribe'
              className='relative'
        sx={{
        mt: '12em',
     
        width: '100%',
        height: '400px',
        display: 'flex',
        alignItems: 'flex-end'
    }}>
        <Image
             alt=''
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
            px: {xs:'1.5em',sm:'2.5em',md:'4em'},
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

                <Typography
                    fontSize='1.6em'
                    sx={{
                    pb: '.25em'
                }}
                    fontWeight='600'>
                    Subscribe And Get 20% off
                </Typography>
                <Typography>
                    Join our newsletter and discover new destinations to inspire the traveler
                    within. Plus, get 20% off at our online shop. Every week you’ll receive expert
                    advice, tips, exclusive offers, and much more.
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
                        text='Subscribe'/>
                </Box>
            </Box>
        </Box>
    </Box> 
    {/* < div className = "mapouter" > <div className="gmap_canvas">
        <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src={"https://maps.google.com/maps?q=seattle&t=&z=13&ie=UTF8&iwloc=&output=embed"}
            frame-border="0"
            scrolling="no"
            margin-height="0"
            margin-width="0"></iframe>
        <a href="https://putlocker-is.org"></a>
       
        </div>
    </div> */}
</>
    
    )
}

export default Subscribe