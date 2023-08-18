import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  PopularTVData: [],
  PopularTVActivePage: 1,
  sort_by: "popularity.desc",
};

export const PopularTVReducers = createSlice({
  name: "popularTVSlice",
  initialState,
  reducers: {
    popularTV: (state, action) => {
      state.PopularTVData = action.payload;
    },
    changePage: (state, action) => {
      state.PopularTVActivePage += action.payload;
    },
    sort: (state, action) => {
      state.sort_by = action.payload;
    },
  },
});

export const { popularTV, changePage, sort } = PopularTVReducers.actions;

export default PopularTVReducers.reducer;
