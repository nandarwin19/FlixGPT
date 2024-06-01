import { IMG_CDN_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Shimmer = () => (
  <div className="shimmer-wrapper">
    <div className="shimmer bg-shimmer-wave"></div>
  </div>
);

const MovieCard = ({ posterPath, id }) => {
  if (!posterPath) return null;

  return (
    <Link
      to={{
        pathname: `/browse/${id}`,
      }}
    >
      <div
        className={`w-44 h-52 mr-12 hover:scale-110 transition-all duration-200 shadow-2xl 
           isHovered ? "hover:scale-110" : ""
        `}
      >
        {posterPath ? (
          <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />
        ) : (
          <Shimmer />
        )}
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  posterPath: PropTypes.string,
  id: PropTypes.number,
};

export default MovieCard;
