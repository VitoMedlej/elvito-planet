import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchInput() {
    return (
        <Paper
            component="form"
            sx={{
          
            display: 'flex',
            alignItems: 'center',
            width: {
                xs: 'min-content',
                sm: '200px',
                md: '300px'
            }
        }}>
            <IconButton
                type="submit"
                sx={{
                p: {
                    xs: '5px',
                    sm: '10px'
                }
            }}
                aria-label="search">
                <SearchIcon/>
            </IconButton>
            <Divider
                sx={{
                height: 28,
                m: 0.5,
                display: {
                    xs: 'none',
                    sm: 'block'
                }
            }}
                orientation="vertical"/>

            <InputBase
                sx={{
                ml: {
                    xs: 0,
                    sm: 1
                },
                flex: {
                    xs: 0,
                    sm: 1
                }
            }}
                placeholder="Search"
                inputProps={{
                'aria-label': 'search'
            }}/>

        </Paper>
    );
}