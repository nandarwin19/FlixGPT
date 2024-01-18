import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import Footer from "./Footer";

const GptSearch = () => {
  return (
    <div>
      <div className="relative h-full w-full -z-20">
        <div className="gpt-background -mt-8 w-screen min-h-screen"></div>
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
