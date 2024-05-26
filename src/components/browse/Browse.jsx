import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "../common/MainContainer";
import SecondaryContainer from "../SecondaryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTrendingMovies from "../../hooks/useTrendingMovie";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
// import GptSearch from "../search/GptSearch";
// import { useSelector } from "react-redux";

//We got 2 api. That is because of React.StrictMode. But for only local ( while developing )
const Browse = () => {
  // const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <>
      <MainContainer search="nowPlayingMovies" />
      <SecondaryContainer />
    </>
  );
};

{
  /*
      
      MainContainer 
        - VideoBackground 
        - VideoTitle 
      SecondaryContainer 
        - MovieList * n 
        - cards * n  
      
      */
}

export default Browse;
