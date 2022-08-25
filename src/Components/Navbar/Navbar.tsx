import MenuIcon from '@mui/icons-material/Menu';
import {
    Box,
    Button,
    Typography,
    Container,
    IconButton,
    AppBar
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Logo from '../Logo/Logo';
import SearchInput from '../Inputs/SearchInput';
import Dropdown from '../Menu/Dropdown';
import TripsArray from '../../../static.json'
import Link from 'next/link';


export const storiesArray = [{
    title: 'Argetina',
    href : '/story/N23zI8f3GNXwSeE/the-best-beaches-in-argentina-for-sand-splashing-and-scenery'
},{
    title: 'Australia',
    href:'/story/dO289glek1WnlB1/start-saving-to-experience-one-of-these-incredible-safari-stays-in-australia'
},

{
    title : 'South Korea',
    href : '/story/GMcmKPl7AAeUHcq/hit-the-trails-on-these-top-hikes-in-south-korea'

}
    ]
const Navbar = ({setOpen,isOpen, color} : any) => {

    return (
        <AppBar
            sx={{
            boxShadow: 'none',
            pt: {
                xs: '1.5em',
                sm: '2em',
                md: '3em'
            },
            zIndex: 555556,
            position: 'absolute',
            background: 'transparent'
        }}
            position="static">
            <Container
                className='relative'
                sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '0 auto'
            }}
                maxWidth="lg">
                <SearchInput/>
                <Logo  colorMode={'colorMode'}/>

                <IconButton
                onClick={() =>setOpen(true)}
                    sx={{
                    color: 'white',
                    display: {
                        xs: 'flex',
                        md: 'none'
                    },
                    margin: '0 '
                }}
                    size="large"
                    edge="start"
                    aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Box
                    sx={{
                    color: 'black',
                    gap: '1em',
                    display: {
                        xs: 'none',
                        md: 'flex'
                    }
                }}>
                      <Dropdown title='Stories' color={color} itemsArray={storiesArray}/>
                
                    <Dropdown title='Destinations' color={color} itemsArray={TripsArray}/>
                    <Link href='/#subscribe'>
                    <Button
                        variant='contained'
                        sx={{
                        ':hover': {
                            background: 'black',
                            color: 'white'
                        },
                        color: 'black',
                        background: 'white'
                    }}>
                        <Typography fontWeight='bold' variant='h3' fontSize='.75em'>
                            Subscribe
                        </Typography>
                    </Button>
                    </Link>

                </Box>

            </Container>
        </AppBar>
    );
};
export default Navbar;
