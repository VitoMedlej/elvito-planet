import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from 'react';
import {Typography, Box} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Fade from '@mui/material/Fade';

export default function DDMenu() {
    const [anchorEl,
        setAnchorEl] = useState < null | HTMLElement > (null);
    const open = Boolean(anchorEl);
    const handleClick = (event : any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{
            zIndex: '5252157215'
        }}>
            <Button
                id="fade-button"
                aria-controls={open
                ? 'fade-menu'
                : undefined}
                aria-haspopup="true"
                aria-expanded={open
                ? 'true'
                : undefined}
                onClick={handleClick}>
                Dashboard
            </Button>
            <Menu
            
                id="fade-menu"
                MenuListProps={{
                'aria-labelledby': 'fade-button'
            }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}>
                <MenuItem sx={{padding : '.5em 3em'}} onClick={handleClose}>Profile</MenuItem>
              
            </Menu>
        </Box>
    );
}