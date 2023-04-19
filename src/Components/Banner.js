import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';

import banner from '../Assets/images/banner2.jpg'

const Banner = () => {
  return (
   <Box
   className='parent-word'
   //the parent is relative and the child is absolute
   position='relative' 
   //p for padding 
    p='20px'
   sx={{
    //m is for margin
    textAlign:{
      xs:'center',
      lg:'start'
    },
    mt:{
        lg: '130px',
         
        xs: '20px'},
    ml: { sm: '50px'}}} >

<Stack
      direction={{ 
        xs: 'column', 
        sm: 'row' }}
     
    >
 <div>
    <Typography
      color="#FF2625"
      fontWeight='600'
      fontSize= '24px'>
      Fitness CLub
    </Typography>
   

    <Typography
         fontWeight={700}
         sx={{fontSize:{
                      lg:'44px',
                      xs:'40px'}}}>
    Sweat now,<br/> shine later.
    </Typography>
    <Typography   
        fontSize= '20px'
    //  puts space between the lnes 
        lineHeight='35px'
        mb={3}
    >
    check out our exercises!
    </Typography>
    <Button
    href='#exercises'
    //scrolls down the page 
    variant='contained'
    color='error'
    sx={{ padding:'10px',
  mb:'15px'}
     
    }
    >Explore Exercises</Button>
</div >

    <Box
      sx={{
       
        display: {
          xs: 'none', // hide on extra small screens and below
          md: 'block', // show on medium screens and above
        }
      }}
    >
      <img src={banner}
    alt='banner'
    className='banner'
    />
    </Box>
    </Stack>

<Typography
className='exercise-word'
mt={8}
fontWeight={600}
color="#FF2625"
fontSize='200px'
sx={{
    opacity:'0.1',
    display:{ lg: 'block',
              xs: 'none'}
}}
>
  Exercise
</Typography>

   </Box>
  )
}
export default Banner
