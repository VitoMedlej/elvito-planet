import Layout from '../src/Layout';
import {Box, Typography} from '@mui/material';

const Index = () => {
    return (
        <Layout title={'404 PAGE NOT FOUND'} desc={'404 page not found'}>

            <Box
                sx={{
                textAlign: 'center',
                background: '#567aff6b',
                pt: '16em',
                px: '1em',
                pb: '10em'
            }}>
                <Typography fontSize='2em' fontWeight='bold'>
                    404 page not found!
                </Typography>
            </Box>
        </Layout>
    )
}

export default Index