import React from 'react';
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material';

//the .. goes one folder up 
import Logo from '../Assets/images/Logo.png';
//px sets horizontal padding 
//py sets verticle 

function Navbar() {
  return (
  <Stack
  direction='row'
  justifyContent='none'
  px='20px'
  sx={{
     gap: {
       //responsive gap
        sm:'122px',
        xs: '40px'},
      mt:{
        //margin top
         sm:'32px',
         xs:'20px'  
      }}}
     > 
    <Link to="/">
    <img src={Logo} 
          alt='logo' 
          style={{
            width: '47px', 
            height:'47px', 
            margin:'0 20px'}}/>
    </Link>
      <Stack
    direction='row'
    gap='40px'
    fontSize='24px'
    alignItems='flex-end'
  >
    <Link to='/' style={{
      textDecoration: 'none',
      borderBottom: '3px solid #FF2624'
    }}>Home
    </Link>
    <a 
      href='#exercises' 
      style={
          {textDecoration:'none', 
          color: '#3A1212'  
    }}>Exercises</a>
  </Stack>
  </Stack>
)}

export default Navbar