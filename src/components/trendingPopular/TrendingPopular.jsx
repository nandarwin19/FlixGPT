import { useSelector } from "react-redux";
import MainContainer from "../common/MainContainer";
import MovieList from "../common/MovieList";

export default function TrendingPopular() {
  const movies = useSelector((store) => store.movies);
  return (
    <div>
      <MainContainer search="trendingMovies" />
      <div className="bg-black">
        <div className="-mt-36  z-40 relative">
          <MovieList
            title={"Trending movies"}
            movieLists={movies.trendingMovies}
          />
          <MovieList
            title={"Popular movies"}
            movieLists={movies.popularMovies}
          />
        </div>
      </div>
    </div>
  );
}
