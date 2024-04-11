import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  //Fetch Data from TMBD Api and update the store
  const dispatch = useDispatch();
  
const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addPopularMovies(data.results));
    //console.log(" popular movies result = ", data.results);
  };

  useEffect(() => {
   if (!popularMovies) getPopularMovies();
  }, []);
};
export default usePopularMovies;
