
import { useState, useEffect } from 'react';
import useFetch from './useFetch';

const useRandom = (url) => {

    const [pics, setPics] = useState(null);

    let photolinks = [];


    const rand = Math.floor(Math.random() * pics.photo.length);

    for (let i = 0; i < 24; i++){
        photolinks.push(pics.photos[rand].img_src);
    }


    return(
        {photolinks}
    )

}

export default useRandom;