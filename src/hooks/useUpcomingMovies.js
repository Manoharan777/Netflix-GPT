import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  //Fetch Data from TMBD Api and update the store
  const dispatch = useDispatch();
  const getUpcomingeMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addUpcomingMovies(data.results));
   // console.log(" upcoming movies result = ", data.results);
  };

  useEffect(() => {
    getUpcomingeMovies();
  }, []);
};
export default useUpcomingMovies;
