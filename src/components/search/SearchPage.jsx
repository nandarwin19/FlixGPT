import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const SearchPage = () => {
  return (
    <div className="bg-[#0f0f0f] min-h-screen w-full">
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default SearchPage;
