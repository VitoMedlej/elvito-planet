import type {NextPage}
from 'next'
import {Box, Container, Typography} from '@mui/material';
import 'swiper/css';
import Image from 'next/image'
import StoriesExplore from '../src/Components/Sections/StoriesExplore/StoriesExplore';

import Hero from '../src/Components/Sections/Hero/Hero';
import Trips from '../src/Components/Sections/Trips/Trips';
import Explore from '../src/Components/Sections/Explore/Explore';
import Subscribe from '../src/Components/Sections/Subscribe/Subscribe';

const Home : NextPage = () => {
    return (<> <Hero/> < Trips /> <Explore/> < StoriesExplore /> 
    <Subscribe />
    </>)
}

export default Home
