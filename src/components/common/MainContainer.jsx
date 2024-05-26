import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import PropTypes from "prop-types";

const MainContainer = ({ search }) => {
  const movies = useSelector((store) => store.movies?.[search]);

  if (!movies) return;
  const mainMovie = movies[0]; // we will get the error bcz before fetch api, we will null, right? it means null[0]. so we get error. We must to add "if(!movies) return "
  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;
  // console.log(id);

  return (
    <div>
      <VideoTitle movieId={id} title={original_title} overview={overview} />
      {/* by using video key, you can check the videos details there
      https://developer.themoviedb.org/reference/movie-videos */}
      <VideoBackground movieId={id} />
    </div>
  );
};

MainContainer.propTypes = {
  search: PropTypes.string.isRequired,
};

export default MainContainer;
