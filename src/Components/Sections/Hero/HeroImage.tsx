import {Box} from '@mui/material';
import Image from 'next/image'
import {IHeroImage} from '../../../Types/Types';

const HeroImage = ({img, full} : IHeroImage) => {
    return (
        <Box
        className='relative'
            sx={{
            width: full
                ? '100%'
                : '33.33333%',
            height: '100%',
            minHeight:{md:'650px'},
            pointerEvents:'none',
  
        }}>
            <Box
                sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                zIndex: 555555,
                background: '#0000006e'
            }}
                className='full'></Box>

            <Image
                className='img'
                layout='fill'
                src={img || `https://lp-cms-production.imgix.net/2022-05/Croatia-Plitvice-Lakes-National_Park-Melinda-Nagy-shutterstock_256094920-RFC.jpg?auto=format&q=40&ar=16%3A9&fit=crop&w=1446`}/>
        </Box>
    )
}

export default HeroImage