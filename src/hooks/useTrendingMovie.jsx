import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const getTrendingMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  }, [dispatch]);

  useEffect(() => {
    getTrendingMovies();
  }, [getTrendingMovies]);

  return null;
};

export default useTrendingMovies;
