import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const Playing = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movies ? movies[0].id : null);

  if (!movies) {
    return null;
  }

  const trailerKey = trailerVideo?.key;

  return (
    <div className="min-h-screen w-screen overflow-hidden">
      {!trailerKey ? (
        <div className="w-full h-[100vh] flex items-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <iframe
          className=" w-full h-[100vh] aspect-video"
          src={`https://www.youtube.com/embed/${trailerKey}?&autoplay=1&loop=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Playing;
