import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  }, [dispatch]);

  useEffect(() => {
    getUpcomingMovies();
  }, [getUpcomingMovies]);

  return null;
};

export default useUpcomingMovies;
