import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex items-center justify-center">
      <form action="">
        <input
          type="text"
          className="py-4 px-4 w-[500px] outline-none"
          placeholder="What would you like to watch today?"
        />
        <button className="py-4 w-[100px] font-bold px-4 bg-red-600 text-white">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
