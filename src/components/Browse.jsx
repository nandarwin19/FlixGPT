import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

//We got 2 api. That is because of React.StrictMode. But for only local ( while developing )
const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/*
      
      MainContainer 
        - VideoBackground 
        - VideoTitle 
      SecondaryContainer 
        - MovieList * n 
        - cards * n  
      
      */}
    </div>
  );
};

export default Browse;
