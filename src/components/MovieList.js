import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movieLists }) => {
  // console.log(movieLists);
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl md:text-3xl py-6 font-bold underline">{title}</h1>
      <div className="flex overflow-x-scroll overflow-y-hidden">
        {!movieLists ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          <div className="flex">
            {movieLists.map((movie) => (
              <MovieCard
                key={movie?.id} // Added key prop for list items
                data={{ ...movie }}
                id={movie?.id}
                posterPath={movie?.poster_path}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
