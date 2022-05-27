import React from 'react'
import useFetch from './useFetch'
import { useState, useEffect } from 'react'
import useRandom from './useRandom';
let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=100&page=1&api_key=PEEChWChJbdzE7wu43CQTt4bfE6p0afezgIUG7Kc';

export default function OppRov() {

  const {pics, loading} = useFetch(url);
  const {photolink, setphotolink} = useState([])





  return (
    <div>
      <h1>OppRov</h1>
      <div>
      {loading || !pics ?
      (
      <div className='Load'>
        Fetching... 
      </div> 
      ) : (
      
        <div className='RoverPhotos'>
        
        {
        pics.photos.map((pictures) => {

          return (
          <div key = {`key-${pictures.id}`} >
            <img src = {pictures.img_src} alt="Rover photos"></img>
          </div>)
          
        }
      )}
      </div>
)}
    </div>
    </div>

  )
}