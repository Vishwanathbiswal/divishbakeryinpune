import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Code from '../images/cake.png'
const HeroSection = () => {
  return (
    <Grid container direction="row" alignItems="center">
        <Grid item xs={12} sm={6} order={{xs:2, sm:1}}>
            <Typography variant="h3">Pune's Most Lovable Bakery Shop</Typography>
            <Typography variant="h5">No one can compete with us</Typography>
            <Button variant="contained" size="large" sx={{borderRadius:5}}>Order Now</Button>
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent="center" order={{xs:1, sm:2}}>
            <Box component="img" src={Code} />
            {/* Normal Text */}
        </Grid>
    </Grid>
  )
}

export default HeroSection
