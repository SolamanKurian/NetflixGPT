import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "../components/MovieList"

const GptMovieSuggestions = () => {
    let gpt=useSelector(store=>{
        store.gpt
    });
    let {gptMovies}=gpt;
    if(!gptMovies) return null; //or show shimmwe ui

  return (
    <div className='p-4 m-4 bg-black text-white'>
        {gptMovies.map((gptMovies,index)=><MovieList key={gptMovies.name} title={"abcd"} movies={gptMovies[index]}/> )}
    
        
    </div>
  )
}

export default GptMovieSuggestions