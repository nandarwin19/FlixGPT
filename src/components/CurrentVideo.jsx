import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

  console.log(movieDetails);

  return (
    <div className="relative  p-4 px-8 min-h-screen bg-[#0f0f0f] w-full text-white">
      {movieDetails ? (
        <div className="container mx-auto mt-8">
          <div className="flex flex-col lg:flex-row justify-between w-full mt-8">
            <div className="w-full lg:w-[48%] flex flex-col">
              <Link to="#" onClick={() => window.history.back()}>
                <h1 className="text-xl underline">BACK TO FILMS</h1>
              </Link>

              <p className="text-[40px] font-bold my-4">{movieDetails.title}</p>

              <p className="text-sm mb-4">{movieDetails.release_date}</p>

              <div className="p-2 bg-white/90 w-[95%]">
                <img
                  src={IMG_CDN_URL + movieDetails.poster_path}
                  alt={movieDetails.title}
                  className="w-full h-[380px] shadow-2xl object-fill mr-4"
                />
              </div>
            </div>
            <svg
              width="4"
              className="hidden md:flex h-[75vh]"
              viewBox="0 0 4 587"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="3.5"
                y1="0.00179532"
                x2="1.39228"
                y2="587.001"
                stroke="white"
              />
            </svg>

            <div className="w-full gap-6 lg:w-[48%] flex flex-col items-start justify-start mt-8">
              <div>
                <p className="text-xl font-bold">RATING</p>
                <p className="text-md">{movieDetails.vote_average}</p>
              </div>
              <div>
                <p className="text-xl font-bold">GENRES</p>
                <p className="text-md">
                  {movieDetails.genres.map((genre) => genre.name).join(", ")}
                </p>
              </div>
              <div>
                <p className="text-xl font-bold">RUNTIME</p>
                <p className="text-md">{movieDetails.runtime} minutes</p>
              </div>
              <div>
                <p className="text-xl font-bold">STATUS</p>
                <p className="text-md">{movieDetails.status}</p>
              </div>
              <div className="w-[70%]">
                <p className="text-xl font-bold">DESCRIPTION</p>
                <p className="text-md">{movieDetails.overview}</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Footer />
          </div>
        </div>
      ) : (
        <div className="w-full min-h-screen flex items-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default CurrentVideo;
