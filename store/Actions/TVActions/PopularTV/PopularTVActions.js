import { popularTV } from "@/store/Reducers/TVReducers/PopularTV/PopularTVReducers";
import axios from "axios";

export const asyncPopularTV = () => async (dispatch, getState) => {
  try {
    const { PopularTVActivePage, sort_by } = getState().PopularTVReducers;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&include_adult=false&include_null_first_air_dates=false&language=en-US&page=${PopularTVActivePage}&sort_by=${sort_by}`
    );
    dispatch(popularTV(data.results));
  } catch (error) {
    console.log(error);
  }
};
