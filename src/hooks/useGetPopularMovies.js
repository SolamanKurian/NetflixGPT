import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { MOVIE_API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";
// fetching the nowplaying movie data bt YMDB API  and update the redux store
let useGetPopularMovies = ()=>{
    let dispatch=useDispatch()
    let popularMovies = async () => {
      let data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        MOVIE_API_OPTIONS
      );
      let json = await data.json();
      dispatch(addPopularMovies(json.results))
    };
    useEffect(() => {
        popularMovies();
    }, []);
};

export default useGetPopularMovies