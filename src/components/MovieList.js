import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movieLists }) => {
  // console.log(movieLists);
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl py-6 font-bold">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movieLists?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
