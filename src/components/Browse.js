
import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetNowPLayinMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetPopularMovies from "../hooks/useGetPopularMovies";
const Browse = () => {
useGetNowPlayingMovies();
useGetPopularMovies();


  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
