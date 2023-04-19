export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key':'23fdcc7c05mshb9e409aa212a587p103f38jsn99c9d4fec03a'
    },
  };

  //the options param is the exerciseOptions obj
export const fetchData = async (url, options) =>{
   const response = await fetch (url, options);
 const  data = await response.json();
   return data
}