import Link from 'next/link';
import Image from 'next/image';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';

const TripCard = ({img, href, title,full} : any) => {
    const router = useRouter()
    return (

        <>
            <Box
            onClick={()=>router.push(href || '/')}
        className='relative'

                sx={{
                borderRadius: '1em',
                height: full ? '100%' : '89%',
                width: '100%',
                background: 'gray',
            }}>
                <Image className={`br1 img`} layout='fill' priority src={`${img}`}/>

            </Box>
            <Link href={href}>{title}</Link>
        </>


    )
}

export default TripCard