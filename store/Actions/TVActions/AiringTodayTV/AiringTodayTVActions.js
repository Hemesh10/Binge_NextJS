import { airingTodayTV } from "@/store/Reducers/TVReducers/AiringTodayTV/AiringTodayTVReducers";
import axios from "axios";

export const asyncAiringTodayTV = () => async (dispatch, getState) => {
  try {
    const { AiringTodayTVActivePage } = getState().AiringTodayTVReducers;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&page=${AiringTodayTVActivePage}`
    );
    dispatch(airingTodayTV(data.results));
  } catch (error) {
    console.log(error);
  }
};
