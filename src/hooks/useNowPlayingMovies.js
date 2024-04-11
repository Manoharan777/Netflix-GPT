import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
//Fetch Data from TMBD Api and update the store
const dispatch = useDispatch();

const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
const getNowPlayingMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?page=1",
    API_OPTIONS
  );
  const data = await response.json();
  dispatch(addNowPlayingMovies(data.results));
};

useEffect(() => {
  if (!nowPlayingMovies) getNowPlayingMovies();
}, []);
}
export default useNowPlayingMovies;