import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { GPTBG } from "../utils/constants";
import Footer from "./Footer";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute min-h-screen w-full -z-20">
        <img
          src={GPTBG}
          alt="bg"
          className="fixed object-cover w-full h-full"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
      <Footer />
    </div>
  );
};

export default GptSearch;
