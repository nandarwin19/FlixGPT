import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  }, [dispatch]);

  useEffect(() => {
    getPopularMovies();
  }, [getPopularMovies]);

  return null;
};

export default usePopularMovies;
