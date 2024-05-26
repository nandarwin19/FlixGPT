<<<<<<< HEAD
import  { useEffect } from "react";
=======
import React, { useEffect } from "react";
>>>>>>> a97b99f9e9b53f85a0dfe540ec605f2598d9256e
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useTrendingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json.results);
    dispatch(addTrendingMovies(json.results));
  };
  // to run only one time
  useEffect(() => {
    getTrendingMovies();
  }, []);

  return <div></div>;
};

export default useTrendingMovies;
