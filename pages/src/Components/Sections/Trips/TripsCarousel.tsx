import {Box} from '@mui/material';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";

import {ITripsCarousel} from '../../../Types/Types';
import TripCard from '../../Cards/TripCard';

const TripsCarousel = ({arr} : ITripsCarousel) => {
    return (
        <Box
            sx={{
            mt: '2em',
            width: '100%',
            display: {
                xs: 'flex',
                md: 'none'
            },
            height: '100%'
        }}>
            <Swiper
                spaceBetween={10}
                slidesPerView={1.13}
                loop={true}
                autoplay={{
                delay: 2000,
                disableOnInteraction: false
            }}
                modules={[Autoplay]}
                className="mySwiper swiper">

                {arr && arr.map(trip => {

                    return <SwiperSlide className='slide cursor' key={trip.title}>

                        <TripCard href={trip.href} title={trip.title} img={trip.img}/>

                    </SwiperSlide>
                })
}

            </Swiper>

        </Box>
    )
}

export default TripsCarousel