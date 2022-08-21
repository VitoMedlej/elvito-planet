import {Box} from '@mui/material'

import {useRouter} from 'next/router';
import CustomLink from '../CustomLink/CustomLink';

const Logo = ({toggleDrawer, colorMode, color} : any) => {
    const router = useRouter()
    return (
        <Box
            onClick={() => {
            // toggleDrawer(false);
            // if (router.pathname !== '/') {
                router.push('/');
            // }
        }}
            sx={{
            // width: '106px',
            // position: 'absolute',
            // right: '50%',
            // transform: 'translateX(50%)',
            flex: 1,
            width: 'fit-content',
            textalign: 'center',
            justifyContent: 'center',
            display: 'flex',
            height: '41px',
            cursor: 'pointer',
       
            alignItems: 'center'
        }}>

            {/* <img
                className={'full logo'}
                src="https://res.cloudinary.com/dwcu3wcol/image/upload/v1658929513/log-removebg-preview_fygpsd.png"
                alt=""/> */}
            <CustomLink
                fontSize='1.2em'
                color={'white'}
                fontWeight='600'
                text='Vito Medlej'
                href='/'/>
        </Box>
    )
}

export default Logo