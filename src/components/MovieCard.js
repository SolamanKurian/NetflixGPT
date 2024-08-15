import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'
const MovieCard = (posterPath) => {
    
  return (
    <div className='w-40 p-1'>
        <img  alt="movie card image" src={IMG_CDN_URL+posterPath.posterPath}></img>
    </div>
  )
}

export default MovieCard