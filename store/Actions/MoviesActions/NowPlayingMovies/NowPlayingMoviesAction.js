import { nowPlayingMovies } from "@/store/Reducers/MoviesReducers/NowPlayingMovies/NowPlayingMoviesReducers";
import axios from "axios";

export const asyncNowPlayingMovies = () => async (dispatch, getState) => {
  try {
    const { NowPlayingMoviesActivePage } = getState().NowPlayingMoviesReducers;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&page=${NowPlayingMoviesActivePage}`
    );
    dispatch(nowPlayingMovies(data.results));
  } catch (error) {
    console.log(error);
  }
};
