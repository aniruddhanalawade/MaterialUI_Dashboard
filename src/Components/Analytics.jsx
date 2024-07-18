import React from 'react'
import Navbar from '../Pages/Navbar'
import Sidenav from '../Pages/Sidenav'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Geo from '../Charts/Geo';
import "../Dash.css";
import PieChart from '../Charts/PieChart';
import Bar from '../Charts/Bar';
import CountUp from 'react-countup';

const Analytics = () => {
  return (
    <>
    <div className='bgcolor'>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={5}>
                                <Stack spacing={2} direction={"row"} sx={{marginBottom:2}}>
                                    <Card sx={{ minWidth: 47 + "%", height: 150 }} className='gradient'>
                                        <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" sx={{ color: "#ffffff" }}>
                                                Visitors
                                            </Typography>
                                            <Typography gutterBottom variant="h4" component="div" sx={{ color: "#ffffff" }}>
                                                <CountUp delay={0.2} end={22000} duration={0.3}/>
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Since Last Week
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 50 + "%", height: 150}} className='gradientlight'>
                                        <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" sx={{ color: "#ffffff" }}>
                                                Visitors
                                            </Typography>
                                            <Typography gutterBottom variant="h4" component="div" sx={{ color: "#ffffff" }}>
                                            <CountUp delay={0.4} end={23000} duration={0.3}/>
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Since Last Week
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    </Stack>
                                    <Stack spacing={2} direction={"row"}>
                                    <Card sx={{ minWidth: 47 + "%", height: 150  }} className='gradient'>
                                        <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" sx={{ color: "#ffffff" }}>
                                                Visitors
                                            </Typography>
                                            <Typography gutterBottom variant="h4" component="div" sx={{ color: "#ffffff" }}>
                                            <CountUp delay={0.6} end={32000} duration={0.3}/>
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Since Last Week
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 50 + "%", height: 150 }} className='gradientlight'>
                                        <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" sx={{ color: "#ffffff" }}>
                                                Visitors
                                            </Typography>
                                            <Typography gutterBottom variant="h4" component="div" sx={{ color: "#ffffff" }}>
                                            <CountUp delay={0.8} end={42000} duration={0.3}/>
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Since Last Week
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    </Stack>
                            </Grid>
                            <Grid item xs={7}>
                                <Card sx={{ height: 43 + "vh" }}>
                                    <CardContent>
                                        <div className='paddingall'>
                                            <Bar/>
                                        </div>
                                       
                                    </CardContent>
                                </Card>
                            </Grid>
                            </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 45 + "vh" }}>
                                    <CardContent>
                                       <Geo/>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 45 + "vh" }}>
                                    <CardContent>
                                        <div className='paddingall'>
                                        <PieChart/>    
                                        </div>
                                       
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

export default Analytics