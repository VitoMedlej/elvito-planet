import {Box, Container, Typography} from '@mui/material';
import Image from 'next/image';
import LargeStoryCard from '../../src/Components/Cards/LargeStoryCard';
import React, {Suspense} from 'react';
import Layout from '../../src/Layout';
import CircularProgress from '@mui/material/CircularProgress';
import Map from '../../src/Components/Map/Map';
import {GetContentfullData} from '../../src/Functions/GetContentfullData';

const Index = ({destinationData} : any) => {
    let {items} = destinationData
        ?.destinationCollection

    let data = items[0]

    return (
        <Layout
            title={`Visit ${data.title} - Elvito Planet `}
            desc={`${data.title}&apos;s best sights and local secrets from travel experts you can trust`}>

            <Box>
                <Box
                    className='relative'
                    sx={{
                    width: '100%',
                    height: {
                        xs: '250px',
                        sm: '400px'
                    }
                }}>
                    <img
                        alt=''
                        className='img abso'
                        // layout='fill'
                        src={` ${data.bgImage || 'https://lp-cms-production.imgix.net/2021-10/people-in-a-glass-garden-exhibit_t20_3wP4xB.jpg?fit=crop&q=60&auto=format&w=1247&h=538&dpr=1'}`}/>
                </Box>
                <Box
                    sx={{
                    boxShadow: 'rgb(0 0 0 / 15%) -0.05px 0 1.95px 0.6px ',
                    borderRadius: '.25em',
                    justifyContent: {
                        lg: 'space-evenly',
                        xl: 'flex-end'
                    },
                    display: 'flex',
                    width: {
                        xs: '91%',
                        sm: '80%'
                    },
                    height: '100%',
                    transform: {
                        xs: 'translateY(-2%)',
                        sm: 'translateY(-10%)'
                    },
                    background: 'white',
                    py: '2em',
                    px: '1em'
                }}>
                    <Box
                        sx={{
                        maxWidth: '1200px',
                        width: {
                            xs: '100%',
                            sm: '90%'
                        }
                    }}>

                        <Typography
                            sx={{
                            fontWeight: '600',
                            color: data
                                ?.title
                                    ? '#0057d9'
                                    : 'red',
                            textTransform: 'capitalize',
                            fontSize: {
                                xs: '2.2em',
                                sm: '4em'
                            },
                            pb: '.45em'
                        }}>
                            {data
                                ?.title || 'Error'}
                        </Typography>
                        <Typography maxWidth='md' fontWeight='500'>
                            {data
                                ?.description || 'Sorry, an error occurred while fetching data.'}
                        </Typography>

                        {data && data
                            ?.info
                                ?.map((info : any) => {

                                    return <Box key={info.title} maxWidth='md'>
                                        <Typography
                                            sx={{
                                            pt: '2em',
                                            pb: '.45em'
                                        }}
                                            fontWeight='500'
                                            fontSize='1.3em'>
                                            {info.title}
                                        </Typography>
                                        <Typography fontSize='.9em'>
                                            {info.description}
                                        </Typography>
                                    </Box>

                                })
}

                    </Box>

                </Box>

                {data
                    ?.images && <div>

                        <Container
                            sx={{
                            display: 'flex',
                            gap: '.25em'
                        }}>

                            <Box
                                className='relative'
                                sx={{
                                width: '25%',
                                height: '100%',
                                minHeight: '300px'
                            }}>
                                <Image
                                     alt=''
                                    layout='fill'
                                    className='img'
                                    src={data.images[0] || 'https://lp-cms-production.imgix.net/2021-10/people-in-a-glass-garden-exhibit_t20' +
                                    '_3wP4xB.jpg?fit=crop&q=60&auto=format&w=1247&h=538&dpr=1'}/>
                            </Box>
                            <Box
                                className='relative'
                                sx={{
                                width: '74%',
                                height: '100%',
                                minHeight: '300px'
                            }}>
                                <Image
                                     alt=''
                                    layout='fill'
                                    className='img'
                                    src={data.images[1] || 'https://lp-cms-production.imgix.net/2021-10/people-in-a-glass-garden-exhibit_t20' +
                                    '_3wP4xB.jpg?fit=crop&q=60&auto=format&w=1247&h=538&dpr=1'}/>
                            </Box>
                        </Container>
                        <Container
                            sx={{
                            display: 'flex',
                            gap: '.25em',
                            justifyContent: 'flex-end',
                            flexDirection: 'row-reverse',
                            mt: '.25em'
                        }}>

                            <Box
                                className='relative'
                                sx={{
                                width: '33%',
                                height: '100%',
                                minHeight: '300px'
                            }}>
                                <Image
                                     alt=''
                                    layout='fill'
                                    className='img'
                                    src={data.images[2] || 'https://lp-cms-production.imgix.net/2021-10/people-in-a-glass-garden-exhibit_t20' +
                                    '_3wP4xB.jpg?fit=crop&q=60&auto=format&w=1247&h=538&dpr=1'}/>
                            </Box>
                            <Box
                                className='relative'
                                sx={{
                                width: '66%',
                                height: '100%',
                                minHeight: '300px'
                            }}>
                                <Image
                                     alt=''
                                    layout='fill'
                                    className='img'
                                    src={`${data
                                    ?.images[3] || 'https://lp-cms-production.imgix.net/2021-10/people-in-a-glass-garden-exhibit_t20' +
                                        '_3wP4xB.jpg?fit=crop&q=60&auto=format&w=1247&h=538&dpr=1'}`}/>
                            </Box>
                        </Container>

                        <Container
                            maxWidth='lg'
                            sx={{
                            mt: '4em'
                        }}>
                            <Typography
                                sx={{
                                fontWeight: '600',
                                fontSize: {
                                    xs: '2.2em',
                                    sm: '3em'
                                },
                                py: '.45em'
                            }}>
                                Explore {data
                                    ?.title}

                            </Typography>

                            <Suspense fallback={< CircularProgress />}>
                                <Map location={data
                                    ?.mapLocation}/>
                            </Suspense>

                        </Container>
                        <Container
                            maxWidth='lg'
                            sx={{
                            mt: '4em'
                        }}>
                            <Typography
                                sx={{
                                fontWeight: '600',
                                fontSize: {
                                    xs: '2.2em',
                                    sm: '3em'
                                },
                                py: '.45em'
                            }}>
                                Story From {data.title}

                            </Typography>

                            <LargeStoryCard
                                story={data}
                                wfull={true}
                                sx={{
                                mt: '.45em'
                            }}/>
                        </Container>

                    </div>
}
            </Box>
        </Layout>

    )
}

export default Index

export const getServerSideProps = async(context : any) => {
    function capitalizeFirstLetter(string : string) {
        return `${string
            .charAt(0)
            .toUpperCase() + string.slice(1)}`;
    }
    try {
        const location = capitalizeFirstLetter(context.query.location) || null

        // const destination = router first, grab our Contentful keys from the .env file
        // grab the data from our response
        if (!location) 
            throw 'Error no location query provided'
        const data = await GetContentfullData(`
        { destinationCollection (where : {title_contains : "${location}"}) {
            items  {
              title 
              description
              info
              mapLocation
              images
              bgImage
            }
              }
        
        }
        
        `)

        if (data
            ?.destinationCollection
                ?.items.length < 1) {
            throw 'Error '
        }
        return {
            props: {
                destinationData: JSON.parse(JSON.stringify(data))
            }
        }

    } catch (err) {
        console.log('err 1: ', err);
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
}
