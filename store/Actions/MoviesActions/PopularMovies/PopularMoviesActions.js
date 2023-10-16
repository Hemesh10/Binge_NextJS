import { popularMovies } from "@/store/Reducers/MoviesReducers/PopularMovies/PopularMoviesReducer";
import axios from "axios";

export const asyncPopularMovies = () => async (dispatch, getState) => {
  try {
    const { PopularMoviesActivePage, sort_by } =
      getState().PopularMoviesReducer;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&include_adult=false&include_video=false&language=en-US&page=${PopularMoviesActivePage}&sort_by=${sort_by}`
    );
    dispatch(popularMovies(data.results));
  } catch (error) {
    console.log(error);
  }
};
