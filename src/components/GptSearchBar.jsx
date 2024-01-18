import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGPTMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". only give me names of 1 movie. Example Result: Gader";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }
    console.log(gptResults.choices?.[0]?.message?.content);

    // Cars, The Fast and the Furious, Gone in 60 Seconds, Rush, Baby Driver
    const gptMovies = gptResults.choices?.[0].message?.content.split(",");
    // ["Cars", "The Fast and the Furious", "Gone in 60 Seconds", "Rush", "Baby Driver"] (using split gives us array)

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]
    // console.log(promiseArray);

    const TMDBResults = await Promise.all(promiseArray);
    console.log(TMDBResults);
    dispatch(addGPTMovies({ movieNames: gptMovies, gptMovies: TMDBResults }));
  };

  return (
    <div className="pt-44 md:pt-[10%] flex items-center justify-center">
      <form className="flex" action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          ref={searchText}
          className="py-3 placeholder:text-[13px] md:py-4 px-4 w-3/4 md:w-[500px] outline-none md:placeholder:text-[14px] cursor-pointer"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="text-[13px] md:text-[14px] py-3 md:py-4 w-[100px] font-bold px-4 bg-red-600 text-white cursor-pointer"
          onClick={handleGptSearchClick}
          type="button"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
