import React from 'react'
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Divider from "@mui/material/Divider";

const Profile = () => {
  return (
    <>
     <Card sx={{ maxWidth: 380 }}>
   
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Aniruddha Nalawade
        </Typography>
      

        <Typography gutterBottom variant="" component="div">
         <MailIcon />  aniruddhanalawade12@gmail.com
        </Typography>

        <Typography gutterBottom variant="" component="div">
         <PhoneIphoneIcon/> (+91) 9999999999
        </Typography>

        <Typography gutterBottom variant="" component="div">
        <LocationOnIcon/>  Kothrud Pune India
        </Typography>
      </CardContent>
      </Card>
    </>
  )
}

export default Profile