import {Box, Breadcrumbs, Container, Link, Typography} from "@mui/material"
import {useRouter} from "next/router"
import Layout from "../../src/Layout"
import Image from 'next/image'
import { GetContentfullData } from "../../src/Functions/GetContentfullData"
const Index = ({data} : any) => {
    console.log('data: ', data);


    const router = useRouter()
    const {slug} = router.query;
    return (
        <Layout title={`${slug} | Elvito Planet `} desc=''>

            <Box
                sx={{
                height: '1000px',
                pt: {
                    xs: '6em',
                    sm: '8em'
                }
            }}>
                <Container maxWidth='lg'>
                    <Breadcrumbs separator=">" aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            Home
                        </Link>
                        <Link underline="hover" color="inherit" href="/explore/stories">
                            Stories
                        </Link>
                        <Typography color="text.primary">Breadcrumbs</Typography>
                    </Breadcrumbs>
                    <Typography
                        sx={{
                        py: '1em',
                        maxWidth: '1000px',
                        fontSize: {
                            xs: '1.25em',
                            sm: '1.6em',
                            md: '2em',
                            lg: '3em'
                        },
                        fontWeight: '600'
                    }}>
                        The best things to do in Aruba cover every kind of adventure
                    </Typography>
                    <Box>

                        <Box
                            sx={{
                            margin: '0 auto',
                            height: '100%',
                            width: {
                                xs: '95%',
                                lg: '100%'
                            },
                            minWidth: '300px',
                            maxWidth: '1200px',
                            minHeight: '400px',
                            position: "relative"
                        }}>
                            <Image
                                src='https://lp-cms-production.imgix.net/2021-10/Arikok%20National%20Park%20jeep.jpg?auto=format&q=40&ar=16%3A9&fit=crop&w=5500'
                                layout='fill'
                                className='img'/>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>

                        <Typography
                            sx={{
                            fontWeight: '500',
                            py: '2em',
                            fontSize: {
                                xs: '1em',
                                sm: '1.2em'
                            }
                        }}>
                            The best things to do in Aruba cover every kind of adventure The best things to
                            do in Aruba cover every kind of adventure The best things to do in Aruba cover
                            every kind of adventure The best things to do in Aruba cover every kind of
                            adventure The best things to do in Aruba cover every kind of adventure The best
                            things to do in Aruba cover every kind of adventure The best things to do in
                            Aruba cover every
                        </Typography>

                        <Typography
                            sx={{
                            fontWeight: '600',
                            pb: '.5em',
                            fontSize: {
                                xs: '1em',
                                sm: '1.4em'
                            }
                        }}>
                            The best things to do in Aruba cover
                        </Typography>
                        <Typography
                            sx={{
                            fontWeight: '400',
                            fontSize: {
                                xs: '1em',
                                sm: '1.2em'
                            }
                        }}>
                            The best things to do in Aruba cover every kind of adventure The best things to
                            do in Aruba cover every kind of adventure The best things to do in Aruba cover
                            every kind of adventure The best things to do in Aruba cover every kind of
                            adventure The best things to do in Aruba cover every kind of adventure The best
                            things to do in Aruba cover every kind of adventure The best things to do in
                            Aruba cover every
                        </Typography>
                    </Box>

                </Container>
            </Box>
        </Layout>
             )}
             export default Index


             export const getServerSideProps = async() => {
                try {
                    const data = await GetContentfullData(`
                        query  {
                            storyCollection {
                              items {
                                title
                                shortDescription
                                postedAt
                                bgImage
                                section {
                                    json
                                }
                                
                              }
                            }
                          }
                        `)
                        
                    if (!data || data
                        ?.storyCollection
                            ?.items.length < 1) 
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