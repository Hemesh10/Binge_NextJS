import { upcomingMovies } from "@/store/Reducers/MoviesReducers/UpcamingMovies/UpcomingMoviesReducers";
import axios from "axios";

export const asyncUpcomingMovies = () => async (dispatch, getState) => {
  try {
    const { UpcomingMoviesActivePage } = getState().UpcomingMoviesReducers;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&page=${UpcomingMoviesActivePage}`
    );
    dispatch(upcomingMovies(data.results));
  } catch (error) {
    console.log(error);
  }
};
