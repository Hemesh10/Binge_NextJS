import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trendingTodayData: [],
  trendingTodayErrorMsg: "",
  trendingWeeklyData: [],
  trendingWeeklyErrorMsg: "",
};

export const trendingReducer = createSlice({
  name: "trending",
  initialState,
  reducers: {
    trendingToday: (state, action) => {
      state.trendingTodayData = action.payload;
    },
    t_todayError: (state, action) => {
      state.trendingTodayErrorMsg += action.payload;
    },
    trendingWeekly: (state, action) => {
      state.trendingWeeklyData = action.payload;
    },
    t_weeklyError: (state, action) => {
      state.trendingWeeklyErrorMsg += action.payload;
    },
    remove_todayError: (state) => {
      state.trendingTodayErrorMsg = "";
    },
    remove_weeklyError: (state) => {
      state.trendingWeeklyErrorMsg = "";
    },
  },
});

export const {
  trendingToday,
  trendingWeekly,
  t_todayError,
  t_weeklyError,
  remove_todayError,
  remove_weeklyError,
} = trendingReducer.actions;

export default trendingReducer.reducer;
