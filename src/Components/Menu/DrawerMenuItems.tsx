import {Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import TripsArray from '../../../static.json'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { storiesArray } from '../Navbar/Navbar';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function DrawerMenuItems({setOpen} : any) {
    const router = useRouter()
    return (
        <div>
     

            <Accordion >
                <AccordionSummary
                    expandIcon={< ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>Destinations</Typography>
                </AccordionSummary>
                <AccordionDetails>
                {TripsArray && TripsArray.map(trip=>{ 
                    return <Button sx={{width:'100%'}} onClick={()=>{setOpen(false);
                        router.push(`${trip.href}`)}} key={trip.title}>{trip.title}</Button>
                })  }
           
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={< ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>Stories</Typography>
                </AccordionSummary>
                <AccordionDetails>
                {storiesArray && storiesArray.map(story=>{ 
                    return <Button  sx={{width:'100%'}} onClick={()=>{setOpen(false);
                        router.push(`${story.href}`)}} key={story.title}>{story.title}</Button>
                })  }
           
                </AccordionDetails>
            </Accordion>

            
            <Link href='/#subscribe'>
                    <Button
                    onClick={() => setOpen(false)}
                        variant='contained'
                        sx={{
                        width: '100%',
                        py:'.5em',
                        mt:'1em',
                        ':hover': {
                            background: 'black',
                            color: 'white'
                        },
                        color: 'white',
                        background: ' black',
                        borderRadius:0,
                    }}>
                        <Typography fontWeight='bold' variant='h3' fontSize='.75em'>
                            Subscribe
                        </Typography>
                    </Button>
                    </Link>
       
        
       
          

 



        
          
        </div>
    );
}