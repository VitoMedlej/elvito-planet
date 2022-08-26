import {Box} from '@mui/material'

import {useRouter} from 'next/router';
import CustomLink from '../CustomLink/CustomLink';

const Logo = ({ color} : any) => {
    const router = useRouter()
    return (
        <Box
            onClick={() => {
         
                router.push('/');
       
        }}
            sx={{
                
            flex: 1,
            width: 'fit-content',
            textalign: 'center',
            justifyContent: 'center',
            display: 'flex',
            height: '41px',
            cursor: 'pointer',
       
            alignItems: 'center'
        }}>

     
            <CustomLink
                fontSize='1.2em'
                color={color || 'white'}
                fontWeight='600'
                text='Elvito Planet'
                href='/'/>
        </Box>
    )
}

export default Logo