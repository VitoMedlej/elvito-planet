import {Box} from '@mui/material'

import {useRouter} from 'next/router';
import CustomLink from '../CustomLink/CustomLink';

const Logo = ({toggleDrawer, colorMode, color} : any) => {
    const router = useRouter()
    return (
        <Box
            onClick={() => {
            toggleDrawer(false);
            if (router.pathname !== '/') {
                router.push('/');
            }
        }}
            sx={{
            width:'106px',
            position:'absolute',
            right:'50%',
            transform:'translateX(50%)',
            height:'40px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
        }}>

            <img
                className={'logo'}
                src="https://res.cloudinary.com/dwcu3wcol/image/upload/v1658929513/log-removebg-preview_fygpsd.png"
                alt=""/>
            <CustomLink color={color} fontWeight='600' text='Medlej' href='/'/>
        </Box>
    )
}

export default Logo