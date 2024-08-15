import { useDispatch, useSelector } from "react-redux";
import { MOVIE_API_OPTIONS } from "../utils/constant";
import { addTrilerVideo } from "../utils/movieSlice";
import { useEffect } from "react";


let useGetTrailer=(movieId)=>{
    let dispatch=useDispatch()

  // fetxh trailer using an api with a movie id
  let trailer = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId.movieId+"/videos?language=en-US",
      MOVIE_API_OPTIONS
    );
    let json = await data.json();
    let exactTrailers = json.results.filter(
      (video) => video.type === "Trailer"
    );
    let finalTrailer = exactTrailers.length
      ? exactTrailers[0]
      : json.results[0];
      dispatch(addTrilerVideo(finalTrailer))
  };
  useEffect(() => {
    trailer();
  }, []);
}
export default useGetTrailer