import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getBackgroundVideo = useCallback(async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[1]; 

    dispatch(addTrailerVideo(trailer));
  }, [dispatch, movieId]); 

  useEffect(() => {
    getBackgroundVideo();
  }, [getBackgroundVideo]);

  return null; 
};

export default useMovieTrailer;
