import StorySlideCard from '../../Cards/StorySlideCard';
import {Box} from '@mui/material';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {ISmallStoryCard, IStory} from '../../../Types/Types';

const StorySlider = ({stories} : {
    stories: IStory[];
    
}) => {

    return (
        <Box
            sx={{
            mt: {
                xs: '2em',
                lg: 0
            },
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
                modules={[Autoplay, Navigation]}
                className="mySwiper swiper">

                {stories && stories.length > 0 && [...stories].map((story : IStory) => {

                    return <SwiperSlide className='ztop cursor' key={story.title}>
                        <StorySlideCard
                            id={story.id}
                            timeRead={story.timeRead}
                            date={`aug, 25, 2022`}
                            shortDescription={story.shortDescription}
                            bgImage={story.bgImage}
                            title={story.title}
                            key={story.title}/>
                    </SwiperSlide>
                })
}

            </Swiper>

        </Box>
    )
}

export default StorySlider