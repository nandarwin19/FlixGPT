// // Follow the convention of prefixing hook names with "use."
// // Example: useMovieTrailer

// // Hook is just normal js function

// import { useEffect } from "react";
// import { API_OPTIONS } from "../utils/constants";

// import { useDispatch } from "react-redux";
// import { addTrailerMovieGe } from "../utils/movieSlice";

// const useMovieTrailerGe = (movieId) => {
//   const dispatch = useDispatch();

//   //fetch trailer movie && updating the store with trailer video data
//   const getBackgroundVideo = async () => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/movie/" +
//         movieId +
//         "/videos?language=de-DE",
//       API_OPTIONS
//     );
//     const json = await data.json();

//     const filterTrailer = json.results.filter(
//       (video) => video.type === "Trailer"
//     );
//     const trailer = filterTrailer.length ? filterTrailer[0] : json.results[1]; // to prevent error

//     dispatch(addTrailerMovieGe(trailer));
//   };

//   useEffect(() => {
//     getBackgroundVideo();
//   }, []);
// };

// export default useMovieTrailerGe;
