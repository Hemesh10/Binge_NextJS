import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  TopRatedTVData: [],
  TopRatedTVActivePage: 1,
};

export const TopRatedTVReducers = createSlice({
  name: "topRatedTVSlice",
  initialState,
  reducers: {
    topRatedTV: (state, action) => {
      state.TopRatedTVData = action.payload;
    },
    changePage: (state, action) => {
      state.TopRatedTVActivePage += action.payload;
    },
  },
});

export const { topRatedTV, changePage } = TopRatedTVReducers.actions;

export default TopRatedTVReducers.reducer;
