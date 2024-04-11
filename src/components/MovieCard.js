import React from 'react'
import { MOVIE_POSTER_CDN } from '../utils/constants';

const MovieCard = ({posterPath}) => {

  return (
    <div className="w-48 pr-4 ">
      <img className='rounded-lg'
        src={MOVIE_POSTER_CDN + posterPath}
        alt="movie-poster"
      />
    </div>
  );
}

export default MovieCard