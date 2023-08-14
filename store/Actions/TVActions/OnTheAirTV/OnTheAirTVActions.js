import { onAirTV } from "@/store/Reducers/TVReducers/OnTheAirTV/OnTheAirTVReducers";
import axios from "axios";

export const asyncOnAirTV = () => async (dispatch, getState) => {
  try {
    const { OnAirTVActivePage } = getState().OnTheAirTVReducers;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&page=${OnAirTVActivePage}`
    );
    dispatch(onAirTV(data.results));
  } catch (error) {
    console.log(error);
  }
};
