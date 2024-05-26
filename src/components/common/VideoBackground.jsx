import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import PropTypes from "prop-types";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const trailerKey = trailerVideo?.key;
  console.log(trailerKey);

  useMovieTrailer(movieId);

  return (
    <div className="min-h-screen w-screen overflow-hidden">
      {!trailerKey ? (
        <div className="w-full h-[80vh] flex items-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <iframe
          className="fixed w-full h-full aspect-video -mt-12 -z-50"
          style={{ transform: "scale(1.5)" }}
          src={`https://www.youtube.com/embed/${trailerKey}?&autoplay=1&mute=1&loop=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

VideoBackground.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default VideoBackground;
