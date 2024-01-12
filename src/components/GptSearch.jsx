import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { GPTBG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute min-h-screen w-full -z-20">
        <img
          src={GPTBG}
          alt="bg"
          className="relative min-h-screen object-cover h-full"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
