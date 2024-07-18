import React from 'react'
import Sidenav from '../Pages/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../Pages/Navbar';


const About = () => {
    return (
        <>
            <Navbar/>
            <Box height={70}/>
            <Box sx={{ display: 'flex' }}>
            <Sidenav/>
                <h1>About</h1>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                </Box>
            </Box>
        </>
    )
}

export default About