import { topRatedMovies } from "@/store/Reducers/MoviesReducers/TopRatedMovies/TopRatedMoviesReducers";
import axios from "axios";

export const asyncTopRatedMovies = () => async (dispatch, getState) => {
  try {
    const { TopRatedMoviesActivePage } = getState().TopRatedMoviesReducers;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&page=${TopRatedMoviesActivePage}`
    );
    dispatch(topRatedMovies(data.results));
    console.log(getState().TopRatedMoviesReducers);
  } catch (error) {
    console.log(error);
  }
};
