import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-52  z-20 relative">
          <MovieList
            title={"Now Playing"}
            movieLists={movies.nowPlayingMovies}
          />
          <MovieList title={"Trending"} movieLists={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movieLists={movies.nowPlayingMovies} />
          <MovieList
            ti
            tle={"Upcoming Movies"}
            movieLists={movies.nowPlayingMovies}
          />
          <MovieList title={"Horror"} movieLists={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

/* 
    MovieList - Popular
      MovieCard * n 
    MovieList - NowPlaying 
    MovieList - Trending 
    MovieList - Horror  
  */
