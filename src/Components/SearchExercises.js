import React, {useEffect, useState} from 'react';
import { Box, Button, Stack,TextField, Typography} from '@mui/material'; 

import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = () => {

  const [search, setSearch] = useState('')

  const handleSearch = async()=>{
      if(search){
       const data = await fetchData( 'https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
console.log(data)
      const searched = data.filter(
        (e)=>e.name.toLocaleLowerCase.includes(search)
        ||e.target.toLocaleLowerCase.includes(search)
        ||e.equipment.toLocaleLowerCase.includes(search)
        ||e.bodyPart.toLocaleLowerCase.includes(search)

      )
}}
  return (
   <Stack 
   alignItems='center'
   justifyContent='center'
   p='20px'
   mt='37 '
   >
    <Typography 
    textAlign='center'
    fontWeight={700}
    mb='50px'
     sx={{ fontSize:{
          lg:'44px',
          xs: '30px'}}}>
    Top exercises for a stronger, <br/> healthier you
    </Typography>
    <Box
    position='relative'
    mb='72px'>
      <TextField
      sx={{
        input: {
          fontWeight:'700',
          border: 'none',
          borderRadius: '4px'
        },
        width:{
                lg:'900px',
                xs: '350px' },
        backgroundColor:'white',
        borderRadius:'40px' }}    
      height='76px'
    
      placeholder='Search Exercises'
      type='text'

      value={search}
      onChange={(e) =>
          setSearch(
            e.target.value.toLocaleLowerCase()
            )}
     />
      <Button 
      onClick={handleSearch}
      className='search-btn'
      sx={{
        position:'abolute',
        bgcolor:'#FF2625',
        color:'white',
        textTransform:'none',
        height:'56px',       
        width:{
                lg:'175px',
                xs:'80'},
        fontSize:{
                  lg:'20px',
                  xs:'14'}}}
      >Search</Button>
    </Box>
   </Stack>
  )
}
export default SearchExercises
