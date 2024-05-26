<<<<<<< HEAD
import MovieList from "./common/MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

=======
import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);
>>>>>>> a97b99f9e9b53f85a0dfe540ec605f2598d9256e
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-40  z-40 relative">
          <MovieList
<<<<<<< HEAD
            title={"Now Playing movies"}
            movieLists={movies.nowPlayingMovies}
          />
          <MovieList
            title={"Trending movies"}
            movieLists={movies.trendingMovies}
          />
          <MovieList
            title={"Popular movies"}
            movieLists={movies.popularMovies}
          />
=======
            title={"Now Playing"}
            movieLists={movies.nowPlayingMovies}
          />
          <MovieList title={"Trending"} movieLists={movies.trendingMovies} />
          <MovieList title={"Popular"} movieLists={movies.popularMovies} />
>>>>>>> a97b99f9e9b53f85a0dfe540ec605f2598d9256e
          <MovieList
            title={"Upcoming Movies"}
            movieLists={movies.nowPlayingMovies}
          />
<<<<<<< HEAD
          <MovieList
            title={"Horror movies"}
            movieLists={movies.nowPlayingMovies}
          />
        </div>
=======
          <MovieList title={"Horror"} movieLists={movies.nowPlayingMovies} />
        </div>
        <Footer />
>>>>>>> a97b99f9e9b53f85a0dfe540ec605f2598d9256e
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
