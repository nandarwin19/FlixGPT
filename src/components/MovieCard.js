import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, id }) => {
  return (
    <Link
      to={{
        pathname: `/browse/${id}`,
      }}
    >
      <div className="w-44 pl-4">
        <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />
        {/* <p>{id}</p> test  */}
      </div>
    </Link>
  );
};

export default MovieCard;
