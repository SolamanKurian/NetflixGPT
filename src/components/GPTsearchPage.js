import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovies from './GptMovies'
import { BG_URL } from '../utils/constant'


const GPTsearch = () => {
  return (
    <div>
       
        <img
          className="absolute -z-10 h-screen object-cover"
          src={BG_URL}
          alt="bgimage"
        ></img>
        <div className='pt-[30%] md:pt-0'>
        <GptSearchBar/>
        <GptMovies/>
        </div>
        
    </div>
  )
}

export default GPTsearch