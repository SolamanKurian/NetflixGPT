import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { MOVIE_API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useSelector } from "react-redux";
// fetching the nowplaying movie data bt YMDB API  and update the redux store
let useGetNowPlayingMovies = ()=>{
    let dispatch=useDispatch()
      //memoization:- if the fetched data is already in the redux then no need to make an api call again anad again when this component calls
      let nowPlayingMovies= useSelector(store=>store.movies.nowPlayingMovies);

    let getnowPlayingMovies = async () => {
      let data = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}",
        MOVIE_API_OPTIONS
      );
      let json = await data.json();
      dispatch(addNowPlayingMovies(json.results))
    };
    useEffect(() => {
      !nowPlayingMovies && getnowPlayingMovies();// only called when nowPlayingMovie is empty in the redux store(memoization)
    }, []);
};

export default useGetNowPlayingMovies