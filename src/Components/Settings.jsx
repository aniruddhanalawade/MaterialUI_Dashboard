import React from 'react'
import Sidenav from '../Pages/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../Pages/Navbar';
import List from '../Settings/List';

export default function Settings() {
    return (
        <>
            <div className='bgcolor'>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <List/>
                    </Box>
                </Box>
            </div>
        </>
    )
}
