import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptSuggestion = () => {
  const { gptMovieList, gptMovieName } = useSelector((store) => store.gpt);

  if (!gptMovieList && !gptMovieName) return;

  // console.log("name from suggestion",gptMovieName)
  // console.log("List from suggestion", gptMovieList);
  return (
    <>
      { (gptMovieList && gptMovieName ) && (
        <div className="p-4 m-4 bg-black text-white bg-opacity-80 rounded-2xl">
          <div>
            {gptMovieName.map((movie, index) => (
              <MovieList
                key={index}
                title={movie}
                movies={gptMovieList[index]}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GptSuggestion;
