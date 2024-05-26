import MovieList from "./common/MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-40  z-40 relative">
          <MovieList
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
          <MovieList
            title={"Upcoming Movies"}
            movieLists={movies.nowPlayingMovies}
          />
          <MovieList
            title={"Horror movies"}
            movieLists={movies.nowPlayingMovies}
          />
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
