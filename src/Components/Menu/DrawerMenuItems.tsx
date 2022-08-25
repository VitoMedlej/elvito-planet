import {Accordion, AccordionSummary, AccordionDetails, Typography, Button} from '@mui/material';
import TripsArray from '../../../static.json'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { storiesArray } from '../Navbar/Navbar';

export default function DrawerMenuItems() {
    return (
        <div>
        {TripsArray && TripsArray.map(trip=>{

           return <Accordion key={trip.title}>
                <AccordionSummary
                    expandIcon={< ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Button>Foo</Button>
                </AccordionDetails>
            </Accordion>
            
        }) 
        
        }
           {storiesArray && storiesArray.map(story=>{

return <Accordion key={story.title}>
     <AccordionSummary
         expandIcon={< ExpandMoreIcon />}
         aria-controls="panel1a-content"
         id="panel1a-header">
         <Typography>{story.title}</Typography>
     </AccordionSummary>
     <AccordionDetails>
     
     </AccordionDetails>
 </Accordion>
 
}) 

}
        
          
        </div>
    );
}