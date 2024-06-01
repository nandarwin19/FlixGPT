import { useRef, useState } from "react";
import lang from "../../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../../utils/openai";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addGPTMovies } from "../../utils/gptSlice";
import { ImSpinner2 } from "react-icons/im";
import toast, { Toaster } from "react-hot-toast";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const searchMovieTMDB = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movie data");
      }
      const json = await response.json();
      return json.results;
    } catch (error) {
      console.error("Error fetching movie data:", error);
      return [];
    }
  };

  const handleGptSearchClick = async () => {
    setIsLoading(true);

    const query = searchText.current.value;
    if (!query) {
      console.error("Search query is empty");
      setIsLoading(false);
      return;
    }

    try {
      // console.log("Search query:", query);
      const gptQuery = `Act as a movie recommendation system and suggest some movies for the query : ${query}. Only give me name of 5 movies with comma seperated.
        Example result: Spider Man, Elemental, Phir Hera Pheri, Me Before You, The Shawshank Redemption`;

      const gptResponse = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      if (!gptResponse.choices || gptResponse.choices.length === 0) {
        console.error("No choices returned from GPT response.");
        setIsLoading(false);
        return;
      }

      const gptMovies = gptResponse.choices[0].message.content
        .split(",")
        .map((movie) => movie.trim());
      // console.log("GPT Movies:", gptMovies);

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const TMDBResults = await Promise.all(promiseArray);
      // console.log("TMDB Results:", TMDBResults);

      dispatch(addGPTMovies({ movieNames: gptMovies, gptMovies: TMDBResults }));
    } catch (error) {
      console.error("Error during GPT search:", error);
      toast.error(error.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-44 md:pt-[10%] flex items-center justify-center">
      <Toaster />
      <form className="flex" action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          ref={searchText}
          className="py-3 placeholder:text-[11px] md:placeholder:text-xl md:py-4 px-4 w-3/4 md:w-[500px] outline-none cursor-pointer"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="text-[13px] md:text-xl w-36 py-3 md:py-4 font-bold px-4 bg-red-600 text-white cursor-pointer"
          onClick={handleGptSearchClick}
          type="button"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-1">
              <span>{lang[langKey].search}</span>
              <ImSpinner2 className="animate-spin" />
            </div>
          ) : (
            lang[langKey].search
          )}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
