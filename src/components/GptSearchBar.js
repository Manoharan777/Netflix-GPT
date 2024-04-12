import React, { useEffect, useRef, useState } from 'react'
import Lang from '../utils/languageConstants';
import {useSelector} from "react-redux"
import openai from '../utils/openAi';
import { API_OPTIONS } from '../utils/constants';
import {useDispatch} from "react-redux";
import { addGptMoviesName, addGptMoviesResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const langSelection = useSelector((store) => store.config.lang);
  const [inputdata,setInputData] = useState("");
  const dispatch = useDispatch();
  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleSearch = async () => {
   
  
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      inputdata +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const getMovieSuggestion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    // console.log(
    //   "gptResult = ",
    //   getMovieSuggestion.choices?.[0]?.message.content
    // );
    const gptMovies =
      getMovieSuggestion.choices?.[0]?.message.content.split(",");


    const promiseArray  = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResult = await Promise.all(promiseArray);

    //console.log("tmdb res = ",tmdbResult);
    dispatch(addGptMoviesResult(tmdbResult));
    dispatch(addGptMoviesName(gptMovies));

  };

    useEffect(() => {
      if (!inputdata) {
        dispatch(addGptMoviesResult(null));
        dispatch(addGptMoviesName(null));
      }
    }, [inputdata]);

  return (
    <div className="pt-32 ">
      <form className=" text-center" onSubmit={(e) => e.preventDefault()}>
        <input
          value={inputdata}
          className="p-2  m-2 ml-6 border border-black rounded-md w-[430px] h-[50px] text-black"
          type="text"
          placeholder={Lang[langSelection].gptSearchPlaceholder}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button
          className="p-2 px-4 py-3 m-2 ml-14 md:-ml-0 bg-red-700 text-white rounded-md"
          onClick={handleSearch}
        >
          {Lang[langSelection].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar