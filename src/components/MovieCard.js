import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, id }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!posterPath) return null;

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      to={{
        pathname: `/browse/${id}`,
      }}
    >
      <div
        className={`w-44 mr-12 transition-all duration-200 shadow-2xl ${
          isHovered ? "hover:scale-110" : ""
        }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />
        {/* <p>{id}</p> test */}
      </div>
    </Link>
  );
};

export default MovieCard;
