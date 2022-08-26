import {Box, Breadcrumbs, Container, Link, Typography} from "@mui/material"
import {useRouter} from "next/router"
import Layout from "../../../src/Layout"
import Image from 'next/image'
import {GetContentfullData} from "../../../src/Functions/GetContentfullData"
import StoriesExplore from "../../../src/Components/Sections/StoriesExplore/StoriesExplore";
import ProgressBar from 'react-progressbar-on-scroll';
import { IStory } from "../../../src/Types/Types"

const Index = ({data} : any) => {
    let story :IStory = data[0]
    
 


    return (
        <Layout color='black' title={`${story.title} | Elvito Planet `} desc={story.shortDescription + '| ELvito Planet'}>
<>
<ProgressBar color='#0057d9' />
            <Box
                sx={{
                height: '100%',
                pt: {
                    xs: '6em',
                    sm: '8em'
                }
            }}>
                   {story 
                    ? <Container maxWidth='lg'>
                        <Breadcrumbs separator=">" aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/">
                                Home
                            </Link>
                            <Link underline="hover" color="inherit" href="/explore/stories">
                                Stories
                            </Link>
                            <Typography color="text.primary">{story.id}</Typography>
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
                            {story.title}
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
                                minHeight: '450px',
                                position: "relative"
                            }}>
                                <Image
                                     alt=''
                                    src={story.bgImage || 'https://lp-cms-production.imgix.net/2021-10/Arikok%20National%20Park%20jeep.jpg?auto=format&q=40&ar=16%3A9&fit=crop&w=5500'}
                                    layout='fill'
                                    className='img'/>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                            maxWidth: '850px',
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
                             {story.shortDescription}
                            </Typography>

                     {    
                     story.section && story.section?.json?.content &&

                     story.section.json.content.map(({content,nodeType}: any,index:number) => {
                    

                   
                         
                  

                    
                   return           <div key={index}>
                   {nodeType.includes('heading') && content[0].value && <Typography
                                sx={{
                                fontWeight: '600',
                                py: '.5em',
                                fontSize: {
                                    xs: '1em',
                                    sm: '1.4em'
                                }
                            }}>
                                      {content[0].value}
                            </Typography>}
                   {nodeType === 'paragraph' && content[0].value &&     
                       <Typography
                   className={content[0].marks ? content[0].marks.map((a:any)=>a.type).join(' ') : ''}
                                sx={{
                                fontWeight: '400',
                                py: content[0].marks.length > 0 ? '0em' :  '1em'    ,
                                fontSize: {
                                    xs: '1em',
                                    sm: '1.2em'
                                }
                            }}>
                                {`${content[0].value}`}
                            </Typography>}

                          
                          
                        

{content.map((cont:any)=>{
    
    if (cont.nodeType === 'hyperlink') {
        console.log('cont: ', cont);
return <Box
sx={{
margin: '1em auto',
height: '100%',
width: {
    xs: '95%',
    lg: '100%'
},
minWidth: '300px',
maxWidth: '1200px',
minHeight: '450px',
position: "relative"
}}>
<Image
     alt=''
    src={`${cont.data.uri}`}
    layout='fill'
    className='img'/>
</Box>
} 

})
}
</div> 

    
                              }  ) }
                        </Box>

                    </Container>

                    :
                    <Typography color='red' fontWeight='500' fontSize='1.2em'>Failed to load story</Typography>}
            </Box>
          
</>

        </Layout>
    )
}
export default Index

export const getServerSideProps = async(ctx : any) => {
    try {
       
        let id = ctx.query.id ? ctx.query.id : ''
        
        const data = await GetContentfullData(`
                        query  {
                            storyCollection (where : {id_contains : "${id}"}) {
                              items {
                                title
                                id
                                shortDescription
                                bgImage
                                timeRead
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