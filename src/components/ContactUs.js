import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const ContactUs = () => {
  return (
    <>
        <Typography variant='h4' mt={6} mb={6}>Contact Us -</Typography>
        <Box component="form">
            <TextField 
            label="first name" 
            type="text" 
            variant='outlined'
            // fullWidth
            sx={{width:"300px", m:1}} 
            />
            <TextField 
            label="last name" 
            type="text" 
            variant='outlined'
            sx={{width:"300px", m:1}} 
            />
            <TextField 
            label="phone number" 
            type="number" 
            variant='outlined'
            sx={{width:"300px", m:1}} 
            />
            <TextField 
            label="Comment" 
            type="text" 
            variant='outlined'
            multiline
            rows={4}
            fullWidth
            sx={{m:1}} 
            />
            <Button size="large" variant='contained' type='submit' sx={{m:1}}>Send</Button>
        </Box>
    </>
  )
}

export default ContactUs
