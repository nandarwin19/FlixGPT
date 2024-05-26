import { useSelector } from "react-redux";
import MainContainer from "../common/MainContainer";
import MovieList from "../common/MovieList";

export default function TvShow() {
  const movies = useSelector((store) => store.movies);
  return (
    <div>
      <MainContainer search="upcomingMovies" />
      <div className="bg-black">
        <div className="-mt-40  z-40 relative">
          <MovieList
            title={"Upcoming movies"}
            movieLists={movies.upcomingMovies}
          />
          <MovieList
            title={"Now Playing movies"}
            movieLists={movies.nowPlayingMovies}
          />
        </div>
      </div>
    </div>
  );
}
