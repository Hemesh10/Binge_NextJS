import { popularTV } from "@/store/Reducers/TVReducers/PopularTV/PopularTVReducers";
import axios from "axios";

export const asyncPopularTV = () => async (dispatch, getState) => {
  try {
    const { PopularTVActivePage } = getState().PopularTVReducers;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&page=${PopularTVActivePage}`
    );
    dispatch(popularTV(data.results));
  } catch (error) {
    console.log(error);
  }
};
