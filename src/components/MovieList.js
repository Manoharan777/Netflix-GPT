import React from 'react'
import MovieCard from "./MovieCard"
const MovieList = ({title,movies}) => {
 // console.log(movies)
  if(!movies) return;
  return (
    <div className='px-6 text-white'>
      <h1 className=" text-3xl py-3 mb-2">{title}</h1>
      <div className="flex hover:overflow-x-scroll overflow-hidden ">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList