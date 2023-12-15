import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useUpcomingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };
  // to run only one time
  useEffect(() => {
    getUpcomingMovies();
  }, []);

  return <div></div>;
};

export default useUpcomingMovies;
