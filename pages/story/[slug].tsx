import {Box, Breadcrumbs, Container, Link, Typography} from "@mui/material"
import {useRouter} from "next/router"
import Layout from "../../src/Layout"
import Image from 'next/image'
const Index = () => {
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

                    <Box sx={{
                        height:'100%',
                        width:'90vw',
                        minWidth:'300px',

                        minHeight:'400px',
                        position: "relative"
                    }}>
                        <Image src='https://lp-cms-production.imgix.net/2021-10/Arikok%20National%20Park%20jeep.jpg?auto=format&q=40&ar=16%3A9&fit=crop&w=5500' layout='fill' className='img'/>
                    </Box>
                    </Box>

                </Container>
            </Box>
        </Layout>
    )}
    export default Index