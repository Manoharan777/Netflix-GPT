import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  //console.log(movies);
  return (
    <div className="bg-black">
      <div className="-mt-72 pl-12 relative z-20 ">
        <MovieList title={" Now Playing "} movies={movies.nowPlayingMovies} />
        <MovieList
          title={" Top Rated Movies "}
          movies={movies.topRatedMovies}
        />
        <MovieList title={" Upcoming Movies "} movies={movies.upcomingMovies} />
        <MovieList title={" Popular "} movies={movies.popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
