import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gader, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };

  return (
    <div className="pt-[10%] flex items-center justify-center">
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          ref={searchText}
          className="py-4 px-4 w-[500px] outline-none"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-4 w-[100px] font-bold px-4 bg-red-600 text-white"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
