
import React from 'react'
import { useState, useEffect } from 'react';


//let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=PEEChWChJbdzE7wu43CQTt4bfE6p0afezgIUG7Kc';

const useFetch = (url) => {

  const [pics, setPics] = useState(null);
  const [loading, setLoading] = useState(true);
 
  
  

  useEffect(() => {
    fetch(url)
    .then(res => {
      return res.json();
    }) 
    .then(data =>{
      setPics(data)
      setLoading(false)
      

    })

    
      
    }, [url]);

    return(

      {pics, loading}
      

    );
 
} 


export default useFetch;
