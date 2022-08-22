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

export const Links = [
    {
        text: 'Home',
        Icon: HomeIcon,
        url: '/'
    }, {
        text: 'Contact',
        Icon: ConnectWithoutContactIcon,
        url: '/contact'
    }, {
        text: 'Projects',
        Icon: AssignmentTurnedInIcon,
        url: '/'
    }, {
        text: 'Theme',
        Icon: DarkModeIcon,
        url: '/',
        isToggleTheme: true
    }
]

const Navbar = ({toggleDrawer} : any) => {
    // const colorMode = useContext(ColorModeContext) const color = colorMode.mode
    // === 'light'     ? 'black'     : 'white'
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
            position: 'fixed',
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
                <Logo toggleDrawer={toggleDrawer} colorMode={'colorMode'}/>

                <IconButton
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
                      <Dropdown title='Stories' itemsArray={TripsArray}/>
                
                    <Dropdown title='Destinations' itemsArray={TripsArray}/>
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
