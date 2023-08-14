import { freeMovies } from "@/store/Reducers/HomePage/Free/Movies/FreeMoviesReducers";
import axios from "axios";

export const asyncFreeMovies = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&with_watch_monetization_types=ads|free&watch_region=US`
    );
    dispatch(freeMovies(data.results));
  } catch (error) {
    console.log(error);
  }
};
