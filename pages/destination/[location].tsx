import {Box, Container, Typography} from '@mui/material';
import Image from 'next/image';
import LargeStoryCard from '../../src/Components/Cards/LargeStoryCard';

const imgsArr = [
    'https://res.cloudinary.com/dwcu3wcol/image/upload/v1660733920/pexels-photo-33651' +
            '2_cjo1b6.jpg',
    'https://res.cloudinary.com/dwcu3wcol/image/upload/v1660733920/pexels-photo-39644' +
            '06_kuqsme.jpg',
    ''
]
const Index = ({destinationData}:any) => {
    console.log('destinationData: ', destinationData);
    let {items } = destinationData?.destinationCollection
    let data = items[0]
   
   
    return (
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
                <Image
                    className='img'
                    layout='fill'
                    src={`https://lp-cms-production.imgix.net/2021-10/people-in-a-glass-garden-exhibit_t20_3wP4xB.jpg?fit=crop&q=60&auto=format&w=1247&h=538&dpr=1`}/>
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
                transform: 'translateY(-10%)',
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
                        color: data?.title ? '#0057d9' : 'red',
                        textTransform:'capitalize',
                        fontSize: {
                            xs: '2.2em',
                            sm: '4em'
                        },
                        pb: '.45em'
                    }}>
                        {data?.title || 'Error'}
                    </Typography>
                    <Typography maxWidth='md' fontWeight='500'>
                      {data?.description || 'Sorry, an error occurred while fetching data.' }
                    </Typography>

                  {data && data?.info?.map((info : any)=>{

                 return  <Box key={info.title} maxWidth='md'>
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
       
         {
            data?.images && 
           <>
         
      
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
                    <Image layout='fill' className='img' src={data.images[0]}/>
                </Box>
                <Box
                    className='relative'
                    sx={{
                    width: '74%',
                    height: '100%',
                    minHeight: '300px'
                }}>
                    <Image layout='fill' className='img' src={data.images[1]}/>
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
                    <Image layout='fill' className='img' src={data.images[2]}/>
                </Box>
                <Box
                    className='relative'
                    sx={{
                    width: '66%',
                    height: '100%',
                    minHeight: '300px'
                }}>
                    <Image layout='fill' className='img' src={data.images[3]}/>
                </Box>
            </Container>

            <Container maxWidth='lg' sx={{
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
                    Explore {data?.title}

                </Typography>

                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe
                            width="100%"
                            height="500"
                            id="gmap_canvas"
                            src={data.mapLocation || "https://maps.google.com/maps?q=seattle&t=&z=13&ie=UTF8&iwloc=&output=embed"}
                            frame-border="0"
                            scrolling="no"
                            margin-height="0"
                            margin-width="0"></iframe>
                        <a href="https://putlocker-is.org"></a>

                    </div>
                </div>

            </Container>
            <Container maxWidth='lg' sx={{
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
                    wfull={true}
                    sx={{
                    mt: '.45em'
                }}/>
            </Container>
            </>
            }
        </Box>
    )
}

export default Index

export const getServerSideProps = async(context :any) => {
    function capitalizeFirstLetter(string:string) {
        return `${string.charAt(0).toUpperCase() + string.slice(1)}`;
      }
    try {
        const location = capitalizeFirstLetter(context.query.location) || null
        console.log('location: ', location);
        
        // const destination = router
        // first, grab our Contentful keys from the .env file
        const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
        const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
        //https://graphql.contentful.com/content/v1/spaces/vqg697sliq4v/environments/master&?access_token=Jgc89barwNDyqR001RC1H69TVijhbc8x1dW-GWfhtKQ then, send a
        // request to Contentful (using the same URL from GraphiQL)
        const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${space}`, {
            method: 'POST', // GraphQL *always* uses POST requests!
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${accessToken}`, // add our access token header
            },
            // send the query we wrote in GraphiQL as a string
            body: JSON.stringify({
                // all requests start with "query: ", so we'll stringify that for convenience
                query: `

                {
                    destinationCollection (where : {title_contains : "${location}"}) {
                        items  {
                          title 
                          description
                          info
                          mapLocation
                          images
                        }
                          }
                    
                    }
             
                    
                
                
                  `
            })
        },);

        // grab the data from our response
        const {data} = await res.json()
        console.log('await res.json(): ',  data);
      
        
        if (!data || data?.destinationCollection?.items.length < 1) {
            console.log('data: ', data);
         return {
            redirect: {
                destination: '/',
                permanent: false,
              }
         }
        }

        return {
            props: {
                destinationData:  JSON.parse(JSON.stringify(data))  
            }
        }
    } catch (err) {
        console.log('err: ', err);
        return {
            redirect: {
                destination: '/',
                permanent: false,
              },
        }
    }
}

// {
//     destinationCollection{
//         items {
//           title
//           description
//           info
//           mapLocation
//           images
//         }
//           }
    
//     }


