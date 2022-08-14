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
                sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '0 auto',
                position: 'relative'
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
                    <IconButton sx={{
                        color: 'white'
                    }}>
                        <Typography fontWeight='bold' variant='h3' fontSize='.65em'>
                            Stories
                        </Typography>
                    </IconButton>
                    <IconButton sx={{
                        color: 'white'
                    }}>
                        <Typography fontWeight='bold' variant='h3' fontSize='.65em'>
                            Destinations
                        </Typography>
                    </IconButton>
                    <Button
                        variant='contained'
                        sx={{
                        ':hover':{background:'black',color:'white'},

                        color: 'black',
                        background: 'white'
                    }}>
                        <Typography fontWeight='bold' variant='h3' fontSize='.75em'>
                            Subscribe
                        </Typography>
                    </Button>
                </Box>

            </Container>
        </AppBar>
    );
};
export default Navbar;
