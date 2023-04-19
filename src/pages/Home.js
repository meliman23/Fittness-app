import React, {useState } from 'react';
import {Box} from '@mui/material';

import Banner from '../Components/Banner' ;
import SearchExercises from '../Components/SearchExercises' ;
import Exercises from '../Components/Exercises' ;

const Home = () =>{
  return (
    <Box>
     <Banner/>
     <SearchExercises/>
    <Exercises/>
    </Box>
  )
}

export default Home