import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AiringTodayTVData: [],
  AiringTodayTVActivePage: 1,
};

export const AiringTodayTVReducers = createSlice({
  name: "airingTodayTVSlice",
  initialState,
  reducers: {
    airingTodayTV: (state, action) => {
      state.AiringTodayTVData = action.payload;
    },
    changePage: (state, action) => {
      state.AiringTodayTVActivePage += action.payload;
    },
  },
});

export const { airingTodayTV, changePage } = AiringTodayTVReducers.actions;

export default AiringTodayTVReducers.reducer;
