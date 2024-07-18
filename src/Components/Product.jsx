import React from 'react'
import Sidenav from '../Pages/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../Pages/Navbar';
import ProductList from './products/ProductList';
const Product = () => {
  return (
    <>
    <div className='bgcolor'>
      <Navbar/>
      <Box height={70}/>
      <Box sx={{display:"flex"}}>
        <Sidenav/>
        <Box component="main" sx={{flexGrow:1,p:3}}>
           <ProductList/>
        </Box>
      </Box>
    </div>
    
    </>
  )
}

export default Product