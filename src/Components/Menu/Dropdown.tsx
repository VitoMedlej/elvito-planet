import {Box, Button, Menu, MenuItem, Typography} from "@mui/material";
import {useState} from "react";
import {useRouter} from 'next/router';
import Link from "next/link";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
function Dropdown({title, itemsArray} : {
    title: string,
    itemsArray: any
}) {

    const [anchorEl,
        setAnchorEl] = useState < null | HTMLElement > (null);
    const open = Boolean(anchorEl);
    const handleClick = (event : React.MouseEvent < HTMLButtonElement >) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const router = useRouter()
    return (
        <div>
            <Button
                size='small'
                sx={{
                color: 'white'
            }}
                id="basic-button"
                aria-controls={open
                ? 'basic-menu'
                : undefined}
                aria-haspopup="true"
                aria-expanded={open
                ? 'true'
                : undefined}
                onClick={handleClick}>
                {title}
            </Button>

            <Menu
                sx={{
                'MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiPaper-root MuiMenu-paper MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiPopover-paper css-edx3xz-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper': {
                    borderRadius: 0
                },
                mt: '1em',
                zIndex: '16212400',
                'ul': {
                    width: '250px',
                    display: 'flex',
                    pt: '1.5em',
                    pb: 0,
                    flexDirection: 'column',
                    alignItems: 'center'
                }
            }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button'
            }}
                anchorOrigin={{
                horizontal: "left",
                vertical: "bottom"
            }}>

                {itemsArray && itemsArray.map((trip : {
                    title: string,
                    img: string,
                    href: string
                }) => {
                    return <MenuItem
                        key={trip.title}
                        sx={{
                        py: '.5em',
                        my: '.15em',
                        color: 'black',
                        ':hover': {
                            color: '#0057d9'
                        },
                        width: '100%',
                        justifyContent: 'center'
                    }}
                        onClick={() => {
                        setAnchorEl(null);
                        router.push('/')
                    }}>{trip.title}</MenuItem>
                })}

                <Button
                onClick={()=>router.push(`/explore/${title.toLocaleLowerCase()}`)}
                    sx={{
                    width: '100%',
                    ':hover': {
                        background: '#0057d9'
                    },
                    py: '.75em',
                    mt: '1em',
                    mb: '0em',
                    borderRadius: '0',
                    textAlign: 'center',
                    background: '#0057d9',
                    color: 'white'
                }}>
                    <Typography
                        sx={{
                        pr: '.25em'
                    }}
                        fontSize='small'>
                        View All {title}

                    </Typography>
                    <ArrowCircleRightOutlinedIcon fontSize='small'/>
                </Button>

            </Menu>
        </div>
    );
}

export default Dropdown;