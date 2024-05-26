import { useSelector } from "react-redux";
import MovieList from "../common/MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, gptMovies } = useSelector((store) => store.gpt);
  if (!movieNames) return <p className="text-center mt-20"></p>;
  if (!gptMovies)
    return <span className="loading loading-spinner loading-lg"></span>;
  return (
    <div className="mt-20">
      {movieNames.map((movieName, index) => (
        <MovieList key={index} movieLists={gptMovies[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
