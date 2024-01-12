import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId, img }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const trailerKey = trailerVideo?.key;
  console.log(trailerKey);

  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
        className="w-[100vw] h-screen aspect-video -mt-12 -z-50"
        style={{ transform: "scale(1.5)" }}
        src={`https://www.youtube.com/embed/${trailerKey}?&autoplay=1&mute=1&loop=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
