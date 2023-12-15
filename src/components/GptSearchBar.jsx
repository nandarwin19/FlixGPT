import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex items-center justify-center">
      <form action="">
        <input
          type="text"
          className="py-4 px-4 w-[500px] outline-none"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-4 w-[100px] font-bold px-4 bg-red-600 text-white">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
