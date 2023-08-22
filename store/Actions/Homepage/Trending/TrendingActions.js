import {
  trendingToday,
  trendingWeekly,
  t_todayError,
  t_weeklyError,
} from "@/store/Reducers/HomePage/Trending/TrendingReducer";
4;
import {
  getTrendingTodayTrailersIDS,
  getTrendingWeeklyTrailersIDs,
} from "@/store/Reducers/HomePage/Trailers/TrailersReducers";
import axios from "axios";

export const asyncTrendingToday = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2`
    );
    dispatch(trendingToday(data.results));
    dispatch(
      getTrendingTodayTrailersIDS(
        data.results.map((elem) => {
          return {
            id: elem.id,
            media_type: elem.media_type,
          };
        })
      )
    );
  } catch (error) {
    dispatch(
      t_todayError(error.response.data.status_message + "\n" + error.code)
    );
  }
};

export const asyncTrendingWeekly = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2`
    );
    dispatch(trendingWeekly(data.results));
    dispatch(
      getTrendingWeeklyTrailersIDs(
        data.results.map((elem) => {
          return {
            id: elem.id,
            media_type: elem.media_type,
          };
        })
      )
    );
  } catch (error) {
    dispatch(
      t_weeklyError(error.response.data.status_message + "\n" + error.code)
    );
  }
};
