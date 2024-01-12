import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constants";
import Footer from "./Footer";

const CurrentVideo = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}`,
          API_OPTIONS
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    getMovieDetails();
  }, [id]);

  return (
    <div className="p-4 px-8 min-h-screen backgroundCurrent w-full text-white">
      {movieDetails ? (
        <div className="container mx-auto mt-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 lg:mb-8 flex">
            <span className="hidden lg:flex"> Movie Name:</span>
            <span className="text-red-600 text-center">
              {" "}
              {movieDetails.title}
            </span>
          </h1>
          <div className="flex flex-col lg:flex-row w-full">
            <img
              src={IMG_CDN_URL + movieDetails.poster_path}
              alt={movieDetails.title}
              className="w-full h-[400px] lg:w-1/3 object-cover lg:h-[80vh] mr-4 rounded-lg"
            />
            <div className="w-full lg:w-2/3 flex flex-col items-start justify-start gap-4 mt-8">
              <p>
                <strong className="font-semibold text-red-500">
                  Description:
                </strong>{" "}
                {movieDetails.overview}
              </p>
              <div className="flex items-center gap-1">
                <strong className="text-red-500">Vote Average:</strong>{" "}
                <p
                  className={`${
                    movieDetails.vote_average > 7
                      ? "text-green-600"
                      : "text-red-600"
                  } font-semibold`}
                >
                  {movieDetails.vote_average}
                </p>
              </div>
              <p className="font-semibold">
                <strong className="text-red-500">Released-date:</strong>{" "}
                {movieDetails.release_date}
              </p>
              <p className="font-semibold">
                <strong className="text-red-500">Runtime:</strong>{" "}
                {movieDetails.runtime} minutes
              </p>
              <p>
                <strong className="text-red-500">Genres:</strong>{" "}
                {movieDetails.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p>
                <strong className="text-red-500">Status:</strong>{" "}
                {movieDetails.status}
              </p>
              <p>
                <strong className="text-red-500">Tagline:</strong>{" "}
                {movieDetails.tagline}
              </p>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CurrentVideo;
