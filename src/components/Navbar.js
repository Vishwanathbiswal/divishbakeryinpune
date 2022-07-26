import React from 'react'
import {AppBar, Toolbar, Button, Typography} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  return (
    <AppBar position="static">
        <Toolbar variant="h6">
            <Typography sx={{ flexGrow: 1 }}> DiVish Bakery </Typography>
            <Button variant="text" color='inherit' startIcon={<LoginIcon />}>Login</Button>
            <Button variant="text" color='inherit' endIcon={<LogoutIcon />}>Logout</Button>
        </Toolbar>
    </AppBar>
  )
}
export default Navbar
