import {
  getTrendingTodayTrailersData,
  getTrendingWeeklyTrailersData,
} from "@/store/Reducers/HomePage/Trailers/TrailersReducers";
import axios from "axios";

export const asyncGetTrendingTodayTrailersData =
  () => async (dispatch, getState) => {
    const {
      trendingTodayTrailersIDs,
      trendingTodayTrailersData,
      trendingWeeklyTrailersData,
    } = getState().TrailersReducers;
    if (trendingTodayTrailersIDs.length > 0) {
      trendingTodayTrailersIDs.forEach(async (elem) => {
        if (elem.media_type === "movie") {
          const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/${elem.id}?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&append_to_response=videos`
          );
          const { id, title, backdrop_path, videos } = data;
          if (trendingTodayTrailersData.length <= 20) {
            dispatch(
              getTrendingTodayTrailersData({
                id,
                title,
                backdrop_path,
                videos,
              })
            );
          }
        } else {
          const { data } = await axios.get(
            `https://api.themoviedb.org/3/tv/${elem.id}?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&append_to_response=videos`
          );
          const { id, name, backdrop_path, videos } = data;
          if (trendingWeeklyTrailersData.length <= 20) {
            dispatch(
              getTrendingTodayTrailersData({
                id,
                name,
                backdrop_path,
                videos,
              })
            );
          }
        }
      });
    }
  };

export const asyncGetTrendingWeeklyTrailersData =
  () => async (dispatch, getState) => {
    const { trendingWeeklyTrailersIDs } = getState().TrailersReducers;
    if (trendingWeeklyTrailersIDs.length > 0) {
      trendingWeeklyTrailersIDs.forEach(async (elem) => {
        if (elem.media_type === "movie") {
          const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/${elem.id}?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&append_to_response=videos`
          );
          const { id, title, backdrop_path, videos } = data;
          dispatch(
            getTrendingWeeklyTrailersData({
              id,
              title,
              backdrop_path,
              videos,
            })
          );
        } else {
          const { data } = await axios.get(
            `https://api.themoviedb.org/3/tv/${elem.id}?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&append_to_response=videos`
          );
          const { id, name, backdrop_path, videos } = data;
          dispatch(
            getTrendingWeeklyTrailersData({
              id,
              name,
              backdrop_path,
              videos,
            })
          );
        }
      });
    }
  };
