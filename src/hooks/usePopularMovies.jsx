<<<<<<< HEAD
import  { useEffect } from "react";
=======
import React, { useEffect } from "react";
>>>>>>> a97b99f9e9b53f85a0dfe540ec605f2598d9256e
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
  // to run only one time
  useEffect(() => {
    getPopularMovies();
  }, []);

  return <div></div>;
};

export default usePopularMovies;
