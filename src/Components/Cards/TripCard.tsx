import Link from 'next/link';
import Image from 'next/image';
import { Box } from '@mui/material';

const TripCard = ({img, href, title,full} : any) => {
    return (

        <>
            <Box
                sx={{
                borderRadius: '1em',
                height: full ? '100%' : '89%',
                width: '100%',
                background: 'gray',
                position: 'relative'
            }}>
                <Image className={`br1 img`} layout='fill' priority src={`${img}`}/>

            </Box>
            <Link href={href}>{title}</Link>
        </>


    )
}

export default TripCard