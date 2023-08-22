import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trendingTodayTrailersIDs: [],
  trendingTodayTrailersData: [],
  trendingWeeklyTrailersIDs: [],
  trendingWeeklyTrailersData: [],
};

export const TrailersReducers = createSlice({
  name: "trailerArr",
  initialState,
  reducers: {
    getTrendingTodayTrailersIDS: (state, action) => {
      state.trendingTodayTrailersIDs = action.payload;
    },
    getTrendingTodayTrailersData: (state, action) => {
      state.trendingTodayTrailersData.push(action.payload);
    },
    getTrendingWeeklyTrailersIDs: (state, action) => {
      state.trendingWeeklyTrailersIDs = action.payload;
    },
    getTrendingWeeklyTrailersData: (state, action) => {
      state.trendingWeeklyTrailersData.push(action.payload);
    },
  },
});

export const {
  getTrendingTodayTrailersIDS,
  getTrendingTodayTrailersData,
  getTrendingWeeklyTrailersIDs,
  getTrendingWeeklyTrailersData,
} = TrailersReducers.actions;

export default TrailersReducers.reducer;
