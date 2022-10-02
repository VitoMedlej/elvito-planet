import type {NextPage}
from 'next'
import 'swiper/css';
import StoriesExplore from '../src/Components/Sections/StoriesExplore/StoriesExplore';

import Hero from '../src/Components/Sections/Hero/Hero';
import Trips from '../src/Components/Sections/Trips/Trips';
import Explore from '../src/Components/Sections/Explore/Explore';
import Subscribe from '../src/Components/Sections/Subscribe/Subscribe';
import Layout from '../src/Layout';
import { GetContentfullData } from '../src/Functions/GetContentfullData';
import { IStory } from '../src/Types/Types';

const Home : NextPage = ({data} : any) => {
    let stories: IStory[] = data && data 
    return (
        <Layout title='Elvito Planet | Best Travel Guide' desc='Discover amazing travel experiences with ElVito Planet’s insider tips, inspirational traveler stories and expert guidance from around the world.'>
<>
     <Hero/> < Trips /> <Explore/> < StoriesExplore stories={stories} /> 
    <Subscribe />
</>
  
        </Layout>
    )
}

export default Home

export const getStaticProps = async() => {
    try {
        const data = await GetContentfullData(`
            query  {
                storyCollection {
                  items {
                    id
                    title
                    shortDescription
                    postedAt
                    bgImage
                    timeRead
                  }
                }
              }
            `)
        if (!data || !data
            ?.storyCollection
                ?.items) 
            throw 'Error no data'

        return {
            props: {
                data: data.storyCollection.items
            }
        }

    } catch (err) {
        console.log('err: ', err);
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
}
