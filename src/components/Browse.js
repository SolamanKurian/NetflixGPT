
import Header from "./Header";
import useGetNowPlayingMovies from "../hooks/useGetNowPLayinMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
useGetNowPlayingMovies();


  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
