import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const SearchPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${"/bg.png"})`,
        backgroundSize: "cover",
      }}
      className=" min-h-screen w-full"
    >
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default SearchPage;
