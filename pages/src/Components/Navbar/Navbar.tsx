
import MenuIcon from '@mui/icons-material/Menu';
import {Box, Typography,Container ,IconButton ,AppBar} from '@mui/material';
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
            py: '2em',
            zIndex: '555',
            position: 'fixed',
            background :'transparent',
            
        }}
            position="static">
            <Container
                sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '0 auto',
                position: 'relative',
            }}
                maxWidth="lg">
                <SearchInput/>
                <Logo toggleDrawer={toggleDrawer} colorMode={'colorMode'}/>

                <IconButton sx={{color:'black',display:{xs:'block',sm:'none'}}} size="large" edge="start" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Box>
                    <IconButton sx={{color:'black'}}>
                        <Typography fontWeight='bold' variant='h3' fontSize='.8em'>
                            fasf
                        </Typography>
                    </IconButton>
                </Box>

            </Container>
        </AppBar>
    );
};
export default Navbar;
