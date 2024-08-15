import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className=''>
          <h1 className=' text-xl  py-1 text-white'>{title}</h1>
          <div className='flex overflow-x-scroll'style={{ scrollbarWidth: 'none'}}>
          <div className='flex'>
            {movies && movies.length>0? (movies.map(movie=><MovieCard key={movie.id} posterPath={movie?.poster_path}/>)):(<p>.</p>)}
            </div>
            </div>
    </div>
  )
}

export default MovieList