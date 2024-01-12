import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";

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

  console.log("ID:", id);
  console.log("Movie Details:", movieDetails);

  return <div className="min-h-screen w-full bg-black">CurrentVideo</div>;
};

export default CurrentVideo;
