import React from 'react'
import Sidenav from '../Pages/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../Pages/Navbar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import "../Dash.css";
import Accordian from '../Pages/Accordian';
import Barchart from '../Charts/Barchart';
import CountUp from 'react-countup';


const Home = () => {
    return (
        <>
            <div className='bgcolor'>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={2} direction={"row"}>
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradient'>
                                        <CardContent>
                                            <div className='iconstyle'>
                                                <CreditCardIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                            $<CountUp delay={0.3} end={500} duration={0.3}/>
                                            </Typography>

                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Income
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientlight'>
                                        <CardContent>
                                            <div className='iconstyle'>
                                                <ShoppingBagIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                            $<CountUp delay={0.3} end={900} duration={0.3}/>
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Orders
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Card sx={{ maxWidth: 345 }} className='gradientlight'>

                                        <Stack spacing={2} direction={"row"}>
                                            <div className='iconstyle'>
                                                <StorefrontIcon />
                                            </div>
                                            <div className='paddingall'>
                                                <span className='pricetitle'>$203K</span>
                                                <br />
                                                <span className='pricesubtitle'>Total Income</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <Stack spacing={2} direction={"row"}>

                                            <div className='iconstyleblack'>
                                                <StorefrontIcon />
                                            </div>

                                            <div className='paddingall'>
                                                <span className='pricetitle'>$203K</span>
                                                <br />
                                                <span className='pricesubtitle'>Total Income</span>
                                            </div>
                                        </Stack>

                                    </Card>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        <Barchart />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        <div className='paddingall'>
                                            <span className='pricetitle'>Popular Products</span>
                                        </div>
                                        <Accordian />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </div>
        </>
    )
}

export default Home