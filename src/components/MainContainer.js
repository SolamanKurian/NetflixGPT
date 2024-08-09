import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    let movies=useSelector((store)=>{
        return store.movies?.nowPlayingMovies
    });
    if(!movies) return; //known as early return

    let mainMovie=movies[0];
    let {original_title, overview, id}=mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
        
    </div>
  )
}

export default MainContainer