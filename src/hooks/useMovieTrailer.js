import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideos } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const movieTrailerID = useSelector(
    (store) => store.movies?.trailerVideos?.key
  );

    const trailermovie = useSelector((store) => store.movies.trailerVideos);
 // console.log("trailerID", movieTrailerID);
  const getMovieVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const data = await response.json();
    //console.log("movie video data = ", data.results);
    const filterData = data.results.filter((vt) => vt.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : data.results[0];
    dispatch(addTrailerVideos(trailer));
    //console.log("trailer",trailer);
  };

  useEffect(() => {
   if (!trailermovie) getMovieVideos();
  }, []);
  
  return movieTrailerID;
};

export default useMovieTrailer;
