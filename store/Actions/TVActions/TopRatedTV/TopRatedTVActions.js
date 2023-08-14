import { topRatedTV } from "@/store/Reducers/TVReducers/TopRatedTV/TopRatedTVReducers";
import axios from "axios";

export const asyncTopRatedTV = () => async (dispatch, getState) => {
  try {
    const { TopRatedTVActivePage } = getState().TopRatedTVReducers;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&page=${TopRatedTVActivePage}`
    );
    dispatch(topRatedTV(data.results));
  } catch (error) {
    console.log(error);
  }
};
