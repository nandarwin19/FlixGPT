import React from "react";
import MovieCard from "./MovieCard";

const Shimmer = () => (
  <div className="shimmer-wrapper flex">
    <div className="shimmer bg-shimmer mr-12"></div>
    <div className="shimmer bg-shimmer mr-12"></div>
    <div className="shimmer bg-shimmer mr-12"></div>
    <div className="shimmer bg-shimmer mr-12"></div>
    <div className="shimmer bg-shimmer mr-12"></div>
    <div className="shimmer bg-shimmer mr-12"></div>
    <div className="shimmer bg-shimmer"></div>
  </div>
);

const MovieList = ({ title, movieLists }) => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl md:text-3xl py-6 font-bold underline">{title}</h1>
      <div className="flex hover:overflow-x-scroll overflow-y-hidden">
        {!movieLists ? (
          <Shimmer />
        ) : (
          <div className="flex">
            {movieLists?.map((movie) => (
              <MovieCard
                key={movie?.id}
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
