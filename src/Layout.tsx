import {Box, Button, Drawer, IconButton} from "@mui/material";
import Head from "next/head";
import {useState} from "react";
import {ILayout} from "../src/Types/Types";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import CloseIcon from '@mui/icons-material/Close';
import DrawerMenuItems from "./Components/Menu/DrawerMenuItems";

const Layout = ({title, color, children, desc} : ILayout) => {
    const [isOpen,
        setOpen] = useState(false)
    return (

        <div>
            <Head>
                <title>{title || 'My page title'}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link
                    rel="shortcut icon"
                    href="https://res.cloudinary.com/dwcu3wcol/image/upload/v1657099811/log_nkmcys.jpg"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href={`https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700&display=swap`}
                    rel="stylesheet"/>

                <meta
                    name="description"
                    content={`${desc || 'Vito Medlej personal portfolio website, A Lebanese web developer an expert in UI' +
                    '/UX and building complex web applications.'}`}/>

                <meta
                    property="og:title"
                    content="Vito Medlej Personal Portfolio | Web Developer To Hire"/>

                <meta property="og:url" content="https://elvito.netlify.app"/>

                <meta
                    property="og:description"
                    content="Vito Medlej is a Web Developer based in Lebanon. And this is my personal Portfolio. "/>

                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/dwcu3wcol/image/upload/v1658929513/log-removebg-preview_fygpsd.png"/>

            </Head>
            <Drawer
                onClose={() => setOpen(false)}
                sx={{
                zIndex: "7777733"
            }}
                anchor={'right'}
                open={isOpen}>
                <Box
                    sx={{
                    width: '270px',
                    padding: '1em 2em'
                }}>
                    <Box
                        sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        flexDirection: 'column',
                    }}>

                        <IconButton onClick={() => setOpen(false)} size="large">
                            <CloseIcon
                                sx={{
                                color: 'red'
                            }}/>
                        </IconButton>
                    </Box>
                    <DrawerMenuItems/>

                </Box>
            </Drawer>
            <Navbar isOpen={isOpen} setOpen={setOpen} color={color}/>
            <> {children} </>
            <Footer/>
        </div>
    )

}

export default Layout;