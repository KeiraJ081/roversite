import React from 'react'
import useFetch from './useFetch'
let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=10&page=1&api_key=PEEChWChJbdzE7wu43CQTt4bfE6p0afezgIUG7Kc';

export default function SprRov() {

  const {pics, loading} = useFetch(url);

  
  
  return (
    <div>
      <h1>SprRov</h1>
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
          <div key = {`key-${pictures.id}`}>
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
