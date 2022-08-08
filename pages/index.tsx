import type { NextPage } from 'next'
import { Box } from '@mui/material';
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Box sx={{py:'6em'}}>
      <Image layout={'fill'} src={`https://lp-cms-production.imgix.net/2022-05/Croatia-Plitvice-Lakes-National_Park-Melinda-Nagy-shutterstock_256094920-RFC.jpg?auto=format&q=40&ar=16%3A9&fit=crop&w=1446`} />
    </Box>
  )
}

export default Home
