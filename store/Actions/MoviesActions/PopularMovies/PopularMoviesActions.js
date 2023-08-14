import { popularMovies } from "@/store/Reducers/MoviesReducers/PopularMovies/PopularMoviesReducer";
import axios from "axios";

export const asyncPopularMovies = () => async (dispatch, getState) => {
  try {
    const { PopularMoviesActivePage } = getState().PopularMoviesReducer;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&page=${PopularMoviesActivePage}`
    );
    dispatch(popularMovies(data.results));
  } catch (error) {
    console.log(error);
  }
};
