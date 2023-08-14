import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  TopRatedMoviesData: [],
  TopRatedMoviesActivePage: 1,
};

export const TopRatedMoviesReducers = createSlice({
  name: "topRatedMoviesSlice",
  initialState,
  reducers: {
    topRatedMovies: (state, action) => {
      state.TopRatedMoviesData = action.payload;
    },
    changePage: (state, action) => {
      state.TopRatedMoviesActivePage += action.payload;
    },
  },
});

export const { topRatedMovies, changePage } = TopRatedMoviesReducers.actions;

export default TopRatedMoviesReducers.reducer;
