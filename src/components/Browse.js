
import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetNowPLayinMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetPopularMovies from "../hooks/useGetPopularMovies";
import GPTsearchPage from "./GPTsearchPage";
import { useSelector } from "react-redux";
const Browse = () => {
useGetNowPlayingMovies();
useGetPopularMovies();

let showGptSearch= useSelector((store)=>{
  return store.gpt.showGptSearch;
})

  return (
    <div>
      <Header/>
      {showGptSearch?(<GPTsearchPage/>):(
        <>
        <MainContainer/>
      <SecondaryContainer/>
      </>)}
    
    </div>
  );
};

export default Browse;
