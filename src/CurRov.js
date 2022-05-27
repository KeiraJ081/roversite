import React from 'react'
import useFetch from './useFetch'
let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=15&page=1&api_key=PEEChWChJbdzE7wu43CQTt4bfE6p0afezgIUG7Kc';
 
export default function CurRov() {

  const {pics, loading} = useFetch(url);

  
  return (
    <div>
      <h1>CurRov</h1>
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
