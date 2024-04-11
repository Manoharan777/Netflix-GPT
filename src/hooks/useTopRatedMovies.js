import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  //Fetch Data from TMBD Api and update the store
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getTopRatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addTopRatedMovies(data.results));
    //console.log(" top rated movies result = ", data.results);
  };

  useEffect(() => {
   if (!topRatedMovies) getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
