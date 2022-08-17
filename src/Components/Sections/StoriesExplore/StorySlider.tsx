import StorySlideCard from '../../Cards/StorySlideCard';
import {Box} from '@mui/material';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const StorySlider = () => {
    return (
        <Box
            sx={{
            mt: {xs:'2em',lg:0},
            width: '100%',
            display: {
                xs: 'flex'
            },
            height: '100%'
        }}>
            <Swiper
            navigation={true}
                slidesPerView={1}
                spaceBetween={5}
                loop={true}
                autoplay={{
                delay: 2000,
                disableOnInteraction: true
            }}
                modules={[Autoplay,Navigation]}
                className="mySwiper swiper">

                {[1, 2, 3].map(trip => {

                    return <SwiperSlide className='ztop cursor' key={trip}>

                        <StorySlideCard/>
                    </SwiperSlide>
                })
}

            </Swiper>

        </Box>
    )
}

export default StorySlider